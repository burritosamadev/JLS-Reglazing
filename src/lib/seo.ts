interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  image: string
  description: string
  '@id': string
  url: string
  telephone: string
  priceRange: string
  address: {
    '@type': string
    addressRegion: string
    addressCountry: string
  }
  geo?: {
    '@type': string
    latitude: number
    longitude: number
  }
  areaServed: Array<{ '@type': string; name: string }>
  openingHoursSpecification?: {
    '@type': string
    dayOfWeek: string[]
    opens: string
    closes: string
  }
}

interface ServiceSchema {
  '@context': string
  '@type': string
  serviceType: string
  provider: {
    '@type': string
    name: string
  }
  areaServed: string[]
  hasOfferCatalog: {
    '@type': string
    name: string
    itemListElement: Array<{
      '@type': string
      itemOffered: {
        '@type': string
        name: string
        description: string
      }
    }>
  }
}

export const generateLocalBusinessSchema = (): LocalBusinessSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JL Bathtub Renovation Services',
    image: 'https://jlsreglazing.com/images/logo.jpg',
    description: 'Professional bathtub and kitchen reglazing services in Southern California. 20+ years experience, 4,000+ units serviced.',
    '@id': 'https://jlsreglazing.com',
    url: 'https://jlsreglazing.com',
    telephone: '+1-310-742-0057',
    priceRange: '$300-$600',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'San Bernardino' },
      { '@type': 'City', name: 'Riverside' },
      { '@type': 'City', name: 'Hemet' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Victorville' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  }
}

export const generateServiceSchema = (): ServiceSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bathtub Reglazing and Refinishing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'JL Bathtub Renovation Services',
    },
    areaServed: [
      'San Bernardino County',
      'Riverside County',
      'Los Angeles County',
      'Hemet',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reglazing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bathtub Reglazing',
            description: 'Professional bathtub refinishing and restoration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kitchen Countertop Reglazing',
            description: 'Restore kitchen surfaces at fraction of replacement cost',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sink Refinishing',
            description: 'Kitchen and bathroom sink reglazing services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Crack and Chip Repair',
            description: 'Professional repair for all sizes of cracks and chips',
          },
        },
      ],
    },
  }
}

export const generateCountySchema = (county: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Bathtub Reglazing in ${county}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'JL Bathtub Renovation Services',
    },
    areaServed: {
      '@type': 'City',
      name: county,
    },
  }
}

export const generateFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between bathtub reglazing and refinishing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bathtub reglazing and bathtub refinishing are the same professional restoration process. While some use "reglazing" to specifically describe the application of a new coating, refinishing is the broader term that encompasses the entire process: surface preparation, repairs (such as chips, cracks, and tub cut outs), acid etching, and applying a durable finish. The result is always the same: a like-new surface at a fraction of replacement cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does bathtub refinishing cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bathtub refinishing costs up to 90% less than full replacement. The exact cost depends on the condition of your tub, repairs needed, and project scope. Contact us at (310) 742-0057 for a free quote. Most bathtub reglazing projects are completed within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does bathtub reglazing last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With proper care, professional bathtub refinishing lasts 10-15 years or more. All our bathtub and kitchen reglazing projects come with a comprehensive 2-year warranty. We use only professional-grade materials and proven techniques for long-lasting, durable results.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the refinishing process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most bathtub and kitchen refinishing projects are completed within 24 hours. This makes our service perfect for rental property turnarounds and multi-unit complexes. The surface is ready to use after proper curing time (typically 48-72 hours).',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We proudly serve Southern California including San Bernardino County, Riverside County, Los Angeles County, Hemet, and Victorville. With over 20 years of experience and 4,000+ units serviced, JLS Reglazing is your trusted local bathtub and kitchen refinishing expert.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you refinish fiberglass and acrylic tubs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We refinish all bathtub types including fiberglass, acrylic, porcelain, cast iron, and tile. Our professional reglazing process works on any bathtub material and includes crack repair, chip repair, and tub cut out foundation repairs.',
        },
      },
    ],
  }
}

export const generateHowToSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Professional Bathtub Refinishing Process',
    description: 'Learn the 7-step professional bathtub reglazing process used by JLS Reglazing to restore bathtubs to like-new condition.',
    totalTime: 'PT24H',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Surface Preparation and Paint Stripping',
        text: 'Multi-layer sanding to remove old paint and prepare the surface for refinishing.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Crack and Chip Repair',
        text: 'Professional repair of all cracks, chips, and surface damage using high-grade materials.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Foundation Repair (if needed)',
        text: 'Tub cut out and foundation repairs for weak or damaged bathtub structures.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Deep Cleaning',
        text: 'Thorough cleaning to remove all debris, oils, and contaminants.',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Acid Etching',
        text: 'Professional acid etching to ensure maximum adhesion of the new coating.',
        position: 5,
      },
      {
        '@type': 'HowToStep',
        name: 'Primer Application',
        text: 'Application of professional-grade bonding primer for long-lasting results.',
        position: 6,
      },
      {
        '@type': 'HowToStep',
        name: 'Final Coating',
        text: 'Multiple coats of durable, heat-resistant refinishing material for a factory-quality finish.',
        position: 7,
      },
    ],
  }
}
