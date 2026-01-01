import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function CrackRepair() {
  return (
    <ServiceTemplate
      serviceName="Crack & Chip Repair"
      heroImage="/images/5_after.jpg"
      description="Professional crack and chip repair for bathtubs, sinks, and countertops. Restore structural integrity and appearance with our expert repair services."
      benefits={[
        'Prevent small damage from worsening',
        'Seamless, virtually invisible repairs',
        'Restore structural integrity',
        'Quick same-day service available',
        'All sizes of cracks and chips',
        '2-year warranty on repairs',
      ]}
      processSteps={[
        {
          title: 'Damage Assessment',
          description: 'Evaluate crack size, depth, and repair approach',
        },
        {
          title: 'Surface Prep',
          description: 'Clean and prepare damaged area',
        },
        {
          title: 'Repair Application',
          description: 'Fill and bond crack with specialized materials',
        },
        {
          title: 'Finishing',
          description: 'Sand, polish, and color-match for seamless look',
        },
      ]}
      faqs={[
        {
          question: 'Can you repair hairline cracks?',
          answer:
            'Yes! Hairline cracks are ideal candidates for repair. We use specialized bonding agents that penetrate deep into the crack and create a permanent seal.',
        },
        {
          question: 'How large of a crack can you repair?',
          answer:
            'We can repair cracks up to 6 inches long and chips up to 2 inches in diameter. Larger damage may require additional reinforcement techniques.',
        },
        {
          question: 'Will the repair be noticeable?',
          answer:
            'Our repairs are color-matched and polished to blend seamlessly with the surrounding surface. In most cases, repairs are virtually invisible.',
        },
        {
          question: 'How soon can I use the fixture after repair?',
          answer:
            'Most repairs cure in 24-48 hours. We provide specific care instructions based on the size and location of the repair.',
        },
      ]}
      relatedServices={[
        { name: 'Bathtub Reglazing', path: '/services/bathtub-reglazing' },
        { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
        { name: 'Bath Vanity Restoration', path: '/services/bath-vanity-restoration' },
      ]}
    />
  )
}
