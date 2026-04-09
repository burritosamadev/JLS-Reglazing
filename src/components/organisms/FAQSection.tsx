import { generateFAQSchema } from '@/lib/seo'

const faqs = [
  {
    question: 'How much does bathtub reglazing cost in 2026?',
    answer: 'Bathtub reglazing costs between $300 and $600 for most residential projects in Southern California. This is up to 90% less than full bathtub replacement, which typically costs $1,500 to $5,000 or more. The exact price depends on the tub\'s condition, surface material (fiberglass, porcelain, cast iron, or acrylic), and whether crack or chip repairs are needed. At JLS Reglazing, all quotes are free and most projects are completed within 24 hours.',
  },
  {
    question: 'What is the difference between bathtub reglazing and refinishing?',
    answer: 'Bathtub reglazing and bathtub refinishing are the same professional restoration process. "Reglazing" typically refers to applying a new surface coating, while "refinishing" describes the complete process: surface preparation, crack and chip repair, acid etching, primer application, and applying a durable factory-quality finish. The result is identical — a like-new surface at a fraction of replacement cost. Both terms are used interchangeably in the industry.',
  },
  {
    question: 'How long does bathtub reglazing last?',
    answer: 'Professional bathtub reglazing lasts 10 to 15 years with proper care. Longevity depends on the quality of surface preparation, the materials used, and how the finish is maintained. To extend the life of a reglazed tub, avoid abrasive cleaners, use non-slip mats instead of adhesive strips, and clean with mild soap. JLS Reglazing includes a 2-year warranty on all refinishing projects.',
  },
  {
    question: 'How long does the refinishing process take?',
    answer: 'The on-site bathtub refinishing process takes 3 to 5 hours. After completion, the surface needs 48 to 72 hours to fully cure before use. This is significantly faster than full bathtub replacement, which requires 3 to 5 days of plumbing, demolition, and installation work. The fast turnaround makes reglazing ideal for rental property managers and multi-unit complexes.',
  },
  {
    question: 'Can you reglaze a fiberglass or acrylic bathtub?',
    answer: 'Yes. Professional reglazing works on all bathtub materials: fiberglass, acrylic, porcelain, cast iron, ceramic tile, and cultured marble. The preparation process is adjusted for each material to ensure proper adhesion. JLS Reglazing has refinished over 4,000 units across all surface types over 20+ years of operation in Southern California.',
  },
  {
    question: 'What areas does JLS Reglazing serve in Southern California?',
    answer: 'JLS Reglazing serves San Bernardino County (Fontana, Rancho Cucamonga, Ontario, Upland, Redlands), Riverside County (Corona, Moreno Valley, Temecula, Murrieta), Los Angeles County (Pasadena, Long Beach, Glendale, Burbank, Pomona), the Hemet/San Jacinto area, and the High Desert (Victorville, Hesperia, Apple Valley). Free on-site quotes are available throughout the service area.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-surface-alt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-charcoal mb-4">Frequently Asked Questions About Bathtub Reglazing</h2>
          <p className="text-xl text-gray-700 font-jost">Direct answers to the most common bathtub and kitchen refinishing questions.</p>
        </div>

        {/* AEO: Each FAQ is a self-contained chunk with visible H3 + answer — no accordion hiding */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <article key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-orbitron font-semibold text-charcoal mb-3">{faq.question}</h3>
              <p className="text-gray-700 font-jost leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
