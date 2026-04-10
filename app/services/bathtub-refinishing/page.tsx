import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Bathtub Refinishing & Reglazing Services | JLS Reglazing',
  description:
    'Professional bathtub refinishing and reglazing in Southern California. Restore your tub to a like-new finish in just one day. Save up to 90% vs replacement. Free quotes.',
  alternates: { canonical: 'https://jlsreglazing.com/services/bathtub-refinishing' },
  keywords:
    'bathtub refinishing, bathtub reglazing, tub resurfacing, bathtub restoration, bathtub repair, Southern California bathtub refinishing',
  openGraph: {
    type: 'website',
    title: 'Bathtub Refinishing & Reglazing Services | JLS Reglazing',
    description:
      'Professional bathtub refinishing and reglazing in Southern California. Restore your tub to a like-new finish in just one day. Save up to 90% vs replacement. Free quotes.',
    url: 'https://jlsreglazing.com/services/bathtub-refinishing',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathtub Refinishing & Reglazing Services | JLS Reglazing',
    description:
      'Professional bathtub refinishing and reglazing in Southern California. Restore your tub to a like-new finish in just one day. Save up to 90% vs replacement. Free quotes.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathtub Refinishing & Reglazing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/bathtub-refinishing',
  description:
    'Professional bathtub refinishing and reglazing services. Restore worn, stained, or outdated bathtubs to a factory-smooth finish at a fraction of the replacement cost.',
  areaServed: 'Southern California',
  serviceType: 'Bathtub Refinishing',
}

export default function BathtubRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Bathtub Refinishing & Reglazing"
        subtitle="Restore your worn, stained, or outdated bathtub to a brilliant, factory-smooth finish in just one day. Our professional reglazing process saves you up to 90% compared to a full tub replacement."
        beforeImage="/images/1_before.webp"
        afterImage="/images/1_after.webp"
        defaultService="Bathtub Reglazing"
        features={[
          'Completed in just 3-5 hours with a 24-hour cure time',
          'Fraction of the cost of a full bathtub replacement',
          'Eliminates stains, chips, and discoloration',
          'Choose from a wide range of colors and finishes',
          'Durable coating lasts 10-15 years with proper care',
          'Eco-friendly alternative to landfill waste from tear-outs',
        ]}
        faqs={[
          {
            question: 'How long does bathtub refinishing take?',
            answer:
              'The refinishing process typically takes 3-5 hours. After application, the tub needs 24 hours to fully cure before it can be used. We recommend waiting the full cure time for the best long-term results.',
          },
          {
            question: 'How long does a refinished bathtub last?',
            answer:
              'With proper care and maintenance, a professionally refinished bathtub can last 10-15 years or more. We recommend using non-abrasive cleaners and avoiding harsh chemicals to maximize the lifespan of your new finish.',
          },
          {
            question: 'Can you change the color of my bathtub?',
            answer:
              'Yes! One of the great benefits of bathtub refinishing is the ability to choose from a wide range of colors. Whether you want a classic white, almond, bone, or a custom color, we can transform your tub to match your updated bathroom design.',
          },
        ]}
        relatedServices={[
          { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
          { name: 'Bathtub Enclosure Refinishing', path: '/services/bathtub-enclosure' },
          { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
        ]}
      />
    </>
  )
}
