import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'

export const metadata: Metadata = {
  title: 'Tub Cut-Out & Foundation Repair Services',
  description:
    'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
  alternates: { canonical: 'https://jlsreglazing.com/services/cut-out-repairs' },
  keywords:
    'tub cut-out, bathtub cut-out conversion, bathroom foundation repair, tub to walk-in conversion, accessibility bathtub, bathtub structural repair, Southern California',
  openGraph: {
    type: 'website',
    title: 'Tub Cut-Out & Foundation Repair Services',
    description:
      'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
    url: 'https://jlsreglazing.com/services/cut-out-repairs',
    images: [{ url: '/images/6_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tub Cut-Out & Foundation Repair Services',
    description:
      'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tub Cut-Out & Foundation Repairs',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/cut-out-repairs',
  description:
    'Professional tub cut-out conversions for easier access and bathroom foundation repairs. Improve safety, accessibility, and structural integrity.',
  areaServed: 'Southern California',
  serviceType: 'Tub Cut-Out and Foundation Repair',
}

export default function CutOutRepairsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Custom hero — two column: messaging + before/after */}
      <section className="bg-[#1B4D7A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Tub Cut-Out &amp; Foundation Repairs
              </h1>
              <p className="font-jost text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Improve bathroom accessibility with a professional tub cut-out conversion, or restore structural integrity with our foundation repair services. A safer, more affordable solution for seniors and aging-in-place renovations.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="font-orbitron text-2xl font-bold">20+</div>
                  <div className="font-jost text-xs text-white/80">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="font-orbitron text-2xl font-bold">4,000+</div>
                  <div className="font-jost text-xs text-white/80">Units Done</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="font-orbitron text-2xl font-bold">$400+</div>
                  <div className="font-jost text-xs text-white/80">Starting</div>
                </div>
              </div>

              {/* Phone CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+13108765600" className="flex-1 bg-[#F26522] hover:bg-[#d9551a] text-white font-jost font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                  Call (310) 876-5600
                </a>
                <a href="#quote-form" className="flex-1 bg-white text-[#1B4D7A] hover:bg-gray-100 font-jost font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                  Get a Free Quote
                </a>
              </div>
            </div>

            {/* Right: before/after */}
            <div>
              <BeforeAfterComparison
                beforeImage="/images/6_before.webp"
                afterImage="/images/6_after.webp"
                alt="Tub Cut-Out and Foundation Repair before and after"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote form section near top — same module as bottom for ease of use */}
      <section id="quote-form" className="py-12 md:py-16 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-2">
              Get Your Free Tub Cut-Out Quote
            </h2>
            <p className="font-jost text-[#2D3748]/70">
              Same-day response. Bilingual service in English &amp; Spanish.
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-6 md:p-8 shadow-md">
            <QuickQuoteForm defaultService="Bathroom Foundation Repair (cut-outs)" />
          </div>
        </div>
      </section>

      {/* ServicePageContent renders the rest (skipping the default hero + before/after) */}
      <ServicePageContent
        title="Tub Cut-Out & Foundation Repairs"
        subtitle="Improve bathroom accessibility with a professional tub cut-out conversion, or restore structural integrity with our foundation repair services."
        priceRange="$400–$600"
        beforeImage="/images/6_before.webp"
        afterImage="/images/6_after.webp"
        defaultService="Bathroom Foundation Repair (cut-outs)"
        skipDefaultHero={true}
        features={[
          'Low step-in tub cut-out for improved accessibility and safety',
          'Ideal for seniors and individuals with limited mobility',
          'Foundation repairs address soft spots, rot, and structural weakness',
          'Watertight seal prevents future water damage to subfloor',
          'Can be combined with refinishing for a complete restoration',
          'Far more affordable than full bathtub or bathroom replacement',
        ]}
        faqs={[
          {
            question: 'What is a tub cut-out conversion?',
            answer:
              'A tub cut-out involves removing a section of the bathtub wall to create a lower entry point, making it much easier to step in and out. A fitted insert is then bonded and sealed into place to create a watertight, finished opening. This is a popular solution for aging in place and improving bathroom safety.',
          },
          {
            question: 'What kind of foundation issues can you repair?',
            answer:
              'We repair soft or rotted subfloor beneath bathtubs, fix structural support issues, and restore the foundation that your tub sits on. Water damage over time can weaken the floor structure, and our repairs address this to prevent further deterioration and ensure your tub is safely supported.',
          },
          {
            question: 'Can I still take baths after a tub cut-out?',
            answer:
              'A standard tub cut-out is designed primarily for shower use, as the lowered wall means the tub cannot be filled to its original depth. However, a watertight dam insert can be added that allows for partial filling. We will discuss your needs during the consultation to recommend the best approach.',
          },
        ]}
        relatedServices={[
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
          { name: 'Bathtub Enclosure Refinishing', path: '/services/bathtub-enclosure' },
        ]}
      />
    </>
  )
}
