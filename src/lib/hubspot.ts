import type { LeadAttribution } from './lead-attribution'

const HUBSPOT_API = 'https://api.hubapi.com'

/**
 * Convert utm_campaign or utm_medium into a clean human-readable label.
 * Replaces hyphens AND underscores with spaces, then title-cases each word.
 */
function humanize(value: string): string {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Channel only — e.g. "Craigslist", "Yelp", "Google (Organic)", "Direct / Organic".
 * Campaign and medium are stored in their own dedicated properties.
 */
function buildLeadSource(attribution?: LeadAttribution): string {
  if (!attribution) return 'Direct / Organic'

  const { utm_source, referrer } = attribution

  if (utm_source) {
    return utm_source.charAt(0).toUpperCase() + utm_source.slice(1).toLowerCase()
  }

  if (referrer) {
    try {
      const host = new URL(referrer).hostname.replace(/^www\./, '')
      if (host.includes('google.')) return 'Google (Organic)'
      if (host.includes('bing.')) return 'Bing (Organic)'
      if (host.includes('yelp.')) return 'Yelp'
      if (host.includes('facebook.')) return 'Facebook'
      if (host.includes('instagram.')) return 'Instagram'
      if (host.includes('tiktok.')) return 'TikTok'
      return host
    } catch {
      return 'Direct / Organic'
    }
  }

  return 'Direct / Organic'
}

export async function createHubSpotContact(data: {
  name: string
  email: string
  phone: string
  serviceAddress: string
  service: string
  message: string
  smsConsent: boolean
  attribution?: LeadAttribution
}): Promise<{ id: string } | null> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN not configured')
    return null
  }

  const nameParts = data.name.trim().split(/\s+/)
  const firstname = nameParts[0] || ''
  const lastname = nameParts.slice(1).join(' ') || ''

  const leadSource = buildLeadSource(data.attribution)
  const leadSourceCampaign = data.attribution?.utm_campaign ? humanize(data.attribution.utm_campaign) : ''
  const leadSourceMedium = data.attribution?.utm_medium ? humanize(data.attribution.utm_medium) : ''

  // Built-in HubSpot properties + custom "Lead Source" properties
  // Custom internal names: lead_source, lead_source_campaign, lead_source_medium
  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
    phone: data.phone,
    address: data.serviceAddress,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
    lead_source: leadSource,
    lead_source_campaign: leadSourceCampaign,
    lead_source_medium: leadSourceMedium,
  }

  try {
    // Step 1: Try to create contact with all properties
    let response = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    })

    // If any custom lead_source* property doesn't exist yet, strip all three
    // and retry so the contact still gets created. Attribution is also stored
    // in the Note, so nothing is lost.
    if (!response.ok && response.status === 400) {
      const errorText = await response.text()
      if (errorText.includes('lead_source') || errorText.includes('Property')) {
        console.warn('One or more lead_source* custom properties not found in HubSpot — retrying without them. Configure them in Settings → Properties.')
        const { lead_source, lead_source_campaign, lead_source_medium, ...basicProperties } = properties
        void lead_source; void lead_source_campaign; void lead_source_medium
        response = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ properties: basicProperties }),
        })
      }
    }

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

    // Step 2: Create a note with full submission details + attribution data for visibility
    const attributionLines: string[] = []
    if (data.attribution) {
      const a = data.attribution
      if (a.utm_source) attributionLines.push(`Source: ${a.utm_source}`)
      if (a.utm_medium) attributionLines.push(`Medium: ${a.utm_medium}`)
      if (a.utm_campaign) attributionLines.push(`Campaign: ${a.utm_campaign}`)
      if (a.utm_term) attributionLines.push(`Term: ${a.utm_term}`)
      if (a.utm_content) attributionLines.push(`Content: ${a.utm_content}`)
      if (a.referrer) attributionLines.push(`Referrer: ${a.referrer}`)
      if (a.landing_page) attributionLines.push(`Landing page: ${a.landing_page}`)
      if (a.conversion_page) attributionLines.push(`Converted on: ${a.conversion_page}`)
    }

    const noteSections = [
      `**New Quote Request from Website**`,
      ``,
      `Lead Source: ${leadSource}`,
      `Service: ${data.service}`,
      `Address: ${data.serviceAddress}`,
      `SMS Consent: ${data.smsConsent ? 'Yes' : 'No'}`,
      data.message ? `Message: ${data.message}` : '',
    ]

    if (attributionLines.length > 0) {
      noteSections.push(``, `--- Attribution ---`, ...attributionLines)
    }

    const noteBody = noteSections.filter(Boolean).join('\n')

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
