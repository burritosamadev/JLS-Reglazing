import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import SEO from '../../components/molecules/SEO'
import BeforeAfterSlider from '../../components/molecules/BeforeAfterSlider'

export default function SinkRefinishing() {
  const features = [
    'Kitchen and bathroom sink refinishing',
    'Porcelain and stainless steel reglazing',
    'Rust and stain removal',
    'Chip and crack repair',
    'Durable, waterproof finish',
    '2-year warranty included',
  ]

  const faqs = [
    {
      question: 'How much does sink refinishing cost?',
      answer:
        'Sink refinishing costs up to 90% less than sink replacement. The exact cost depends on the size, condition, and materials. Contact us at (310) 742-0057 for a free quote. This makes it ideal for quick rental property updates.',
    },
    {
      question: 'What types of sinks can be refinished?',
      answer:
        'We refinish porcelain kitchen sinks, bathroom sinks, and can restore stainless steel surfaces. Our professional sink reglazing process removes rust, stains, and restores shine to worn surfaces.',
    },
    {
      question: 'How long do refinished sinks last?',
      answer:
        'With proper care, refinished sinks last 10+ years. All our sink refinishing projects include a 2-year warranty and professional-grade materials for lasting durability.',
    },
  ]

  const relatedServices = [
    { name: 'Bathtub Refinishing', url: '/services/bathtub-refinishing' },
    { name: 'Kitchen Countertop Refinishing', url: '/services/kitchen-refinishing' },
    { name: 'Bath Vanity Refinishing', url: '/services/bath-vanity-refinishing' },
  ]

  return (
    <div>
      <SEO
        title="Sink Refinishing - Professional Kitchen & Bathroom Sink Reglazing"
        description="Expert sink refinishing for kitchen and bathroom. Save up to 90% vs replacement. Restore porcelain and stainless steel sinks. Remove rust and stains. Free quotes."
        keywords="sink refinishing, sink reglazing, kitchen sink refinishing, bathroom sink refinishing, porcelain sink reglazing, refinish kitchen sink"
        canonical="https://jlsreglazing.com/services/sink-refinishing"
      />

      {/* Hero Section */}
      <section className="bg-[#232423] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 font-jost"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title mb-6">Sink Refinishing & Reglazing</h1>
            <p className="text-xl text-gray-100 max-w-3xl font-jost">
              Professional sink refinishing for kitchen and bathroom. Restore porcelain and
              stainless steel sinks, remove rust and stains, renew shine and durability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Slider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfterSlider
                beforeImage="/images/2_before.jpg"
                afterImage="/images/2_after.jpg"
                alt="Sink refinishing transformation"
              />
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6">
                What's Included
              </h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-jost text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-[#FB8040] text-white rounded-xl">
                <p className="text-2xl font-orbitron font-bold mb-2">90% Savings</p>
                <p className="font-jost">
                  Sink refinishing costs up to 90% less than replacement
                </p>
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History of Sink Reglazing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            The History of Sink Refinishing in Southern California
          </h2>
          <div className="space-y-6 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Sink refinishing emerged as an extension of bathtub reglazing services in Southern
              California during the 1980s. As apartment complexes and rental properties aged,
              property managers faced constant sink replacement costs due to rust, stains, and
              surface damage from hard water and daily use.
            </p>
            <p>
              Traditional sink replacement required plumbing disconnection, countertop
              modifications, and often matching discontinued fixtures - often costing hundreds to over a thousand dollars per
              unit. For multi-unit complexes throughout Los Angeles, Riverside, and San Bernardino
              counties, these expenses accumulated rapidly during tenant turnarounds.
            </p>
            <p>
              Professional sink refinishing solved this problem by restoring existing sinks in just
              a few hours at a fraction of replacement cost. This rapid, cost-effective solution became essential for
              property managers maintaining competitive rental units while controlling renovation
              budgets and minimizing vacancy periods.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Refinishing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            Why Sink Refinishing for Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">90%</div>
              <p className="font-jost text-gray-700">Cost savings vs replacement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">Same Day</div>
              <p className="font-jost text-gray-700">Quick service completion</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">10+yr</div>
              <p className="font-jost text-gray-700">Durable finish lifespan</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Sink refinishing delivers exceptional value for rental property owners and multi-unit
              complex managers. Instead of expensive sink replacement between tenants, our
              professional reglazing service restores surfaces in hours with durable, waterproof
              finishes.
            </p>
            <p>
              This efficiency is critical for property managers who need quick turnarounds to
              minimize vacancy periods. Our sink refinishing services help property managers
              throughout Southern California maintain modern, appealing units while controlling
              renovation costs and maximizing rental income.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-orbitron font-semibold text-[#232423] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 font-jost leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.url}
                to={service.url}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <p className="font-orbitron font-semibold text-[#232423] hover:text-[#FB8040]">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Refinish Your Sink?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a free quote today. Professional sink refinishing with durable finishes and 2-year
            warranty.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-[#FB8040] px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer touch-manipulation select-none"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
