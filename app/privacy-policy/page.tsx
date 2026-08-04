// NOTE: This page is a plain-English template covering our data practices, including
// the QuickBooks Online data-handling disclosures required for Intuit's production
// onboarding. It is not legal advice. Have it reviewed by qualified legal counsel
// before relying on it.

import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import { BUSINESS } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
  description:
    'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including QuickBooks Online data, CRM syncing, SMS consent, analytics, and your privacy rights.',
  alternates: { canonical: 'https://jlsreglazing.com/privacy-policy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
    description:
      'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including QuickBooks Online data, CRM syncing, SMS consent, analytics, and your privacy rights.',
    url: 'https://jlsreglazing.com/privacy-policy',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - JLS Reglazing | Data & SMS Policy',
    description:
      'Privacy Policy for JLS Reglazing. Learn how we collect, use, and protect your personal information including QuickBooks Online data, CRM syncing, SMS consent, analytics, and your privacy rights.',
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
            <strong>Effective Date:</strong> August 3, 2026
            <br />
            <strong>Last updated:</strong> August 3, 2026
          </p>

          <p>
            JL Bathtub Renovation Services (&quot;JLS Reglazing,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit our website at{' '}
            <Link href="/" className="text-[#1B4D7A] hover:underline">
              jlsreglazing.com
            </Link>
            , interact with our services, or become a customer whose records we manage in our
            accounting and customer relationship systems. Your use of our website and services is
            also covered by our{' '}
            <Link href="/terms" className="text-[#1B4D7A] hover:underline">
              Terms of Service
            </Link>
            .
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
            <li>
              <strong>Business and Accounting Data from QuickBooks Online:</strong> When you
              become a customer, we create and maintain records in QuickBooks Online, our
              accounting platform. Through our authorized connection to our own QuickBooks
              Online company file, our integration accesses customer names, contact details
              (email address and phone number), company or property management names, billing
              and service addresses, estimates, invoices, payments, and related transaction
              records.
            </li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your quote requests and inquiries</li>
            <li>To provide and improve our reglazing services</li>
            <li>To send appointment confirmations and service updates</li>
            <li>
              To operate our business — preparing quotes, scheduling jobs, invoicing, collecting
              payment, and keeping an accurate service history for your fixtures
            </li>
            <li>
              To keep our records consistent by syncing customer and job information between
              QuickBooks Online and our customer relationship management (CRM) system, HubSpot,
              so that contact details, service history, and billing status stay accurate and up
              to date
            </li>
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
            QuickBooks Online (Intuit) Data
          </h2>
          <p>
            We use QuickBooks Online, a product of Intuit Inc., as our accounting platform. Our
            integration is an internal one: it connects only to our own QuickBooks Online company
            file, using an authorized connection that we control and can revoke at any time. We
            do not access any other business&apos;s QuickBooks data.
          </p>
          <p>We handle data obtained from QuickBooks Online as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>We do not sell, rent, or license QuickBooks or Intuit data</strong> to
              anyone, for any purpose.
            </li>
            <li>
              <strong>
                We do not use QuickBooks or Intuit data for third-party advertising, ad
                targeting, retargeting, or building advertising profiles.
              </strong>
            </li>
            <li>
              We use it only to operate our own business — managing customer records, estimates,
              invoices, payments, and job history — and to keep those records in sync with our
              CRM.
            </li>
            <li>
              We access only the data we need for those purposes, and we limit access to
              authorized personnel.
            </li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            How We Share Information
          </h2>
          <p>
            <strong>We do not sell your personal information.</strong> We share information only
            with the service providers we rely on to run our business, and only to the extent
            needed to operate the service. Those providers are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Intuit / QuickBooks Online</strong> — our accounting platform, where
              customer, estimate, invoice, and payment records are maintained.
            </li>
            <li>
              <strong>HubSpot</strong> — our CRM, where we keep customer contact details and job
              history so we can quote, schedule, and follow up on work.
            </li>
            <li>
              <strong>Google</strong> — used to receive and store website quote request
              submissions, and for website analytics.
            </li>
            <li>
              <strong>Plausible</strong> — privacy-focused website analytics.
            </li>
          </ul>
          <p>
            These providers are permitted to use the information only to provide services to us,
            and are bound to keep it confidential. We do not share your information with third
            parties for their own marketing purposes.
          </p>
          <p>
            We may also disclose information when required by law, subpoena, or other legal
            process, or where necessary to protect our rights, safety, or property.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Encryption in transit.</strong> Our website is served over HTTPS/TLS, and
              all connections to QuickBooks Online and HubSpot are made over encrypted channels.
            </li>
            <li>
              <strong>Protected credentials.</strong> Access tokens for the QuickBooks Online and
              HubSpot integrations are stored in restricted server-side environment
              configuration. They are never exposed in the browser or in our website code, and
              they can be revoked at any time.
            </li>
            <li>
              <strong>Limited access.</strong> Access to customer and accounting records is
              restricted to authorized personnel who need it to do their job.
            </li>
            <li>
              <strong>Vendor safeguards.</strong> We rely on established providers (Intuit,
              HubSpot, Google, Vercel) that maintain their own security programs.
            </li>
          </ul>
          <p>
            However, no method of transmission over the internet or method of electronic storage
            is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Data Retention and Deletion
          </h2>
          <p>
            We keep personal information only as long as we need it for the purposes described in
            this policy — providing our services, honoring our workmanship warranty, and meeting
            our legal, tax, and accounting obligations. Quote requests that do not become jobs
            are kept only as long as needed to follow up.
          </p>
          <p>
            <strong>
              If our QuickBooks Online integration is disconnected, we stop accessing and using
              QuickBooks data immediately, and we delete or de-identify copies of that data held
              in our own systems
            </strong>{' '}
            — except where we are required to retain records to comply with the law, such as tax
            and accounting recordkeeping requirements, or to resolve an active dispute.
            Revoking the connection from within QuickBooks Online terminates our access.
          </p>
          <p>
            You can ask us to delete personal information we hold about you at any time using the
            contact details below. We will honor the request except where we are legally required
            to keep the record.
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
            <li>
              <strong>Know and access</strong> — request a copy of the personal information we
              hold about you and learn how we have used and shared it
            </li>
            <li>
              <strong>Correct</strong> — ask us to fix inaccurate personal information
            </li>
            <li>
              <strong>Delete</strong> — ask us to delete personal information we hold about you,
              including records held through our QuickBooks Online and HubSpot integrations,
              subject to legal retention requirements
            </li>
            <li>
              <strong>Data portability</strong> — receive your information in a portable format
            </li>
            <li>
              <strong>Opt out of sale or sharing</strong> — note that we do not sell your
              personal information and do not share it for cross-context behavioral advertising,
              so there is nothing to opt out of
            </li>
            <li>
              <strong>Non-discrimination</strong> — we will not deny service, charge you a
              different price, or provide a lesser quality of service because you exercised a
              privacy right
            </li>
            <li>Opt out of SMS communications at any time</li>
            <li>Opt out of analytics tracking</li>
          </ul>
          <p>
            To make a request, email us at{' '}
            <Link
              href="mailto:jorge@jlsreglazing.com"
              className="text-[#1B4D7A] hover:underline"
            >
              jorge@jlsreglazing.com
            </Link>{' '}
            with the subject line &quot;Privacy Request.&quot; We will confirm receipt and
            respond within 45 days. We may need to verify your identity before acting on a
            request, and an authorized agent may submit a request on your behalf with proof of
            authorization.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Compliance with Applicable Laws
          </h2>
          <p>
            We comply with the privacy laws that apply to our business, including the California
            Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA) for
            California residents. In the past 12 months we have not sold personal information and
            have not shared it for cross-context behavioral advertising. We do not knowingly
            collect personal information from children under 16.
          </p>
          <p>
            Our handling of data accessed through QuickBooks Online also follows Intuit&apos;s
            requirements for applications that connect to QuickBooks Online, including the
            restrictions on selling that data and on using it for third-party advertising
            described above.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, or want to make a privacy request
            (access, correction, or deletion), please contact us:
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
              Phone (English):{' '}
              <Link href="tel:+13108765600" className="text-[#1B4D7A] hover:underline">
                (310) 876-5600
              </Link>
            </li>
            <li>
              Phone (Spanish):{' '}
              <Link href="tel:+19095012797" className="text-[#1B4D7A] hover:underline">
                (909) 501-2797
              </Link>
            </li>
            <li>Mailing address: {BUSINESS.mailingAddress}</li>
          </ul>
          <p>
            Legal entity: JL Bathtub Renovation Services, doing business as JLS Reglazing.
          </p>

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
