import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BeforeAfterSlider from '../components/molecules/BeforeAfterSlider'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Gallery() {
  const projects = [
    {
      id: 1,
      before: '/images/1_before.jpg',
      after: '/images/1_after.jpg',
      title: 'Bathtub Restoration',
      description: 'Complete bathtub reglazing with chip repair',
    },
    {
      id: 2,
      before: '/images/2_before.jpg',
      after: '/images/2_after.jpg',
      title: 'Kitchen Countertop Refinishing',
      description: 'Full kitchen countertop reglazing transformation',
    },
    {
      id: 3,
      before: '/images/3_before.jpg',
      after: '/images/3_after.jpg',
      title: 'Tile Reglazing',
      description: 'Professional tile surface restoration',
    },
    {
      id: 4,
      before: '/images/4_before.jpg',
      after: '/images/4_after.jpg',
      title: 'Bathtub Enclosure',
      description: 'Complete bathtub enclosure refinishing',
    },
    {
      id: 5,
      before: '/images/5_before.jpg',
      after: '/images/5_after.jpg',
      title: 'Vanity Restoration',
      description: 'Bathroom vanity reglazing and repair',
    },
    {
      id: 6,
      before: '/images/6_before.jpg',
      after: '/images/6_after.jpg',
      title: 'Multi-Unit Property',
      description: 'Commercial property bathroom restoration',
    },
    {
      id: 7,
      before: '/images/7_before.jpg',
      after: '/images/7_after.jpg',
      title: 'Complete Bathroom Reglaze',
      description: 'Full bathroom reglazing project',
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
            <h1 className="hero-title mb-6">Before & After Gallery</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-jost">
              See the transformation. Over 4,000 units serviced with exceptional results.
              Drag the slider to compare before and after.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id}>
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  alt={project.title}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mt-4 text-center"
                >
                  <h3 className="text-xl font-orbitron font-bold text-navy-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-jost">{project.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-orbitron font-bold text-blue-400 mb-2">20+</div>
              <p className="text-xl font-jost">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-blue-400 mb-2">4,000+</div>
              <p className="text-xl font-jost">Units Serviced</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-blue-400 mb-2">100%</div>
              <p className="text-xl font-jost">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-blue-400 mb-2">2-Year</div>
              <p className="text-xl font-jost">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-navy-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-8 h-8 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 font-jost mb-4 italic">
                "Outstanding work! Our bathtub looks brand new. Jorge and his team were
                professional, punctual, and the quality exceeded our expectations."
              </p>
              <p className="font-orbitron font-semibold text-navy-900">
                - San Bernardino Homeowner
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-100 rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-8 h-8 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 font-jost mb-4 italic">
                "Saved thousands compared to replacement. The kitchen countertops look amazing and
                the 2-year warranty gives us peace of mind."
              </p>
              <p className="font-orbitron font-semibold text-navy-900">
                - Riverside Property Manager
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-8 h-8 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 font-jost mb-4 italic">
                "Highly recommend! Jorge's expertise and attention to detail transformed our
                apartment complex bathrooms. Excellent value for money."
              </p>
              <p className="font-orbitron font-semibold text-navy-900">
                - Los Angeles Property Owner
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for a free quote and see how we can transform your space.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-jost font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
