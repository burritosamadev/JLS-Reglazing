import { motion } from 'framer-motion'
import ContactForm from '../components/organisms/ContactForm'
import ServiceAreaMap from '../components/organisms/ServiceAreaMap'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Contact() {
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
            <h1 className="hero-title mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Professional bathtub, tile, and porcelain reglazing. Serving both commercial and
              residential properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-orbitron font-semibold text-navy-900 mb-6">
                  Request a Quote
                </h2>
                <p className="text-gray-700 font-jost mb-8">
                  Give us a call or submit the quote form below to get your bathtub, tub, bath
                  vanity, kitchen countertop, and kitchen sink professionally reglazed this week!
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-jost mb-1">Email</p>
                    <a
                      href="mailto:jorge@jlsreglazing.com"
                      className="text-blue-600 hover:text-blue-700 font-jost"
                    >
                      jorge@jlsreglazing.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-jost mb-1">Phone</p>
                    <a
                      href="tel:+1XXXXXXXXXX"
                      className="text-blue-600 hover:text-blue-700 font-jost"
                    >
                      (XXX) XXX-XXXX
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-jost mb-1">Service Areas</p>
                    <p className="text-gray-700 font-jost">
                      San Bernardino, Riverside, Hemet, Los Angeles, Victorville
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-orbitron font-semibold text-blue-900 mb-4">
                  How it works
                </h3>
                <ol className="space-y-3 text-sm text-blue-800 font-jost">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Submit your quote request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>We analyze your needs and provide a detailed quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Schedule your reglazing service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Professional service completed in 1-2 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">5.</span>
                    <span>Enjoy your like-new surfaces with 2-year warranty</span>
                  </li>
                </ol>
              </div>

              {/* Trust Badges */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-orbitron font-semibold text-green-900 mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-sm text-green-800 font-jost">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>20+ years experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>4,000+ units serviced</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Licensed & insured</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>2-year warranty</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Hispanic-owned & operated</span>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-orbitron font-semibold text-gray-900 mb-3">
                  Response Time
                </h3>
                <p className="text-sm text-gray-700 font-jost">
                  We typically respond to all quote requests within 24 hours during business days.
                  For urgent requests, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-navy-900 mb-4">Our Service Coverage Area</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Proudly serving Southern California with professional reglazing services
            </p>
          </div>

          <ServiceAreaMap />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              'San Bernardino County',
              'Riverside County',
              'Hemet',
              'Los Angeles County',
              'Victorville',
            ].map((area) => (
              <div
                key={area}
                className="bg-navy-900 text-white rounded-lg p-6 text-center font-jost font-semibold text-lg"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
