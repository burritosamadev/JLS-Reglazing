import type { Metadata } from 'next'
import { Orbitron, Roboto, Jost } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import TopBar from '@/components/organisms/TopBar'
import Navigation from '@/components/organisms/Navigation'
import Footer from '@/components/organisms/Footer'
import MobileCtaBar from '@/components/organisms/MobileCtaBar'
import PlausibleScript from '@/components/atoms/PlausibleScript'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jlsreglazing.com'),
  title: {
    default: 'Professional Bathtub & Kitchen Refinishing | JLS Reglazing',
    template: '%s | JLS Reglazing',
  },
  description: 'Expert bathtub and kitchen reglazing services in Southern California. 20+ years experience, 4,000+ units serviced. Licensed, insured, 2-year warranty. Save 90% vs replacement.',
  keywords: 'bathtub reglazing, bathtub refinishing, kitchen reglazing, kitchen refinishing, San Bernardino, Riverside, Los Angeles, tile refinishing, porcelain refinishing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jlsreglazing.com',
    siteName: 'JLS Reglazing',
    title: 'Professional Bathtub & Kitchen Refinishing | JLS Reglazing',
    description: 'Expert bathtub and kitchen reglazing services in Southern California. 20+ years experience, 4,000+ units serviced.',
    images: [{ url: '/images/1_after.webp', width: 1200, height: 630, alt: 'JLS Reglazing - Professional Refinishing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Bathtub & Kitchen Refinishing | JLS Reglazing',
    description: 'Expert bathtub and kitchen reglazing services in Southern California.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto.variable} ${jost.variable}`}>
      <body className="font-roboto min-h-screen flex flex-col">
        <div className="sticky top-0 z-50 will-change-transform" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          <TopBar />
          <Navigation />
        </div>
        <main className="flex-grow pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <PlausibleScript />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
