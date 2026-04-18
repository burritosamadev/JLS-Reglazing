import type { Metadata } from 'next'
import Link from 'next/link'
import BeforeAfterComparison from '@/components/molecules/BeforeAfterComparison'
import QuickQuoteForm from '@/components/organisms/QuickQuoteForm'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import { generateGallerySchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Before & After Reglazing Gallery',
  description:
    'Browse before and after photos of bathtub, sink, vanity, and kitchen refinishing projects across San Bernardino, Riverside, and Los Angeles counties. 4,000+ completed projects.',
  alternates: { canonical: 'https://jlsreglazing.com/gallery' },
  keywords:
    'reglazing before after, bathtub refinishing photos, kitchen reglazing gallery, reglazing results, bathtub transformation photos, San Bernardino, Riverside, Los Angeles',
  openGraph: {
    type: 'website',
    title: 'Before & After Reglazing Gallery',
    description:
      'Browse before and after photos of bathtub, sink, vanity, and kitchen refinishing projects across San Bernardino, Riverside, and Los Angeles counties.',
    url: 'https://jlsreglazing.com/gallery',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before & After Reglazing Gallery',
    description:
      'Before and after photos of 4,000+ bathtub and kitchen refinishing projects across Southern California.',
  },
}

const galleryItems = [
  {
    before: '/images/1_before.webp',
    after: '/images/1_after.webp',
    alt: 'Bathtub Refinishing Transformation',
    caption: 'Worn porcelain bathtub restored to a glossy, factory-quality finish.',
    service: 'Bathtub Refinishing',
    servicePath: '/services/bathtub-refinishing',
  },
  {
    before: '/images/2_before.webp',
    after: '/images/2_after.webp',
    alt: 'Sink Reglazing Restoration',
    caption: 'Stained porcelain sink reglazed to remove rust and restore shine.',
    service: 'Sink Refinishing',
    servicePath: '/services/sink-refinishing',
  },
  {
    before: '/images/3_before.webp',
    after: '/images/3_after.webp',
    alt: 'Bath Vanity Reglazing Makeover',
    caption: 'Dated cultured marble vanity top refinished for a modern look.',
    service: 'Bath Vanity Refinishing',
    servicePath: '/services/bath-vanity-refinishing',
  },
  {
    before: '/images/4_before.webp',
    after: '/images/4_after.webp',
    alt: 'Bathtub Crack & Chip Repair',
    caption: 'Cracks and chips repaired structurally before refinishing.',
    service: 'Crack & Chip Repair',
    servicePath: '/services/crack-repair',
  },
  {
    before: '/images/5_before.webp',
    after: '/images/5_after.webp',
    alt: 'Bathtub Enclosure Refinishing',
    caption: 'Tile wall surround reglazed with a mold-resistant finish.',
    service: 'Enclosure Refinishing',
    servicePath: '/services/bathtub-enclosure',
  },
  {
    before: '/images/6_before.webp',
    after: '/images/6_after.webp',
    alt: 'Tub Cut-Out Foundation Repair',
    caption: 'Accessibility cut-out with structural foundation reinforcement.',
    service: 'Cut-Out Repairs',
    servicePath: '/services/cut-out-repairs',
  },
  {
    before: '/images/7_before.webp',
    after: '/images/7_after.webp',
    alt: 'Kitchen Countertop Reglazing',
    caption: 'Tile kitchen countertop resurfaced to a seamless, heat-resistant finish.',
    service: 'Kitchen Refinishing',
    servicePath: '/services/kitchen-refinishing',
  },
]

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateGallerySchema()) }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Gallery', href: '/gallery' }]} />

      {/* Hero */}
      <section className="bg-[#1B4D7A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Before & After Reglazing Gallery
          </h1>
          <p className="font-jost text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Real results from 4,000+ refinishing projects across San Bernardino, Riverside, and Los Angeles counties. Every photo is from an actual JLS Reglazing project.
          </p>
        </div>
      </section>

      {/* Intro + location context */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] mb-6">
            20+ Years of Transformations Across Southern California
          </h2>
          <p className="font-jost text-lg text-gray-700 leading-relaxed mb-4">
            These before and after photos come from homes, apartments, and multi-unit complexes across the Inland Empire and Los Angeles area — including{' '}
            <Link href="/san-bernardino-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">San Bernardino</Link>,{' '}
            <Link href="/riverside-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Riverside</Link>,{' '}
            <Link href="/los-angeles-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Los Angeles</Link>,{' '}
            <Link href="/hemet-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Hemet</Link>, and{' '}
            <Link href="/victorville-reglazing" className="text-[#1B4D7A] font-semibold hover:underline">Victorville</Link>.
          </p>
          <p className="font-jost text-lg text-gray-700 leading-relaxed">
            Every project is completed in a single day, uses professional-grade coatings rated for 10–15 years of daily use, and comes with a 2-year warranty. Hover or tap any image below to see the service type and project details.
          </p>
        </div>
      </section>

      {/* Gallery Grid — figures with figcaptions (semantic) */}
      <section className="py-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {galleryItems.map((item, index) => (
              <figure key={item.alt} className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <BeforeAfterComparison
                  beforeImage={item.before}
                  afterImage={item.after}
                  alt={item.alt}
                  priority={index < 2}
                />
                <figcaption className="mt-4 text-center">
                  <p className="font-orbitron text-lg font-semibold text-[#2D3748]">{item.alt}</p>
                  <p className="font-jost text-gray-700 mt-1">{item.caption}</p>
                  <Link
                    href={item.servicePath}
                    className="inline-block mt-3 font-jost text-sm text-[#F26522] font-semibold hover:underline"
                  >
                    See {item.service} →
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#2D3748] text-center mb-2">
            Like What You See? Get a Free Quote
          </h2>
          <p className="font-jost text-[#2D3748]/70 text-center mb-8">
            Ready to transform your bathtub, sink, vanity, or kitchen surfaces? We respond within 24 hours with a personalized quote.
          </p>
          <QuickQuoteForm />
        </div>
      </section>
    </>
  )
}
