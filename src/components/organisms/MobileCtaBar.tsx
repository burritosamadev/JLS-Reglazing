import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { analytics } from '../../lib/analytics'

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#232423] shadow-2xl border-t-2 border-[#FB8040]">
      <div className="flex items-stretch h-16">
        {/* Call Now Button */}
        <a
          href="tel:+13107420057"
          onClick={() => analytics.phoneClick('310-742-0057', 'Mobile CTA Bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-[#FB8040] hover:bg-[#E5722A] text-white font-bold transition-colors active:scale-95"
        >
          <PhoneIcon className="w-6 h-6" />
          <span className="text-sm">Call Now</span>
        </a>

        {/* Get Quote Button */}
        <a
          href="#quote-form"
          onClick={(e) => {
            e.preventDefault()
            analytics.ctaClick('Get Quote', 'Mobile CTA Bar')
            const quoteSection = document.querySelector('#quote-form')
            if (quoteSection) {
              // Get the element's position
              const elementPosition = quoteSection.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - 80 // Account for fixed header

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 bg-[#221F1C] hover:bg-[#1a1816] text-white font-bold border-l border-[#FB8040]/30 transition-colors active:scale-95"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span className="text-sm">Get Quote</span>
        </a>
      </div>
    </div>
  )
}
