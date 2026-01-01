import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function EnclosureRefinishing() {
  return (
    <ServiceTemplate
      serviceName="Bathtub Enclosure Refinishing"
      heroImage="/images/6_after.jpg"
      description="Transform dated bathtub enclosures with professional refinishing. Update colors, repair damage, and create a fresh modern look without replacement."
      benefits={[
        'Save 90% vs new enclosure installation',
        'Update to modern colors and finishes',
        'Repair water damage and discoloration',
        'Quick 1-day service',
        'Seamless, durable finish',
        '2-year warranty included',
      ]}
      processSteps={[
        {
          title: 'Cleaning',
          description: 'Remove soap scum, hard water, and contaminants',
        },
        {
          title: 'Repair',
          description: 'Fix cracks, chips, and water damage',
        },
        {
          title: 'Refinishing',
          description: 'Apply professional coating system',
        },
        {
          title: 'Sealing',
          description: 'Seal edges and ensure water-tight finish',
        },
      ]}
      faqs={[
        {
          question: 'Can you change the color of my enclosure?',
          answer:
            'Yes! We can refinish your enclosure in white, almond, or other custom colors to match your bathroom decor or create a fresh new look.',
        },
        {
          question: 'Will refinishing fix water damage?',
          answer:
            'We repair surface water damage, discoloration, and etching during the refinishing process. Structural water damage may require additional repair work.',
        },
        {
          question: 'How long does the finish last?',
          answer:
            'With proper care and maintenance, a professionally refinished bathtub enclosure can last 7-10 years or more.',
        },
        {
          question: 'Can you refinish fiberglass enclosures?',
          answer:
            'Absolutely! We specialize in refinishing fiberglass, acrylic, and other bathtub enclosure materials with excellent results.',
        },
      ]}
      relatedServices={[
        { name: 'Bathtub Reglazing', path: '/services/bathtub-reglazing' },
        { name: 'Crack & Chip Repair', path: '/services/crack-chip-repair' },
        { name: 'Bath Vanity Restoration', path: '/services/bath-vanity-restoration' },
      ]}
    />
  )
}
