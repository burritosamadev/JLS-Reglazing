import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

const cities = [
  'Hemet', 'San Jacinto', 'Idyllwild', 'Valle Vista',
  'East Hemet', 'Anza', 'Mountain Center', 'Garner Valley',
]

export const metadata: Metadata = {
  title: 'Bathtub & Kitchen Reglazing in Hemet & San Jacinto Valley',
  description:
    'Professional bathtub and kitchen reglazing in Hemet, San Jacinto, Idyllwild, Valle Vista & surrounding areas. 20+ years experience, 2-year warranty. Save 90% vs replacement.',
  alternates: { canonical: 'https://jlsreglazing.com/hemet-reglazing' },
  keywords:
    'bathtub reglazing Hemet, kitchen refinishing San Jacinto, tub reglazing Idyllwild, bathtub refinishing Valle Vista, reglazing East Hemet, Hemet reglazing, San Jacinto Valley refinishing',
  openGraph: {
    title: 'Bathtub & Kitchen Reglazing in Hemet & San Jacinto Valley | JLS Reglazing',
    description:
      'Professional bathtub and kitchen reglazing in Hemet and the San Jacinto Valley. 20+ years experience, 4,000+ units serviced.',
    url: 'https://jlsreglazing.com/hemet-reglazing',
  },
}

export default function HemetReglazingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountySchema('Hemet', cities)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Hemet Reglazing', href: '/hemet-reglazing' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Bathtub &amp; Kitchen Reglazing in Hemet &amp; San Jacinto Valley
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Trusted refinishing services for homeowners and property managers in the Hemet and
            San Jacinto Valley area. Save up to 90% compared to full replacement.
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
            How Much Does Bathtub Reglazing Cost in Hemet?
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed text-lg">
            Bathtub reglazing in the Hemet and San Jacinto Valley area ranges from <strong>$300 to $600</strong>, depending on the fixture material and condition. For the many manufactured and mobile homes in the valley, reglazing is often the only practical option&mdash;replacement tubs in non-standard dimensions can be difficult to find and expensive to install. The entire process wraps up in a single visit, with your tub ready to use again in just 24 hours.
          </p>
        </div>
      </section>

      {/* Why Choose JLS */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Choose JLS Reglazing in the Hemet Area
          </h2>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            The San Jacinto Valley is home to a large retirement community, with many residents living in mobile homes, manufactured housing, and 55-plus communities. Bathroom accessibility is a top priority for this population, and JLS Reglazing addresses that need directly. In addition to standard reglazing, we offer tub cut-out modifications that convert a traditional bathtub into a step-in shower, reducing the risk of slips and falls for seniors and anyone with limited mobility.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed mb-4">
            Hemet and San Jacinto also have a growing number of single-family homes built from the 1970s through the early 2000s. The original fixtures in these properties&mdash;often builder-grade fiberglass or acrylic&mdash;are well past their prime. Rather than gutting a bathroom for a costly renovation, reglazing renews the surface for a fraction of the price and with far less disruption to daily life.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            JLS Reglazing brings over 20 years of specialized experience to every home in the valley. We carry full licensing and insurance, and every project is protected by our 2-year warranty&mdash;giving you confidence that the work is done right the first time.
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Reglazing Services Available in the Hemet Area
          </h2>
          <ul className="space-y-4 font-jost text-gray-700">
            <li>
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Bathtub Refinishing</Link> &mdash; Bring worn-out mobile home and standard bathtubs back to a glossy, sanitary finish.
            </li>
            <li>
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Kitchen Refinishing</Link> &mdash; Refinish kitchen countertops and surfaces without a full remodel.
            </li>
            <li>
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Sink Refinishing</Link> &mdash; Restore bathroom and kitchen sinks that are stained, chipped, or discolored.
            </li>
            <li>
              <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">Vanity Refinishing</Link> &mdash; Upgrade vanity tops to match a refreshed bathroom at a fraction of replacement cost.
            </li>
            <li>
              <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">Crack Repair</Link> &mdash; Repair cracks in fiberglass and acrylic tubs before they worsen.
            </li>
            <li>
              <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">Enclosure Refinishing</Link> &mdash; Reglaze shower surrounds and tub enclosures for a cohesive look.
            </li>
            <li>
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">Cut-Out Repairs</Link> &mdash; Repair or refinish tubs with walk-in cut-outs for improved senior accessibility.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8 text-center">
            Frequently Asked Questions &mdash; Hemet Area
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Can you reglaze a mobile home bathtub?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes, and mobile home tubs are one of our specialties in the Hemet area. Manufactured-housing bathtubs are typically thinner fiberglass or ABS plastic, and they require a bonding process different from what you would use on a cast-iron or steel tub. JLS Reglazing uses adhesion promoters specifically formulated for lightweight substrates, ensuring a durable, long-lasting finish. Because replacement tubs for mobile homes are often custom-order items, reglazing is frequently the fastest and most affordable solution.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                Do you do tub cut-outs for senior accessibility?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                We offer cut-out repair and refinishing services for tubs that have already been modified with a walk-in opening. If you need a new cut-out installed, we can coordinate with a qualified plumber or contractor to handle the modification, then follow up with professional reglazing to create a seamless, watertight finish. This is a popular option among Hemet-area seniors who want safer bathroom access without the expense of a full walk-in shower conversion.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">
                How long does a reglazed tub last in Hemet&apos;s climate?
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                With proper care, a professionally reglazed bathtub in the San Jacinto Valley typically lasts 10 to 15 years. Hemet&apos;s warm, dry climate is actually favorable for cured coatings&mdash;humidity-related issues like peeling are less common here than in coastal areas. We recommend using non-abrasive cleaners and avoiding suction-cup bath mats, which can lift the finish over time. Every JLS Reglazing project includes a 2-year warranty for your peace of mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Areas We Serve Near Hemet
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
            Get a Free Quote in the Hemet Area
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
