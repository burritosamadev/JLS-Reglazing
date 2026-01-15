import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import SEO from '../../components/molecules/SEO'
import BeforeAfterSlider from '../../components/molecules/BeforeAfterSlider'

export default function KitchenRefinishing() {
  const features = [
    'Tile and laminate countertop refinishing',
    'Bar top reglazing services',
    'Heat and stain resistant finish',
    'White and multi-spec color options',
    'Crack and damage repair',
    '2-year warranty included',
  ]

  const faqs = [
    {
      question: 'How much does kitchen countertop refinishing cost?',
      answer:
        'Kitchen countertop refinishing costs up to 90% less than full replacement. The exact cost depends on the size, condition, and materials. Contact us at (310) 742-0057 for a free quote. This makes it ideal for rental property updates.',
    },
    {
      question: 'What types of countertops can be refinished?',
      answer:
        'We refinish tile countertops, laminate countertops, and bar tops. Our professional kitchen reglazing process restores worn surfaces with a durable, heat-resistant finish.',
    },
    {
      question: 'How long do refinished kitchen countertops last?',
      answer:
        'With proper care, refinished kitchen countertops last 10+ years. All our kitchen refinishing projects include a 2-year warranty and professional-grade materials.',
    },
  ]

  const relatedServices = [
    { name: 'Bathtub Refinishing', url: '/services/bathtub-refinishing' },
    { name: 'Sink Refinishing', url: '/services/sink-refinishing' },
    { name: 'Crack & Chip Repair', url: '/services/crack-repair' },
  ]

  return (
    <div>
      <SEO
        title="Kitchen Countertop Refinishing - Professional Reglazing Services"
        description="Expert kitchen countertop refinishing for tile and laminate surfaces. Save up to 90% vs replacement. Perfect for rental properties. 24-hour service. Free quotes."
        keywords="kitchen countertop refinishing, kitchen refinishing, refinish kitchen countertops, tile countertop reglazing, laminate countertop refinishing"
        canonical="https://jlsreglazing.com/services/kitchen-refinishing"
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
            <h1 className="hero-title mb-6">Kitchen Countertop Refinishing & Reglazing</h1>
            <p className="text-xl text-gray-100 max-w-3xl font-jost">
              Professional kitchen countertop refinishing that transforms tile and laminate
              surfaces. Durable, heat-resistant finishes for homes and rental properties.
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
                beforeImage="/images/solo_4.jpg"
                afterImage="/images/solo_4.jpg"
                alt="Kitchen countertop refinishing transformation"
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
                  Kitchen countertop refinishing costs up to 90% less than replacement
                </p>
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History of Kitchen Reglazing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            The History of Kitchen Refinishing in Southern California
          </h2>
          <div className="space-y-6 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Kitchen countertop refinishing developed alongside bathtub reglazing in the 1980s as
              Southern California's aging housing stock required affordable kitchen updates. With
              tile countertops dominating 1970s and 1980s construction, homeowners and property
              managers needed cost-effective solutions for dated, damaged kitchen surfaces.
            </p>
            <p>
              The technique proved especially valuable for rental properties and multi-unit
              complexes throughout Los Angeles, Riverside, and San Bernardino counties. Traditional
              countertop replacement required demolition, new materials, and extended downtime -
              often costing $2,000-$5,000 per kitchen.
            </p>
            <p>
              Professional kitchen refinishing emerged as the practical alternative, restoring tile
              and laminate countertops to like-new condition at a fraction of replacement cost in just 24 hours. This
              rapid, affordable solution became essential for property managers maintaining
              competitive rental units without major renovation expenses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Refinishing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            Why Kitchen Refinishing for Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">90%</div>
              <p className="font-jost text-gray-700">Cost savings vs replacement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">24hr</div>
              <p className="font-jost text-gray-700">Quick tenant turnaround</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">10+yr</div>
              <p className="font-jost text-gray-700">Durable finish lifespan</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Kitchen countertop refinishing delivers exceptional value for rental property owners.
              Instead of expensive countertop replacement between tenants, our professional
              reglazing service restores surfaces in a single day with heat and stain-resistant
              finishes.
            </p>
            <p>
              This efficiency is critical for multi-unit complex managers who need quick turnarounds
              to minimize vacancy periods. Our kitchen refinishing services help property managers
              throughout Southern California maintain modern, appealing units while controlling
              renovation costs.
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
          <h2 className="section-title mb-6">Ready to Refinish Your Kitchen Countertops?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a free quote today. Professional kitchen refinishing with heat-resistant finishes
            and 2-year warranty.
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
