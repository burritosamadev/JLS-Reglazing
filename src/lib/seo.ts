// =============================================================================
// AEO-Optimized Schema Generators - @graph stacked for maximum AI extraction
// =============================================================================

const BUSINESS = {
  name: 'JL Bathtub Renovation Services',
  legalName: 'JL Bathtub Renovation Services',
  url: 'https://jlsreglazing.com',
  telephone: '+1-310-876-5600',
  telephoneSpanish: '+1-909-501-2797',
  email: 'jorge@jlsreglazing.com',
  priceRange: '$300-$600',
  image: 'https://jlsreglazing.com/images/1_after.webp',
  logo: 'https://jlsreglazing.com/logo.svg',
  founder: 'Jorge Saldana',
  foundingYear: 2004,
  description: 'Professional bathtub and kitchen reglazing services in Southern California. Over 20 years of hands-on experience with 4,000+ units serviced. Licensed, insured, and backed by a 2-year warranty on all refinishing work.',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61586186871010',
    'https://instagram.com/jlsreglazing',
    'https://tiktok.com/@jlsreglazing',
    'https://www.yelp.com/biz/jls-reglazing-san-bernardino',
  ],
}

// Stacked @graph schema for homepage — combines all entity types in one block
export const generateHomepageGraphSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite entity (enables sitelinks search box)
    {
      '@type': 'WebSite',
      '@id': `${BUSINESS.url}/#website`,
      url: BUSINESS.url,
      name: BUSINESS.name,
      description: BUSINESS.description,
      publisher: { '@id': `${BUSINESS.url}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BUSINESS.url}/services?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    // LocalBusiness entity (core business info for AI extraction)
    {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      image: BUSINESS.image,
      logo: BUSINESS.logo,
      description: BUSINESS.description,
      url: BUSINESS.url,
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      priceRange: BUSINESS.priceRange,
      foundingDate: `${BUSINESS.foundingYear}`,
      founder: { '@type': 'Person', name: BUSINESS.founder },
      sameAs: BUSINESS.sameAs,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.1083,
        longitude: -117.2898,
      },
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'AdministrativeArea', name: 'San Bernardino County' },
        { '@type': 'AdministrativeArea', name: 'Riverside County' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
        { '@type': 'City', name: 'Hemet' },
        { '@type': 'City', name: 'Victorville' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Reglazing & Refinishing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathtub Reglazing & Refinishing', description: 'Professional bathtub refinishing for fiberglass, porcelain, cast iron, acrylic, and ceramic tile surfaces. Restores worn tubs to like-new condition at a fraction of replacement cost.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Countertop Refinishing', description: 'Kitchen countertop reglazing that restores tile and laminate surfaces with durable, heat-resistant finishes.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sink Refinishing', description: 'Kitchen and bathroom sink reglazing for porcelain and stainless steel surfaces.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bath Vanity Refinishing', description: 'Bathroom vanity reglazing for cultured marble, laminate, and wood surfaces.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crack & Chip Repair', description: 'Structural crack repair, chip repair, and surface restoration for bathtubs and countertops.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathtub Enclosure Refinishing', description: 'Complete tile wall and tub surround reglazing with mold-resistant, waterproof finishes.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tub Cut-Out & Foundation Repairs', description: 'Accessibility conversions and structural reinforcement for damaged bathtub foundations.' } },
        ],
      },
    },
  ],
})

// BreadcrumbList schema for any page
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Service page @graph schema — combines Service + BreadcrumbList + FAQ
export const generateServicePageSchema = (service: {
  name: string
  description: string
  url: string
  breadcrumbs: { name: string; url: string }[]
  faqs: { question: string; answer: string }[]
}) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${service.url}/#service`,
      name: service.name,
      description: service.description,
      url: service.url,
      provider: { '@id': `${BUSINESS.url}/#business` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'San Bernardino County' },
        { '@type': 'AdministrativeArea', name: 'Riverside County' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
      ],
      offers: {
        '@type': 'Offer',
        priceRange: BUSINESS.priceRange,
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: service.breadcrumbs.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
})

// County page @graph schema
export const generateCountySchema = (county: string, cities?: string[]) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: `Bathtub & Kitchen Reglazing in ${county}`,
      provider: { '@id': `${BUSINESS.url}/#business` },
      areaServed: cities
        ? cities.map((city) => ({ '@type': 'City', name: city }))
        : [{ '@type': 'AdministrativeArea', name: county }],
      description: `Professional bathtub and kitchen reglazing services throughout ${county}. Over 20 years experience, 4,000+ units serviced. Licensed, insured, 2-year warranty.`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
        { '@type': 'ListItem', position: 2, name: `${county} Reglazing`, item: `${BUSINESS.url}/${county.toLowerCase().replace(/\s+/g, '-')}-reglazing` },
      ],
    },
  ],
})

// FAQ schema (standalone, used on pages with FAQ sections)
export const generateFAQSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does bathtub reglazing cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bathtub reglazing typically costs between $300 and $600, which is up to 90% less than full bathtub replacement ($1,500–$5,000+). The exact cost depends on tub condition, type of surface (fiberglass, porcelain, cast iron, or acrylic), repairs needed (cracks, chips, cut-outs), and project scope. At JLS Reglazing, we provide free on-site quotes and most projects are completed within 24 hours. All work includes a 2-year warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bathtub reglazing and refinishing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bathtub reglazing and bathtub refinishing are the same professional restoration process. "Reglazing" typically refers to applying a new coating, while "refinishing" is the broader term covering the complete process: surface preparation, crack and chip repair, acid etching, primer application, and applying a durable factory-quality finish. The result is identical — a like-new surface at a fraction of replacement cost. Both terms are used interchangeably in the industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does bathtub reglazing last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional bathtub reglazing lasts 10 to 15 years with proper care. Longevity depends on the quality of preparation, materials used, and how the surface is maintained. Avoid abrasive cleaners, use non-slip mats instead of adhesive strips, and clean with mild soap. JLS Reglazing includes a 2-year warranty on all refinishing projects and uses professional-grade coatings rated for long-term durability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the bathtub refinishing process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most bathtub refinishing projects are completed within 3 to 5 hours of on-site work. The surface is then ready to use after a 48 to 72 hour curing period. This makes reglazing ideal for rental property turnarounds and multi-unit complexes where downtime must be minimized. Full bathtub replacement, by comparison, takes 3 to 5 days and requires plumbing work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you reglaze a fiberglass or acrylic bathtub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Professional reglazing works on all bathtub materials: fiberglass, acrylic, porcelain, cast iron, ceramic tile, and cultured marble. The preparation process is adjusted for each material to ensure proper adhesion. JLS Reglazing has refinished over 4,000 units across all surface types in our 20+ years of operation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does JLS Reglazing serve in Southern California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JLS Reglazing serves San Bernardino County (Fontana, Rancho Cucamonga, Ontario, Upland, Redlands, Rialto), Riverside County (Corona, Moreno Valley, Temecula, Murrieta), Los Angeles County (Pasadena, Long Beach, Glendale, Burbank, Pomona), the Hemet/San Jacinto area, and the High Desert (Victorville, Hesperia, Apple Valley, Barstow). We offer free on-site quotes throughout our service area.',
      },
    },
  ],
})

// HowTo schema for process page
export const generateHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Professional Bathtub Reglazing Works: 7-Step Process',
  description: 'The complete professional bathtub reglazing process used by JLS Reglazing. Most projects are completed in one day with a 48-72 hour cure time. This process works on fiberglass, porcelain, cast iron, acrylic, and ceramic tile surfaces.',
  totalTime: 'PT5H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '300-600' },
  supply: [
    { '@type': 'HowToSupply', name: 'Professional-grade bonding primer' },
    { '@type': 'HowToSupply', name: 'Heat-resistant refinishing coating' },
    { '@type': 'HowToSupply', name: 'Acid etching solution' },
    { '@type': 'HowToSupply', name: 'Crack and chip repair compound' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Surface Preparation & Paint Stripping', text: 'Multi-layer sanding removes old paint, stains, and surface damage. This step ensures the new coating bonds properly to the underlying surface.', position: 1 },
    { '@type': 'HowToStep', name: 'Crack & Chip Repair', text: 'All cracks, chips, and surface damage are repaired using professional-grade materials. This restores structural integrity before refinishing.', position: 2 },
    { '@type': 'HowToStep', name: 'Foundation Repair (if needed)', text: 'For tubs with weak or damaged foundations, cut-out repairs and structural reinforcement are performed to ensure long-term durability.', position: 3 },
    { '@type': 'HowToStep', name: 'Deep Cleaning & Decontamination', text: 'Thorough cleaning removes all debris, oils, soap residue, and contaminants that could prevent proper adhesion.', position: 4 },
    { '@type': 'HowToStep', name: 'Acid Etching', text: 'Professional acid etching creates a micro-rough surface texture that ensures maximum adhesion of the primer and coating layers.', position: 5 },
    { '@type': 'HowToStep', name: 'Primer Application', text: 'A professional-grade bonding primer is applied to create a strong foundation layer between the original surface and the new finish.', position: 6 },
    { '@type': 'HowToStep', name: 'Final Coating & Cure', text: 'Multiple coats of durable, heat-resistant refinishing material are applied for a factory-quality gloss finish. The surface cures for 48-72 hours before use.', position: 7 },
  ],
})

// Legacy exports for backwards compatibility
export const generateLocalBusinessSchema = () => generateHomepageGraphSchema()
export const generateServiceSchema = () => generateHomepageGraphSchema()
