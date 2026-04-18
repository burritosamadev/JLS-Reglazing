import type { Metadata } from 'next'
import Link from 'next/link'
import { generateHowToSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Our 7-Step Bathtub Reglazing Process',
  description:
    'Learn about the professional 7-step bathtub and kitchen reglazing process used by JLS Reglazing. From consultation to final cure, every step ensures a factory-quality finish.',
  alternates: { canonical: 'https://jlsreglazing.com/process' },
  keywords:
    'bathtub reglazing process, refinishing steps, how reglazing works, bathtub restoration process, professional refinishing technique',
  openGraph: {
    type: 'website',
    title: 'Our 7-Step Bathtub Reglazing Process',
    description:
      'Learn about the professional 7-step bathtub and kitchen reglazing process used by JLS Reglazing. From consultation to final cure, every step ensures a factory-quality finish.',
    url: 'https://jlsreglazing.com/process',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our 7-Step Bathtub Reglazing Process',
    description:
      'Learn about the professional 7-step bathtub and kitchen reglazing process used by JLS Reglazing. From consultation to final cure, every step ensures a factory-quality finish.',
  },
}

const steps = [
  {
    number: 1,
    title: 'Free Consultation & Quote',
    description:
      'We start with a thorough assessment of your bathtub, sink, or kitchen surfaces. We evaluate the condition, discuss your goals, and provide an honest, transparent quote -- no hidden fees.',
  },
  {
    number: 2,
    title: 'Surface Preparation',
    description:
      'Multi-layer sanding removes old paint, calcium deposits, and surface contaminants. This critical step creates the ideal surface profile for maximum adhesion of the new coating.',
  },
  {
    number: 3,
    title: 'Repair & Restoration',
    description:
      'All cracks, chips, and structural damage are professionally repaired using high-grade materials. This includes tub cut-out repairs and foundation work for damaged structures.',
  },
  {
    number: 4,
    title: 'Chemical Bonding',
    description:
      'Professional acid etching and deep cleaning ensure the surface is perfectly prepared. This chemical bonding step is what separates professional reglazing from DIY attempts.',
  },
  {
    number: 5,
    title: 'Professional Coating Application',
    description:
      'Multiple coats of professional-grade, heat-resistant refinishing material are applied using specialized equipment. Each coat is carefully inspected before the next is applied.',
  },
  {
    number: 6,
    title: 'Quality Inspection',
    description:
      'Every surface is meticulously inspected for coverage, smoothness, and finish quality. We ensure the result meets our exacting standards before proceeding to the final step.',
  },
  {
    number: 7,
    title: 'Final Cure & Handoff',
    description:
      'The new finish needs 48-72 hours to fully cure. We walk you through care instructions to maximize the life of your refinished surface, backed by our comprehensive 2-year warranty.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema()),
        }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Our Process', href: '/process' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Our 7-Step Reglazing Process
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every project follows our proven professional process -- from consultation to a
            factory-quality finish you can count on.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1B4D7A] text-white font-orbitron font-bold text-xl flex items-center justify-center">
                  {step.number}
                </div>
                <div className="flex-1 pb-8 border-b border-[#F3F4F6] last:border-0">
                  <h2 className="font-orbitron text-xl md:text-2xl font-bold text-[#2D3748] mb-2">
                    {step.title}
                  </h2>
                  <p className="font-jost text-[#2D3748]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This process applies to — internal links to services */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            This Process Applies to Every Service We Offer
          </h2>
          <p className="font-jost text-lg text-gray-700 leading-relaxed mb-8">
            Whether you need{' '}
            <Link href="/services/bathtub-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">bathtub refinishing</Link>,{' '}
            <Link href="/services/kitchen-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">kitchen countertop reglazing</Link>,{' '}
            <Link href="/services/sink-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">sink refinishing</Link>,{' '}
            <Link href="/services/bath-vanity-refinishing" className="text-[#1B4D7A] font-semibold hover:underline">bath vanity reglazing</Link>,{' '}
            <Link href="/services/crack-repair" className="text-[#1B4D7A] font-semibold hover:underline">crack and chip repair</Link>,{' '}
            <Link href="/services/bathtub-enclosure" className="text-[#1B4D7A] font-semibold hover:underline">tub enclosure refinishing</Link>, or{' '}
            <Link href="/services/cut-out-repairs" className="text-[#1B4D7A] font-semibold hover:underline">accessibility cut-out repairs</Link>, we follow the same rigorous 7-step process. This is why every surface we refinish lasts 10–15 years with proper care.
          </p>
          <p className="font-jost text-gray-700 leading-relaxed">
            We serve{' '}
            <Link href="/san-bernardino-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">San Bernardino</Link>,{' '}
            <Link href="/riverside-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Riverside</Link>,{' '}
            <Link href="/los-angeles-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Los Angeles</Link>,{' '}
            <Link href="/hemet-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Hemet</Link>, and{' '}
            <Link href="/victorville-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Victorville</Link>{' '}
            with the same professional standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-jost text-[#2D3748]/70 mb-8">
            Contact us today for a free consultation and quote. Most projects are completed
            within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F26522] hover:bg-[#d9551b] text-white font-jost font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
