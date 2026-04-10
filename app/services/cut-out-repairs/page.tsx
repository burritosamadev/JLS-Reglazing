import type { Metadata } from 'next'
import ServicePageContent from '@/components/templates/ServicePageContent'

export const metadata: Metadata = {
  title: 'Tub Cut-Out & Foundation Repair Services | JLS Reglazing',
  description:
    'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
  alternates: { canonical: 'https://jlsreglazing.com/services/cut-out-repairs' },
  keywords:
    'tub cut-out, bathtub cut-out conversion, bathroom foundation repair, tub to walk-in conversion, accessibility bathtub, bathtub structural repair, Southern California',
  openGraph: {
    type: 'website',
    title: 'Tub Cut-Out & Foundation Repair Services | JLS Reglazing',
    description:
      'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
    url: 'https://jlsreglazing.com/services/cut-out-repairs',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tub Cut-Out & Foundation Repair Services | JLS Reglazing',
    description:
      'Professional tub cut-out conversions and bathroom foundation repairs in Southern California. Improve accessibility and fix structural issues. Free quotes available.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tub Cut-Out & Foundation Repairs',
  provider: {
    '@type': 'LocalBusiness',
    name: 'JLS Reglazing',
    url: 'https://jlsreglazing.com',
  },
  url: 'https://jlsreglazing.com/services/cut-out-repairs',
  description:
    'Professional tub cut-out conversions for easier access and bathroom foundation repairs. Improve safety, accessibility, and structural integrity.',
  areaServed: 'Southern California',
  serviceType: 'Tub Cut-Out and Foundation Repair',
}

export default function CutOutRepairsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent
        title="Tub Cut-Out & Foundation Repairs"
        subtitle="Improve bathroom accessibility with a professional tub cut-out conversion, or restore structural integrity with our foundation repair services. These specialized solutions address safety concerns and structural issues without requiring a full bathroom renovation."
        priceRange="$400–$600"
        beforeImage="/images/6_before.webp"
        afterImage="/images/6_after.webp"
        defaultService="Bathroom Foundation Repair (cut-outs)"
        features={[
          'Low step-in tub cut-out for improved accessibility and safety',
          'Ideal for seniors and individuals with limited mobility',
          'Foundation repairs address soft spots, rot, and structural weakness',
          'Watertight seal prevents future water damage to subfloor',
          'Can be combined with refinishing for a complete restoration',
          'Far more affordable than full bathtub or bathroom replacement',
        ]}
        faqs={[
          {
            question: 'What is a tub cut-out conversion?',
            answer:
              'A tub cut-out involves removing a section of the bathtub wall to create a lower entry point, making it much easier to step in and out. A fitted insert is then bonded and sealed into place to create a watertight, finished opening. This is a popular solution for aging in place and improving bathroom safety.',
          },
          {
            question: 'What kind of foundation issues can you repair?',
            answer:
              'We repair soft or rotted subfloor beneath bathtubs, fix structural support issues, and restore the foundation that your tub sits on. Water damage over time can weaken the floor structure, and our repairs address this to prevent further deterioration and ensure your tub is safely supported.',
          },
          {
            question: 'Can I still take baths after a tub cut-out?',
            answer:
              'A standard tub cut-out is designed primarily for shower use, as the lowered wall means the tub cannot be filled to its original depth. However, a watertight dam insert can be added that allows for partial filling. We will discuss your needs during the consultation to recommend the best approach.',
          },
        ]}
        relatedServices={[
          { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
          { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
          { name: 'Bathtub Enclosure Refinishing', path: '/services/bathtub-enclosure' },
        ]}
      />
    </>
  )
}
