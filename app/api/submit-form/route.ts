import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { formSubmissionSchema } from '@/lib/validation'
import { calculateSpamScore } from '@/lib/spam-detection'
import { sendFormNotification } from '@/lib/email'
import { sendSubmissionNotification, sendSpamAlert } from '@/lib/slack'
import { addFormSubmission, updateSubmission } from '@/lib/google-sheets'
import { rateLimiter } from '@/lib/rate-limiter'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    const userAgent = request.headers.get('user-agent') || 'unknown'

    const validatedData = formSubmissionSchema.parse(body)

    const honeypotFilled = !!validatedData.website

    const spamCheck = await calculateSpamScore({
      email: validatedData.email,
      message: validatedData.message,
      honeypotFilled,
      submissionTime: validatedData.submissionTime,
      ipAddress,
    })

    let status: 'new' | 'spam' | 'blocked' = 'new'
    if (spamCheck.spamScore >= 80) status = 'blocked'
    else if (spamCheck.spamScore >= 50) status = 'spam'

    const submissionId = uuidv4()
    const createdAt = new Date().toISOString()

    const serviceAddress = body.serviceAddress || ''
    const occupied = body.occupied || false
    const smsConsent = body.smsConsent || false

    const submissionData = {
      id: submissionId,
      created_at: createdAt,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      company: validatedData.company || '',
      subject: validatedData.subject || '',
      service_address: serviceAddress,
      occupied,
      sms_consent: smsConsent,
      message: validatedData.message,
      attachment_links: JSON.stringify([]),
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

    try {
      await addFormSubmission(submissionData)
      rateLimiter.addSubmission(ipAddress)
    } catch (error) {
      console.error('Google Sheets error:', error)
      if (error instanceof Error) {
        if (error.message.includes('quota')) {
          return NextResponse.json({ message: 'Service temporarily unavailable. Please try again later.' }, { status: 503 })
        }
        if (error.message.includes('authentication')) {
          return NextResponse.json({ message: 'Internal server error. Please contact support.' }, { status: 500 })
        }
      }
      throw new Error('Failed to save submission')
    }

    if (status === 'blocked' || status === 'spam') {
      await sendSpamAlert({
        email: validatedData.email,
        ip: ipAddress,
        spamScore: spamCheck.spamScore,
        reasons: spamCheck.reasons,
      })
      if (status === 'blocked') {
        return NextResponse.json({ message: 'Your submission was blocked. Please contact us directly if this is an error.' }, { status: 400 })
      }
    }

    if (status === 'new') {
      try {
        await sendFormNotification({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          company: validatedData.company,
          subject: validatedData.subject,
          message: validatedData.message,
          ipAddress,
          submittedAt: createdAt,
        })
        await updateSubmission(submissionId, {
          notification_sent: true,
          notification_sent_at: new Date().toISOString(),
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
      }

      try {
        await sendSubmissionNotification({
          id: submissionId,
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        })
        await updateSubmission(submissionId, { slack_notification_sent: true })
      } catch (slackError) {
        console.error('Failed to send Slack notification:', slackError)
      }
    }

    return NextResponse.json({ message: 'Form submitted successfully', id: submissionId })
  } catch (error) {
    console.error('Form submission error:', error)
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 })
  }
}
