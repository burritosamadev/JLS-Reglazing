/**
 * Lead Attribution — UTM + referrer capture
 *
 * Captures marketing source info on first page load and persists it for the
 * session so the form can attach it to the HubSpot lead even if the user
 * navigates around the site before submitting.
 *
 * First-touch attribution: once captured, we don't overwrite. If a user lands
 * via Craigslist UTMs and then later visits via a direct link, the original
 * Craigslist source is preserved.
 */

const STORAGE_KEY = 'jls_lead_attribution'

export interface LeadAttribution {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer?: string
  landing_page?: string
  conversion_page?: string
  captured_at?: string
}

/**
 * Read URL and document.referrer, save to sessionStorage if not already set.
 * Safe to call on every page load — only captures once per session.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return

  // Only capture once per session (preserve first-touch attribution)
  if (sessionStorage.getItem(STORAGE_KEY)) return

  const params = new URLSearchParams(window.location.search)
  const utm_source = params.get('utm_source') || undefined
  const utm_medium = params.get('utm_medium') || undefined
  const utm_campaign = params.get('utm_campaign') || undefined
  const utm_term = params.get('utm_term') || undefined
  const utm_content = params.get('utm_content') || undefined

  // Referrer: only capture if external (not our own domain)
  let referrer: string | undefined
  if (document.referrer) {
    try {
      const refUrl = new URL(document.referrer)
      if (refUrl.hostname !== window.location.hostname) {
        referrer = document.referrer
      }
    } catch {
      // Invalid URL — ignore
    }
  }

  // Skip storage if there's nothing meaningful to track
  if (!utm_source && !utm_medium && !utm_campaign && !referrer) return

  const attribution: LeadAttribution = {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    referrer,
    landing_page: window.location.pathname + window.location.search,
    captured_at: new Date().toISOString(),
  }

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution))
  } catch {
    // sessionStorage might be disabled (private mode, etc.) — fail silently
  }
}

/**
 * Read attribution data for inclusion in form submissions.
 * Returns empty object if nothing was captured.
 */
export function getAttribution(): LeadAttribution {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as LeadAttribution
  } catch {
    return {}
  }
}
