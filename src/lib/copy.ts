// =============================================================================
// CENTRALIZED WEBSITE COPY
// =============================================================================
// All editable text, phone numbers, emails, and business info live here.
// Update this file to change copy across the entire website.
// After editing, commit and push to deploy changes.
// =============================================================================

export const BUSINESS = {
  name: 'JLS Reglazing',
  legalName: 'JL Bathtub Renovation Services',
  founder: 'Jorge Saldana',
  foundingYear: 2004,
  yearsExperience: '20+',
  unitsServiced: '4,000+',
  warrantyYears: '2',
  priceRange: '$300–$600',

  // Phone numbers
  phoneEN: '(310) 876-5600',
  phoneENRaw: '+13108765600',
  phoneENLabel: 'English',

  phoneES: '(909) 501-2797',
  phoneESRaw: '+19095012797',
  phoneESLabel: 'Spanish',

  // Email
  email: 'jorge@jlsreglazing.com',

  // URLs
  url: 'https://jlsreglazing.com',
  logo: '/logo.svg',
  logoLight: '/logo-light.svg',
  ogImage: '/images/1_after.webp',

  // Social
  facebook: 'https://www.facebook.com/profile.php?id=61586186871010',
  instagram: 'https://instagram.com/jlsreglazing',
  tiktok: 'https://tiktok.com/@jlsreglazing',

  // Description
  description: 'Professional bathtub and kitchen reglazing services in Southern California. Over 20 years of hands-on experience with 4,000+ units serviced. Licensed, insured, and backed by a 2-year warranty on all refinishing work.',
  shortDescription: 'Professional bathtub and kitchen reglazing services in Southern California.',

  // Taglines
  tagline: 'Professional Bathtub & Kitchen Refinishing',
  heroSubtitle: 'We work with multi-unit complexes and small home owners to reglaze tubs, bath vanities, kitchen countertops, kitchen sinks, and more. Our tub reglazing services span Los Angeles and San Bernardino counties.',

  // Trust signals
  trustSignals: [
    '20+ Years Experience',
    '4,000+ Units Serviced',
    'Licensed & Insured',
    '2-Year Warranty',
    'Hispanic-Owned & Operated',
    'Free On-Site Quotes',
  ],
} as const

export const SERVICE_AREAS = {
  sanBernardino: {
    name: 'San Bernardino County',
    path: '/san-bernardino-reglazing',
    cities: ['San Bernardino', 'Fontana', 'Rancho Cucamonga', 'Ontario', 'Upland', 'Redlands', 'Rialto', 'Colton', 'Highland', 'Yucaipa', 'Loma Linda', 'Chino', 'Chino Hills', 'Montclair'],
  },
  riverside: {
    name: 'Riverside County',
    path: '/riverside-reglazing',
    cities: ['Riverside', 'Corona', 'Moreno Valley', 'Temecula', 'Murrieta', 'Perris', 'Lake Elsinore', 'Menifee', 'Beaumont', 'Banning', 'San Jacinto', 'Norco', 'Eastvale'],
  },
  hemet: {
    name: 'Hemet',
    path: '/hemet-reglazing',
    cities: ['Hemet', 'San Jacinto', 'Idyllwild', 'Valle Vista', 'East Hemet', 'Anza', 'Mountain Center', 'Garner Valley'],
  },
  losAngeles: {
    name: 'Los Angeles County',
    path: '/los-angeles-reglazing',
    cities: ['Los Angeles', 'Pasadena', 'Long Beach', 'Glendale', 'Burbank', 'West Covina', 'Pomona', 'Covina', 'Azusa', 'Monrovia', 'Arcadia', 'Alhambra', 'Monterey Park', 'El Monte', 'Baldwin Park', 'Glendora', 'La Verne', 'San Dimas', 'Diamond Bar'],
  },
  victorville: {
    name: 'Victorville',
    path: '/victorville-reglazing',
    cities: ['Victorville', 'Hesperia', 'Apple Valley', 'Barstow', 'Adelanto', 'Phelan', 'Lucerne Valley', 'Wrightwood', 'Big Bear Lake'],
  },
} as const

export const SERVICES = [
  {
    name: 'Bathtub Refinishing & Reglazing',
    shortName: 'Bathtub Refinishing',
    path: '/services/bathtub-refinishing',
    description: 'Expert bathtub refinishing for fiberglass, porcelain, cast iron, and ceramic tile surfaces. Transform worn tubs with professional reglazing — fraction of replacement cost.',
    formValue: 'Bathtub Reglazing',
    image: '/images/1_after.jpg',
  },
  {
    name: 'Kitchen Countertop Refinishing',
    shortName: 'Kitchen Refinishing',
    path: '/services/kitchen-refinishing',
    description: 'Kitchen countertop refinishing that restores tile and laminate surfaces. Professional kitchen reglazing delivers durable, heat-resistant finishes for rental units and homes.',
    formValue: 'Kitchen Reglazing',
    image: '/images/solo_4.jpg',
  },
  {
    name: 'Sink Refinishing',
    shortName: 'Sink Refinishing',
    path: '/services/sink-refinishing',
    description: 'Professional sink refinishing for kitchen and bathroom. We reglaze porcelain and stainless steel sinks, removing rust and stains while restoring shine.',
    formValue: 'Sink/Vanity Reglazing',
    image: '/images/2_after.jpg',
  },
  {
    name: 'Bath Vanity Refinishing',
    shortName: 'Bath Vanity',
    path: '/services/bath-vanity-refinishing',
    description: 'Bathroom vanity refinishing and reglazing services. Restore bath vanity surfaces with professional refinishing techniques and durable coatings.',
    formValue: 'Sink/Vanity Reglazing',
    image: '/images/3_after.jpg',
  },
  {
    name: 'Crack & Chip Repair',
    shortName: 'Crack Repair',
    path: '/services/crack-repair',
    description: 'Expert crack and chip repair for bathtubs and countertops. We fix structural damage, weak foundations, and surface imperfections before refinishing.',
    formValue: 'Repair Cracks or Peeling',
    image: '/images/4_after.jpg',
  },
  {
    name: 'Bathtub Enclosure Refinishing',
    shortName: 'Enclosure Refinishing',
    path: '/services/bathtub-enclosure',
    description: 'Complete bathtub enclosure refinishing including tile walls and tub surrounds. Ceramic tile reglazing with mold-resistant, waterproof finishes.',
    formValue: 'Tile Reglazing',
    image: '/images/5_after.jpg',
  },
  {
    name: 'Tub Cut-Out & Foundation Repairs',
    shortName: 'Cut-Out Repairs',
    path: '/services/cut-out-repairs',
    description: 'Accessibility conversions and structural reinforcement for damaged bathtub foundations. Expert tub cut-out and foundation repair services.',
    formValue: 'Bathroom Foundation Repair (cut-outs)',
    image: '/images/6_after.jpg',
  },
] as const

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Process', path: '/process' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const
