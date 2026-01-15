import ServiceTemplate from '../../components/templates/ServiceTemplate'

export default function KitchenCountertop() {
  return (
    <ServiceTemplate
      serviceName="Kitchen Countertop Reglazing"
      heroImage="/images/2_after.jpg"
      description="Transform your kitchen countertops with professional reglazing. Achieve a modern, fresh look without the cost and hassle of complete replacement."
      benefits={[
        'Save 90% compared to new countertops',
        'Choose from dozens of colors and finishes',
        'Heat and stain resistant surface',
        'Completed in 1-2 days',
        'No demolition or construction mess',
        '2-year warranty included',
      ]}
      processSteps={[
        {
          title: 'Surface Prep',
          description: 'Clean and prepare countertop surface for optimal adhesion',
        },
        {
          title: 'Repair Work',
          description: 'Fix scratches, burns, and damaged areas',
        },
        {
          title: 'Application',
          description: 'Apply professional reglazing coating system',
        },
        {
          title: 'Finishing',
          description: 'Polish and seal for a durable, beautiful finish',
        },
      ]}
      faqs={[
        {
          question: 'What countertop materials can be reglazed?',
          answer:
            'We can reglaze laminate, tile, cultured marble, and solid surface countertops. Each material requires specific preparation techniques for best results.',
        },
        {
          question: 'How durable is the reglazing finish?',
          answer:
            'Our reglazing creates a hard, durable surface that is heat and stain resistant. With proper care, it can last 10+ years.',
        },
        {
          question: 'Can you create a stone or granite look?',
          answer:
            'Yes! We offer decorative finishes that mimic the appearance of granite, marble, and other natural stone materials at a fraction of the cost.',
        },
        {
          question: 'How long does the process take?',
          answer:
            'Most kitchen countertop reglazing projects are completed in 1-2 days, with a 48-hour curing time before full use.',
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
