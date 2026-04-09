import type { Metadata } from 'next'
import Link from 'next/link'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Reglazing Quote',
  description:
    'Contact JLS Reglazing for a free bathtub and kitchen refinishing quote. Call (310) 742-0057 (EN) or (424) 381-5170 (ES). Serving San Bernardino, Riverside, Los Angeles counties.',
  alternates: { canonical: 'https://jlsreglazing.com/contact' },
  keywords:
    'contact JLS Reglazing, free reglazing quote, bathtub refinishing quote, Southern California reglazing contact',
  openGraph: {
    title: 'Contact Us - Get a Free Quote | JLS Reglazing',
    description:
      'Get a free bathtub and kitchen refinishing quote from JLS Reglazing. Bilingual service available.',
    url: 'https://jlsreglazing.com/contact',
  },
}

const serviceAreas = [
  { name: 'San Bernardino County', href: '/san-bernardino-reglazing' },
  { name: 'Riverside County', href: '/riverside-reglazing' },
  { name: 'Los Angeles County', href: '/los-angeles-reglazing' },
  { name: 'Hemet & San Jacinto Valley', href: '/hemet-reglazing' },
  { name: 'Victorville & High Desert', href: '/victorville-reglazing' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Get a free quote or ask us anything. We offer bilingual service in English and Spanish.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-orbitron text-xl font-bold text-[#2D3748] mb-4">
                Get in Touch
              </h2>

              <div className="space-y-4">
                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Email</p>
                  <Link
                    href="mailto:jorge@jlsreglazing.com"
                    className="font-jost text-[#1B4D7A] font-semibold hover:underline"
                  >
                    jorge@jlsreglazing.com
                  </Link>
                </div>

                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Phone (English)</p>
                  <Link
                    href="tel:+13107420057"
                    className="font-jost text-[#1B4D7A] font-semibold hover:underline"
                  >
                    (310) 742-0057
                  </Link>
                </div>

                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Phone (Spanish)</p>
                  <Link
                    href="tel:+14243815170"
                    className="font-jost text-[#1B4D7A] font-semibold hover:underline"
                  >
                    (424) 381-5170
                  </Link>
                </div>

                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Hours</p>
                  <p className="font-jost text-[#2D3748] font-semibold">
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-orbitron text-lg font-bold text-[#2D3748] mb-3">
                Service Areas
              </h3>
              <ul className="space-y-2">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="font-jost text-[#1B4D7A] hover:underline"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-3">
            <h2 className="font-orbitron text-xl font-bold text-[#2D3748] mb-4">
              Request a Free Quote
            </h2>
            <QuickQuoteForm />
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
    </>
  )
}
