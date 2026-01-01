import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function SinkRefinishing() {
  return (
    <ServiceTemplate
      serviceName="Sink Refinishing"
      heroImage="/images/3_after.jpg"
      description="Professional sink refinishing services for kitchen and bathroom sinks. Restore stained, scratched, or outdated sinks to like-new condition quickly and affordably."
      benefits={[
        'Save 90% compared to sink replacement',
        'Works on porcelain, cast iron, and acrylic',
        'Custom color matching available',
        'Same-day service in most cases',
        'No plumbing disconnection needed',
        '2-year warranty on refinishing work',
      ]}
      processSteps={[
        {
          title: 'Inspection',
          description: 'Assess sink condition and identify repair needs',
        },
        {
          title: 'Cleaning',
          description: 'Deep clean and degrease sink surface',
        },
        {
          title: 'Refinishing',
          description: 'Apply professional-grade refinishing coating',
        },
        {
          title: 'Quality Check',
          description: 'Ensure smooth, even finish and durability',
        },
      ]}
      faqs={[
        {
          question: 'Can you fix rust stains in my sink?',
          answer:
            'Yes! Rust stains are removed during the cleaning and preparation process. Our refinishing creates a new, stain-resistant surface that prevents future rust staining.',
        },
        {
          question: 'Will you need to disconnect my plumbing?',
          answer:
            'No, in most cases we can refinish your sink in place without disconnecting any plumbing. This saves time and prevents potential leak issues.',
        },
        {
          question: 'How long does sink refinishing take?',
          answer:
            'Most sink refinishing projects are completed in 3-5 hours. You can use your sink again after 24-48 hours of curing time.',
        },
        {
          question: 'Can you match my faucet or countertop color?',
          answer:
            'Absolutely! We can custom match colors to coordinate with your existing fixtures, countertops, or desired color scheme.',
        },
      ]}
      relatedServices={[
        { name: 'Bathtub Reglazing', path: '/services/bathtub-reglazing' },
        { name: 'Kitchen Countertop Reglazing', path: '/services/kitchen-countertop-reglazing' },
        { name: 'Bath Vanity Restoration', path: '/services/bath-vanity-restoration' },
      ]}
    />
  )
}
