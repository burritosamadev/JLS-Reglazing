import type { Metadata } from 'next'
import Link from 'next/link'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'

export const metadata: Metadata = {
  title: 'Our Refinishing & Reglazing Services | JLS Reglazing',
  description:
    'Professional bathtub, sink, kitchen countertop, and tile refinishing services in Southern California. Save up to 90% compared to replacement. Free quotes available.',
  alternates: { canonical: 'https://jlsreglazing.com/services' },
  keywords:
    'reglazing services, refinishing services, bathtub reglazing, sink refinishing, kitchen countertop refinishing, tile reglazing, crack repair, Southern California',
}

const services = [
  {
    name: 'Bathtub Refinishing & Reglazing',
    path: '/services/bathtub-refinishing',
    description:
      'Restore your worn, stained, or dated bathtub to a like-new finish at a fraction of the cost of replacement.',
    image: '/images/1_after.webp',
  },
  {
    name: 'Kitchen Countertop Refinishing',
    path: '/services/kitchen-refinishing',
    description:
      'Transform your kitchen countertops with a durable, factory-smooth finish that looks brand new.',
    image: '/images/solo_4_after.webp',
  },
  {
    name: 'Sink Refinishing',
    path: '/services/sink-refinishing',
    description:
      'Bring your bathroom or kitchen sink back to life with professional refinishing that eliminates stains and chips.',
    image: '/images/2_after.webp',
  },
  {
    name: 'Bath Vanity Refinishing',
    path: '/services/bath-vanity-refinishing',
    description:
      'Refinish your bath vanity top and basin for a cohesive, refreshed bathroom look without a full remodel.',
    image: '/images/3_after.webp',
  },
  {
    name: 'Crack & Chip Repair',
    path: '/services/crack-repair',
    description:
      'Expert repair of cracks, chips, and surface damage on bathtubs, sinks, and countertops.',
    image: '/images/4_after.webp',
  },
  {
    name: 'Bathtub Enclosure Refinishing',
    path: '/services/bathtub-enclosure',
    description:
      'Refinish your tub surround and tile enclosure for a seamless, updated bathroom appearance.',
    image: '/images/5_after.webp',
  },
  {
    name: 'Tub Cut-Out & Foundation Repairs',
    path: '/services/cut-out-repairs',
    description:
      'Specialized tub cut-out conversions and structural foundation repairs for safety and accessibility.',
    image: '/images/6_after.webp',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'JLS Reglazing Services',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.name,
    url: `https://jlsreglazing.com${service.path}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FAFAFA]">
        {/* Hero */}
        <section className="bg-[#1B4D7A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 font-jost max-w-3xl mx-auto leading-relaxed">
              Professional refinishing and reglazing services that save you up to 90%
              compared to full replacement. Serving Southern California with quality
              craftsmanship.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-orbitron font-bold text-[#2D3748] mb-3 group-hover:text-[#1B4D7A] transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 font-jost leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-[#F26522] font-jost font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1B4D7A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl font-jost mb-8 text-gray-200">
              Contact us for a free consultation and we will recommend the best solution
              for your project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#F26522] hover:bg-[#d9551a] text-white px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>

      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-bold text-center text-[#2D3748] mb-4">Get Your Free Reglazing Quote</h2>
          <p className="text-center text-gray-600 font-jost mb-8">Tell us about your project and we will get back to you within 24 hours.</p>
          <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-lg">
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
