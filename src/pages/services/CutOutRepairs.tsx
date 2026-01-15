import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import SEO from '../../components/molecules/SEO'
import BeforeAfterSlider from '../../components/molecules/BeforeAfterSlider'

export default function CutOutRepairs() {
  const features = [
    'Tub cut-out foundation repairs',
    'Access panel restoration',
    'Structural reinforcement',
    'Weak foundation repair',
    'Seamless color-matched finish',
    '2-year warranty included',
  ]

  const faqs = [
    {
      question: 'How much do tub cut-out repairs cost?',
      answer:
        'Tub cut-out and foundation repairs prevent costly bathtub replacement caused by foundation failure. The cost depends on the extent of damage and repairs needed. Contact us at (310) 742-0057 for a free quote.',
    },
    {
      question: 'What is a tub cut-out repair?',
      answer:
        'Tub cut-out repair addresses weak or damaged bathtub foundations by cutting out deteriorated sections, reinforcing the structure, and seamlessly refinishing the surface. This prevents bathtub collapse and water damage.',
    },
    {
      question: 'How long do cut-out repairs last?',
      answer:
        'With proper reinforcement, tub cut-out repairs last 10+ years. All our foundation repair work includes a 2-year warranty and professional-grade structural reinforcement materials.',
    },
  ]

  const relatedServices = [
    { name: 'Bathtub Refinishing', url: '/services/bathtub-refinishing' },
    { name: 'Crack & Chip Repair', url: '/services/crack-repair' },
    { name: 'Bathtub Enclosure Refinishing', url: '/services/bathtub-enclosure' },
  ]

  return (
    <div>
      <SEO
        title="Tub Cut-Out Repairs - Professional Bathtub Foundation Repair"
        description="Expert tub cut-out and foundation repairs. Professional structural reinforcement prevents bathtub collapse and water damage. Save thousands vs replacement. Free quotes."
        keywords="tub cut out repair, bathtub foundation repair, bathtub cut out, tub foundation repair, weak bathtub foundation"
        canonical="https://jlsreglazing.com/services/cut-out-repairs"
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
            <h1 className="hero-title mb-6">Tub Cut-Out & Foundation Repairs</h1>
            <p className="text-xl text-gray-100 max-w-3xl font-jost">
              Professional tub cut-out repairs and foundation reinforcement. Stop weak foundations
              from causing bathtub collapse and prevent costly water damage.
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
                beforeImage="/images/1_before.jpg"
                afterImage="/images/1_after.jpg"
                alt="Tub cut-out repair transformation"
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
                <p className="text-2xl font-orbitron font-bold mb-2">Save Thousands</p>
                <p className="font-jost">
                  Professional foundation repair prevents bathtub collapse and water damage - fraction of replacement cost
                </p>
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History of Cut-Out Repairs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            The History of Tub Cut-Out Repairs in Southern California
          </h2>
          <div className="space-y-6 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Tub cut-out repair emerged in Southern California during the 1990s as fiberglass and
              acrylic bathtub installations from the 1970s and 1980s began showing foundation
              failures. Weak or deteriorating sub-floor structures beneath bathtubs caused flexing,
              cracking, and eventually catastrophic failure in rental properties throughout Los
              Angeles, Riverside, and San Bernardino counties.
            </p>
            <p>
              Traditional solutions required complete bathtub removal, sub-floor reconstruction,
              plumbing modifications, and new bathtub installation - costing $3,000-$5,000 per unit
              and taking weeks. For multi-unit complex managers, this expense and timeline were
              devastating, especially when foundation issues affected multiple units simultaneously.
            </p>
            <p>
              Professional tub cut-out repair solved this problem by accessing weak foundations
              through strategic cuts in the bathtub floor, reinforcing deteriorated structures,
              and seamlessly repairing the access points at a fraction of replacement cost. This preventive approach
              extended bathtub lifespan, prevented water damage to underlying structures, and became
              essential for property managers maintaining aging rental properties cost-effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Cut-Out Repairs */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            Why Cut-Out Repairs for Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">90%</div>
              <p className="font-jost text-gray-700">Cost savings vs replacement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">1-2 Days</div>
              <p className="font-jost text-gray-700">Repair completion time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">10+yr</div>
              <p className="font-jost text-gray-700">Foundation repair lifespan</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Tub cut-out repairs deliver critical preventive value for rental property owners and
              multi-unit complex managers. Weak bathtub foundations, if left unrepaired, lead to
              catastrophic bathtub failure, extensive water damage to units below, and emergency
              replacement costs exceeding $5,000 per unit.
            </p>
            <p>
              Our professional foundation repair service reinforces deteriorating structures before
              failure occurs, extending bathtub lifespan and preventing costly emergency situations.
              This preventive approach is essential for property managers maintaining aging Southern
              California apartment buildings while controlling renovation budgets and minimizing
              tenant displacement.
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
          <h2 className="section-title mb-6">Need Tub Foundation Repair?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a free quote today. Professional cut-out repairs prevent bathtub collapse and save
            thousands in replacement costs.
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
