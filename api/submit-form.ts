import type { VercelRequest, VercelResponse } from '@vercel/node'
import { v4 as uuidv4 } from 'uuid'
import { formSubmissionSchema } from '../src/lib/validation.js'
import { calculateSpamScore } from '../src/lib/spam-detection.js'
import { sendFormNotification } from '../src/lib/email.js'
import { sendSubmissionNotification, sendSpamAlert } from '../src/lib/slack.js'
import { addFormSubmission, updateSubmission } from '../src/lib/google-sheets.js'
import { uploadFileToDrive } from '../src/lib/google-drive.js'
import { rateLimiter } from '../src/lib/rate-limiter.js'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Extract IP address
    const ipAddress =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      (req.headers['x-real-ip'] as string) ||
      req.socket.remoteAddress ||
      'unknown'

    // Extract user agent
    const userAgent = req.headers['user-agent'] || 'unknown'

    // Validate request body
    const validatedData = formSubmissionSchema.parse(req.body)

    // Check if honeypot was filled
    const honeypotFilled = !!validatedData.website

    // Calculate spam score
    const spamCheck = await calculateSpamScore({
      email: validatedData.email,
      message: validatedData.message,
      honeypotFilled,
      submissionTime: validatedData.submissionTime,
      ipAddress,
    })

    // Determine status based on spam score
    let status: 'new' | 'spam' | 'blocked' = 'new'
    if (spamCheck.spamScore >= 80) {
      status = 'blocked'
    } else if (spamCheck.spamScore >= 50) {
      status = 'spam'
    }

    // Handle file attachments - upload to Google Drive
    const attachments = (req.body as any).attachments || []
    const attachmentLinks: string[] = []

    if (attachments.length > 0) {
      for (const att of attachments) {
        try {
          const link = await uploadFileToDrive(att)
          attachmentLinks.push(link)
        } catch (error) {
          console.error('File upload error:', error)
          // Continue submission even if file upload fails
        }
      }
    }

    // Generate unique submission ID
    const submissionId = uuidv4()
    const createdAt = new Date().toISOString()

    // Prepare submission data for Google Sheets
    const submissionData = {
      id: submissionId,
      created_at: createdAt,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      company: validatedData.company || '',
      subject: validatedData.subject || '',
      message: validatedData.message,
      attachment_links: JSON.stringify(attachmentLinks),
      status,
      is_spam: spamCheck.isSpam,
      spam_score: spamCheck.spamScore,
      spam_reasons: JSON.stringify(spamCheck.reasons),
      ip_address: ipAddress,
      user_agent: userAgent,
      honeypot_filled: honeypotFilled,
      submission_time_seconds: validatedData.submissionTime,
      blocked: status === 'blocked',
      blocked_reason: status === 'blocked' ? spamCheck.reasons.join(', ') : '',
      notification_sent: false,
      notification_sent_at: '',
      slack_notification_sent: false,
      n8n_workflow_triggered: false,
    }

    // Insert into Google Sheets
    try {
      await addFormSubmission(submissionData)

      // Add to rate limiter
      rateLimiter.addSubmission(ipAddress)
    } catch (error) {
      console.error('Google Sheets error:', error)

      // Handle specific Google API errors
      if (error instanceof Error) {
        if (error.message.includes('quota')) {
          return res.status(503).json({
            message: 'Service temporarily unavailable. Please try again later.',
          })
        }
        if (error.message.includes('authentication')) {
          console.error('Google authentication failed')
          return res.status(500).json({
            message: 'Internal server error. Please contact support.',
          })
        }
      }

      throw new Error('Failed to save submission')
    }

    // Create submission object for notifications
    const submission = {
      id: submissionId,
      created_at: createdAt,
    }

    // Send notifications based on spam status
    if (status === 'blocked' || status === 'spam') {
      // Send spam alert to security channel
      await sendSpamAlert({
        email: validatedData.email,
        ip: ipAddress,
        spamScore: spamCheck.spamScore,
        reasons: spamCheck.reasons,
      })

      if (status === 'blocked') {
        return res.status(400).json({
          message: 'Your submission was blocked. Please contact us directly if this is an error.',
        })
      }
    }

    // For non-spam submissions, send notifications
    if (status === 'new') {
      // Send email notification
      try {
        await sendFormNotification({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          company: validatedData.company,
          subject: validatedData.subject,
          message: validatedData.message,
          ipAddress,
          submittedAt: submission.created_at,
        })

        // Update notification status in Google Sheets
        await updateSubmission(submissionId, {
          notification_sent: true,
          notification_sent_at: new Date().toISOString(),
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Continue even if email fails
      }

      // Send Slack notification
      try {
        await sendSubmissionNotification({
          id: submission.id,
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        })

        // Update Slack notification status in Google Sheets
        await updateSubmission(submissionId, {
          slack_notification_sent: true,
        })
      } catch (slackError) {
        console.error('Failed to send Slack notification:', slackError)
        // Continue even if Slack fails
      }

      // Note: n8n webhook can be triggered manually if needed
      // For now, rely on periodic polling or manual trigger
    }

    // Return success response
    return res.status(200).json({
      message: 'Form submitted successfully',
      id: submission.id,
    })
  } catch (error) {
    console.error('Form submission error:', error)

    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }

    return res.status(500).json({
      message: 'An unexpected error occurred',
    })
  }
}
