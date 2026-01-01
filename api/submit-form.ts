import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import { formSubmissionSchema } from '../src/lib/validation'
import { calculateSpamScore } from '../src/lib/spam-detection'
import { sendFormNotification } from '../src/lib/email'
import { sendSubmissionNotification, sendSpamAlert } from '../src/lib/slack'

// Initialize Supabase with service role key (has full access)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

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

    // Handle attachments if present
    const attachments = (req.body as any).attachments || []
    const metadata: Record<string, any> = {}

    if (attachments.length > 0) {
      metadata.attachments = attachments.map((att: any) => ({
        name: att.name,
        type: att.type,
        size: Math.round(att.data.length * 0.75), // Approximate size from base64
      }))
      metadata.attachmentData = attachments // Store actual base64 data
    }

    // Insert submission into database
    const { data: submission, error: dbError } = await supabase
      .from('form_submissions')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        subject: validatedData.subject || null,
        message: validatedData.message,
        metadata: Object.keys(metadata).length > 0 ? metadata : null,
        status,
        is_spam: spamCheck.isSpam,
        spam_score: spamCheck.spamScore,
        spam_reasons: spamCheck.reasons,
        ip_address: ipAddress,
        user_agent: userAgent,
        honeypot_filled: honeypotFilled,
        submission_time_seconds: validatedData.submissionTime,
        blocked: status === 'blocked',
        blocked_reason: status === 'blocked' ? spamCheck.reasons.join(', ') : null,
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Failed to save submission')
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

        // Update notification status
        await supabase
          .from('form_submissions')
          .update({
            notification_sent: true,
            notification_sent_at: new Date().toISOString(),
          })
          .eq('id', submission.id)
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

        // Update Slack notification status
        await supabase
          .from('form_submissions')
          .update({
            slack_notification_sent: true,
          })
          .eq('id', submission.id)
      } catch (slackError) {
        console.error('Failed to send Slack notification:', slackError)
        // Continue even if Slack fails
      }

      // Note: Supabase webhook will trigger n8n workflow automatically
      // No need to manually trigger it here
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
