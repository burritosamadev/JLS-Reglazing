/**
 * Plausible Analytics event tracking
 * Using the tagged-events extension for custom event tracking
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void
  }
}

export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props })
  }
}

// Predefined event trackers
export const analytics = {
  // Form events
  formSubmit: (formType: string) => {
    trackEvent('Form Submit', { type: formType })
  },

  formStart: (formType: string) => {
    trackEvent('Form Start', { type: formType })
  },

  formError: (formType: string, error: string) => {
    trackEvent('Form Error', { type: formType, error })
  },

  // Call tracking
  phoneClick: (phoneNumber: string, location: string) => {
    trackEvent('Phone Click', { number: phoneNumber, location })
  },

  // Email tracking
  emailClick: (location: string) => {
    trackEvent('Email Click', { location })
  },

  // Navigation
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('CTA Click', { text: ctaText, location })
  },

  // Service interest
  serviceView: (serviceName: string) => {
    trackEvent('Service View', { service: serviceName })
  },

  // External links
  externalLink: (url: string, location: string) => {
    trackEvent('External Link', { url, location })
  },
}
