import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

const cities = [
  'San Bernardino', 'Fontana', 'Rancho Cucamonga', 'Ontario', 'Upland',
  'Redlands', 'Rialto', 'Colton', 'Highland', 'Yucaipa',
  'Loma Linda', 'Chino', 'Chino Hills', 'Montclair',
]

export const metadata: Metadata = {
  title: 'Bathtub & Kitchen Reglazing in San Bernardino County',
  description:
    'Professional bathtub and kitchen reglazing in San Bernardino County. Serving Fontana, Rancho Cucamonga, Ontario, Upland, Redlands & more. 20+ years experience, 3-year warranty. Save 90% vs replacement.',
  alternates: { canonical: 'https://jlsreglazing.com/san-bernardino-reglazing' },
  keywords:
    'bathtub reglazing San Bernardino, kitchen refinishing Fontana, tub reglazing Rancho Cucamonga, bathtub refinishing Ontario, reglazing Upland, reglazing Redlands, San Bernardino County reglazing',
  openGraph: {
    type: 'website',
    title: 'Bathtub & Kitchen Reglazing in San Bernardino County',
    description:
      'Professional bathtub and kitchen reglazing across San Bernardino County. 20+ years experience, 4,000+ units serviced.',
    url: 'https://jlsreglazing.com/san-bernardino-reglazing',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathtub & Kitchen Reglazing in San Bernardino County',
    description:
      'Professional bathtub and kitchen reglazing across San Bernardino County. 20+ years experience, 4,000+ units serviced.',
  },
}

export default function SanBernardinoReglazingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountySchema('San Bernardino County', cities)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'San Bernardino County Reglazing', href: '/san-bernardino-reglazing' }]} />

      {/* Hero — two column: messaging + before/after on desktop, stacks on mobile */}
      <section className="bg-[#1B4D7A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: messaging + CTA */}
            <div>
              <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Bathtub &amp; Kitchen Reglazing in San Bernardino County
              </h1>
              <p className="font-jost text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Professional refinishing services for homeowners, property managers, and contractors across the Inland Empire. Save up to 90% compared to full replacement &mdash; completed in a single day, backed by a 3-year warranty.
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
                  <div className="font-orbitron text-2xl font-bold">$300+</div>
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
                variant="composite"
                compositeImage="/images/before_after_combined_1.jpg"
                aspectRatio="4/5"
                alt="Bathtub Reglazing in San Bernardino County"
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
              Get Your Free San Bernardino Reglazing Quote
            </h2>
            <p className="font-jost text-[#2D3748]/70">
              Same-day response. Bilingual service in English &amp; Spanish.
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-6 md:p-8 shadow-md">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#FAFAFA] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '4,000+', label: 'Units Serviced' },
            { value: 'Free', label: 'On-Site Quotes' },
            { value: '3-Year', label: 'Warranty' },
          ].map((item) => (
            <div key={item.label} className="p-4">
              <p className="font-orbitron text-2xl md:text-3xl font-bold text-[#1B4D7A]">
                {item.value}
              </p>
              <p className="font-jost text-[#2D3748] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Answer-First Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            How Much Does Bathtub Reglazing Cost in San Bernardino County?
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed text-lg">
            Bathtub reglazing in San Bernardino County typically costs between <strong>$300 and $600</strong> per project, depending on the surface condition and type of fixture. Compared to a full bathtub replacement&mdash;which can easily exceed $3,000 with demolition, plumbing, and tile work in Inland Empire homes&mdash;reglazing delivers a like-new finish at a fraction of the price. Most jobs are completed in a single day with only 24 hours of cure time, meaning minimal disruption to your household.
          </p>
        </div>
      </section>

      {/* Why Choose JLS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Choose JLS Reglazing in San Bernardino County
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            San Bernardino County is one of the fastest-growing regions in Southern California. From the master-planned communities of Rancho Cucamonga and Chino Hills to the historic neighborhoods of Redlands and Upland, the Inland Empire has a wide mix of new construction and properties built in the 1960s through 1980s. Older bathtubs, sinks, and kitchen counters in these homes often show decades of wear&mdash;chips, staining, and outdated colors&mdash;but their underlying structure is still solid. Reglazing restores these fixtures instead of sending them to a landfill.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            Summer temperatures in the Inland Empire regularly top 100 degrees Fahrenheit, which can stress bathroom surfaces that are already cracked or worn. JLS Reglazing uses heat-resistant coatings specifically formulated to withstand the thermal cycling common in San Bernardino County homes. With over 20 years of hands-on experience and more than 4,000 units serviced across the region, we understand the unique demands that the local climate places on refinished surfaces.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            Whether you are a homeowner in Fontana updating a single bathroom, a landlord turning units in Ontario, or a contractor handling a multi-property renovation in Rialto, JLS Reglazing provides professional service backed by a 3-year warranty on every project.
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Reglazing Services Available in San Bernardino County
          </h2>
          <ul className="space-y-4 font-jost text-gray-700">
            <li>
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Bathtub Refinishing</Link> &mdash; Restore chipped, stained, or discolored tubs to a glossy, like-new finish.
            </li>
            <li>
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Kitchen Refinishing</Link> &mdash; Refinish countertops and kitchen surfaces for a clean, modern look.
            </li>
            <li>
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Sink Refinishing</Link> &mdash; Eliminate rust, stains, and wear on bathroom and kitchen sinks.
            </li>
            <li>
              <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Vanity Refinishing</Link> &mdash; Update vanity tops without the cost of full countertop replacement.
            </li>
            <li>
              <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">Crack Repair</Link> &mdash; Fix cracks and chips before they lead to leaks or further damage.
            </li>
            <li>
              <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">Enclosure Refinishing</Link> &mdash; Reglaze tub and shower enclosures to match your refreshed bathtub.
            </li>
            <li>
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">Cut-Out Repairs</Link> &mdash; Restore tubs that have been modified with walk-in cut-outs.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8 text-center">
            Frequently Asked Questions &mdash; San Bernardino County
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you serve the entire Inland Empire?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. JLS Reglazing provides on-site bathtub and kitchen reglazing services throughout San Bernardino County, from Chino Hills and Montclair on the western edge to Yucaipa and Highland in the east. We also cover neighboring Inland Empire communities in Riverside County. No matter where you are located in the IE, we can schedule a visit and provide a free, no-obligation estimate.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                How does desert heat affect reglazed surfaces?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Extreme heat can cause cheaper coatings to yellow or peel over time. At JLS Reglazing, we apply professional-grade, heat-resistant finishes that are engineered to handle the temperature swings typical in the Inland Empire&mdash;from triple-digit summer days to cool winter mornings. When properly applied and cured, our reglazing coatings maintain their gloss and structural integrity for years, which is why we stand behind every project with a 3-year warranty.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you work with San Bernardino property managers?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Absolutely. We work with property management companies across San Bernardino County who need fast, reliable unit turnovers. Reglazing a bathtub or kitchen surface takes just one day, allowing you to get rental units back on the market quickly. We offer flexible scheduling, competitive pricing for multi-unit projects, and can coordinate directly with your maintenance team to minimize downtime between tenants.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Cities We Serve in San Bernardino County
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="bg-[#F3F4F6] rounded-lg p-4 text-center font-jost text-[#2D3748] hover:shadow-md transition-shadow"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Our Service Area
          </h2>
          <ServiceAreaMapWrapper />
        </div>
      </section>

      {/* Bottom CTA / Quote Form — second instance for users who scrolled past the top */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-2">
            Ready to Reglaze in San Bernardino? Get a Free Quote
          </h2>
          <p className="font-jost text-[#2D3748]/70 text-center mb-8">
            Same-day response. Or call{' '}
            <Link href="tel:+13108765600" className="text-[#1B4D7A] font-semibold hover:underline">
              (310) 876-5600
            </Link>{' '}
            for English or{' '}
            <Link href="tel:+19095012797" className="text-[#1B4D7A] font-semibold hover:underline">
              (909) 501-2797
            </Link>{' '}
            for Spanish.
          </p>
          <QuickQuoteForm />
        </div>
      </section>
    </>
  )
}
