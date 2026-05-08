import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

const cities = [
  'Victorville', 'Hesperia', 'Apple Valley', 'Barstow',
  'Adelanto', 'Phelan', 'Lucerne Valley', 'Wrightwood', 'Big Bear Lake',
]

export const metadata: Metadata = {
  title: 'Bathtub & Kitchen Reglazing in Victorville & High Desert',
  description:
    'Professional bathtub and kitchen reglazing in Victorville, Hesperia, Apple Valley, Barstow, Big Bear Lake & the High Desert. 20+ years experience, 2-year warranty. Save 90% vs replacement.',
  alternates: { canonical: 'https://jlsreglazing.com/victorville-reglazing' },
  keywords:
    'bathtub reglazing Victorville, kitchen refinishing Hesperia, tub reglazing Apple Valley, bathtub refinishing Barstow, reglazing Big Bear, High Desert reglazing, Adelanto refinishing',
  openGraph: {
    title: 'Bathtub & Kitchen Reglazing in Victorville & High Desert',
    description:
      'Professional bathtub and kitchen reglazing in the High Desert. 20+ years experience, 4,000+ units serviced.',
    url: 'https://jlsreglazing.com/victorville-reglazing',
  },
}

export default function VictorvilleReglazingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountySchema('Victorville', cities)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Victorville Reglazing', href: '/victorville-reglazing' }]} />

      {/* Hero — two column: messaging + before/after on desktop, stacks on mobile */}
      <section className="bg-[#1B4D7A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: messaging + CTA */}
            <div>
              <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Bathtub &amp; Kitchen Reglazing in Victorville &amp; the High Desert
              </h1>
              <p className="font-jost text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Professional refinishing services for homeowners and property managers across the High Desert region. Save up to 90% compared to full replacement &mdash; completed in a single day, backed by a 2-year warranty.
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
                beforeImage="/images/5_before.webp"
                afterImage="/images/5_after.webp"
                alt="Bathtub Reglazing in Victorville & High Desert"
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
              Get Your Free Victorville Reglazing Quote
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
            { value: 'Licensed', label: '& Insured' },
            { value: '2-Year', label: 'Warranty' },
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
            How Much Does Bathtub Reglazing Cost in the High Desert?
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed text-lg">
            High Desert homeowners typically invest between <strong>$300 and $600</strong> for professional bathtub reglazing, based on fixture size and surface condition. Many Victorville and Hesperia homes were built during the 2000s housing boom and came equipped with builder-grade fiberglass tubs that are now showing wear. Replacing these fixtures often means $2,000 or more in materials and labor, plus the hassle of matching existing tile and plumbing&mdash;reglazing eliminates all of that while delivering a factory-fresh finish in a single day.
          </p>
        </div>
      </section>

      {/* Why Choose JLS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Choose JLS Reglazing in the High Desert
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            The High Desert presents unique challenges for bathroom surfaces. Summer temperatures in Victorville and Apple Valley frequently exceed 110 degrees Fahrenheit, while winter nights can drop below freezing. This extreme thermal cycling causes expansion and contraction in bathtub materials, which accelerates cracking and finish deterioration over time. JLS Reglazing uses coatings engineered for temperature resilience, ensuring your refinished tub holds up through the full range of High Desert weather conditions.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            The communities of Victorville, Hesperia, and Adelanto are also home to many military families stationed at or near Fort Irwin. Frequent relocations mean homes in these areas often change tenants regularly, and landlords need a cost-effective way to refresh bathrooms between occupants. Reglazing provides a like-new appearance without the timeline or expense of a full remodel&mdash;an important advantage for property owners managing rentals in a military-adjacent market.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            Whether you own a single home in Wrightwood, a rental property in Barstow, or a vacation cabin near Big Bear Lake, JLS Reglazing delivers the same licensed, insured, warranty-backed service that has earned us over 4,000 completed projects across Southern California.
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Reglazing Services Available in the High Desert
          </h2>
          <ul className="space-y-4 font-jost text-gray-700">
            <li>
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Bathtub Refinishing</Link> &mdash; Restore builder-grade fiberglass and acrylic tubs to a durable, glossy finish.
            </li>
            <li>
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Kitchen Refinishing</Link> &mdash; Update dated kitchen counters and surfaces at a fraction of remodel cost.
            </li>
            <li>
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Sink Refinishing</Link> &mdash; Eliminate discoloration and wear from bathroom and kitchen sinks.
            </li>
            <li>
              <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Vanity Refinishing</Link> &mdash; Refresh worn vanity tops to complete your bathroom update.
            </li>
            <li>
              <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">Crack Repair</Link> &mdash; Fix temperature-induced cracks and chips before they lead to water damage.
            </li>
            <li>
              <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">Enclosure Refinishing</Link> &mdash; Reglaze tub and shower enclosures to match your refinished fixtures.
            </li>
            <li>
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">Cut-Out Repairs</Link> &mdash; Repair and refinish walk-in tub modifications for a clean, sealed result.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8 text-center">
            Frequently Asked Questions &mdash; High Desert
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do temperature extremes affect reglazed surfaces?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Extreme heat and cold can stress bathroom surfaces, but a professionally applied reglazing finish is formulated to flex with temperature changes. JLS Reglazing uses industrial coatings that withstand the thermal cycling typical in the High Desert, where daytime highs can exceed 110 degrees in summer and overnight lows dip below freezing in winter. Proper surface preparation&mdash;including filling any existing cracks&mdash;is the key to long-term durability, and we never skip that step.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you serve Barstow and the High Desert?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. Our service area covers the entire High Desert corridor, including Victorville, Hesperia, Apple Valley, Adelanto, Barstow, Phelan, Lucerne Valley, and the mountain communities of Wrightwood and Big Bear Lake. We schedule High Desert appointments throughout the week and do not charge a trip fee for on-site estimates anywhere in our service area. Call (310) 876-5600 or submit our online form to book your free consultation.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Can you reglaze builder-grade fiberglass tubs?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Absolutely. Builder-grade fiberglass tubs are among the most common fixtures we refinish in the High Desert. These tubs are lightweight and affordable when new, but their factory finish tends to dull and scratch within 10 to 15 years of regular use. Our reglazing process bonds a new, high-gloss coating directly to the existing fiberglass shell, restoring the tub to a like-new condition without the need for demolition or plumbing modifications. The result looks and feels like a brand-new fixture at a fraction of the replacement cost.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Cities We Serve in the High Desert
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
            Ready to Reglaze in Victorville? Get a Free Quote
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
