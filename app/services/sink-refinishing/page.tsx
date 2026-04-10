import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Sink Refinishing Services | JLS Reglazing',
  description:
    'Professional sink refinishing in Southern California. Restore stained, chipped, or outdated sinks to a beautiful, like-new finish. Bathroom and kitchen sinks. Free quotes.',
  alternates: { canonical: 'https://jlsreglazing.com/services/sink-refinishing' },
  keywords:
    'sink refinishing, sink reglazing, sink resurfacing, bathroom sink refinishing, kitchen sink refinishing, porcelain sink repair, Southern California',
  openGraph: {
    type: 'website',
    title: 'Sink Refinishing Services | JLS Reglazing',
    description:
      'Professional sink refinishing in Southern California. Restore stained, chipped, or outdated sinks to a beautiful, like-new finish. Bathroom and kitchen sinks. Free quotes.',
    url: 'https://jlsreglazing.com/services/sink-refinishing',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sink Refinishing Services | JLS Reglazing',
    description:
      'Professional sink refinishing in Southern California. Restore stained, chipped, or outdated sinks to a beautiful, like-new finish. Bathroom and kitchen sinks. Free quotes.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sink Refinishing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/sink-refinishing',
  description:
    'Professional sink refinishing and reglazing for bathroom and kitchen sinks. Eliminate stains, chips, and wear with a durable new finish.',
  areaServed: 'Southern California',
  serviceType: 'Sink Refinishing',
}

export default function SinkRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Sink Refinishing"
        subtitle="Bring your bathroom or kitchen sink back to life with professional refinishing. We eliminate stains, chips, and discoloration to give you a beautiful, like-new surface without the plumbing costs of a full replacement."
        beforeImage="/images/2_before.webp"
        afterImage="/images/2_after.webp"
        defaultService="Sink/Vanity Reglazing"
        features={[
          'Works on porcelain, cast iron, fiberglass, and cultured marble sinks',
          'Eliminates stubborn stains, rust, and mineral deposits',
          'Quick turnaround with minimal disruption to your routine',
          'No plumbing modifications or tear-out required',
          'Wide selection of colors to match your decor',
          'Fraction of the cost of sink replacement and re-plumbing',
        ]}
        faqs={[
          {
            question: 'Can any type of sink be refinished?',
            answer:
              'We refinish most sink types including porcelain, cast iron, fiberglass, and cultured marble sinks. Whether it is a pedestal sink, drop-in, undermount, or vanity-integrated basin, our process works on virtually all bathroom and kitchen sinks.',
          },
          {
            question: 'Will refinishing fix chips and cracks in my sink?',
            answer:
              'Yes. Before applying the new finish, we repair any chips, cracks, or surface damage. The result is a smooth, seamless surface that looks and feels like a brand-new sink.',
          },
          {
            question: 'How should I care for my refinished sink?',
            answer:
              'Use non-abrasive cleaners and a soft cloth or sponge for regular cleaning. Avoid abrasive scrub pads, bleach, and drain cleaners that contain lye. With proper care, your refinished sink will stay beautiful for years.',
          },
        ]}
        relatedServices={[
          { name: 'Bath Vanity Refinishing', path: '/services/bath-vanity-refinishing' },
          { name: 'Kitchen Countertop Refinishing', path: '/services/kitchen-refinishing' },
          { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
        ]}
      />
    </>
  )
}
