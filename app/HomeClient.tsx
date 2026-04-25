'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import VideoShowcase from '@/components/organisms/VideoShowcase'
import WhatIsReglazingSection from '@/components/organisms/WhatIsReglazingSection'
import FAQSection from '@/components/organisms/FAQSection'
import ServiceAreaMapWrapper from '@/components/organisms/ServiceAreaMapWrapper'
import WaveDivider from '@/components/atoms/WaveDivider'
import TrustBadges from '@/components/atoms/TrustBadges'
import {
  SparklesIcon,
  HomeModernIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const services = [
  { title: 'Bathtub Refinishing and Reglazing', description: 'Expert bathtub refinishing for fiberglass, porcelain, cast iron, and ceramic tile surfaces. Transform worn tubs with professional reglazing - fraction of replacement cost.', Icon: SparklesIcon, image: '/images/1_after.jpg' },
  { title: 'Kitchen Countertop Refinishing and Reglazing', description: 'Kitchen countertop refinishing that restores tile and laminate surfaces. Professional kitchen reglazing delivers durable, heat-resistant finishes for rental units and homes.', Icon: HomeModernIcon, image: '/images/solo_4.jpg' },
  { title: 'Sink Refinishing and Reglazing', description: 'Professional sink refinishing for kitchen and bathroom. We reglaze porcelain and stainless steel sinks, removing rust and stains while restoring shine.', Icon: BeakerIcon, image: '/images/2_after.jpg' },
  { title: 'Bath Vanity Refinishing and Reglazing', description: 'Bathroom vanity refinishing and reglazing services. Restore bath vanity surfaces with professional refinishing techniques and durable coatings.', Icon: WrenchScrewdriverIcon, image: '/images/3_after.jpg' },
  { title: 'Crack & Chip Repair', description: 'Expert crack and chip repair for bathtubs and countertops. We fix structural damage, weak foundations, and surface imperfections before refinishing.', Icon: SparklesIcon, image: '/images/4_after.jpg' },
  { title: 'Bathtub Enclosure Refinishing and Reglazing', description: 'Complete bathtub enclosure refinishing including tile walls and tub surrounds. Ceramic tile reglazing with mold-resistant, waterproof finishes.', Icon: HomeModernIcon, image: '/images/5_after.jpg' },
]

export default function HomeClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-500 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Video hidden on mobile — autoPlay doesn't work on iOS anyway */}
          <video autoPlay muted loop playsInline preload="metadata" className="hidden md:block w-full h-full object-cover opacity-40">
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/70 to-brand-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <h1 className="hero-title text-white mb-6">Professional Bathtub & Kitchen Refinishing</h1>
              <p className="text-xl text-gray-100 mb-8 font-jost leading-relaxed">
                We work with multi-unit complexes and small home owners to reglaze tubs, bath vanities, kitchen countertops, kitchen sinks, and more. Our tub reglazing services span Los Angeles and San Bernardino counties.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience', img: 'painter_1.jpg' },
                  { stat: '4,000+', label: 'Units Serviced', img: '1_after.jpg' },
                  { stat: '2-Year', label: 'Guarantee', img: '2_after.jpg' },
                ].map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} className="relative rounded-xl overflow-hidden h-32 group cursor-pointer">
                    <img src={`/images/${item.img}`} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-brand-900/85 backdrop-blur-sm group-hover:bg-brand-900/75 transition-colors duration-300"></div>
                    <div className="relative h-full flex flex-col items-center justify-center text-white">
                      <div className="text-3xl md:text-4xl font-orbitron font-bold mb-1">{item.stat}</div>
                      <div className="text-xs md:text-sm font-jost opacity-90 px-2 text-center">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-orbitron font-bold text-charcoal mb-2">Get Your Free Reglazing Quote</h2>
                <p className="text-form-muted font-jost mb-6 text-sm">Fill out the form below and we&apos;ll contact you within 24 hours with a personalized quote.</p>
                <QuickQuoteForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges — right below hero for maximum visibility */}
      <TrustBadges />

      <WhatIsReglazingSection />

      {/* AEO: Answer-First Cost Section — targets "bathtub reglazing cost" (1,900 vol, AI Overview) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-charcoal mb-6">How Much Does Bathtub Reglazing Cost in 2026?</h2>
          <p className="text-lg text-gray-700 font-jost leading-relaxed mb-6">
            Bathtub reglazing costs between $300 and $600 for most residential projects in Southern California. This is up to 90% less than full bathtub replacement, which typically runs $1,500 to $5,000 or more when you factor in plumbing, demolition, and installation.
          </p>
          <div className="bg-surface-alt rounded-xl p-6 mb-6">
            <h3 className="text-xl font-orbitron font-semibold text-charcoal mb-4">Reglazing vs. Replacement Cost Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-jost">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 pr-4 font-semibold text-charcoal">Service</th>
                    <th className="py-3 pr-4 font-semibold text-charcoal">Reglazing Cost</th>
                    <th className="py-3 pr-4 font-semibold text-charcoal">Replacement Cost</th>
                    <th className="py-3 font-semibold text-charcoal">You Save</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200"><td className="py-3 pr-4">Standard Bathtub</td><td className="py-3 pr-4">$300–$450</td><td className="py-3 pr-4">$1,500–$3,500</td><td className="py-3 text-green-700 font-semibold">Up to 87%</td></tr>
                  <tr className="border-b border-gray-200"><td className="py-3 pr-4">Kitchen Countertop</td><td className="py-3 pr-4">$350–$550</td><td className="py-3 pr-4">$2,000–$5,000+</td><td className="py-3 text-green-700 font-semibold">Up to 89%</td></tr>
                  <tr className="border-b border-gray-200"><td className="py-3 pr-4">Sink (Kitchen or Bath)</td><td className="py-3 pr-4">$250–$400</td><td className="py-3 pr-4">$800–$2,000</td><td className="py-3 text-green-700 font-semibold">Up to 80%</td></tr>
                  <tr><td className="py-3 pr-4">Bathtub + Enclosure</td><td className="py-3 pr-4">$450–$600</td><td className="py-3 pr-4">$3,000–$6,000+</td><td className="py-3 text-green-700 font-semibold">Up to 90%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-base text-gray-600 font-jost leading-relaxed mb-4">
            Final pricing depends on three factors: the current condition of the surface, whether structural repairs (cracks, chips, or cut-outs) are needed, and the size of the project. Multi-unit properties with 5 or more units receive volume discounts.
          </p>
          <p className="text-base text-gray-600 font-jost leading-relaxed">
            Based on 4,000+ units we have refinished over 20 years of operation, the average homeowner saves $1,200 to $3,000 by choosing reglazing over replacement. Most projects are completed in a single day with a 48–72 hour cure time.
          </p>
        </div>
      </section>

      {/* AEO: Subquery Fan-Out Section — answers the sub-questions AI breaks queries into */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-charcoal mb-10">Common Bathtub Reglazing Questions</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">Is bathtub reglazing worth it?</h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. Bathtub reglazing is worth it for most homeowners and property managers because it restores a worn surface to like-new condition at 10–20% of replacement cost. The process takes one day instead of 3–5 days for replacement, and there is no plumbing, demolition, or tile work required. Based on our experience refinishing 4,000+ units, reglazing is the best option when the tub is structurally sound but cosmetically damaged.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">Can you reglaze a fiberglass bathtub?</h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Yes. Fiberglass is one of the most commonly reglazed bathtub materials. The process involves sanding the existing surface, repairing any cracks or chips, acid etching for adhesion, and applying a multi-layer professional coating. The result is a glossy, durable finish that lasts 10–15 years. We also reglaze acrylic, porcelain, cast iron, and ceramic tile tubs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">How long does it take for a reglazed bathtub to cure?</h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                A reglazed bathtub takes 48 to 72 hours to fully cure. During this time, avoid running water in the tub, placing objects on the surface, or using the bathroom fan (which can pull dust onto the wet finish). After curing, the surface is ready for normal daily use. The on-site refinishing work itself takes 3 to 5 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">What is the best bathtub reglazing company near me in Southern California?</h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                JLS Reglazing is a top-rated bathtub reglazing company serving San Bernardino, Riverside, and Los Angeles counties. With 20+ years of experience, 4,000+ units refinished, and a 2-year warranty on all work, we are one of the most experienced reglazing specialists in the region. We offer free on-site quotes and same-day scheduling for most projects. Call (310) 876-5600 for English or (909) 501-2797 for Spanish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-charcoal mb-4">Refinishing Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Below you will find a list of surfaces we refinish / reglaze within the Los Angeles, San Bernardino, and surrounding areas. Text or call for more information or custom refinishing services like Jacuzzis, Pools, Fridges, etc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-roboto font-semibold text-charcoal mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-roboto">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              View All Services
            </Link>
          </div>
        </div>
        <WaveDivider variant="2" position="bottom" />
      </section>

      <VideoShowcase />

      {/* Stats Section */}
      <section className="py-20 bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '20+', label: 'Years Experience' },
              { stat: '4,000+', label: 'Units Serviced' },
              { stat: '24-Hour', label: 'Turnaround' },
              { stat: '2-Year', label: 'Warranty' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-5xl font-orbitron font-bold text-cta mb-2">{item.stat}</div>
                <p className="text-xl font-jost">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-brand-500 mb-4">Refinishing Service Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">Proudly serving Southern California with professional refinishing and reglazing services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'San Bernardino County', path: '/san-bernardino-reglazing' },
              { name: 'Riverside County', path: '/riverside-reglazing' },
              { name: 'Hemet', path: '/hemet-reglazing' },
              { name: 'Los Angeles County', path: '/los-angeles-reglazing' },
              { name: 'Victorville', path: '/victorville-reglazing' },
            ].map((area) => (
              <Link key={area.path} href={area.path} className="bg-brand-500 hover:bg-brand-600 text-white rounded-lg p-6 text-center font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                {area.name}
              </Link>
            ))}
          </div>
          <ServiceAreaMapWrapper />
        </div>
        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* AEO: Full FAQ section — self-contained chunks, visible answers, H3 headings */}
      <FAQSection />

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-surface scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-4">Get Your Free Reglazing Quote Today</h2>
          <p className="text-center text-gray-600 mb-8">Fill out the form below and we&apos;ll contact you within 24 hours</p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Refinish your Tub or Kitchen Surface Today</h2>
          <p className="text-xl mb-8">Get a professional reglazing quote today. Save up to 90% compared to replacement costs.</p>
          <Link href="/contact" className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
