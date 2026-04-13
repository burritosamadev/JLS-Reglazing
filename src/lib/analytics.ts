/**
 * Plausible Analytics event tracking
 * Events are silently dropped if Plausible hasn't loaded yet.
 * This is intentional — early events (first focus, initial click) are
 * low-value and not worth breaking the page over.
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void
  }
}

export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props })
  }
}

export const analytics = {
  formSubmit: (formType: string) => trackEvent('Form Submit', { type: formType }),
  formStart: (formType: string) => trackEvent('Form Start', { type: formType }),
  formError: (formType: string, error: string) => trackEvent('Form Error', { type: formType, error }),
  phoneClick: (phoneNumber: string, location: string) => trackEvent('Phone Click', { number: phoneNumber, location }),
  emailClick: (location: string) => trackEvent('Email Click', { location }),
  ctaClick: (ctaText: string, location: string) => trackEvent('CTA Click', { text: ctaText, location }),
  serviceView: (serviceName: string) => trackEvent('Service View', { service: serviceName }),
  externalLink: (url: string, location: string) => trackEvent('External Link', { url, location }),
}
