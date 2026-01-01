import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 font-jost">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 font-jost leading-relaxed mb-6">
                JL Bath Renovation Services ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal information. This Privacy Policy explains how
                we collect, use, share, and safeguard your information when you visit our website
                or use our services.
              </p>
            </motion.div>

            {/* Section 1: Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                Personal Information You Provide
              </h3>
              <p className="text-gray-700 font-jost mb-4">
                When you request a quote or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Service address</li>
                <li>Service type requested</li>
                <li>Photos of areas to be serviced (if you choose to upload them)</li>
                <li>Any other information you voluntarily provide in messages or forms</li>
              </ul>

              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 font-jost mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </motion.div>

            {/* Section 2: How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 font-jost mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Respond to your quote requests and service inquiries</li>
                <li>Schedule appointments and provide our reglazing services</li>
                <li>Send you project updates and service confirmations</li>
                <li>Communicate with you via phone, email, or SMS/WhatsApp (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Send promotional offers and updates (only if you opt in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </motion.div>

            {/* Section 3: SMS/WhatsApp Messaging Consent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                3. SMS/WhatsApp Messaging Consent (TCPA Compliance)
              </h2>

              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                Your Consent to Receive Messages
              </h3>
              <p className="text-gray-700 font-jost mb-4">
                By providing your phone number and checking the consent box on our contact or quote
                forms, you expressly consent to receive text messages (SMS) and/or WhatsApp messages
                from JL Bath Renovation Services regarding:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Quote confirmations and project estimates</li>
                <li>Appointment scheduling and reminders</li>
                <li>Service updates and project status</li>
                <li>Follow-up communications regarding your service request</li>
              </ul>

              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                Important Information About Text Messages
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>
                  <strong>Consent is not required to purchase services.</strong> You can always
                  contact us by phone or email instead.
                </li>
                <li>
                  <strong>Message frequency:</strong> You may receive approximately 1-5 messages per
                  service request, depending on project complexity.
                </li>
                <li>
                  <strong>Message and data rates may apply</strong> based on your mobile carrier's
                  plan.
                </li>
                <li>
                  <strong>Carriers are not liable</strong> for delayed or undelivered messages.
                </li>
              </ul>

              <h3 className="text-xl font-orbitron font-semibold text-navy-900 mb-4">
                How to Opt Out
              </h3>
              <p className="text-gray-700 font-jost mb-4">
                You can opt out of receiving text messages at any time by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 font-jost space-y-2">
                <li>Replying <strong>STOP</strong> to any text message from us</li>
                <li>
                  Emailing us at{' '}
                  <a href="mailto:jorge@jlsreglazing.com" className="text-blue-600 underline">
                    jorge@jlsreglazing.com
                  </a>{' '}
                  with your opt-out request
                </li>
                <li>Calling us to request removal from our messaging list</li>
              </ul>
              <p className="text-gray-700 font-jost">
                For help or questions, reply <strong>HELP</strong> to any text message or contact
                us directly.
              </p>
            </motion.div>

            {/* Section 4: Third-Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                4. Third-Party Services
              </h2>
              <p className="text-gray-700 font-jost mb-4">
                We use the following third-party services to operate our business:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-orbitron font-semibold text-navy-900 mb-2">
                    Twilio (SMS/WhatsApp Messaging)
                  </h3>
                  <p className="text-gray-700 font-jost">
                    We use Twilio to send text messages and WhatsApp messages. Twilio's privacy
                    policy can be found at{' '}
                    <a
                      href="https://www.twilio.com/legal/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      https://www.twilio.com/legal/privacy
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-orbitron font-semibold text-navy-900 mb-2">
                    Supabase (Data Storage)
                  </h3>
                  <p className="text-gray-700 font-jost">
                    We use Supabase to securely store form submissions and contact information.
                    Supabase's privacy policy can be found at{' '}
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      https://supabase.com/privacy
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-orbitron font-semibold text-navy-900 mb-2">
                    n8n (Workflow Automation)
                  </h3>
                  <p className="text-gray-700 font-jost">
                    We use n8n to automate quote processing and communications.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 font-jost">
                We do not sell, rent, or trade your personal information to third parties for
                marketing purposes.
              </p>
            </motion.div>

            {/* Section 5: Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                5. Data Security
              </h2>
              <p className="text-gray-700 font-jost mb-4">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet or electronic
                storage is 100% secure.
              </p>
            </motion.div>

            {/* Section 6: Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                6. Data Retention
              </h2>
              <p className="text-gray-700 font-jost mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations (e.g., tax records, warranty claims)</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-700 font-jost">
                Typically, we retain customer information for 7 years for business and legal
                purposes.
              </p>
            </motion.div>

            {/* Section 7: Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 font-jost mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for SMS/WhatsApp messaging</li>
              </ul>
              <p className="text-gray-700 font-jost">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:jorge@jlsreglazing.com" className="text-blue-600 underline">
                  jorge@jlsreglazing.com
                </a>
                .
              </p>
            </motion.div>

            {/* Section 8: California Privacy Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                8. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 font-jost mb-4">
                If you are a California resident, you have additional rights under the California
                Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 font-jost space-y-2">
                <li>Right to know what personal information we collect and how we use it</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt out of the sale of personal information (we do not sell data)</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </motion.div>

            {/* Section 9: Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 font-jost">
                Our services are not directed to individuals under the age of 18. We do not
                knowingly collect personal information from children.
              </p>
            </motion.div>

            {/* Section 10: Changes to This Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 font-jost">
                We may update this Privacy Policy from time to time. The "Last Updated" date at the
                top of this page indicates when it was last revised. We encourage you to review
                this policy periodically.
              </p>
            </motion.div>

            {/* Section 11: Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mb-12 bg-gray-50 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-orbitron font-bold text-navy-900 mb-6">
                11. Contact Us
              </h2>
              <p className="text-gray-700 font-jost mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700 font-jost">
                <p>
                  <strong>JL Bath Renovation Services</strong>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:jorge@jlsreglazing.com" className="text-blue-600 underline">
                    jorge@jlsreglazing.com
                  </a>
                </p>
                <p>Phone: (XXX) XXX-XXXX</p>
                <p>Service Areas: San Bernardino, Riverside, Hemet, Los Angeles, Victorville</p>
              </div>
            </motion.div>
          </div>

          {/* Back to Home CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center mt-12"
          >
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-jost font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
