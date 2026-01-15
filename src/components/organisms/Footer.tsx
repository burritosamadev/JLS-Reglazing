import { Link } from 'react-router-dom'
import Button from '../atoms/Button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    { name: 'San Bernardino', path: '/san-bernardino-reglazing' },
    { name: 'Riverside', path: '/riverside-reglazing' },
    { name: 'Hemet', path: '/hemet-reglazing' },
    { name: 'Los Angeles', path: '/los-angeles-reglazing' },
    { name: 'Victorville', path: '/victorville-reglazing' },
  ]

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.svg" alt="JLS Reglazing" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">
              Professional bathtub and kitchen reglazing services in Southern California.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>20+ Years Experience</p>
              <p>4,000+ Units Serviced</p>
              <p>Licensed & Insured</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.path}>
                  <Link
                    to={area.path}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-neutral-400">
              <a
                href="mailto:jorge@jlsreglazing.com"
                className="flex items-center gap-2 hover:text-[#FB8040] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>jorge@jlsreglazing.com</span>
              </a>
              <div className="space-y-1">
                <a
                  href="tel:+13107420057"
                  className="flex items-center gap-2 hover:text-[#FB8040] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">English:</span> +1 (310) 742-0057
                  </div>
                </a>
                <a
                  href="tel:+14243815170"
                  className="flex items-center gap-2 hover:text-[#FB8040] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">Spanish:</span> +1 (424) 381-5170
                  </div>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61586186871010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              <div className="mt-4">
                <Button href="/contact" variant="primary" size="sm">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} JL Bathtub Renovation Services. All rights reserved.</p>
          <p className="mt-2">Hispanic-Owned & Operated | 2-Year Warranty</p>
          <p className="mt-3">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
