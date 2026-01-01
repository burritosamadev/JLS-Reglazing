import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Hemet() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="hero-title mb-6">Bathtub Reglazing in Hemet</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Professional bathtub and kitchen reglazing services in Hemet and San Jacinto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-navy-900 mb-6">Serving Hemet Residents</h2>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                Located in the heart of Riverside County, Hemet has been home to many of our
                satisfied customers over the past 20 years. We understand the unique needs of Hemet
                properties, from older manufactured homes to modern residential communities.
              </p>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                Whether you're updating your home for resale, refreshing a rental property, or
                simply want to restore your bathroom or kitchen to like-new condition, our local
                team provides fast, professional service at affordable prices.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                  Hemet Area Services
                </h3>
                <ul className="space-y-2">
                  {[
                    'Bathtub reglazing',
                    'Mobile home bathtub restoration',
                    'Kitchen sink reglazing',
                    'Countertop reglazing',
                    'Crack and chip repair',
                    'Senior community services',
                  ].map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jost">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-blue-600 text-white rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-orbitron font-bold mb-4">Hemet Special Offer</h3>
                <p className="text-lg mb-6 font-jost">
                  Save up to <span className="font-bold text-white text-xl">90%</span> compared to replacement costs. Free quotes for Hemet residents!
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-jost font-bold transition-all duration-200 transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                  Why Hemet Chooses Us
                </h3>
                <ul className="space-y-3">
                  {[
                    'Local, trusted service',
                    'Senior-friendly pricing',
                    'Mobile home specialists',
                    'Licensed & insured',
                    '2-year warranty',
                    'Same-day quotes available',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <StarIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jost">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-navy-900 mb-4">Hemet Valley Service Area</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {['Hemet', 'San Jacinto', 'Valle Vista', 'East Hemet', 'Anza', 'Winchester'].map(
              (area) => (
                <div key={area} className="bg-gray-100 rounded-lg p-4 font-jost">
                  {area}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Transform Your Hemet Home Today</h2>
          <p className="text-xl mb-8 font-jost">
            Professional reglazing at a fraction of replacement cost. Contact us now!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
