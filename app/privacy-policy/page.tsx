import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
  description:
    'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including SMS consent, analytics, cookies, and data handling practices.',
  alternates: { canonical: 'https://jlsreglazing.com/privacy-policy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
    description:
      'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including SMS consent, analytics, cookies, and data handling practices.',
    url: 'https://jlsreglazing.com/privacy-policy',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
    description:
      'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including SMS consent, analytics, cookies, and data handling practices.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy-policy' }]} />
      <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-[#2D3748] mb-8">
          Privacy Policy
        </h1>
        <div className="font-jost text-[#2D3748]/80 leading-relaxed space-y-6">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <p>
            JL Bathtub Renovation Services (&quot;JLS Reglazing,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit our website at{' '}
            <Link href="/" className="text-[#1B4D7A] hover:underline">
              jlsreglazing.com
            </Link>{' '}
            or interact with our services.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and
              service address when you submit a quote request or contact form.
            </li>
            <li>
              <strong>Project Information:</strong> Details about your reglazing project,
              including service type and property details.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website,
              including pages visited, time spent, and referring sources.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, and device
              type for analytics purposes.
            </li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your quote requests and inquiries</li>
            <li>To provide and improve our reglazing services</li>
            <li>To send appointment confirmations and service updates</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            SMS/Text Messaging Consent
          </h2>
          <p>
            By providing your phone number and opting in to SMS communications, you consent to
            receive text messages from JLS Reglazing related to your service inquiry, appointment
            scheduling, and project updates. Message and data rates may apply. Message frequency
            varies.
          </p>
          <p>
            You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any
            message. For help, reply <strong>HELP</strong> or contact us at{' '}
            <Link
              href="mailto:jorge@jlsreglazing.com"
              className="text-[#1B4D7A] hover:underline"
            >
              jorge@jlsreglazing.com
            </Link>
            .
          </p>
          <p>
            <strong>
              We do not sell, rent, or share your phone number or SMS consent information with
              third parties or affiliates for marketing purposes.
            </strong>
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your information only with
            trusted service providers who assist us in operating our website and conducting
            business (such as form processing and analytics), and only when they agree to keep
            your information confidential.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Cookies and Analytics
          </h2>
          <p>
            Our website may use cookies and analytics services (such as Google Analytics and
            Plausible) to understand how visitors use our site. These tools collect anonymous
            usage data to help us improve our services. You can control cookie preferences
            through your browser settings.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of SMS communications at any time</li>
            <li>Opt out of analytics tracking</li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none space-y-1">
            <li>
              Email:{' '}
              <Link
                href="mailto:jorge@jlsreglazing.com"
                className="text-[#1B4D7A] hover:underline"
              >
                jorge@jlsreglazing.com
              </Link>
            </li>
            <li>
              Phone:{' '}
              <Link href="tel:+13108765600" className="text-[#1B4D7A] hover:underline">
                (310) 876-5600
              </Link>
            </li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on
            this page with an updated effective date. We encourage you to review this policy
            periodically.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
