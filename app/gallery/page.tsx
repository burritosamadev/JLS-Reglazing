import type { Metadata } from 'next'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'

export const metadata: Metadata = {
  title: 'Gallery - Before & After Reglazing Transformations',
  description:
    'See real before and after photos of bathtub, sink, and kitchen reglazing projects by JLS Reglazing. Professional refinishing results across Southern California.',
  alternates: { canonical: 'https://jlsreglazing.com/gallery' },
  keywords:
    'reglazing before after, bathtub refinishing photos, kitchen reglazing gallery, reglazing results, bathtub transformation photos',
  openGraph: {
    title: 'Gallery - Before & After Transformations | JLS Reglazing',
    description:
      'See real before and after photos of professional reglazing projects by JLS Reglazing.',
    url: 'https://jlsreglazing.com/gallery',
  },
}

const galleryItems = [
  {
    before: '/images/1_before.webp',
    after: '/images/1_after.webp',
    alt: 'Bathtub Transformation',
  },
  {
    before: '/images/2_before.webp',
    after: '/images/2_after.webp',
    alt: 'Sink Restoration',
  },
  {
    before: '/images/3_before.webp',
    after: '/images/3_after.webp',
    alt: 'Vanity Makeover',
  },
  {
    before: '/images/4_before.webp',
    after: '/images/4_after.webp',
    alt: 'Crack Repair',
  },
  {
    before: '/images/5_before.webp',
    after: '/images/5_after.webp',
    alt: 'Enclosure Refinishing',
  },
  {
    before: '/images/6_before.webp',
    after: '/images/6_after.webp',
    alt: 'Cut-Out Repair',
  },
  {
    before: '/images/7_before.webp',
    after: '/images/7_after.webp',
    alt: 'Kitchen Countertop',
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Our Work
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            See the transformations for yourself. Every project showcases our commitment to
            quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {galleryItems.map((item, index) => (
              <div key={item.alt}>
                <h2 className="font-orbitron text-xl md:text-2xl font-bold text-[#2D3748] text-center mb-4">
                  {item.alt}
                </h2>
                <BeforeAfterComparison
                  beforeImage={item.before}
                  afterImage={item.after}
                  alt={item.alt}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-2">
            Like What You See? Get a Quote
          </h2>
          <p className="font-jost text-[#2D3748]/70 text-center mb-8">
            Ready to transform your bathtub, sink, or kitchen surfaces? Get a free estimate today.
          </p>
          <QuickQuoteForm />
        </div>
      </section>
    </>
  )
}
