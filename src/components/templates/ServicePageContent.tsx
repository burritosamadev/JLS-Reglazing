'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'

interface ServicePageContentProps {
  title: string
  subtitle: string
  beforeImage: string
  afterImage: string
  features: string[]
  faqs: { question: string; answer: string }[]
  defaultService: string
  relatedServices: { name: string; path: string }[]
}

export default function ServicePageContent({
  title,
  subtitle,
  beforeImage,
  afterImage,
  features,
  faqs,
  defaultService,
  relatedServices,
}: ServicePageContentProps) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-[#1B4D7A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D7A]/95 to-[#1B4D7A]/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 font-jost leading-relaxed mb-8">
              {subtitle}
            </p>
            <a
              href="#quote"
              className="inline-block bg-[#F26522] hover:bg-[#d9551a] text-white px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#2D3748] mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-gray-600 font-jost">
              Real results from our professional {title.toLowerCase()} service
            </p>
          </motion.div>

          <BeforeAfterComparison
            beforeImage={beforeImage}
            afterImage={afterImage}
            alt={`${title} before and after`}
          />
        </div>
      </section>

      {/* Features / Benefits Section */}
      <section className="py-16 md:py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#2D3748] mb-4">
              Why Choose Our {title}?
            </h2>
            <p className="text-lg text-gray-600 font-jost max-w-3xl mx-auto">
              Save up to <span className="font-bold text-xl text-[#1B4D7A]">90%</span> compared to full replacement costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <CheckCircleIcon className="w-8 h-8 text-[#1B4D7A] mb-3" />
                <p className="text-[#2D3748] font-jost text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — AEO: Self-contained chunks with visible answers, H3 headings */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#2D3748] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <article key={index} className="bg-[#F3F4F6] rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-orbitron font-semibold text-[#2D3748] mb-3">{faq.question}</h3>
                <p className="text-gray-700 font-jost leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#2D3748] mb-4">
              Related Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.path}
                  className="block bg-[#1B4D7A] hover:bg-[#164068] text-white rounded-lg p-6 text-center font-jost font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section id="quote" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#2D3748] mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600 font-jost">
              Fill out the form below and we will get back to you within 24 hours
            </p>
          </motion.div>

          <QuickQuoteForm defaultService={defaultService} />
        </div>
      </section>
    </div>
  )
}
