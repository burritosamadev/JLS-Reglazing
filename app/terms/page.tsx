// NOTE: This page is a plain-English template drafted for Intuit's QuickBooks Online
// production onboarding requirements. It is not legal advice. Have it reviewed by
// qualified legal counsel before relying on it.

import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import { BUSINESS } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Terms of Service - JLS Reglazing | Terms & Conditions',
  description:
    'Terms of Service and End User License Agreement for JLS Reglazing. Covers use of our website, our reglazing services, third-party integrations, warranties, and governing law.',
  alternates: { canonical: 'https://jlsreglazing.com/terms' },
  openGraph: {
    type: 'website',
    title: 'Terms of Service - JLS Reglazing | Terms & Conditions',
    description:
      'Terms of Service and End User License Agreement for JLS Reglazing. Covers use of our website, our reglazing services, third-party integrations, warranties, and governing law.',
    url: 'https://jlsreglazing.com/terms',
    images: [{ url: '/images/1_after.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - JLS Reglazing | Terms & Conditions',
    description:
      'Terms of Service and End User License Agreement for JLS Reglazing. Covers use of our website, our reglazing services, third-party integrations, warranties, and governing law.',
  },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Terms of Service', href: '/terms' }]} />
      <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-[#2D3748] mb-8">
          Terms of Service
        </h1>
        <div className="font-jost text-[#2D3748]/80 leading-relaxed space-y-6">
          <p>
            <strong>Effective Date:</strong> August 3, 2026
            <br />
            <strong>Last updated:</strong> August 3, 2026
          </p>

          <p>
            These Terms of Service (also serving as our End User License Agreement, and referred
            to as these &quot;Terms&quot;) govern your use of the website at{' '}
            <Link href="/" className="text-[#1B4D7A] hover:underline">
              jlsreglazing.com
            </Link>{' '}
            and the services provided by {BUSINESS.legalName} (&quot;{BUSINESS.name},&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Please read them carefully. How we
            handle your information is described separately in our{' '}
            <Link href="/privacy-policy" className="text-[#1B4D7A] hover:underline">
              Privacy Policy
            </Link>
            , which is part of these Terms.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By visiting our website, submitting a quote request, contacting us, or having us
            perform work at your property, you agree to these Terms. If you do not agree with
            them, please do not use our website or our services.
          </p>
          <p>
            If you are agreeing to these Terms on behalf of a company, property management
            group, or other organization, you confirm that you have the authority to bind that
            organization to these Terms.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            2. Description of Services
          </h2>
          <p>
            {BUSINESS.name} provides bathtub, kitchen countertop, sink, and bath vanity
            refinishing and reglazing; crack and chip repair; cut-out repairs; and tub and
            shower enclosure work. We serve residential and multi-unit properties across
            Southern California, including Riverside County, San Bernardino County, Los Angeles
            County, Hemet, and Victorville.
          </p>
          <p>
            Any prices shown on this website or given over the phone are estimates only. Final
            pricing depends on the condition of the fixture, the scope of the work, and access
            to the property, and is confirmed in a written quote after an on-site or
            photo-based assessment. We may decline or discontinue work on a fixture that is not
            a good candidate for refinishing.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            3. Eligibility
          </h2>
          <p>
            You must be at least 18 years old and able to enter into a binding contract to use
            our website or request our services. By requesting service at a property, you
            confirm that you own the property or are otherwise authorized to approve the work
            being performed there.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            4. User Responsibilities and Acceptable Use
          </h2>
          <p>When you use our website or schedule work with us, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide accurate and complete information in quote requests, contact forms, and
              scheduling communications.
            </li>
            <li>
              Give our technicians safe and reasonable access to the work area at the scheduled
              time, and clear personal items from the area beforehand.
            </li>
            <li>
              Allow adequate ventilation during and after the work, and follow the curing,
              cleaning, and care instructions we provide. Using a refinished fixture before it
              has fully cured can damage the finish and is not covered by our warranty.
            </li>
            <li>
              Tell us in advance about known plumbing leaks, structural damage, mold, or
              hazardous materials such as lead or asbestos in the work area.
            </li>
            <li>
              Use our website only for lawful purposes and only to learn about or request our
              services.
            </li>
          </ul>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Scrape, crawl, harvest, or bulk-copy content from this website for commercial
              purposes without our written permission.
            </li>
            <li>
              Attempt to gain unauthorized access to the website, its servers, or any connected
              systems, or interfere with their normal operation.
            </li>
            <li>
              Submit false, fraudulent, or automated form submissions, or use our contact
              channels to send spam or unlawful content.
            </li>
            <li>Post or transmit anything that infringes another party&apos;s rights.</li>
          </ul>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, photographs of our completed work,
            before-and-after images, graphics, logos, and page layouts — is owned by{' '}
            {BUSINESS.legalName} or used with permission, and is protected by copyright,
            trademark, and other laws. The {BUSINESS.name} name and logo are our marks.
          </p>
          <p>
            You may view, download, and print pages from this website for your own personal,
            non-commercial use in evaluating or arranging our services. Any other use —
            including reproduction, republication, or distribution of our photographs or copy —
            requires our prior written permission.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            6. Third-Party Services and Integrations
          </h2>
          <p>
            We use third-party business software to run our operations. These integrations are
            connected to our own accounts and are used to manage our customer, invoice, and job
            records:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>QuickBooks Online (Intuit Inc.):</strong> our accounting platform. We use
              it to create and manage customer records, estimates, invoices, payments, and
              transaction history for the work we perform.
            </li>
            <li>
              <strong>HubSpot:</strong> our customer relationship management (CRM) system. We
              sync customer and job records between QuickBooks Online and HubSpot so that
              contact details, service history, and billing status stay accurate and up to
              date.
            </li>
            <li>
              <strong>Form processing and analytics:</strong> we use Google services to receive
              and store quote request submissions, and Google Analytics and Plausible to
              understand how visitors use our website.
            </li>
          </ul>
          <p>
            Our connection to QuickBooks Online is an internal integration for our own company
            file. It is authorized by us, and we are responsible for the data we access through
            it. We do not sell data obtained from QuickBooks Online, and we do not use it for
            third-party advertising. For details on what we collect, how we use it, how long we
            keep it, and how to request access or deletion, see our{' '}
            <Link href="/privacy-policy" className="text-[#1B4D7A] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            These third-party platforms are operated by their own companies under their own
            terms and privacy policies. We are not responsible for their services, and our
            website may link to other sites we do not control.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            7. Warranty and Disclaimers
          </h2>
          <p>
            We stand behind our workmanship with a {BUSINESS.warrantyYears}-year warranty on
            refinishing work, covering peeling, blistering, and loss of adhesion caused by our
            application under normal residential use. That warranty is the only warranty we
            provide, and it does not cover:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chips, scratches, burns, or impact damage that happen after we finish.</li>
            <li>
              Damage from abrasive cleaners, bleach, drain-cleaning chemicals, suction-cup bath
              mats, or pet claws.
            </li>
            <li>
              Damage caused by plumbing leaks, standing water, structural movement, or
              underlying substrate failure.
            </li>
            <li>Normal wear, color variation, or gloss change over time.</li>
            <li>Work performed on the surface by anyone other than us.</li>
          </ul>
          <p>
            Except for that express warranty, our website and our services are provided
            &quot;as is&quot; and &quot;as available.&quot; To the fullest extent permitted by
            law, we disclaim all other warranties, whether express or implied, including implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement. Refinishing results vary with the age, material, and condition of
            the existing fixture, and we do not guarantee an exact color match to other surfaces
            in your home. We do not warrant that the website will be uninterrupted, error-free,
            or free of harmful components.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            8. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by California law, {BUSINESS.legalName} and its
            owners, employees, and contractors will not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or for lost profits, lost revenue, loss
            of use, or loss of data, arising out of or relating to your use of this website or
            our services — even if we have been advised that such damages are possible.
          </p>
          <p>
            Our total liability for any claim relating to a particular job is limited to the
            amount you paid us for that job. For claims relating to the website where no payment
            was made, our total liability is limited to one hundred dollars ($100).
          </p>
          <p>
            Nothing in these Terms limits liability that cannot be limited under applicable law,
            including liability for gross negligence, willful misconduct, or personal injury
            caused by our negligence. Some jurisdictions do not allow certain limitations, so
            parts of this section may not apply to you.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            9. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless {BUSINESS.legalName} and its owners,
            employees, and contractors from any claims, damages, losses, liabilities, and
            reasonable legal fees arising out of your breach of these Terms, your misuse of the
            website, your violation of any law or third-party right, or your failure to
            disclose known hazards or to obtain the authorization needed for us to perform work
            at a property.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            10. Termination
          </h2>
          <p>
            We may suspend or terminate your access to this website at any time, with or
            without notice, if we believe you have violated these Terms or if we discontinue the
            site. Either of us may cancel scheduled work in advance; cancellation and deposit
            terms for a specific job are set out in that job&apos;s written quote or invoice.
          </p>
          <p>
            Sections that by their nature should survive termination — including Intellectual
            Property, Warranty and Disclaimers, Limitation of Liability, Indemnification, and
            Governing Law — remain in effect afterward.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            11. Governing Law and Disputes
          </h2>
          <p>
            These Terms are governed by the laws of the State of California, without regard to
            its conflict-of-laws rules. Any dispute arising out of these Terms, the website, or
            our services will be brought exclusively in the state or federal courts located in
            California, and you and we consent to the jurisdiction of those courts.
          </p>
          <p>
            We encourage you to contact us first — most concerns about a job are resolved
            directly and quickly.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            12. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. When we do, we will post the revised
            version on this page and update the effective date above. Changes apply going
            forward from the date they are posted. Continuing to use our website or services
            after a change means you accept the updated Terms, so please review this page
            periodically.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            13. Miscellaneous
          </h2>
          <p>
            These Terms, together with our Privacy Policy and any written quote or invoice for a
            specific job, are the entire agreement between you and us regarding the website and
            our services. If any provision is found unenforceable, the rest remains in effect.
            Our failure to enforce a provision is not a waiver of it. You may not assign these
            Terms without our written consent.
          </p>

          <h2 className="font-orbitron text-xl font-bold text-[#2D3748] pt-4">
            14. Contact Information
          </h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <ul className="list-none space-y-1">
            <li>
              Email:{' '}
              <Link
                href={`mailto:${BUSINESS.email}`}
                className="text-[#1B4D7A] hover:underline"
              >
                {BUSINESS.email}
              </Link>
            </li>
            <li>
              Phone ({BUSINESS.phoneENLabel}):{' '}
              <Link href={`tel:${BUSINESS.phoneENRaw}`} className="text-[#1B4D7A] hover:underline">
                {BUSINESS.phoneEN}
              </Link>
            </li>
            <li>
              Phone ({BUSINESS.phoneESLabel}):{' '}
              <Link href={`tel:${BUSINESS.phoneESRaw}`} className="text-[#1B4D7A] hover:underline">
                {BUSINESS.phoneES}
              </Link>
            </li>
            <li>Mailing address: {BUSINESS.mailingAddress}</li>
          </ul>
          <p>
            Legal entity: {BUSINESS.legalName}, doing business as {BUSINESS.name}.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
