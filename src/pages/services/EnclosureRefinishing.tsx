import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import SEO from '../../components/molecules/SEO'
import BeforeAfterSlider from '../../components/molecules/BeforeAfterSlider'

export default function BathtubEnclosureRefinishing() {
  const features = [
    'Ceramic tile wall refinishing',
    'Fiberglass surround reglazing',
    'Grout restoration and sealing',
    'Water damage repair',
    'Mold and mildew resistant finish',
    '2-year warranty included',
  ]

  const faqs = [
    {
      question: 'How much does bathtub enclosure refinishing cost?',
      answer:
        'Bathtub enclosure refinishing costs up to 90% less than tile replacement. The exact cost depends on size and tile condition. Contact us at (310) 742-0057 for a free quote. Ideal for rental property bathroom updates.',
    },
    {
      question: 'Can you refinish ceramic tile walls?',
      answer:
        'Yes! We refinish ceramic tile bathtub surrounds, restoring grout lines and creating a seamless, waterproof finish. Our tile reglazing process eliminates mold, mildew, and staining.',
    },
    {
      question: 'How long do refinished enclosures last?',
      answer:
        'With proper care, refinished bathtub enclosures last 10+ years. All our enclosure refinishing projects include a 2-year warranty and mold-resistant, waterproof coatings.',
    },
  ]

  const relatedServices = [
    { name: 'Bathtub Refinishing', url: '/services/bathtub-refinishing' },
    { name: 'Kitchen Countertop Refinishing', url: '/services/kitchen-refinishing' },
    { name: 'Crack & Chip Repair', url: '/services/crack-repair' },
  ]

  return (
    <div>
      <SEO
        title="Bathtub Enclosure Refinishing - Professional Tile Surround Reglazing"
        description="Expert bathtub enclosure refinishing for ceramic tile and fiberglass surrounds. Save up to 90% vs replacement. Restore tub walls beautifully. Free quotes."
        keywords="bathtub enclosure refinishing, tile surround reglazing, ceramic tile refinishing, bathtub wall refinishing, tile reglazing"
        canonical="https://jlsreglazing.com/services/bathtub-enclosure"
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
            <h1 className="hero-title mb-6">Bathtub Enclosure Refinishing & Tile Reglazing</h1>
            <p className="text-xl text-gray-100 max-w-3xl font-jost">
              Professional bathtub enclosure refinishing for ceramic tile walls and fiberglass
              surrounds. Restore grout, eliminate mold, create waterproof finish.
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
                alt="Bathtub enclosure refinishing transformation"
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
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
                <p className="font-jost">
                  Professional enclosure refinishing - eliminate mold and restore tile
                </p>
                <p className="font-jost mt-2 text-sm opacity-90">
                  Call (310) 742-0057 for your free quote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History of Enclosure Refinishing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            The History of Bathtub Enclosure Refinishing in Southern California
          </h2>
          <div className="space-y-6 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Bathtub enclosure refinishing emerged in Southern California during the 1980s
              alongside bathtub reglazing services. Ceramic tile bathtub surrounds, ubiquitous in
              1960s-1980s construction, developed persistent mold, grout deterioration, and
              discoloration in rental properties throughout Los Angeles, Riverside, and San
              Bernardino counties.
            </p>
            <p>
              Traditional tile replacement required complete demolition, waterproofing
              installation, new tile work, and often bathtub removal - costing $2,000-$4,000 per
              bathroom and taking weeks to complete. For multi-unit complex managers facing tenant
              turnarounds, this expense and timeline were prohibitive.
            </p>
            <p>
              Professional enclosure refinishing solved this problem by restoring ceramic tile
              walls and fiberglass surrounds in place at a fraction of replacement cost in just 24 hours. This rapid
              approach sealed grout lines, eliminated mold, and created waterproof, mildew-resistant
              finishes - essential for property managers maintaining competitive rental bathrooms
              without renovation downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Refinishing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6 text-center">
            Why Enclosure Refinishing for Rental Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">90%</div>
              <p className="font-jost text-gray-700">Cost savings vs replacement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">24hr</div>
              <p className="font-jost text-gray-700">Quick completion time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-orbitron font-bold text-[#FB8040] mb-2">10+yr</div>
              <p className="font-jost text-gray-700">Waterproof finish lifespan</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
            <p>
              Bathtub enclosure refinishing delivers exceptional value for rental property owners
              and multi-unit complex managers. Instead of expensive tile demolition and
              replacement, our professional reglazing service restores ceramic tile walls and
              fiberglass surrounds in a single day with mold-resistant, waterproof finishes.
            </p>
            <p>
              This efficiency is critical for property managers who need quick turnarounds to
              minimize vacancy periods. Our enclosure refinishing services help property managers
              throughout Southern California maintain clean, modern bathrooms while controlling
              renovation costs and avoiding tenant displacement.
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
          <h2 className="section-title mb-6">Ready to Refinish Your Bathtub Enclosure?</h2>
          <p className="text-xl mb-8 font-jost">
            Get a free quote today. Professional enclosure refinishing with mold-resistant,
            waterproof finish and 2-year warranty.
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
