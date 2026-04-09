import type { Metadata } from 'next'
import Link from 'next/link'
import { generateCountySchema } from '@/lib/seo'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'

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
          __html: JSON.stringify(generateCountySchema('Los Angeles County')),
        }}
      />

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
            <Link href="tel:+13107420057" className="text-[#1B4D7A] font-semibold hover:underline">
              (310) 742-0057
            </Link>
          </p>
          <QuickQuoteForm />
        </div>
      </section>
    </>
  )
}
