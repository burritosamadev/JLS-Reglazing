import { BUSINESS } from '@/lib/copy'

interface SocialLinkProps {
  href: string
  label: string
  hoverColor: string
  children: React.ReactNode
}

function SocialLink({ href, label, hoverColor, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group flex flex-col items-center gap-2 transition-transform hover:-translate-y-0.5`}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-alt flex items-center justify-center transition-colors ${hoverColor}`}>
        {children}
      </div>
      <span className="text-xs font-jost text-form-muted group-hover:text-charcoal transition-colors">{label}</span>
    </a>
  )
}

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-jost text-form-muted mb-6 uppercase tracking-wide">Find Us On</p>
        <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
          {/* Yelp */}
          <SocialLink href={BUSINESS.yelp} label="Yelp" hoverColor="group-hover:bg-[#FF1A1A]/10">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.14 2C6.07 2 2.67 5.93 2.67 5.93l3.17 3.76s1.55-2.15 4.42-2.15c1.27 0 2.24.63 2.24 1.73 0 1.81-2.14 2.43-3.61 2.43H7.39v4.46h2.06c1.67 0 3.97.53 3.97 2.67 0 1.33-1.07 2.28-2.86 2.28-3.09 0-5.16-2.53-5.16-2.53L2.17 22s3.69 2 7.83 2c4.53 0 7.33-2.67 7.33-6.07 0-2.87-2.16-4.66-4.47-5.2 1.77-.73 3.47-2.33 3.47-4.87C16.33 4.33 14.67 2 12.14 2z"/>
            </svg>
          </SocialLink>

          {/* Google Business */}
          <SocialLink href="https://maps.google.com/?q=JLS+Reglazing+San+Bernardino+CA" label="Google" hoverColor="group-hover:bg-[#4285F4]/10">
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </SocialLink>

          {/* Facebook */}
          <SocialLink href={BUSINESS.facebook} label="Facebook" hoverColor="group-hover:bg-[#1877F2]/10">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </SocialLink>

          {/* Instagram */}
          <SocialLink href={BUSINESS.instagram} label="Instagram" hoverColor="group-hover:bg-[#E4405F]/10">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </SocialLink>

          {/* TikTok */}
          <SocialLink href={BUSINESS.tiktok} label="TikTok" hoverColor="group-hover:bg-black/10">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </SocialLink>
        </div>
      </div>
    </section>
  )
}
