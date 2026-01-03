import { google } from 'googleapis'
import * as dotenv from 'dotenv'

// Load environment variables from .env (same file that Vercel Dev uses)
dotenv.config({ path: '.env' })

const STATUS = {
  PASS: '\u2713',
  FAIL: '\u2717',
  INFO: '\u2192',
}

function log(status: string, message: string) {
  console.log(`${status} ${message}`)
}

async function verifyGoogleDriveConfig() {
  console.log('\n=== Google Drive Configuration Verification ===\n')

  // Check 1: Environment variables exist
  log(STATUS.INFO, 'Checking environment variables...')

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID

  if (!serviceAccountEmail) {
    log(STATUS.FAIL, 'GOOGLE_SERVICE_ACCOUNT_EMAIL is missing')
    process.exit(1)
  }
  log(STATUS.PASS, `GOOGLE_SERVICE_ACCOUNT_EMAIL: ${serviceAccountEmail}`)

  if (!privateKey) {
    log(STATUS.FAIL, 'GOOGLE_PRIVATE_KEY is missing')
    process.exit(1)
  }

  // Check 2: Private key format is correct (no inner quotes)
  log(STATUS.INFO, 'Checking private key format...')

  if (privateKey.startsWith('""') || privateKey.endsWith('""')) {
    log(STATUS.FAIL, 'GOOGLE_PRIVATE_KEY has invalid format with inner double quotes')
    log(STATUS.INFO, 'Remove the inner quotes from the key value')
    process.exit(1)
  }

  if (!privateKey.includes('BEGIN PRIVATE KEY')) {
    log(STATUS.FAIL, 'GOOGLE_PRIVATE_KEY does not contain a valid private key')
    process.exit(1)
  }

  log(STATUS.PASS, `Private key format is correct (${privateKey.length} chars)`)
  log(STATUS.INFO, `Key preview: ${privateKey.substring(0, 50)}...`)

  if (!folderId) {
    log(STATUS.FAIL, 'GOOGLE_DRIVE_FOLDER_ID is missing')
    process.exit(1)
  }
  log(STATUS.PASS, `GOOGLE_DRIVE_FOLDER_ID: ${folderId}`)

  // Check 3: JWT authentication
  log(STATUS.INFO, 'Testing JWT authentication...')

  let auth
  try {
    // dotenv already converts \n to newlines, so we don't need to replace
    // But we do need to ensure the key is properly formatted
    const formattedKey = privateKey.includes('\n') ? privateKey : privateKey.replace(/\\n/g, '\n')

    auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: formattedKey,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    })

    await auth.authorize()
    log(STATUS.PASS, 'JWT authentication succeeded')
  } catch (error) {
    log(STATUS.FAIL, `JWT authentication failed: ${error instanceof Error ? error.message : String(error)}`)
    log(STATUS.INFO, 'This may indicate:')
    log(STATUS.INFO, '  1. The private key does not match the service account')
    log(STATUS.INFO, '  2. The service account has been deleted or disabled')
    log(STATUS.INFO, '  3. The private key format is still incorrect')
    process.exit(1)
  }

  // Check 4: Access Google Drive folder
  log(STATUS.INFO, 'Checking Google Drive folder access...')

  const drive = google.drive({ version: 'v3', auth })

  try {
    const folderInfo = await drive.files.get({
      fileId: folderId,
      fields: 'id, name, mimeType, capabilities',
    })

    log(STATUS.PASS, `Successfully accessed folder: "${folderInfo.data.name}"`)

    // Check 5: Write permissions
    log(STATUS.INFO, 'Checking write permissions...')

    const canEdit = folderInfo.data.capabilities?.canEdit
    const canAddChildren = folderInfo.data.capabilities?.canAddChildren

    if (canEdit && canAddChildren) {
      log(STATUS.PASS, 'Service account has write permissions')
    } else {
      log(STATUS.FAIL, 'Service account lacks write permissions')
      log(STATUS.INFO, `canEdit: ${canEdit}, canAddChildren: ${canAddChildren}`)
      process.exit(1)
    }

  } catch (error) {
    log(STATUS.FAIL, `Failed to access folder: ${error instanceof Error ? error.message : String(error)}`)
    log(STATUS.INFO, 'Check that the folder ID is correct and the service account has access')
    process.exit(1)
  }

  // Check 6: Test file upload (dry run)
  log(STATUS.INFO, 'Testing file upload capability...')

  try {
    const testFileName = `test-upload-${Date.now()}.txt`
    const testContent = 'This is a test upload from verify-google-drive.ts'

    const response = await drive.files.create({
      requestBody: {
        name: testFileName,
        parents: [folderId],
        mimeType: 'text/plain',
      },
      media: {
        mimeType: 'text/plain',
        body: testContent,
      },
      fields: 'id, name, webViewLink',
    })

    const fileId = response.data.id!
    log(STATUS.PASS, `Successfully uploaded test file: ${response.data.name}`)
    log(STATUS.INFO, `File ID: ${fileId}`)
    log(STATUS.INFO, `Link: ${response.data.webViewLink}`)

    // Clean up test file
    log(STATUS.INFO, 'Cleaning up test file...')
    await drive.files.delete({ fileId })
    log(STATUS.PASS, 'Test file deleted successfully')

  } catch (error) {
    log(STATUS.FAIL, `File upload test failed: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }

  console.log('\n=== All checks passed! ===\n')
  console.log('Your Google Drive configuration is correct and working.')
  console.log('Attachments should now save successfully.\n')
}

verifyGoogleDriveConfig().catch((error) => {
  console.error('\nUnexpected error:', error)
  process.exit(1)
})
