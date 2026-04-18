import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Kitchen Countertop Refinishing Services',
  description:
    'Professional kitchen countertop refinishing in Southern California. Transform worn or dated countertops with a durable, factory-smooth finish. Save thousands vs replacement.',
  alternates: { canonical: 'https://jlsreglazing.com/services/kitchen-refinishing' },
  keywords:
    'kitchen countertop refinishing, countertop resurfacing, kitchen reglazing, countertop restoration, laminate countertop refinishing, Southern California',
  openGraph: {
    type: 'website',
    title: 'Kitchen Countertop Refinishing Services',
    description:
      'Professional kitchen countertop refinishing in Southern California. Transform worn or dated countertops with a durable, factory-smooth finish. Save thousands vs replacement.',
    url: 'https://jlsreglazing.com/services/kitchen-refinishing',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Countertop Refinishing Services',
    description:
      'Professional kitchen countertop refinishing in Southern California. Transform worn or dated countertops with a durable, factory-smooth finish. Save thousands vs replacement.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Countertop Refinishing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/kitchen-refinishing',
  description:
    'Professional kitchen countertop refinishing and resurfacing services. Give your kitchen a fresh, updated look without the cost of full countertop replacement.',
  areaServed: 'Southern California',
  serviceType: 'Kitchen Countertop Refinishing',
}

export default function KitchenRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Kitchen Countertop Refinishing"
        subtitle="Give your kitchen a stunning makeover without the cost and hassle of a full remodel. Our professional countertop refinishing creates a durable, beautiful surface that looks brand new."
        priceRange="$350–$550"
        beforeImage="/images/solo_4_before.webp"
        afterImage="/images/solo_4_after.webp"
        defaultService="Kitchen Reglazing"
        features={[
          'Transform dated laminate or tile countertops affordably',
          'Seamless, factory-smooth finish in your choice of color',
          'Completed in a single day with minimal kitchen downtime',
          'Heat-resistant and scratch-resistant coating',
          'Eliminates grout lines on tile countertops for easy cleaning',
          'Save thousands compared to granite or quartz replacement',
        ]}
        faqs={[
          {
            question: 'What types of countertops can be refinished?',
            answer:
              'We can refinish laminate, tile, cultured marble, and solid surface countertops. Our professional coatings adhere to most existing surfaces, giving you a like-new finish without the cost of tear-out and replacement.',
          },
          {
            question: 'How durable is a refinished kitchen countertop?',
            answer:
              'Our refinished countertops are coated with a high-performance, heat-resistant and scratch-resistant finish that is designed for daily kitchen use. With proper care, the finish can last 7-10 years or more.',
          },
          {
            question: 'Can I use my kitchen the same day?',
            answer:
              'The refinishing process takes about 4-6 hours. We recommend allowing 24 hours of cure time before placing items on the countertop and 48 hours before exposing it to water or heat for the most durable results.',
          },
        ]}
        relatedServices={[
          { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Bath Vanity Refinishing', path: '/services/bath-vanity-refinishing' },
        ]}
      />
    </>
  )
}
