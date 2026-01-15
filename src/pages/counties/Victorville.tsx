import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Victorville() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#232423] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="hero-title mb-6">Bathtub Reglazing in Victorville</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Professional bathtub, kitchen, and tile reglazing services in Victorville and the
              High Desert
            </p>
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-[#232423] mb-6">Serving Victorville Residents</h2>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                For over 20 years, JL Bathtub Renovation Services has been providing professional
                reglazing services to homeowners and businesses in Victorville and the High Desert
                area. We understand the unique needs of High Desert properties and deliver
                exceptional results at affordable prices.
              </p>
              <p className="text-lg text-gray-700 font-jost mb-6 leading-relaxed">
                Whether you're updating your home, refreshing a rental property, or managing
                commercial facilities, our experienced team brings professional reglazing services
                directly to your Victorville location with fast turnaround times.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-orbitron font-semibold text-[#232423] mb-4">
                  Victorville Area Services
                </h3>
                <ul className="space-y-2">
                  {[
                    'Bathtub reglazing',
                    'Kitchen countertop restoration',
                    'Sink reglazing (kitchen & bathroom)',
                    'Tile reglazing',
                    'Crack and chip repair',
                    'Commercial property services',
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
              <div className="bg-[#FB8040] text-white rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-orbitron font-bold mb-4">Victorville Special</h3>
                <p className="text-lg mb-6 font-jost">
                  Save up to <span className="font-bold text-white text-xl">90%</span> compared to
                  replacement costs. Get a free quote today!
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-[#FB8040] px-8 py-3 rounded-lg font-jost font-bold transition-all duration-200 transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-orbitron font-semibold text-[#232423] mb-4">
                  Why Choose Us in Victorville?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Local, family-owned business',
                    'Same-day quotes available',
                    '1-2 day project completion',
                    'Licensed & insured',
                    '2-year warranty',
                    'Hispanic-owned & operated',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <StarIcon className="w-6 h-6 text-[#FB8040] mr-3 flex-shrink-0" />
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
            <h2 className="section-title text-[#232423] mb-4">
              High Desert Areas We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Victorville',
              'Hesperia',
              'Apple Valley',
              'Adelanto',
              'Phelan',
              'Oak Hills',
              'Spring Valley Lake',
              'Oro Grande',
            ].map((city) => (
              <div key={city} className="bg-gray-100 rounded-lg p-4 font-jost">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#232423] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">
            Ready to Transform Your Victorville Property?
          </h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for expert bathtub and kitchen reglazing services in the High Desert.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FB8040] hover:bg-[#E5722A] text-white px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
