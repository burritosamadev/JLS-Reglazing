const HUBSPOT_API = 'https://api.hubapi.com'

interface ContactProperties {
  firstname: string
  lastname: string
  email: string
  phone: string
  address: string
  message: string
  service_interest: string
  sms_consent: string
  lead_source: string
}

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

  // Split name into first/last
  const nameParts = data.name.trim().split(/\s+/)
  const firstname = nameParts[0] || ''
  const lastname = nameParts.slice(1).join(' ') || ''

  const properties: ContactProperties = {
    firstname,
    lastname,
    email: data.email,
    phone: data.phone,
    address: data.serviceAddress,
    message: data.message,
    service_interest: data.service,
    sms_consent: data.smsConsent ? 'true' : 'false',
    lead_source: 'Website Form',
  }

  try {
    // Try to create contact
    const response = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    })

    if (response.ok) {
      const result = await response.json()
      return { id: result.id }
    }

    // If contact already exists (409 conflict), update instead
    if (response.status === 409) {
      const errorData = await response.json()
      const existingId = errorData?.message?.match(/Existing ID: (\d+)/)?.[1]

      if (existingId) {
        const updateResponse = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts/${existingId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ properties }),
        })

        if (updateResponse.ok) {
          return { id: existingId }
        }
      }
    }

    const errorText = await response.text()
    console.error('HubSpot API error:', response.status, errorText)
    return null
  } catch (error) {
    console.error('HubSpot request failed:', error)
    return null
  }
}
