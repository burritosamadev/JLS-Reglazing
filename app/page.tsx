import type { Metadata } from 'next'
import { generateHomepageGraphSchema } from '@/lib/seo'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Bathtub Reglazing & Kitchen Refinishing in Southern California',
  description: 'Bathtub reglazing costs $300–$600 — up to 90% less than replacement. JLS Reglazing has refinished 4,000+ tubs, sinks, and countertops across San Bernardino, Riverside, and Los Angeles counties. 20+ years experience. 2-year warranty. Free quotes.',
  alternates: { canonical: 'https://jlsreglazing.com/' },
  keywords: 'bathtub reglazing, bathtub refinishing, bathtub reglazing cost, tub reglazing, bathtub reglazing near me, kitchen refinishing, tile reglazing, reglaze bathtub, tub refinishing, bathtub refinishing cost, San Bernardino, Riverside, Los Angeles',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHomepageGraphSchema()) }} />
      {/* FAQPage schema is rendered by FAQSection component — only one instance per page */}
      <HomeClient />
    </>
  )
}
