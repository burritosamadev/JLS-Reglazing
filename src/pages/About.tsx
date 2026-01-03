import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  StarIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

export default function About() {
  const credentials = [
    { label: '20+ Years Experience', Icon: StarIcon },
    { label: '4,000+ Units Serviced', Icon: CheckBadgeIcon },
    { label: 'Licensed & Insured', Icon: ClipboardDocumentCheckIcon },
    { label: 'Hispanic-Owned Business', Icon: HandRaisedIcon },
    { label: '2-Year Warranty', Icon: ShieldCheckIcon },
    { label: 'Residential & Commercial', Icon: BuildingOffice2Icon },
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
            <h1 className="hero-title mb-6">About JL Bath Renovation Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              Two decades of excellence in bathtub and kitchen reglazing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jorge's Story */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <div className="relative">
                <img
                  src="/images/painter_1.jpg"
                  alt="Jorge Saldana - Founder of JLS Reglazing"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232423] to-transparent p-8 rounded-b-2xl">
                  <h2 className="text-3xl font-orbitron font-bold text-white mb-2">Jorge Saldana</h2>
                  <p className="text-xl text-gray-100 font-jost">
                    Founder & Master Craftsman
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <h2 className="text-3xl font-orbitron font-semibold text-[#232423] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 font-jost text-lg leading-relaxed">
                <p>
                  For over 20 years, Jorge Saldana has been transforming bathrooms and kitchens
                  throughout Southern California. What started as a passion for craftsmanship has
                  grown into a trusted business serving thousands of satisfied customers.
                </p>
                <p>
                  With more than 4,000 units serviced, JL Bath Renovation Services has become
                  synonymous with quality, reliability, and exceptional customer service. Every
                  project receives Jorge's personal attention and expertise, ensuring results that
                  exceed expectations.
                </p>
                <p>
                  As a proud Hispanic-owned and operated business, we bring not just technical
                  excellence, but also a commitment to our community and the values of hard work,
                  integrity, and customer satisfaction that have been our foundation from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-[#232423] mb-4">Our Credentials</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-jost">
              Certified, insured, and committed to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <credential.Icon className="w-16 h-16 text-[#FB8040] mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-semibold text-[#232423]">
                  {credential.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-[#232423] mb-4">Why Choose JLS Reglazing?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-4">
                Experience You Can Trust
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Two decades of hands-on experience means we've seen it all. From standard bathtubs
                to complex commercial projects, we have the expertise to handle any reglazing
                challenge with professional results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Every project comes with our comprehensive 2-year warranty. We use only
                professional-grade materials and proven techniques that ensure long-lasting,
                beautiful results you can count on.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-4">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Save up to <span className="font-bold text-[#FB8040]">90%</span> compared to replacement costs. Our reglazing services deliver
                like-new results at a fraction of the price, making quality bathroom and kitchen
                updates accessible to everyone.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-orbitron font-semibold text-[#232423] mb-4">
                Customer-Focused Service
              </h3>
              <p className="text-gray-700 font-jost leading-relaxed">
                Your satisfaction is our priority. From the initial quote to project completion,
                we provide clear communication, professional service, and exceptional results that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-[#232423] mb-4">Proudly Serving Southern California</h2>
            <p className="text-xl text-gray-700 font-jost">
              San Bernardino County • Riverside County • Hemet • Los Angeles County • Victorville
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 font-jost">
            Experience the difference that 20 years of expertise makes. Get your free quote today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-[#FB8040] px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
