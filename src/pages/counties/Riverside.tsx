import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Riverside() {
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
            <h1 className="hero-title mb-6">Bathtub Reglazing in Riverside County</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Expert bathtub, kitchen, and tile reglazing services throughout Riverside County
            </p>
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-navy-900 mb-6">
                Serving Riverside County Communities
              </h2>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                JL Bath Renovation Services has been providing professional reglazing services to
                Riverside County homeowners and businesses for over two decades. From downtown
                Riverside to Temecula, Murrieta, and everywhere in between, we deliver exceptional
                results that save you money and time.
              </p>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                Our experienced team specializes in both residential and commercial properties,
                offering fast turnaround times perfect for property managers and homeowners alike.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                  Riverside County Services
                </h3>
                <ul className="space-y-2">
                  {[
                    'Bathtub reglazing',
                    'Kitchen countertop restoration',
                    'Bathroom sink reglazing',
                    'Tile and grout restoration',
                    'Bath vanity reglazing',
                    'Multi-unit property services',
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
                <h3 className="text-2xl font-orbitron font-bold mb-4">
                  Riverside County Homeowners Save Big
                </h3>
                <p className="text-lg mb-6 font-jost">
                  Reglazing costs up to <span className="font-bold text-white text-xl">90%</span> less than replacement. Transform your space today!
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
                  Trusted by Riverside County
                </h3>
                <ul className="space-y-3">
                  {[
                    '20+ years serving Riverside',
                    'Quick response times',
                    '1-2 day completion',
                    'Licensed & insured',
                    '2-year warranty included',
                    '4,000+ units serviced',
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

      {/* Cities Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-navy-900 mb-4">
              Serving Riverside County Cities
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Riverside',
              'Moreno Valley',
              'Corona',
              'Temecula',
              'Murrieta',
              'Lake Elsinore',
              'Perris',
              'Menifee',
              'Hemet',
              'Jurupa Valley',
              'Eastvale',
              'Norco',
            ].map((city) => (
              <div key={city} className="bg-gray-100 rounded-lg p-4 font-jost">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Riverside County's Reglazing Experts</h2>
          <p className="text-xl mb-8 font-jost">
            Professional service, exceptional results. Contact us today for your free quote.
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
