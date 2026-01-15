import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import QuickQuoteForm from '../components/organisms/QuickQuoteForm'
import VideoShowcase from '../components/organisms/VideoShowcase'
import WhatIsReglazingSection from '../components/organisms/WhatIsReglazingSection'
import ServiceAreaMap from '../components/organisms/ServiceAreaMap'
import WaveDivider from '../components/atoms/WaveDivider'
import SEO from '../components/molecules/SEO'
import StructuredData from '../components/molecules/StructuredData'
import { generateLocalBusinessSchema, generateServiceSchema } from '../lib/seo'
import {
  SparklesIcon,
  HomeModernIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  const services = [
    {
      title: 'Bathtub Refinishing and Reglazing',
      description: 'Expert bathtub refinishing for fiberglass, porcelain, cast iron, and ceramic tile surfaces. Transform worn tubs with professional reglazing - fraction of replacement cost.',
      Icon: SparklesIcon,
      image: '/images/1_after.jpg',
    },
    {
      title: 'Kitchen Countertop Refinishing and Reglazing',
      description: 'Kitchen countertop refinishing that restores tile and laminate surfaces. Professional kitchen reglazing delivers durable, heat-resistant finishes for rental units and homes.',
      Icon: HomeModernIcon,
      image: '/images/solo_4.jpg',
    },
    {
      title: 'Sink Refinishing and Reglazing',
      description: 'Professional sink refinishing for kitchen and bathroom. We reglaze porcelain and stainless steel sinks, removing rust and stains while restoring shine.',
      Icon: BeakerIcon,
      image: '/images/2_after.jpg',
    },
    {
      title: 'Bath Vanity Refinishing and Reglazing',
      description: 'Bathroom vanity refinishing and reglazing services. Restore bath vanity surfaces with professional refinishing techniques and durable coatings.',
      Icon: WrenchScrewdriverIcon,
      image: '/images/3_after.jpg',
    },
    {
      title: 'Crack & Chip Repair',
      description: 'Expert crack and chip repair for bathtubs and countertops. We fix structural damage, weak foundations, and surface imperfections before refinishing.',
      Icon: SparklesIcon,
      image: '/images/4_after.jpg',
    },
    {
      title: 'Bathtub Enclosure Refinishing and Reglazing',
      description: 'Complete bathtub enclosure refinishing including tile walls and tub surrounds. Ceramic tile reglazing with mold-resistant, waterproof finishes.',
      Icon: HomeModernIcon,
      image: '/images/5_after.jpg',
    },
  ]

  return (
    <div>
      <SEO
        title="Professional Bathtub & Kitchen Refinishing | JLS Reglazing"
        description="Bathtub and kitchen refinishing services with quick same day unit turnaround. Chips, cracks, cut-out, and foundation repairs."
        canonical="https://jlsreglazing.com/"
        keywords="bathtub reglazing, bathtub refinishing, kitchen reglazing, kitchen refinishing, San Bernardino, Riverside, Los Angeles, tile refinishing, porcelain refinishing, tile reglazing, porcelain reglazing, bath cut-out repair, bathtub repair, refinish kitchen countertops, tub reglazing, reglaze bathtub"
      />
      <StructuredData data={generateLocalBusinessSchema()} />
      <StructuredData data={generateServiceSchema()} />

      {/* Hero Section */}
      <section className="relative bg-[#232423] text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#232423]/60 to-[#221F1C]/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Messaging */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            >
              <h1 className="hero-title text-white mb-6">
                Professional Bathtub & Kitchen Refinishing
              </h1>
              <p className="text-xl text-gray-100 mb-8 font-jost leading-relaxed">
                We work with multi-unit complexes and small home owners to reglaze tubs, bath vanities, kitchen countertops, kitchen sinks, and more. Our tub reglazing services span Los Angeles and San Bernardino counties.
              </p>

              {/* Photo-Backed Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience', img: 'painter_1.jpg' },
                  { stat: '4,000+', label: 'Units Serviced', img: '1_after.jpg' },
                  { stat: '2-Year', label: 'Guarantee', img: '2_after.jpg' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative rounded-xl overflow-hidden h-32 group cursor-pointer"
                  >
                    {/* Background Image */}
                    <img
                      src={`/images/${item.img}`}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#232423]/85 backdrop-blur-sm group-hover:bg-[#232423]/75 transition-colors duration-300"></div>
                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-white">
                      <div className="text-3xl md:text-4xl font-orbitron font-bold mb-1">
                        {item.stat}
                      </div>
                      <div className="text-xs md:text-sm font-jost opacity-90 px-2 text-center">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Quick Quote Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-[#FAF8F3] rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-orbitron font-bold text-[#232423] mb-2">
                  Get Your Free Reglazing Quote
                </h2>
                <p className="text-[#7A7269] font-jost mb-6 text-sm">
                  Fill out the form below and we'll contact you within 24 hours with a personalized quote.
                </p>
                <QuickQuoteForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Reglazing Section */}
      <WhatIsReglazingSection />

      {/* Services Preview */}
      <section className="relative py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-[#232423] mb-4">Refinishing Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Below you will find a list of surfaces we refinish / reglaze within the Los Angeles, San Bernardino, and surrounding areas. Text or call for more information or custom refinishing services like Jacuzzis, Pools, Fridges, etc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Background image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-roboto font-semibold text-neutral-600 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 font-roboto">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider variant="2" position="bottom" />
      </section>

      {/* Video Showcase - TikTok Videos */}
      <VideoShowcase />

      {/* Stats Section */}
      <section className="py-20 bg-[#232423] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">20+</div>
              <p className="text-xl font-jost">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">4,000+</div>
              <p className="text-xl font-jost">Units Serviced</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">24-Hour</div>
              <p className="text-xl font-jost">Turnaround</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">2-Year</div>
              <p className="text-xl font-jost">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Merged Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-navy-900 mb-4">Refinishing Service Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Proudly serving Southern California with professional refinishing and reglazing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'San Bernardino County', path: '/san-bernardino-reglazing' },
              { name: 'Riverside County', path: '/riverside-reglazing' },
              { name: 'Hemet', path: '/hemet-reglazing' },
              { name: 'Los Angeles County', path: '/los-angeles-reglazing' },
              { name: 'Victorville', path: '/victorville-reglazing' },
            ].map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="bg-navy-900 hover:bg-navy-800 text-white rounded-lg p-6 text-center font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {area.name}
              </Link>
            ))}
          </div>

          <ServiceAreaMap />
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-neutral-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-neutral-600 mb-4">
            Get Your Free Reglazing Quote Today
          </h2>
          <p className="text-center text-neutral-400 mb-8">
            Fill out the form below and we'll contact you within 24 hours
          </p>
          <div className="bg-[#FAF8F3] rounded-xl p-8 shadow-lg">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Refinish your Tub or Kitchen Surface Today</h2>
          <p className="text-xl mb-8">
            Get a professional reglazing quote today. Save up to 90% compared to replacement costs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#232423] hover:bg-[#221F1C] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
