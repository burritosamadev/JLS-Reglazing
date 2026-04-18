import type { Metadata } from 'next'
import Link from 'next/link'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import { generateContactPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact JLS Reglazing - Free Bathtub & Kitchen Refinishing Quote',
  description:
    'Contact JLS Reglazing for a free bathtub and kitchen refinishing quote. Call (310) 876-5600 (EN) or (909) 501-2797 (ES). Serving San Bernardino, Riverside, Los Angeles counties.',
  alternates: { canonical: 'https://jlsreglazing.com/contact' },
  keywords:
    'contact JLS Reglazing, free reglazing quote, bathtub refinishing quote, Southern California reglazing contact',
  openGraph: {
    type: 'website',
    title: 'Contact JLS Reglazing - Free Bathtub & Kitchen Refinishing Quote',
    description:
      'Contact JLS Reglazing for a free bathtub and kitchen refinishing quote. Call (310) 876-5600 (EN) or (909) 501-2797 (ES). Serving San Bernardino, Riverside, Los Angeles counties.',
    url: 'https://jlsreglazing.com/contact',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact JLS Reglazing - Free Bathtub & Kitchen Refinishing Quote',
    description:
      'Contact JLS Reglazing for a free bathtub and kitchen refinishing quote. Call (310) 876-5600 (EN) or (909) 501-2797 (ES). Serving San Bernardino, Riverside, Los Angeles counties.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateContactPageSchema()) }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />

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

      {/* Click-to-call CTA strip */}
      <section className="bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a href="tel:+13108765600" className="flex items-center gap-2 text-[#2D3748] hover:text-[#F26522] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="font-jost"><strong className="font-semibold">English:</strong> (310) 876-5600</span>
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="tel:+19095012797" className="flex items-center gap-2 text-[#2D3748] hover:text-[#F26522] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="font-jost"><strong className="font-semibold">Español:</strong> (909) 501-2797</span>
          </a>
        </div>
      </section>

      {/* Why Contact JLS — answer-first + trust signals */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            Why Contact JLS Reglazing?
          </h2>
          <p className="font-jost text-lg text-gray-700 leading-relaxed mb-8">
            When you contact JLS Reglazing, you reach a family-owned reglazing company with over 20 years of hands-on experience and 4,000+ completed projects across Southern California. Every quote is free, every estimate is honest, and every project is backed by our 2-year warranty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-[#F3F4F6] rounded-xl p-6">
              <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-2">Free On-Site Quotes</h3>
              <p className="font-jost text-gray-700 leading-relaxed">No obligation, no pressure. We inspect your tub, sink, or countertop in person and give you an exact price — not a vague estimate.</p>
            </article>
            <article className="bg-[#F3F4F6] rounded-xl p-6">
              <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-2">Bilingual Service</h3>
              <p className="font-jost text-gray-700 leading-relaxed">We serve homeowners and property managers in both English and Spanish. Text photos of your project to either number for a faster quote.</p>
            </article>
            <article className="bg-[#F3F4F6] rounded-xl p-6">
              <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-2">24-Hour Turnaround</h3>
              <p className="font-jost text-gray-700 leading-relaxed">Most reglazing projects are completed in a single day with a 48–72 hour cure. Ideal for rental turnarounds and property managers.</p>
            </article>
          </div>
        </div>
      </section>

      {/* What Happens After You Submit — sets expectations */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-8">
            What Happens After You Submit?
          </h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F26522] text-white font-orbitron font-bold flex items-center justify-center">1</span>
              <div>
                <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-1">We respond within 24 hours</h3>
                <p className="font-jost text-gray-700 leading-relaxed">A real person from our team (not a chatbot) will contact you by phone or email to discuss your project.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F26522] text-white font-orbitron font-bold flex items-center justify-center">2</span>
              <div>
                <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-1">We schedule a free on-site quote</h3>
                <p className="font-jost text-gray-700 leading-relaxed">We come to you, inspect the surface, discuss color and finish options, and give you an exact price — no obligation.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F26522] text-white font-orbitron font-bold flex items-center justify-center">3</span>
              <div>
                <h3 className="font-orbitron text-lg font-semibold text-[#2D3748] mb-1">You decide when to book</h3>
                <p className="font-jost text-gray-700 leading-relaxed">If you move forward, we schedule the project at your convenience. Most jobs are completed in a single day. Your information is never shared with third parties.</p>
              </div>
            </li>
          </ol>
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
                    href="tel:+13108765600"
                    className="font-jost text-[#1B4D7A] font-semibold hover:underline"
                  >
                    (310) 876-5600
                  </Link>
                </div>

                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Phone (Spanish)</p>
                  <Link
                    href="tel:+19095012797"
                    className="font-jost text-[#1B4D7A] font-semibold hover:underline"
                  >
                    (909) 501-2797
                  </Link>
                </div>

                <div className="bg-[#F3F4F6] rounded-lg p-4">
                  <p className="font-jost text-sm text-[#2D3748]/60 mb-1">Hours</p>
                  <p className="font-jost text-[#2D3748] font-semibold">
                    Mon – Sat: 7:00 AM – 6:00 PM
                  </p>
                  <p className="font-jost text-sm text-[#2D3748]/70 mt-1">We respond within 24 hours</p>
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
