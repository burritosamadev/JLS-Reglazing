import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function CutOutRepairs() {
  return (
    <ServiceTemplate
      serviceName="Cut-Out Repairs"
      heroImage="/images/7_after.jpg"
      description="Professional cut-out and access panel repair services for bathtubs and enclosures. Seamlessly restore areas where plumbing access or modifications were made."
      benefits={[
        'Seamless integration with existing surface',
        'Restore structural integrity',
        'Color-matched to perfection',
        'Quick turnaround time',
        'Professional-grade materials',
        '2-year warranty on repairs',
      ]}
      processSteps={[
        {
          title: 'Evaluation',
          description: 'Assess cut-out size and repair requirements',
        },
        {
          title: 'Preparation',
          description: 'Clean and prepare edges for bonding',
        },
        {
          title: 'Patching',
          description: 'Apply reinforced patch and bonding system',
        },
        {
          title: 'Refinishing',
          description: 'Sand, color-match, and blend with surface',
        },
      ]}
      faqs={[
        {
          question: 'What are cut-out repairs?',
          answer:
            'Cut-out repairs restore areas where holes or access panels were created in bathtubs or enclosures for plumbing repairs, modifications, or installations. We seamlessly patch and refinish these areas.',
        },
        {
          question: 'How large of a cut-out can you repair?',
          answer:
            'We can repair cut-outs ranging from small access holes (2-3 inches) to large panel openings (12+ inches). Each repair is reinforced and refinished for durability.',
        },
        {
          question: 'Will the repair be visible?',
          answer:
            'Our repairs are expertly color-matched and blended to be virtually invisible. The patch area is reinforced and refinished to match the surrounding surface texture and color.',
        },
        {
          question: 'How strong is the repaired area?',
          answer:
            'We use professional-grade bonding and reinforcement materials. The repaired area is often as strong or stronger than the original surface.',
        },
      ]}
      relatedServices={[
        { name: 'Bathtub Reglazing', path: '/services/bathtub-reglazing' },
        { name: 'Crack & Chip Repair', path: '/services/crack-chip-repair' },
        { name: 'Bathtub Enclosure Refinishing', path: '/services/bathtub-enclosure-refinishing' },
      ]}
    />
  )
}
