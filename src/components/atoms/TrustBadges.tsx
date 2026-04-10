import Link from 'next/link'

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-orbitron font-semibold text-charcoal text-center mb-8">Trusted Across Southern California</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Yelp Badge */}
          <a
            href="https://www.yelp.com/biz/jls-reglazing-san-bernardino"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface-alt hover:bg-gray-200 rounded-xl px-6 py-4 transition-colors group"
          >
            <svg className="w-8 h-8 text-[#FF1A1A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.14 2C6.07 2 2.67 5.93 2.67 5.93l3.17 3.76s1.55-2.15 4.42-2.15c1.27 0 2.24.63 2.24 1.73 0 1.81-2.14 2.43-3.61 2.43H7.39v4.46h2.06c1.67 0 3.97.53 3.97 2.67 0 1.33-1.07 2.28-2.86 2.28-3.09 0-5.16-2.53-5.16-2.53L2.17 22s3.69 2 7.83 2c4.53 0 7.33-2.67 7.33-6.07 0-2.87-2.16-4.66-4.47-5.2 1.77-.73 3.47-2.33 3.47-4.87C16.33 4.33 14.67 2 12.14 2z"/>
            </svg>
            <div>
              <p className="font-jost font-semibold text-charcoal text-sm group-hover:text-cta transition-colors">Find us on Yelp</p>
              <p className="text-xs text-form-muted">20+ Photos &middot; San Bernardino, CA</p>
            </div>
          </a>

          {/* Google Business Badge */}
          <a
            href="https://maps.google.com/?q=JLS+Reglazing+San+Bernardino+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface-alt hover:bg-gray-200 rounded-xl px-6 py-4 transition-colors group"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4285F4"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg>
            <div>
              <p className="font-jost font-semibold text-charcoal text-sm group-hover:text-cta transition-colors">Google Business Profile</p>
              <p className="text-xs text-form-muted">San Bernardino &middot; Riverside &middot; LA County</p>
            </div>
          </a>

          {/* Experience Badge */}
          <div className="flex items-center gap-3 bg-surface-alt rounded-xl px-6 py-4">
            <div className="w-8 h-8 bg-cta rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-orbitron font-bold text-xs">20+</span>
            </div>
            <div>
              <p className="font-jost font-semibold text-charcoal text-sm">Years in Business</p>
              <p className="text-xs text-form-muted">4,000+ Units Serviced</p>
            </div>
          </div>

          {/* Bilingual Badge */}
          <div className="flex items-center gap-3 bg-surface-alt rounded-xl px-6 py-4">
            <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">EN/ES</span>
            </div>
            <div>
              <p className="font-jost font-semibold text-charcoal text-sm">Bilingual Service</p>
              <p className="text-xs text-form-muted">
                <Link href="tel:+13108765600" className="hover:text-cta">English</Link> &middot; <Link href="tel:+19095012797" className="hover:text-cta">Spanish</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
