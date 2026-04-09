import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Bathtub Enclosure Refinishing Services | JLS Reglazing',
  description:
    'Professional bathtub enclosure and tile surround refinishing in Southern California. Refresh your tub surround without costly tile replacement. Free quotes available.',
  alternates: { canonical: 'https://jlsreglazing.com/services/bathtub-enclosure' },
  keywords:
    'bathtub enclosure refinishing, tile surround reglazing, tub surround refinishing, shower tile refinishing, tile reglazing, Southern California',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathtub Enclosure Refinishing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/bathtub-enclosure',
  description:
    'Professional bathtub enclosure and tile surround refinishing. Update your tub surround and shower tiles with a fresh, durable finish.',
  areaServed: 'Southern California',
  serviceType: 'Bathtub Enclosure Refinishing',
}

export default function BathtubEnclosurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Bathtub Enclosure Refinishing"
        subtitle="Transform your dated or worn bathtub enclosure and tile surround with a fresh, seamless finish. Our professional reglazing process updates the look of your entire tub area without the mess and expense of tile demolition."
        beforeImage="/images/5_before.webp"
        afterImage="/images/5_after.webp"
        defaultService="Tile Reglazing"
        features={[
          'Refinish tub surround and wall tiles together for a unified look',
          'Eliminates grout discoloration and mildew staining',
          'Seamless, non-porous surface is easier to clean and maintain',
          'No tile demolition, dust, or lengthy construction',
          'Available in a variety of colors and finishes',
          'Completed in a single day, ready to use within 24-48 hours',
        ]}
        faqs={[
          {
            question: 'Can you refinish tile walls around a bathtub?',
            answer:
              'Absolutely. We refinish ceramic, porcelain, and fiberglass tile surrounds as well as the bathtub itself. The entire enclosure can be done together for a clean, cohesive appearance. Grout lines are sealed and the surface becomes smooth and easy to maintain.',
          },
          {
            question: 'How does enclosure refinishing compare to re-tiling?',
            answer:
              'Refinishing is significantly faster, cleaner, and more affordable than re-tiling. A typical enclosure refinish takes one day, whereas a full tile replacement can take a week or more and costs several times as much. Refinishing also avoids the dust and debris of demolition.',
          },
          {
            question: 'Will the refinished enclosure resist mold and mildew?',
            answer:
              'Yes. The refinished surface is non-porous, which means water and moisture cannot penetrate it. This makes it highly resistant to mold, mildew, and staining, and much easier to keep clean than original grout and tile.',
          },
        ]}
        relatedServices={[
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Bath Vanity Refinishing', path: '/services/bath-vanity-refinishing' },
          { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
        ]}
      />
    </>
  )
}
