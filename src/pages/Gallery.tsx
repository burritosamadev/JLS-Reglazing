import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BeforeAfterSlider from '../components/molecules/BeforeAfterSlider'
import SEO from '../components/molecules/SEO'

export default function Gallery() {
  const projects = [
    {
      id: 1,
      before: '/images/1_before.webp',
      after: '/images/1_after.webp',
      title: 'Bathtub Refinishing with Foundation Repair',
      description: 'Severe damage restoration including peeling paint removal, tub cut-out repair, and tile wall refinishing',
      alt: 'Bathtub refinishing before and after - heavily damaged tub with foundation repair and tile wall reglazing in San Bernardino',
    },
    {
      id: 2,
      before: '/images/2_before.webp',
      after: '/images/2_after.webp',
      title: 'Bathtub Enclosure Refinishing with Tile Surround',
      description: 'Complete jacuzzi tub and tile surround reglazing - grout restoration and surface refinishing',
      alt: 'Bathtub enclosure refinishing before and after - jacuzzi tub with tile surround professional reglazing in Riverside',
    },
    {
      id: 3,
      before: '/images/3_before.webp',
      after: '/images/3_after.webp',
      title: 'Bathtub Refinishing - Stain and Mildew Removal',
      description: 'Professional bathtub reglazing with fiberglass surround restoration and caulk line repair',
      alt: 'Bathtub refinishing before and after - stained tub and surround restored to pristine condition in Los Angeles',
    },
    {
      id: 4,
      before: '/images/4_before.webp',
      after: '/images/4_after.webp',
      title: '',
      description: '',
      alt: 'Bathtub refinishing project before and after transformation',
    },
    {
      id: 5,
      before: '/images/5_before.webp',
      after: '/images/5_after.webp',
      title: '',
      description: '',
      alt: 'Refinishing project before and after transformation',
    },
    {
      id: 6,
      before: '/images/6_before.webp',
      after: '/images/6_after.webp',
      title: '',
      description: '',
      alt: 'Refinishing project before and after transformation',
    },
    {
      id: 7,
      before: '/images/7_before.webp',
      after: '/images/7_after.webp',
      title: '',
      description: '',
      alt: 'Refinishing project before and after transformation',
    },
  ]

  return (
    <div>
      <SEO
        title="Before & After Gallery - Bathtub & Kitchen Refinishing Results"
        description="See our bathtub and kitchen refinishing transformations. 4,000+ units serviced across Southern California. Professional reglazing results with 2-year warranty."
        keywords="bathtub refinishing before after, kitchen reglazing gallery, bathtub reglazing results, refinishing photos, Southern California"
        canonical="https://jlsreglazing.com/gallery"
      />
      {/* Hero Section */}
      <section className="bg-neutral-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Before & After Gallery
            </h1>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
              See the amazing transformations we've achieved for over 4,000 satisfied customers
            </p>
          </div>
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
                  alt={project.alt}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mt-4 text-center"
                >
                  <h3 className="text-xl font-orbitron font-bold text-[#232423] mb-2">
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
      <section className="py-20 bg-[#232423] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">20+</div>
              <p className="text-xl font-jost">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">4,000+</div>
              <p className="text-xl font-jost">Units Serviced</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">24-Hour</div>
              <p className="text-xl font-jost">Turnaround</p>
            </div>
            <div>
              <div className="text-5xl font-orbitron font-bold text-[#FB8040] mb-2">2-Year</div>
              <p className="text-xl font-jost">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FB8040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready for Your Own Transformation?</h2>
          <p className="text-xl mb-8 font-jost">
            Contact us today for a free quote and see how we can transform your space.
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
