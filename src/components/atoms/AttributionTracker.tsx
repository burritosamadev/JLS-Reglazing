'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/lead-attribution'

/**
 * Renders nothing. Just runs the UTM/referrer capture once on mount.
 * Mount this in the root layout so attribution is captured on every entry
 * point to the site.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution()
  }, [])

  return null
}
