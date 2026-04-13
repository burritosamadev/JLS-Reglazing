'use client'

import Script from 'next/script'

export default function PlausibleScript() {
  return (
    <Script
      data-domain="jlsreglazing.com"
      src="https://plausible.io/js/pa-8E-on2b3gEVQiEx52Phz8.js"
      strategy="beforeInteractive"
    />
  )
}
