'use client'

import { useEffect, useRef, useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { analytics } from '@/lib/analytics'

export default function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always visible near the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true)
      }
      // Scrolling down — hide
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }
      // Scrolling up — show
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    analytics.ctaClick('Get Quote', 'Mobile CTA Bar')
    const el = document.querySelector('#quote-form')
    if (el) {
      const pos = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: pos, behavior: 'auto' })
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-900 shadow-2xl border-t-2 border-cta transition-transform duration-200 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
    >
      <div className="flex items-stretch h-14">
        <a
          href="tel:+13108765600"
          onClick={() => analytics.phoneClick('310-876-5600', 'Mobile CTA Bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-cta text-white font-bold active:bg-cta-hover"
        >
          <PhoneIcon className="w-5 h-5" />
          <span className="text-sm">Call Now</span>
        </a>

        <button
          onClick={handleQuoteClick}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-800 text-white font-bold border-l border-cta/30 active:bg-brand-700"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span className="text-sm">Get Quote</span>
        </button>
      </div>
    </div>
  )
}
