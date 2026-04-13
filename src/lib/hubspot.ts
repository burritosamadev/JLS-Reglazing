const HUBSPOT_API = 'https://api.hubapi.com'

export async function createHubSpotContact(data: {
  name: string
  email: string
  phone: string
  serviceAddress: string
  service: string
  message: string
  smsConsent: boolean
}): Promise<{ id: string } | null> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN not configured')
    return null
  }

  const nameParts = data.name.trim().split(/\s+/)
  const firstname = nameParts[0] || ''
  const lastname = nameParts.slice(1).join(' ') || ''

  // Only use HubSpot built-in properties — no custom properties needed
  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
    phone: data.phone,
    address: data.serviceAddress,
  }

  try {
    // Step 1: Create or update contact
    const response = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    })

    let contactId: string | null = null

    if (response.ok) {
      const result = await response.json()
      contactId = result.id
    } else if (response.status === 409) {
      // Contact already exists — extract ID and update
      const errorData = await response.json()
      const existingId = errorData?.message?.match(/Existing ID: (\d+)/)?.[1]
      if (existingId) {
        await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts/${existingId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ properties }),
        })
        contactId = existingId
      }
    } else {
      const errorText = await response.text()
      console.error('HubSpot create contact error:', response.status, errorText)
      return null
    }

    if (!contactId) return null

    // Step 2: Create a note with the full submission details
    const noteBody = [
      `**New Quote Request from Website**`,
      ``,
      `Service: ${data.service}`,
      `Address: ${data.serviceAddress}`,
      `SMS Consent: ${data.smsConsent ? 'Yes' : 'No'}`,
      data.message ? `Message: ${data.message}` : '',
    ].filter(Boolean).join('\n')

    await fetch(`${HUBSPOT_API}/crm/v3/objects/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: noteBody,
        },
        associations: [
          {
            to: { id: contactId },
            types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
          },
        ],
      }),
    }).catch((err) => {
      console.error('HubSpot note creation failed:', err)
    })

    return { id: contactId }
  } catch (error) {
    console.error('HubSpot request failed:', error)
    return null
  }
}
