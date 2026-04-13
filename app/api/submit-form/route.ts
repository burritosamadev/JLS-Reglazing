import { NextRequest, NextResponse } from 'next/server'
import { formSubmissionSchema } from '@/lib/validation'
import { calculateSpamScore } from '@/lib/spam-detection'
import { createHubSpotContact } from '@/lib/hubspot'
import { sendSubmissionNotification, sendSpamAlert } from '@/lib/slack'
import { rateLimiter } from '@/lib/rate-limiter'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Validate form data
    const validatedData = formSubmissionSchema.parse(body)

    // Spam detection (honeypot, timing, keywords, rate limiting)
    const spamCheck = await calculateSpamScore({
      email: validatedData.email,
      message: validatedData.message,
      honeypotFilled: !!validatedData.website,
      submissionTime: validatedData.submissionTime,
      ipAddress,
    })

    // Block spam
    if (spamCheck.spamScore >= 80) {
      await sendSpamAlert({
        email: validatedData.email,
        ip: ipAddress,
        spamScore: spamCheck.spamScore,
        reasons: spamCheck.reasons,
      }).catch(() => {})
      return NextResponse.json(
        { message: 'Your submission was blocked. Please contact us directly if this is an error.' },
        { status: 400 }
      )
    }

    // Flag as spam but still process
    if (spamCheck.spamScore >= 50) {
      await sendSpamAlert({
        email: validatedData.email,
        ip: ipAddress,
        spamScore: spamCheck.spamScore,
        reasons: spamCheck.reasons,
      }).catch(() => {})
    }

    // Track rate limit
    rateLimiter.addSubmission(ipAddress)

    // Create contact in HubSpot
    const hubspotResult = await createHubSpotContact({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || '',
      serviceAddress: body.serviceAddress || '',
      service: validatedData.subject || '',
      message: validatedData.message || '',
      smsConsent: body.smsConsent || false,
    })

    if (!hubspotResult) {
      console.error('HubSpot contact creation failed — lead may be lost')
    }

    // Send Slack notification
    if (spamCheck.spamScore < 50) {
      await sendSubmissionNotification({
        id: hubspotResult?.id || 'unknown',
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message || '',
      }).catch((err) => {
        console.error('Slack notification failed:', err)
      })
    }

    return NextResponse.json({
      message: 'Form submitted successfully',
      id: hubspotResult?.id || 'submitted',
    })
  } catch (error) {
    console.error('Form submission error:', error)
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 })
  }
}
