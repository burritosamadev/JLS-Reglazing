import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

const cities = [
  'Riverside', 'Corona', 'Moreno Valley', 'Temecula', 'Murrieta',
  'Perris', 'Lake Elsinore', 'Menifee', 'Beaumont', 'Banning',
  'San Jacinto', 'Norco', 'Eastvale',
]

export const metadata: Metadata = {
  title: 'Bathtub & Kitchen Reglazing in Riverside County',
  description:
    'Professional bathtub and kitchen reglazing in Riverside County. Serving Corona, Moreno Valley, Temecula, Murrieta, Menifee & more. 20+ years experience, 2-year warranty.',
  alternates: { canonical: 'https://jlsreglazing.com/riverside-reglazing' },
  keywords:
    'bathtub reglazing Riverside, kitchen refinishing Corona, tub reglazing Moreno Valley, bathtub refinishing Temecula, reglazing Murrieta, reglazing Menifee, Riverside County reglazing',
  openGraph: {
    title: 'Bathtub & Kitchen Reglazing in Riverside County | JLS Reglazing',
    description:
      'Professional bathtub and kitchen reglazing across Riverside County. 20+ years experience, 4,000+ units serviced.',
    url: 'https://jlsreglazing.com/riverside-reglazing',
  },
}

export default function RiversideReglazingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountySchema('Riverside County', cities)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Riverside County Reglazing', href: '/riverside-reglazing' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Bathtub &amp; Kitchen Reglazing in Riverside County
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Trusted refinishing services for homeowners, property managers, and contractors
            throughout Riverside County. Save up to 90% compared to full replacement.
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
            How Much Does Bathtub Reglazing Cost in Riverside County?
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed text-lg">
            Riverside County homeowners can expect to pay between <strong>$300 and $600</strong> for professional bathtub reglazing, based on the fixture type and the extent of surface damage. A full tub replacement in the Riverside area often runs $2,500 to $4,000 once you factor in plumbing modifications and tile repairs&mdash;making reglazing a smart investment that saves thousands. The process takes roughly four to five hours, and you can use your tub again within 24 hours of completion.
          </p>
        </div>
      </section>

      {/* Why Choose JLS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Choose JLS Reglazing in Riverside County
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            Riverside County stretches from the rapidly expanding bedroom communities of Eastvale and Corona to the wine-country neighborhoods of Temecula and Murrieta in the south. Many homes throughout the county were built during the housing booms of the 1990s and 2000s, and their original bathtubs and kitchen surfaces are now showing their age. Hard water&mdash;a well-documented issue across the Riverside area&mdash;accelerates mineral buildup, etching, and staining on porcelain and fiberglass fixtures. Reglazing addresses all of these problems in a single visit.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            JLS Reglazing has spent over two decades serving families and property owners in Riverside County. We prep every surface meticulously to remove hard-water deposits and existing damage before applying our multi-coat refinishing system. This preparation step is critical in areas with mineral-heavy water, and it is one of the reasons our finishes outlast those of less experienced competitors.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            From a single guest-bathroom tub in Perris to a full kitchen and bath refresh in Lake Elsinore, every JLS project comes with a 2-year warranty, full licensing and insurance, and a commitment to leaving your home clean when we walk out the door.
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Reglazing Services Available in Riverside County
          </h2>
          <ul className="space-y-4 font-jost text-gray-700">
            <li>
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Bathtub Refinishing</Link> &mdash; Remove hard-water stains, chips, and discoloration for a smooth, bright surface.
            </li>
            <li>
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Kitchen Refinishing</Link> &mdash; Give dated countertops and kitchen surfaces a fresh, updated appearance.
            </li>
            <li>
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Sink Refinishing</Link> &mdash; Restore stained or chipped sinks in bathrooms and kitchens.
            </li>
            <li>
              <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Vanity Refinishing</Link> &mdash; Refresh vanity surfaces to complement your newly reglazed tub.
            </li>
            <li>
              <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">Crack Repair</Link> &mdash; Seal cracks and chips to prevent water damage beneath the surface.
            </li>
            <li>
              <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">Enclosure Refinishing</Link> &mdash; Reglaze shower and tub enclosures for a uniform, refreshed look.
            </li>
            <li>
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">Cut-Out Repairs</Link> &mdash; Repair and refinish tubs with existing walk-in modifications.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8 text-center">
            Frequently Asked Questions &mdash; Riverside County
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Does hard water damage reglazed tubs?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Hard water itself does not damage a properly applied reglazing finish. However, mineral deposits can build up on any surface over time, leaving a chalky residue. To keep your reglazed tub looking its best, we recommend wiping it down after each use and using a non-abrasive cleaner once a week. Our coatings create a non-porous barrier that resists mineral adhesion far better than an original porcelain surface, making routine cleaning easier.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you serve Temecula and Murrieta?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. JLS Reglazing serves all of southwestern Riverside County, including Temecula, Murrieta, Menifee, Lake Elsinore, and Wildomar. We schedule appointments throughout the week and can often accommodate same-week bookings for homeowners in the Temecula Valley. Call us at (310) 876-5600 or fill out our online form for a free estimate&mdash;there is no trip charge for on-site consultations anywhere in Riverside County.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Can you reglaze mobile home bathtubs?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. Mobile home and manufactured-housing bathtubs are typically made from thin fiberglass or acrylic, and they respond very well to professional reglazing. We use specialized bonding agents designed for lightweight substrates, ensuring the new finish adheres securely. Reglazing is especially cost-effective for mobile homes because replacement tubs in non-standard sizes can be expensive and difficult to source.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Cities We Serve in Riverside County
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
            Get a Free Quote in Riverside County
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
