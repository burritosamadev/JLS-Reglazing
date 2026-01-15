import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  keywords?: string
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://jlsreglazing.com/og-image.jpg',
  ogType = 'website',
  keywords,
}: SEOProps) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const currentLang = i18n.language as 'en' | 'es'

  const fullTitle = `${title} | JLS Reglazing`
  const baseUrl = 'https://jlsreglazing.com'

  // Generate alternate language URLs
  const currentPath = location.pathname
  const enPath = currentPath.replace('/es', '') || '/'
  const esPath = currentPath.startsWith('/es') ? currentPath : `/es${currentPath}`

  const canonicalUrl = canonical || `${baseUrl}${currentPath}`

  return (
    <Helmet>
      {/* Language Declaration */}
      <html lang={currentLang} />

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags - CRITICAL FOR MULTILINGUAL SEO */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${enPath}`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}${esPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${enPath}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_US' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'es' ? 'en_US' : 'es_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
