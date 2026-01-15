import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function BathtubReglazing() {
  return (
    <ServiceTemplate
      serviceName="Bathtub Reglazing"
      heroImage="/images/1_after.jpg"
      description="Professional bathtub reglazing and refinishing services in Southern California. Restore your worn, chipped, or discolored bathtub to like-new condition at a fraction of replacement cost."
      benefits={[
        'Save 90% compared to bathtub replacement',
        'Complete in just 3-5 hours',
        'Available in custom colors and finishes',
        '2-year warranty on all work',
        'Lasts 10+ years with proper care',
      ]}
      processSteps={[
        {
          title: 'Cleaning',
          description: 'Deep clean and remove all soap scum, oils, and contaminants',
        },
        {
          title: 'Repair',
          description: 'Fix all cracks, chips, and surface imperfections',
        },
        {
          title: 'Coating',
          description: 'Apply professional-grade reglazing coating',
        },
        {
          title: 'Curing',
          description: 'Allow proper curing time for a durable finish',
        },
      ]}
      faqs={[
        {
          question: 'How long does bathtub reglazing last?',
          answer:
            'With proper care and maintenance, a professionally reglazed bathtub can last 10+ years. We provide detailed care instructions and a 2-year warranty on all our work.',
        },
        {
          question: 'Can you match my bathroom color?',
          answer:
            'Yes! We offer a wide range of colors and can custom match your existing bathroom fixtures. White and almond are the most popular choices.',
        },
        {
          question: 'Is reglazing safe?',
          answer:
            'Absolutely. We use professional-grade, EPA-approved materials and ensure proper ventilation during the process. The finished surface is completely safe and non-toxic.',
        },
        {
          question: 'How long before I can use my bathtub?',
          answer:
            'We recommend waiting 48-72 hours before using your newly reglazed bathtub. This allows the coating to fully cure and ensures maximum durability.',
        },
      ]}
      relatedServices={[
        { name: 'Kitchen Countertop Reglazing', path: '/services/kitchen-countertop-reglazing' },
        { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
        { name: 'Bath Vanity Restoration', path: '/services/bath-vanity-restoration' },
      ]}
    />
  )
}
