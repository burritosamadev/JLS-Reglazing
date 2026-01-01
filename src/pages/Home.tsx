import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import QuickQuoteForm from '../components/organisms/QuickQuoteForm'
import VideoShowcase from '../components/organisms/VideoShowcase'
import WaveDivider from '../components/atoms/WaveDivider'
import {
  SparklesIcon,
  HomeModernIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  const services = [
    {
      title: 'Bathtub Reglazing',
      description: 'Professional bathtub refinishing and restoration',
      Icon: SparklesIcon,
    },
    {
      title: 'Kitchen Countertops',
      description: 'Transform your kitchen surfaces at a fraction of replacement cost',
      Icon: HomeModernIcon,
    },
    {
      title: 'Sink Refinishing',
      description: 'Kitchen and bathroom sink reglazing services',
      Icon: BeakerIcon,
    },
    {
      title: 'Crack & Chip Repair',
      description: 'Professional repair for all sizes of cracks and chips',
      Icon: WrenchScrewdriverIcon,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/painter_1.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 to-navy-800/90"></div>
          {/* Decorative pattern overlay */}
          <img
            src="/vectors/pattern-bg.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
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
                Professional Bathtub & Kitchen Reglazing Services
              </h1>
              <p className="text-xl text-gray-100 mb-8 font-jost leading-relaxed">
                Bathtubs, sinks, and kitchen countertops crack, peel, and get worn out over time.
                Save up to <span className="font-bold text-2xl text-blue-400">90%</span> vs replacement with our professional reglazing services.
              </p>

              {/* Photo-Backed Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { stat: '20+', label: 'Years Experience', img: 'painter_1.jpg' },
                  { stat: '4,000+', label: 'Units Serviced', img: '1_after.jpg' },
                  { stat: '100%', label: 'Satisfaction', img: '2_after.jpg' },
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
                    <div className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm group-hover:bg-navy-900/75 transition-colors duration-300"></div>
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

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Quick Quote Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600 font-jost mb-6 text-sm">
                  Fill out the form below and we'll contact you within 24 hours with a personalized quote.
                </p>
                <QuickQuoteForm compact />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recent Projects Photo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/90 text-sm font-jost text-center mb-4 font-medium">
              Recent Projects in Your Area
            </p>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={`/images/${i}_after.jpg`}
                    className="h-24 w-32 object-cover rounded-lg shadow-lg border-2 border-white/30"
                    alt={`Recent project ${i}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Wave divider at bottom of hero */}
        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* Services Preview */}
      <section className="relative py-20 bg-gray-100">
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
            <h2 className="section-title text-navy-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Complete reglazing and refinishing services for residential and commercial properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <service.Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-jost">{service.description}</p>
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

      {/* Service Areas */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-navy-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Proudly serving Southern California counties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a professional reglazing quote today. Save up to <span className="font-bold text-2xl">90%</span> compared to replacement costs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
