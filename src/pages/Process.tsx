import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  WrenchIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Stripping Paint via Multi-Layer Sanding',
      description:
        'We begin by carefully removing the old finish through a multi-layer sanding process. This ensures a clean, smooth surface for optimal adhesion of the new coating.',
      details: [
        'Professional-grade equipment used',
        'Complete removal of old finish',
        'Surface preparation and cleaning',
        'Dust containment and cleanup',
      ],
    },
    {
      number: '02',
      title: 'Patching and Bonding Repairs',
      description:
        'All cracks, chips, and imperfections are professionally repaired using high-strength bonding agents and patching materials designed for long-lasting durability.',
      details: [
        'Crack and chip repair',
        'Structural integrity restoration',
        'Professional-grade bonding agents',
        'Seamless surface preparation',
      ],
    },
    {
      number: '03',
      title: 'Creating Water-Resistant Paint Mix',
      description:
        'We prepare a custom water-resistant paint mixture specifically formulated for bathtubs, sinks, and countertops. This specialized coating ensures durability and longevity.',
      details: [
        'Custom color matching available',
        'Water and heat resistant formula',
        'Anti-mold and mildew properties',
        'Professional-grade materials',
      ],
    },
    {
      number: '04',
      title: 'Professional Application and Curing',
      description:
        'Our expert technicians apply multiple coats of the specialized finish using professional spray equipment. The surface then undergoes a controlled curing process for optimal hardness and durability.',
      details: [
        'Multiple coat application',
        'Professional spray technique',
        'Controlled curing environment',
        '24-48 hour cure time',
      ],
    },
  ]

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
            <h1 className="hero-title mb-6">Our Expert Reglazing Process</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              A proven 4-step process that delivers professional results every time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps - Evercraft Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-navy-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Step Number Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-[12rem] font-orbitron font-bold text-white/10 leading-none">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                          {index === 0 && <WrenchIcon className="w-16 h-16 text-white" />}
                          {index === 1 && <WrenchScrewdriverIcon className="w-16 h-16 text-white" />}
                          {index === 2 && <PaintBrushIcon className="w-16 h-16 text-white" />}
                          {index === 3 && <SparklesIcon className="w-16 h-16 text-white" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="inline-block mb-4">
                      <span className="text-blue-600 font-orbitron font-bold text-sm tracking-widest uppercase">
                        Step {step.number}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-navy-900 mb-6 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-xl text-gray-700 font-jost mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-4 mt-1 group-hover:bg-green-700 transition-colors">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-lg text-gray-700 font-jost">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-navy-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              20 years of experience perfecting our reglazing technique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <ViewfinderCircleIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-3">
                Precision Work
              </h3>
              <p className="text-gray-700 font-jost">
                Every step executed with meticulous attention to detail
              </p>
            </div>

            <div className="text-center p-6">
              <ShieldCheckIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-3">
                2-Year Warranty
              </h3>
              <p className="text-gray-700 font-jost">
                We stand behind our work with a comprehensive warranty
              </p>
            </div>

            <div className="text-center p-6">
              <ClockIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-3">
                Quick Turnaround
              </h3>
              <p className="text-gray-700 font-jost">
                Most projects completed in 1-2 days with minimal disruption
              </p>
            </div>

            <div className="text-center p-6">
              <SparklesIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-3">
                Like-New Results
              </h3>
              <p className="text-gray-700 font-jost">
                Professional finish that looks and performs like new
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Experience Professional Reglazing</h2>
          <p className="text-xl mb-8 font-jost">
            Get started with a free quote today. See the difference our process makes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Request Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
