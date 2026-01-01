import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import WaveDivider from '../atoms/WaveDivider'

interface ServiceTemplateProps {
  serviceName: string
  heroImage: string
  description: string
  benefits: string[]
  processSteps: Array<{ title: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
  relatedServices: Array<{ name: string; path: string }>
}

export default function ServiceTemplate({
  serviceName,
  heroImage,
  description,
  benefits,
  processSteps,
  faqs,
  relatedServices,
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt={serviceName}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/85"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              {serviceName}
            </h1>
            <p className="text-xl text-gray-200 font-jost leading-relaxed mb-8">
              {description}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </div>

        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-navy-900 mb-4">
              Why Choose Our {serviceName}?
            </h2>
            <p className="text-lg text-gray-700 font-jost max-w-3xl mx-auto">
              Save up to <span className="font-bold text-xl text-blue-600">90%</span> compared to replacement costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <CheckCircleIcon className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-800 font-jost text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <WaveDivider variant="2" position="bottom" />
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-700 font-jost max-w-3xl mx-auto">
              Professional {serviceName.toLowerCase()} in 3-5 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-orbitron font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 font-jost">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <WaveDivider variant="1" position="bottom" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-orbitron font-semibold text-navy-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-jost leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <WaveDivider variant="2" position="bottom" />
      </section>

      {/* Related Services */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-navy-900 mb-4">
              Related Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block bg-navy-900 hover:bg-navy-800 text-white rounded-lg p-6 text-center font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for a free quote on {serviceName.toLowerCase()}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
