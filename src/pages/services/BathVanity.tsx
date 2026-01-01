import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function BathVanity() {
  return (
    <ServiceTemplate
      serviceName="Bath Vanity Restoration"
      heroImage="/images/4_after.jpg"
      description="Complete bath vanity restoration services including countertops, sinks, and cabinets. Transform your outdated bathroom vanity without the expense of full replacement."
      benefits={[
        'Save 90% compared to vanity replacement',
        'Restore countertop and sink together',
        'Modern color and finish options',
        'Minimal disruption to your routine',
        'Environmentally friendly solution',
        '2-year warranty on all services',
      ]}
      processSteps={[
        {
          title: 'Assessment',
          description: 'Evaluate vanity condition and plan restoration',
        },
        {
          title: 'Preparation',
          description: 'Clean, repair, and prep all surfaces',
        },
        {
          title: 'Restoration',
          description: 'Apply professional refinishing coatings',
        },
        {
          title: 'Final Touch',
          description: 'Polish and detail for perfect finish',
        },
      ]}
      faqs={[
        {
          question: 'Can you restore both the countertop and sink?',
          answer:
            'Yes! We can restore your entire vanity including the countertop, integrated or drop-in sink, and even refresh cabinet surfaces for a complete makeover.',
        },
        {
          question: 'What materials can be restored?',
          answer:
            'We restore cultured marble, laminate, tile, solid surface, and porcelain vanities. Each material gets a customized restoration approach.',
        },
        {
          question: 'Will the finish match my bathroom fixtures?',
          answer:
            'Absolutely! We offer color matching services to coordinate with your existing fixtures, tile, or desired color palette.',
        },
        {
          question: 'How long until I can use my vanity?',
          answer:
            'The restoration process typically takes 4-6 hours. After a 48-72 hour curing period, your vanity will be ready for full use.',
        },
      ]}
      relatedServices={[
        { name: 'Bathtub Reglazing', path: '/services/bathtub-reglazing' },
        { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
        { name: 'Kitchen Countertop Reglazing', path: '/services/kitchen-countertop-reglazing' },
      ]}
    />
  )
}
