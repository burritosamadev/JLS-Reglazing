import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import SEO from '../components/molecules/SEO'
import FAQSection from '../components/organisms/FAQSection'
import Button from '../components/atoms/Button'

export default function Services() {
  const services = [
    {
      title: 'Bathtub Refinishing and Reglazing',
      path: '/services/bathtub-refinishing',
      description:
        'Tub refinishing, fiberglass, acrylic, tile, porcelain, cast-iron. We restore to like-new condition at a fraction of replacement cost.',
      features: [
        'All bathtub types tile, fiberglass, acrylic, porcelain)',
        'Crack and chip repairs',
        'Bat tub cut outs and foundation repairs',
      ],
    },
    {
      title: 'Kitchen Countertop Refinishing and Reglazing',
      path: '/services/kitchen-refinishing',
      description:
        'Give your kitchen a fresh look without the expense and hassle of full replacement. Our reglazing service restores tile, laminate, and solid surface countertops.',
      features: [
        'Tile and laminate countertop and bar top reglazing',
        'White and multi-spec options for residential unit-complexes',
        'Heat and stain resistant finish',
      ],
    },
    {
      title: 'Sink Refinishing and Reglazing',
      path: '/services/sink-refinishing',
      description:
        'Restore your kitchen sink to pristine condition. Perfect for porcelain, cast iron, and stainless steel sinks showing signs of wear.',
      features: [
        'Porcelain and Stainless steel sinks',
        'Rust and stain removal',
        'Heat and stain resistant finish',
      ],
    },
    {
      title: 'Bath Vanity Refinishing and Reglazing',
      path: '/services/bath-vanity-refinishing',
      description:
        'Restore your restroom and bath vanity with a professional refinish.',
      features: [
        'Porcelain and stainless steel Bath Vanity reglazing',
        'Rust and stain removal',
        'Heat and stain resistant finish',
      ],
    },
    {
      title: 'Crack & Chip Repair',
      path: '/services/crack-repair',
      description:
        'Professional repair for cracks and chips of all sizes. We restore structural integrity and appearance to damaged surfaces.',
      features: [
        'All crack sizes and fissured repaired',
        'Weak tub foundations',
        'Uneven kitchen countertops',
      ],
    },
    {
      title: 'Bathtub Enclosure Refinishing and Reglazing',
      path: '/services/bathtub-enclosure',
      description:
        'Refresh your entire bathtub enclosure, including surrounding walls. Or reglaze your tub only, choice is up to you!',
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
      <SEO
        title="Complete Refinishing & Reglazing Services - Bathtub, Kitchen, Tile"
        description="Professional bathtub refinishing, kitchen countertop reglazing, sink restoration, and tile refinishing. Licensed & insured. 2-year warranty. Serving Southern California."
        keywords="bathtub refinishing, kitchen countertop refinishing, tile reglazing, sink refinishing, bathtub reglazing, porcelain refinishing, fiberglass bathtub refinishing"
        canonical="https://jlsreglazing.com/services"
      />
      {/* Hero Section */}
      <section className="bg-[#232423] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="hero-title mb-6">Complete Refinishing & Reglazing Services</h1>
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
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jost">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-block bg-[#FB8040] hover:bg-[#e6743a] text-white px-6 py-3 rounded-lg font-jost font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for a free Reglazing quote. Jorge, our small business owner, is grateful for your business.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
