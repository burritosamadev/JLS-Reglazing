/**
 * Google Sheets integration for form submissions
 * Replaces Supabase with Google Sheets API
 */

import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// Initialize JWT auth
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ],
})

// Initialize Google Spreadsheet
const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
)

// Cache for loaded sheets
let submissionsSheet: any = null
let blocklistSheet: any = null

/**
 * Initialize and load the Google Spreadsheet
 */
async function loadDoc() {
  await doc.loadInfo()

  // Get sheets by title
  submissionsSheet = doc.sheetsByTitle[
    process.env.GOOGLE_SHEET_SUBMISSIONS_TAB || 'Form_Submissions'
  ]
  blocklistSheet = doc.sheetsByTitle[
    process.env.GOOGLE_SHEET_BLOCKLIST_TAB || 'Blocklist'
  ]

  if (!submissionsSheet) {
    throw new Error('Form_Submissions sheet not found')
  }
  if (!blocklistSheet) {
    throw new Error('Blocklist sheet not found')
  }
}

/**
 * Add a form submission to Google Sheets
 */
export async function addFormSubmission(data: any): Promise<void> {
  try {
    if (!submissionsSheet) {
      await loadDoc()
    }

    // Add row to sheet
    await submissionsSheet.addRow({
      id: data.id,
      created_at: data.created_at,
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      subject: data.subject || '',
      message: data.message || '',
      attachment_links: data.attachment_links || '',
      status: data.status || 'new',
      is_spam: data.is_spam || false,
      spam_score: data.spam_score || 0,
      spam_reasons: data.spam_reasons || '',
      ip_address: data.ip_address || '',
      user_agent: data.user_agent || '',
      honeypot_filled: data.honeypot_filled || false,
      submission_time_seconds: data.submission_time_seconds || 0,
      blocked: data.blocked || false,
      blocked_reason: data.blocked_reason || '',
      notification_sent: data.notification_sent || false,
      notification_sent_at: data.notification_sent_at || '',
      slack_notification_sent: data.slack_notification_sent || false,
      n8n_workflow_triggered: data.n8n_workflow_triggered || false,
    })

    console.log(`✓ Form submission added to Google Sheets: ${data.id}`)
  } catch (error) {
    console.error('Error adding form submission to Google Sheets:', error)
    throw error
  }
}

/**
 * Update an existing submission by ID
 */
export async function updateSubmission(
  id: string,
  updates: Record<string, any>
): Promise<void> {
  try {
    if (!submissionsSheet) {
      await loadDoc()
    }

    // Load all rows and find the matching ID
    const rows = await submissionsSheet.getRows()
    const row = rows.find((r: any) => r.get('id') === id)

    if (!row) {
      console.warn(`Submission not found for update: ${id}`)
      return
    }

    // Update the row
    Object.keys(updates).forEach((key) => {
      row.set(key, updates[key])
    })

    await row.save()
    console.log(`✓ Submission updated in Google Sheets: ${id}`)
  } catch (error) {
    console.error('Error updating submission in Google Sheets:', error)
    throw error
  }
}

/**
 * Get a blocklist entry by type and value
 */
export async function getBlocklistEntry(
  type: string,
  value: string
): Promise<any | null> {
  try {
    if (!blocklistSheet) {
      await loadDoc()
    }

    const rows = await blocklistSheet.getRows()
    const entry = rows.find(
      (r: any) =>
        r.get('type') === type &&
        r.get('value')?.toLowerCase() === value.toLowerCase()
    )

    if (entry) {
      return {
        id: entry.get('id'),
        type: entry.get('type'),
        value: entry.get('value'),
        reason: entry.get('reason'),
        created_at: entry.get('created_at'),
        added_by: entry.get('added_by'),
      }
    }

    return null
  } catch (error) {
    console.error('Error getting blocklist entry:', error)
    return null
  }
}

/**
 * Get recent submissions for an IP address (for rate limiting)
 */
export async function getRecentSubmissions(
  ipAddress: string,
  hours: number
): Promise<any[]> {
  try {
    if (!submissionsSheet) {
      await loadDoc()
    }

    const rows = await submissionsSheet.getRows()
    const cutoffTime = new Date(Date.now() - hours * 3600000).toISOString()

    const recentSubmissions = rows.filter((r: any) => {
      const rowIP = r.get('ip_address')
      const createdAt = r.get('created_at')

      return rowIP === ipAddress && createdAt >= cutoffTime
    })

    return recentSubmissions.map((r: any) => ({
      id: r.get('id'),
      created_at: r.get('created_at'),
      ip_address: r.get('ip_address'),
    }))
  } catch (error) {
    console.error('Error getting recent submissions:', error)
    return []
  }
}

/**
 * Add an entry to the blocklist
 */
export async function addToBlocklist(
  type: string,
  value: string,
  reason: string,
  addedBy: string = 'system'
): Promise<void> {
  try {
    if (!blocklistSheet) {
      await loadDoc()
    }

    await blocklistSheet.addRow({
      id: `block_${Date.now()}`,
      type,
      value,
      reason,
      created_at: new Date().toISOString(),
      added_by: addedBy,
    })

    console.log(`✓ Added to blocklist: ${type}=${value}`)
  } catch (error) {
    console.error('Error adding to blocklist:', error)
    throw error
  }
}

// Note: Retry helper function can be added here if needed for handling Google Sheets API quota limits
