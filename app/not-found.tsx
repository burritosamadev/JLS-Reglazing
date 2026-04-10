import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-20 bg-surface min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-orbitron font-bold text-brand-500 mb-4">404</h1>
        <h2 className="text-2xl font-orbitron font-semibold text-charcoal mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 font-jost mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-jost font-semibold transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-jost font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
