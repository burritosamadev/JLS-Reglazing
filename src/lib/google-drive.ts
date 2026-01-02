/**
 * Google Drive integration for file uploads
 * Handles file attachments from form submissions
 */

import { google } from 'googleapis'
import { Readable } from 'stream'

// Initialize Google Drive API
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/drive.file'],
})

const drive = google.drive({ version: 'v3', auth })

/**
 * Upload a file to Google Drive
 * @param file File object with name, type, and base64 data
 * @returns Shareable Google Drive link
 */
export async function uploadFileToDrive(file: {
  name: string
  type: string
  data: string // Base64
}): Promise<string> {
  try {
    // Validate file size (10MB limit)
    const base64Data = file.data.split(',')[1] || file.data
    const buffer = Buffer.from(base64Data, 'base64')
    const fileSizeInMB = buffer.length / (1024 * 1024)

    if (fileSizeInMB > 10) {
      throw new Error(`File ${file.name} exceeds 10MB limit`)
    }

    // Convert buffer to readable stream
    const stream = Readable.from(buffer)

    // Generate unique filename with timestamp
    const timestamp = Date.now()
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const uniqueFileName = `${timestamp}_${sanitizedName}`

    // Upload file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: uniqueFileName,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
        mimeType: file.type,
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: 'id, name, webViewLink, webContentLink',
    })

    const fileId = response.data.id

    if (!fileId) {
      throw new Error('Failed to upload file - no file ID returned')
    }

    // Make the file publicly viewable
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    })

    // Return the shareable link
    const link =
      response.data.webViewLink ||
      `https://drive.google.com/file/d/${fileId}/view`

    console.log(`✓ File uploaded to Google Drive: ${uniqueFileName}`)
    return link
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error)
    throw error
  }
}

/**
 * Upload multiple files to Google Drive
 * @param files Array of file objects
 * @returns Array of shareable links
 */
export async function uploadMultipleFiles(
  files: Array<{ name: string; type: string; data: string }>
): Promise<string[]> {
  const links: string[] = []

  for (const file of files) {
    try {
      const link = await uploadFileToDrive(file)
      links.push(link)
    } catch (error) {
      console.error(`Failed to upload ${file.name}:`, error)
      // Continue with other files even if one fails
    }
  }

  return links
}

/**
 * Validate file type (images and videos only)
 */
export function isValidFileType(mimeType: string): boolean {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'video/mp4',
    'video/quicktime',
    'video/x-msvideo',
  ]

  return validTypes.includes(mimeType.toLowerCase())
}
