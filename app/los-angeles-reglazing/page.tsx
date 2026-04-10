import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

const cities = [
  'Los Angeles', 'Pasadena', 'Long Beach', 'Glendale', 'Burbank',
  'West Covina', 'Pomona', 'Covina', 'Azusa', 'Monrovia',
  'Arcadia', 'Alhambra', 'Monterey Park', 'El Monte', 'Baldwin Park',
  'Glendora', 'La Verne', 'San Dimas', 'Diamond Bar',
]

export const metadata: Metadata = {
  title: 'Bathtub & Kitchen Reglazing in Los Angeles County',
  description:
    'Professional bathtub and kitchen reglazing in Los Angeles County. Serving Pasadena, Long Beach, Glendale, Burbank, Pomona, West Covina & more. 20+ years experience, 2-year warranty.',
  alternates: { canonical: 'https://jlsreglazing.com/los-angeles-reglazing' },
  keywords:
    'bathtub reglazing Los Angeles, kitchen refinishing Pasadena, tub reglazing Long Beach, bathtub refinishing Glendale, reglazing Burbank, reglazing Pomona, Los Angeles County reglazing, West Covina refinishing',
  openGraph: {
    title: 'Bathtub & Kitchen Reglazing in Los Angeles County | JLS Reglazing',
    description:
      'Professional bathtub and kitchen reglazing across Los Angeles County. 20+ years experience, 4,000+ units serviced.',
    url: 'https://jlsreglazing.com/los-angeles-reglazing',
  },
}

export default function LosAngelesReglazingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountySchema('Los Angeles County', cities)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Los Angeles County Reglazing', href: '/los-angeles-reglazing' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Bathtub &amp; Kitchen Reglazing in Los Angeles County
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Professional refinishing services for homeowners, property managers, and contractors
            across Los Angeles County. Save up to 90% compared to full replacement.
          </p>
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
            How Much Does Bathtub Reglazing Cost in Los Angeles?
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed text-lg">
            Bathtub reglazing in Los Angeles County costs between <strong>$300 and $600</strong> per fixture, depending on size, material, and condition. In a market where bathroom renovations routinely start at $10,000 and tub replacements alone run $3,000 to $5,000 with LA labor rates, reglazing offers property owners dramatic savings. The work is completed on-site in a single day&mdash;no demolition, no plumbing changes, and no weeks-long renovation timeline.
          </p>
        </div>
      </section>

      {/* Why Choose JLS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Choose JLS Reglazing in Los Angeles County
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            Los Angeles County is defined by its density. From mid-rise apartment buildings in Pasadena and Glendale to sprawling multi-family complexes in El Monte and West Covina, the region has millions of rental units with bathtubs and kitchen surfaces that see heavy daily use. Property management companies face constant pressure to turn units quickly between tenants while keeping renovation budgets under control. Reglazing solves both problems: a tub or kitchen counter can be refinished in hours, not days, at a cost that makes full replacement unnecessary.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            JLS Reglazing has partnered with LA-area property managers and landlords for over two decades. We understand the scheduling constraints of multi-unit buildings&mdash;coordinating access, working within tenant-occupied properties, and delivering consistent quality across dozens of units in a single project. Our team can handle volume work without sacrificing the attention to detail that keeps tenants happy and maintenance calls low.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            For individual homeowners across the San Gabriel Valley and beyond, we bring the same professional-grade materials and craftsmanship. Every job is backed by our 2-year warranty, full licensing, and comprehensive insurance coverage.
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Reglazing Services Available in Los Angeles County
          </h2>
          <ul className="space-y-4 font-jost text-gray-700">
            <li>
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Bathtub Refinishing</Link> &mdash; Ideal for apartment turnovers and aging single-family home tubs alike.
            </li>
            <li>
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Kitchen Refinishing</Link> &mdash; Modernize kitchen counters and surfaces without a full gut renovation.
            </li>
            <li>
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Sink Refinishing</Link> &mdash; Restore stained or damaged sinks in high-traffic rental and residential kitchens.
            </li>
            <li>
              <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Vanity Refinishing</Link> &mdash; Cost-effective alternative to vanity replacement for budget-conscious renovations.
            </li>
            <li>
              <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">Crack Repair</Link> &mdash; Address chips and cracks before they become liability issues in rental properties.
            </li>
            <li>
              <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">Enclosure Refinishing</Link> &mdash; Refresh tub and shower enclosures across multiple units for a uniform look.
            </li>
            <li>
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">Cut-Out Repairs</Link> &mdash; Refinish tubs that have been modified with step-in cut-outs.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8 text-center">
            Frequently Asked Questions &mdash; Los Angeles County
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you work with LA apartment complexes?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes, and multi-unit properties are a significant part of our business in Los Angeles County. We regularly partner with property management firms to reglaze bathtubs, sinks, and kitchen surfaces across entire buildings. Our team can handle multiple units per day, and we coordinate directly with on-site maintenance staff to streamline scheduling. Volume projects receive competitive per-unit pricing&mdash;contact us for a custom quote tailored to your property size.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                What is the turnaround time for multi-unit reglazing?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Each individual tub takes approximately four to five hours to prep and reglaze, with a 24-hour cure period before it can be used. For multi-unit projects, we typically complete two to three units per day per technician. A 20-unit apartment building, for example, can be fully serviced within two weeks. We work around tenant schedules and can stagger appointments to minimize disruption to occupied units.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                How much does bathtub reglazing cost in Los Angeles?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Standard bathtub reglazing in Los Angeles County ranges from $300 to $600 per tub, depending on the surface material, current condition, and any repairs needed before coating. Kitchen countertops and sinks fall within a similar range. For multi-unit projects, we offer tiered pricing that reduces the per-unit cost as the project scope increases. Every quote includes surface preparation, multi-coat application, and our 2-year warranty at no additional charge.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Cities We Serve in Los Angeles County
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

      {/* CTA / Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-2">
            Get a Free Quote in Los Angeles County
          </h2>
          <p className="font-jost text-[#2D3748]/70 text-center mb-8">
            Fill out the form below or call us at{' '}
            <Link href="tel:+13108765600" className="text-[#1B4D7A] font-semibold hover:underline">
              (310) 876-5600
            </Link>
          </p>
          <QuickQuoteForm />
        </div>
      </section>
    </>
  )
}
