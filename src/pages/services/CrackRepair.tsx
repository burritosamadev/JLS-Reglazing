import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import SEO from '../../components/molecules/SEO'
import BeforeAfterSlider from '../../components/molecules/BeforeAfterSlider'

export default function CrackRepair() {
  const features = [
    'Bathtub crack and chip repair',
    'Countertop and sink damage repair',
    'Hairline to large crack restoration',
    'Foundation and structural repairs',
    'Color-matched, seamless finish',
    '2-year warranty included',
  ]

  const faqs = [
    {
      question: 'How much does crack and chip repair cost?',
      answer:
        'Crack and chip repair is an affordable preventive service that costs significantly less than full refinishing or replacement. Contact us at (310) 742-0057 for a free quote. This makes it essential for rental property maintenance.',
    },
    {
      question: 'Can you repair cracks in fiberglass bathtubs?',
      answer:
        'Yes! We repair cracks in fiberglass, acrylic, porcelain, and cast iron bathtubs. Our professional crack repair process includes structural reinforcement and surface refinishing for lasting durability.',
    },
    {
      question: 'How long do crack repairs last?',
      answer:
        'With proper care, professional crack repairs last 10+ years. All our crack and chip repair work includes a 2-year warranty and uses professional-grade bonding materials.',
    },
  ]

  const relatedServices = [
    { name: 'Bathtub Refinishing', url: '/services/bathtub-refinishing' },
    { name: 'Cut-Out Repairs', url: '/services/cut-out-repairs' },
    { name: 'Bathtub Enclosure Refinishing', url: '/services/bathtub-enclosure' },
  ]

  return (
    <div>
      <SEO
        title="Crack & Chip Repair - Professional Bathtub and Surface Repair"
        description="Expert crack and chip repair for bathtubs, sinks, countertops. Affordable preventive repair service. Prevent small cracks from worsening. Same-day service. Free quotes."
        keywords="crack repair, chip repair, bathtub crack repair, fiberglass crack repair, porcelain chip repair, bathtub damage repair"
        canonical="https://jlsreglazing.com/services/crack-repair"
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
            <h1 className="hero-title mb-6">Crack & Chip Repair</h1>
            <p className="text-xl text-gray-100 max-w-3xl font-jost">
              Professional crack and chip repair for bathtubs, sinks, and countertops. Stop damage
              from spreading with expert structural repairs and seamless refinishing.
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
                alt="Crack and chip repair transformation"
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
                <p className="text-2xl font-orbitron font-bold mb-2">Affordable</p>
                <p className="font-jost">
                  Professional crack repair prevents costly damage - significantly less than full refinishing
                </p>
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History of Crack Repair */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            The History of Bathtub Crack Repair in Southern California
          </h2>
          <div className="space-y-6 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Professional crack and chip repair emerged alongside bathtub refinishing in Southern
              California during the 1980s. As fiberglass and acrylic bathtubs became common in
              rental properties throughout Los Angeles, Riverside, and San Bernardino counties,
              property managers faced frequent damage from tenant use and settling foundations.
            </p>
            <p>
              Small cracks and chips, if left unrepaired, quickly expand due to water infiltration
              and temperature changes. Traditional solutions required full bathtub replacement
              ($3,000-$5,000) or expensive plumbing repairs - neither practical for multi-unit
              complex managers maintaining tight budgets.
            </p>
            <p>
              Professional crack repair developed as the preventive solution, using specialized
              bonding materials and structural reinforcement techniques to stop damage from
              spreading. At an affordable cost, property managers could repair cracks before they
              required complete refinishing, extending bathtub lifespan and avoiding costly
              emergency replacements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Crack Repair */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            Why Crack Repair for Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">90%</div>
              <p className="font-jost text-gray-700">Cost savings vs replacement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">Same Day</div>
              <p className="font-jost text-gray-700">Quick repair completion</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">10+yr</div>
              <p className="font-jost text-gray-700">Repair durability</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Crack and chip repair delivers exceptional preventive value for rental property
              owners. Small damage caught early prevents costly bathtub replacement or extensive
              refinishing. Our professional crack repair service stops damage from spreading with
              structural reinforcement and seamless refinishing.
            </p>
            <p>
              This preventive approach is critical for multi-unit complex managers maintaining
              properties efficiently. Early crack repair extends bathtub lifespan, prevents water
              damage to surrounding structures, and keeps units rent-ready without emergency
              renovation expenses.
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
          <h2 className="section-title mb-6">Need Crack or Chip Repair?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a free quote today. Professional crack repair prevents damage from spreading and
            saves thousands in replacement costs.
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
