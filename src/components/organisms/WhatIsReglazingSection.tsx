'use client'

import BeforeAfterComparison from '../molecules/BeforeAfterComparison'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function WhatIsReglazingSection() {
  const benefits = [
    'Save up to 90% compared to bathtub or kitchen replacement',
    'Completed in 24 hours—perfect for rental unit turnarounds',
    'Durable, heat-resistant finish for long-lasting results',
    '2-year warranty included on all refinishing services',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-charcoal mb-6">What is Bathtub Refinishing?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-jost leading-relaxed">
            Transform your bathtub and kitchen surfaces without the cost and hassle of replacement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start mb-16">
          <div className="lg:sticky lg:top-8">
            <BeforeAfterComparison
              beforeImage="/images/1_before.webp"
              afterImage="/images/1_after.webp"
              alt="Bathtub Transformation"
              priority={true}
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg text-gray-700 font-jost leading-relaxed">
              Bathtub refinishing (also called reglazing or resurfacing) is a professional process that restores worn bathtubs, kitchen sinks, and countertops to like-new condition without replacement. We repair cracks, chips, tub cut outs, and weak foundations before applying a durable, factory-quality finish.
            </p>

            <div className="bg-gradient-to-br from-surface-alt to-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-orbitron font-semibold text-charcoal mb-6">
                Benefits of Professional Refinishing
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-jost text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-cta font-jost mt-6 pt-6 border-t border-gray-300">
                Perfect for bathtubs, kitchen countertops, sinks, tiles, and more!
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-orbitron font-semibold text-charcoal mb-6">
              Bathtub Reglazing vs Refinishing: What&apos;s the Difference?
            </h3>
            <p className="text-base lg:text-lg text-gray-700 font-jost leading-relaxed">
              Bathtub reglazing and bathtub refinishing are often used interchangeably, and for good reason—they refer to the same professional restoration process. While some use &quot;reglazing&quot; to specifically describe the application of a new coating, refinishing is the broader term that encompasses the entire process: surface preparation, repairs (such as chips, cracks, and tub cut outs), acid etching, and applying a durable finish.
            </p>
            <p className="text-base lg:text-lg text-gray-700 font-jost leading-relaxed mt-4">
              Whether you search for &quot;bathtub reglazing near me&quot; or &quot;bathtub refinishing,&quot; you&apos;ll find the same high-quality service. At JLS Reglazing, we specialize in both terms because we provide complete bathtub and kitchen surface restoration—from foundation repairs to the final glossy coat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
