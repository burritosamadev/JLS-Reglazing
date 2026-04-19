import type { MetadataRoute } from 'next'

// Per-page lastmod dates — update the specific date only when you change that page's content.
// Google treats same-date-every-build timestamps as unreliable and may ignore them.
// Use ISO date strings (YYYY-MM-DD) for stable, accurate freshness signals.
const LAST_UPDATED = {
  home: '2026-04-18',
  services: '2026-04-18',
  bathtubRefinishing: '2026-04-18',
  kitchenRefinishing: '2026-04-18',
  sinkRefinishing: '2026-04-18',
  bathVanity: '2026-04-18',
  crackRepair: '2026-04-18',
  bathtubEnclosure: '2026-04-18',
  cutOutRepairs: '2026-04-18',
  process: '2026-04-18',
  about: '2026-04-18',
  gallery: '2026-04-18',
  contact: '2026-04-18',
  sanBernardino: '2026-04-18',
  riverside: '2026-04-18',
  hemet: '2026-04-18',
  losAngeles: '2026-04-18',
  victorville: '2026-04-18',
  privacyPolicy: '2026-04-18',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jlsreglazing.com'

  return [
    // Homepage — highest priority
    { url: baseUrl, lastModified: LAST_UPDATED.home, changeFrequency: 'weekly', priority: 1.0 },

    // Service pages — all equal priority (all target primary keyword intents)
    { url: `${baseUrl}/services`, lastModified: LAST_UPDATED.services, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/bathtub-refinishing`, lastModified: LAST_UPDATED.bathtubRefinishing, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/kitchen-refinishing`, lastModified: LAST_UPDATED.kitchenRefinishing, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/sink-refinishing`, lastModified: LAST_UPDATED.sinkRefinishing, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/bath-vanity-refinishing`, lastModified: LAST_UPDATED.bathVanity, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/crack-repair`, lastModified: LAST_UPDATED.crackRepair, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/bathtub-enclosure`, lastModified: LAST_UPDATED.bathtubEnclosure, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/cut-out-repairs`, lastModified: LAST_UPDATED.cutOutRepairs, changeFrequency: 'monthly', priority: 0.9 },

    // County/location pages — all equal priority (all target local intent)
    { url: `${baseUrl}/san-bernardino-reglazing`, lastModified: LAST_UPDATED.sanBernardino, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/riverside-reglazing`, lastModified: LAST_UPDATED.riverside, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/los-angeles-reglazing`, lastModified: LAST_UPDATED.losAngeles, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hemet-reglazing`, lastModified: LAST_UPDATED.hemet, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/victorville-reglazing`, lastModified: LAST_UPDATED.victorville, changeFrequency: 'monthly', priority: 0.9 },

    // Contact — high priority for conversion
    { url: `${baseUrl}/contact`, lastModified: LAST_UPDATED.contact, changeFrequency: 'monthly', priority: 0.8 },

    // Informational pages
    { url: `${baseUrl}/about`, lastModified: LAST_UPDATED.about, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified: LAST_UPDATED.process, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: LAST_UPDATED.gallery, changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: `${baseUrl}/privacy-policy`, lastModified: LAST_UPDATED.privacyPolicy, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
