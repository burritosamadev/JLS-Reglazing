import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Bath Vanity Refinishing Services | JLS Reglazing',
  description:
    'Professional bath vanity refinishing in Southern California. Restore your vanity top and basin to a like-new finish without a full bathroom remodel. Free quotes available.',
  alternates: { canonical: 'https://jlsreglazing.com/services/bath-vanity-refinishing' },
  keywords:
    'bath vanity refinishing, vanity top refinishing, bathroom vanity reglazing, vanity resurfacing, cultured marble refinishing, Southern California',
  openGraph: {
    type: 'website',
    title: 'Bath Vanity Refinishing Services | JLS Reglazing',
    description:
      'Professional bath vanity refinishing in Southern California. Restore your vanity top and basin to a like-new finish without a full bathroom remodel. Free quotes available.',
    url: 'https://jlsreglazing.com/services/bath-vanity-refinishing',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bath Vanity Refinishing Services | JLS Reglazing',
    description:
      'Professional bath vanity refinishing in Southern California. Restore your vanity top and basin to a like-new finish without a full bathroom remodel. Free quotes available.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bath Vanity Refinishing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/bath-vanity-refinishing',
  description:
    'Professional bath vanity top and basin refinishing. Update your bathroom vanity with a fresh, durable finish without the cost of replacement.',
  areaServed: 'Southern California',
  serviceType: 'Bath Vanity Refinishing',
}

export default function BathVanityRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Bath Vanity Refinishing"
        subtitle="Refresh your entire bathroom vanity with a seamless, professional refinish. We restore vanity tops and integrated basins to a beautiful, factory-smooth surface, giving your bathroom an updated look without the expense of a full remodel."
        priceRange="$300–$500"
        beforeImage="/images/3_before.webp"
        afterImage="/images/3_after.webp"
        defaultService="Sink/Vanity Reglazing"
        features={[
          'Refinish the entire vanity top and basin in one session',
          'Ideal for cultured marble, porcelain, and laminate vanities',
          'Eliminates yellowing, stains, and surface damage',
          'Seamless, non-porous finish prevents future staining',
          'Custom color matching to complement your bathroom design',
          'No demolition, plumbing changes, or lengthy construction',
        ]}
        faqs={[
          {
            question: 'What materials can be refinished on a bath vanity?',
            answer:
              'We refinish cultured marble, porcelain, ceramic, fiberglass, and laminate vanity tops. The integrated basin and countertop surface are refinished together for a seamless, uniform appearance.',
          },
          {
            question: 'How long does bath vanity refinishing take?',
            answer:
              'Most bath vanity refinishing projects are completed in 3-4 hours. We recommend a 24-hour cure time before using the vanity. This is significantly faster than a full vanity replacement, which can take days or weeks.',
          },
          {
            question: 'Is refinishing better than replacing my bath vanity?',
            answer:
              'In most cases, refinishing is the smarter choice. It costs a fraction of replacement, avoids plumbing and demolition work, and can be completed in a single day. If your vanity cabinet is structurally sound, refinishing the top surface gives you a brand-new look at a fraction of the cost.',
          },
        ]}
        relatedServices={[
          { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Bathtub Enclosure Refinishing', path: '/services/bathtub-enclosure' },
        ]}
      />
    </>
  )
}
