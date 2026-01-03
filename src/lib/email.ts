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
  // For now, we'll just log it (without PII for security)
  console.log('Email notification prepared:', {
    to: process.env.NOTIFICATION_EMAIL || 'notifications@jlsreglazing.com',
    subject: 'New Quote Request',
    hasName: !!data.name,
    hasEmail: !!data.email,
    hasPhone: !!data.phone,
    hasCompany: !!data.company,
    hasSubject: !!data.subject,
    hasMessage: !!data.message,
    timestamp: data.submittedAt,
  })

  // Simulate async operation
  return Promise.resolve()
}
