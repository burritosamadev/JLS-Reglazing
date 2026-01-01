// Slack notification utilities
// These functions send notifications to Slack channels via webhooks

interface SubmissionNotification {
  id: string
  name: string
  email: string
  message: string
}

interface SpamAlert {
  email: string
  ip: string
  spamScore: number
  reasons: string[]
}

export async function sendSubmissionNotification(data: SubmissionNotification): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL

  if (!webhookUrl) {
    console.log('Slack webhook not configured, skipping notification')
    return
  }

  const payload = {
    channel: process.env.SLACK_CHANNEL_SUBMISSIONS || '#form-submissions',
    username: 'Form Bot',
    icon_emoji: ':memo:',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'New Form Submission',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${data.name}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${data.email}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${data.message.substring(0, 300)}${
            data.message.length > 300 ? '...' : ''
          }`,
        },
      },
    ],
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Failed to send Slack notification:', error)
    throw error
  }
}

export async function sendSpamAlert(data: SpamAlert): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL

  if (!webhookUrl) {
    console.log('Slack webhook not configured, skipping spam alert')
    return
  }

  const payload = {
    channel: process.env.SLACK_CHANNEL_SPAM || '#security-alerts',
    username: 'Security Bot',
    icon_emoji: ':rotating_light:',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🚨 Spam Submission Blocked',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Email:*\n${data.email}`,
          },
          {
            type: 'mrkdwn',
            text: `*IP:*\n${data.ip}`,
          },
          {
            type: 'mrkdwn',
            text: `*Spam Score:*\n${data.spamScore}/100`,
          },
          {
            type: 'mrkdwn',
            text: `*Reasons:*\n${data.reasons.join(', ')}`,
          },
        ],
      },
    ],
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Failed to send Slack spam alert:', error)
    // Don't throw - we don't want spam alerts to break the submission flow
  }
}
