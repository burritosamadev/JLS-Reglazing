import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import { generateOrganizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About JLS Reglazing - 20+ Years of Professional Refinishing',
  description:
    'Learn about JLS Reglazing, a Hispanic-owned family business with 20+ years of bathtub and kitchen refinishing experience. 4,000+ units serviced. Licensed, insured, 2-year warranty.',
  alternates: { canonical: 'https://jlsreglazing.com/about' },
  keywords:
    'about JLS Reglazing, Jorge Saldana, bathtub reglazing expert, Hispanic-owned business, Southern California refinishing',
  openGraph: {
    type: 'website',
    title: 'About JLS Reglazing - 20+ Years of Professional Refinishing',
    description:
      'Learn about JLS Reglazing, a Hispanic-owned family business with 20+ years of bathtub and kitchen refinishing experience. 4,000+ units serviced. Licensed, insured, 2-year warranty.',
    url: 'https://jlsreglazing.com/about',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JLS Reglazing - 20+ Years of Professional Refinishing',
    description:
      'Learn about JLS Reglazing, a Hispanic-owned family business with 20+ years of bathtub and kitchen refinishing experience. 4,000+ units serviced. Licensed, insured, 2-year warranty.',
  },
}

const credentials = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#1B4D7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection and peace of mind.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#1B4D7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: '2-Year Warranty',
    description: 'Every project backed by a comprehensive 2-year warranty.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#1B4D7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: '4,000+ Units Serviced',
    description: 'Trusted by property managers, contractors, and homeowners across Southern California.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#1B4D7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: '20+ Years Experience',
    description: 'Two decades of mastering bathtub and kitchen refinishing techniques.',
  },
]

const whyChooseUs = [
  'Save up to 90% compared to full replacement',
  'Same-day turnaround for most projects',
  'Bilingual service -- English & Spanish',
  'Specialists in multi-unit property turnarounds',
  'Professional-grade materials and proven techniques',
  'Free consultations and honest quotes',
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            About JLS Reglazing
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Hispanic-owned &amp; operated family business proudly serving Southern California
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
              Meet Jorge Saldana, Master Craftsman
            </h2>
            <p className="font-jost text-lg text-[#2D3748]/80 leading-relaxed">
              With over 20 years of hands-on experience, Jorge Saldana has refined the art and
              science of bathtub and kitchen reglazing. What started as a passion for restoring
              surfaces has grown into one of Southern California&apos;s most trusted refinishing
              businesses.
            </p>
          </div>
          <div className="bg-[#F3F4F6] rounded-2xl p-8 md:p-12">
            <h3 className="font-orbitron text-xl font-bold text-[#1B4D7A] mb-4">
              A Family Business Built on Trust
            </h3>
            <p className="font-jost text-[#2D3748]/80 leading-relaxed mb-4">
              JLS Reglazing is a proudly Hispanic-owned and operated family business. We treat
              every project -- whether a single bathtub or a 100-unit apartment complex -- with the
              same care and professionalism. Our reputation is built on quality craftsmanship,
              transparent pricing, and reliable service.
            </p>
            <p className="font-jost text-[#2D3748]/80 leading-relaxed">
              Having serviced over 4,000 units across{' '}
              <Link href="/san-bernardino-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">San Bernardino County</Link>,{' '}
              <Link href="/riverside-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Riverside County</Link>,{' '}
              <Link href="/los-angeles-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Los Angeles County</Link>, and the{' '}
              <Link href="/victorville-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">High Desert</Link>, we understand the unique needs of property managers, contractors, and homeowners. Every project is backed by our comprehensive 2-year warranty because we stand behind our work.
            </p>
            <p className="font-jost text-[#2D3748]/80 leading-relaxed mt-4">
              Our full range of services includes{' '}
              <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">bathtub refinishing</Link>,{' '}
              <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">kitchen countertop reglazing</Link>,{' '}
              <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">sink refinishing</Link>, and{' '}
              <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">accessibility cut-outs</Link>. See our{' '}
              <Link href="/process" className="text-[#1B4D7A] font-semibold hover:underline">7-step reglazing process</Link> to learn how we deliver factory-quality results in a single day.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-12">
            Our Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="flex justify-center mb-4">{cred.icon}</div>
                <h3 className="font-orbitron text-lg font-bold text-[#2D3748] mb-2">
                  {cred.title}
                </h3>
                <p className="font-jost text-sm text-[#2D3748]/70">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-8">
            Why Choose JLS Reglazing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 bg-[#F3F4F6] rounded-lg p-4"
              >
                <svg
                  className="w-6 h-6 text-[#1B4D7A] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="font-jost text-[#2D3748]">{reason}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#F26522] hover:bg-[#d9551b] text-white font-jost font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
