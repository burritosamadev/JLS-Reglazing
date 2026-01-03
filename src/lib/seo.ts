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
    name: 'JL Bath Renovation Services',
    image: 'https://jlsreglazing.com/images/logo.jpg',
    description: 'Professional bathtub and kitchen reglazing services in Southern California. 20+ years experience, 4,000+ units serviced.',
    '@id': 'https://jlsreglazing.com',
    url: 'https://jlsreglazing.com',
    telephone: '+1-310-742-0057',
    priceRange: '$$',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
    },
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
      name: 'JL Bath Renovation Services',
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
      name: 'JL Bath Renovation Services',
    },
    areaServed: {
      '@type': 'City',
      name: county,
    },
  }
}
