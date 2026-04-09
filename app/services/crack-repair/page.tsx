import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Crack & Chip Repair Services | JLS Reglazing',
  description:
    'Expert crack and chip repair for bathtubs, sinks, and countertops in Southern California. Invisible repairs that restore structural integrity. Fast turnaround. Free quotes.',
  alternates: { canonical: 'https://jlsreglazing.com/services/crack-repair' },
  keywords:
    'crack repair, chip repair, bathtub crack repair, sink chip repair, countertop crack repair, porcelain repair, fiberglass repair, Southern California',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Crack & Chip Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/crack-repair',
  description:
    'Professional crack and chip repair for bathtubs, sinks, and countertops. Invisible repairs that restore both appearance and structural integrity.',
  areaServed: 'Southern California',
  serviceType: 'Crack and Chip Repair',
}

export default function CrackRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Crack & Chip Repair"
        subtitle="Do not let cracks and chips ruin your bathtub, sink, or countertop. Our expert repair process restores both structural integrity and a flawless appearance, preventing further damage and saving you from a costly replacement."
        beforeImage="/images/4_before.webp"
        afterImage="/images/4_after.webp"
        defaultService="Repair Cracks or Peeling"
        features={[
          'Invisible repairs that blend seamlessly with the surrounding surface',
          'Restores structural integrity to prevent further cracking',
          'Works on porcelain, fiberglass, acrylic, and cultured marble',
          'Stops water damage caused by cracks penetrating the surface',
          'Fast same-day service for most repairs',
          'Significantly less expensive than full surface replacement',
        ]}
        faqs={[
          {
            question: 'Can cracks in a bathtub really be repaired?',
            answer:
              'Yes. We use professional-grade fillers and bonding agents to repair cracks from the inside out, restoring structural strength. The repair is then finished to match the surrounding surface, making it virtually invisible. For extensive cracking, we may recommend combining crack repair with a full refinish for the best results.',
          },
          {
            question: 'Will the repaired area crack again?',
            answer:
              'Our repairs are designed to be permanent. We use flexible, high-strength materials that bond to the existing surface and can withstand normal daily use. The repaired area is often stronger than the original surface around it.',
          },
          {
            question: 'How quickly can I use my tub or sink after a repair?',
            answer:
              'Most crack and chip repairs cure within 24 hours. We will provide specific care instructions based on the scope of your repair to ensure the best long-term durability.',
          },
        ]}
        relatedServices={[
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
          { name: 'Tub Cut-Out & Foundation Repairs', path: '/services/cut-out-repairs' },
        ]}
      />
    </>
  )
}
