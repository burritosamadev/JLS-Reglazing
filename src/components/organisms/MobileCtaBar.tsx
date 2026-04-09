'use client'

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { analytics } from '@/lib/analytics'

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-900 shadow-2xl border-t-2 border-cta">
      <div className="flex items-stretch h-16">
        <a
          href="tel:+13107420057"
          onClick={() => analytics.phoneClick('310-742-0057', 'Mobile CTA Bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold transition-colors active:scale-95"
        >
          <PhoneIcon className="w-6 h-6" />
          <span className="text-sm">Call Now</span>
        </a>

        <a
          href="#quote-form"
          onClick={(e) => {
            e.preventDefault()
            analytics.ctaClick('Get Quote', 'Mobile CTA Bar')
            const el = document.querySelector('#quote-form')
            if (el) {
              const pos = el.getBoundingClientRect().top + window.pageYOffset - 80
              window.scrollTo({ top: pos, behavior: 'smooth' })
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-bold border-l border-cta/30 transition-colors active:scale-95"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span className="text-sm">Get Quote</span>
        </a>
      </div>
    </div>
  )
}
