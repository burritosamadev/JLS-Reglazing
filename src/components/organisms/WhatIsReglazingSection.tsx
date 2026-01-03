import { motion } from 'framer-motion'
import BeforeAfterSlider from '../molecules/BeforeAfterSlider'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function WhatIsReglazingSection() {
  const benefits = [
    'Save up to 90% vs replacement',
    'Completed in 1-2 days',
    'Durable, long-lasting finish',
    '2-year warranty included',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#232423] mb-4">What is Reglazing?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
            Transform your bathroom and kitchen surfaces without the cost and hassle of replacement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Panel - Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider
              beforeImage="/images/1_before.jpg"
              afterImage="/images/1_after.jpg"
              alt="Bathtub Transformation"
            />
          </motion.div>

          {/* Right Panel - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-jost leading-relaxed">
                Reglazing, also known as refinishing or resurfacing, is a professional process that
                restores worn bathtubs, sinks, and countertops to like-new condition without replacement.
              </p>
              <p className="text-lg text-gray-700 font-jost leading-relaxed">
                We apply a durable, high-quality coating that transforms old, damaged surfaces into
                beautiful fixtures. The process is fast and cost-effective.
              </p>

              {/* Benefits List */}
              <div className="bg-gray-50 rounded-xl p-8 mt-8">
                <h3 className="text-xl font-orbitron font-semibold text-[#232423] mb-6">
                  Why Choose Reglazing?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jost text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-semibold text-[#FB8040] font-jost mt-6">
                Perfect for bathtubs, kitchen countertops, sinks, tiles, and more!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
