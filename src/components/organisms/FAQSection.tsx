import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import StructuredData from '../molecules/StructuredData'
import { generateFAQSchema } from '../../lib/seo'

const faqs = [
  {
    question: 'What is the difference between bathtub reglazing and refinishing?',
    answer:
      'Bathtub reglazing and bathtub refinishing are the same professional restoration process. While some use "reglazing" to specifically describe the application of a new coating, refinishing is the broader term that encompasses the entire process: surface preparation, repairs (such as chips, cracks, and tub cut outs), acid etching, and applying a durable finish. The result is always the same: a like-new surface at a fraction of replacement cost.',
  },
  {
    question: 'How much does bathtub refinishing cost?',
    answer:
      'Bathtub refinishing costs up to 90% less than full replacement. The exact cost depends on the condition of your tub, repairs needed, and project scope. Contact us at (310) 742-0057 for a free quote. Most bathtub reglazing projects are completed within 24 hours.',
  },
  {
    question: 'How long does bathtub reglazing last?',
    answer:
      'With proper care, professional bathtub refinishing lasts 10-15 years or more. All our bathtub and kitchen reglazing projects come with a comprehensive 2-year warranty. We use only professional-grade materials and proven techniques for long-lasting, durable results.',
  },
  {
    question: 'How long does the refinishing process take?',
    answer:
      'Most bathtub and kitchen refinishing projects are completed within 24 hours. This makes our service perfect for rental property turnarounds and multi-unit complexes. The surface is ready to use after proper curing time (typically 48-72 hours).',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Southern California including San Bernardino County, Riverside County, Los Angeles County, Hemet, and Victorville. With over 20 years of experience and 4,000+ units serviced, JLS Reglazing is your trusted local bathtub and kitchen refinishing expert.',
  },
  {
    question: 'Can you refinish fiberglass and acrylic tubs?',
    answer:
      'Yes! We refinish all bathtub types including fiberglass, acrylic, porcelain, cast iron, and tile. Our professional reglazing process works on any bathtub material and includes crack repair, chip repair, and tub cut out foundation repairs.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-100">
      <StructuredData data={generateFAQSchema()} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#232423] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 font-jost">
            Common questions about bathtub and kitchen refinishing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-orbitron font-semibold text-[#232423] pr-8">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-6 h-6 text-[#FB8040] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-700 font-jost leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
