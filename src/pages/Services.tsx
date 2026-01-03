import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CurrencyDollarIcon,
  BoltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      title: 'Bathtub Reglazing & Refinishing',
      path: '/services/bathtub-reglazing',
      description:
        'Transform your worn, cracked, or discolored bathtub with our professional reglazing services. We restore porcelain, fiberglass, and acrylic tubs to like-new condition at a fraction of replacement cost.',
      features: [
        'All bathtub types (porcelain, fiberglass, acrylic)',
        'Color matching and custom colors available',
        'Crack and chip repair included',
        '2-year warranty on all work',
      ],
    },
    {
      title: 'Kitchen Countertop Reglazing',
      path: '/services/kitchen-countertop-reglazing',
      description:
        'Give your kitchen a fresh look without the expense and hassle of full replacement. Our reglazing service restores tile, laminate, and solid surface countertops.',
      features: [
        'Tile countertop reglazing',
        'Laminate surface restoration',
        'Heat and stain resistant finish',
        'Multiple color options',
      ],
    },
    {
      title: 'Sink Refinishing',
      path: '/services/sink-refinishing',
      description:
        'Restore your kitchen sink to pristine condition. Perfect for porcelain, cast iron, and stainless steel sinks showing signs of wear.',
      features: [
        'Porcelain and cast iron sinks',
        'Stainless steel reglazing',
        'Rust and stain removal',
        'Long-lasting protective coating',
      ],
    },
    {
      title: 'Bath Vanity Restoration',
      path: '/services/bath-vanity-restoration',
      description:
        'Complete vanity refinishing including countertops and sinks. Update your bathroom aesthetic without replacement costs.',
      features: [
        'Vanity top reglazing',
        'Integrated sink refinishing',
        'Custom color matching',
        'Quick turnaround time',
      ],
    },
    {
      title: 'Crack & Chip Repair',
      path: '/services/crack-chip-repair',
      description:
        'Professional repair for cracks and chips of all sizes. We restore structural integrity and appearance to damaged surfaces.',
      features: [
        'All crack sizes repaired',
        'Chip and gouge restoration',
        'Seamless color matching',
        'Reinforced bonding agents',
      ],
    },
    {
      title: 'Bathtub Enclosure Refinishing',
      path: '/services/bathtub-enclosure-refinishing',
      description:
        'Refresh your entire bathtub enclosure, including walls and surrounds. Perfect for tile and fiberglass installations.',
      features: [
        'Tile wall reglazing',
        'Fiberglass surround restoration',
        'Grout line preservation',
        'Mold and mildew resistant finish',
      ],
    },
    {
      title: 'Cut-Out Repairs',
      path: '/services/cut-out-repairs',
      description:
        'Expert repair of cut-outs and large damaged areas using professional-grade fiberglass patching techniques.',
      features: [
        'Fiberglass patch installation',
        'Cut-out restoration',
        'Structural reinforcement',
        'Seamless finish integration',
      ],
    },
  ]

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
            <h1 className="hero-title mb-6">Complete Reglazing & Refinishing Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Professional bathtub, kitchen, and tile reglazing services for residential and
              commercial properties in Southern California
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-jost mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jost">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Learn More buttons - Disabled for now, re-enable later */}
                {/* <Link
                  to={service.path}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-jost font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <CurrencyDollarIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-3">
                Save Up to <span className="text-[#FB8040] font-bold">90%</span>
              </h3>
              <p className="text-gray-700 font-jost">
                Reglazing costs a fraction of replacement. Keep more money in your pocket.
              </p>
            </div>
            <div className="p-8">
              <BoltIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-3">
                Quick Turnaround
              </h3>
              <p className="text-gray-700 font-jost">
                Most projects completed in 1-2 days. Minimal disruption to your routine.
              </p>
            </div>
            <div className="p-8">
              <ArrowPathIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-700 font-jost">
                Refinishing reduces waste. No demolition or landfill disposal required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for a free quote. Experience the JLS Reglazing difference.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-[#FB8040] px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
