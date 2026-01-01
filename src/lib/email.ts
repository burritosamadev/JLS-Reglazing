// Email notification utility
// Note: This is a placeholder. Actual email sending should be done server-side.
// For now, we'll just log the notification details.

interface FormNotificationData {
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
  ipAddress: string
  submittedAt: string
}

export async function sendFormNotification(data: FormNotificationData): Promise<void> {
  // In production, this would use nodemailer or a service like SendGrid
  // For now, we'll just log it
  console.log('Email notification would be sent:', {
    to: process.env.NOTIFICATION_EMAIL || 'notifications@jlsreglazing.com',
    subject: `New Quote Request from ${data.name}`,
    body: `
      New form submission received:

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Company: ${data.company || 'Not provided'}
      Subject: ${data.subject || 'Not provided'}
      Message: ${data.message}

      IP Address: ${data.ipAddress}
      Submitted at: ${data.submittedAt}
    `,
  })

  // Simulate async operation
  return Promise.resolve()
}
