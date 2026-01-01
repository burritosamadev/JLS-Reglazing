import { Link } from 'react-router-dom'

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
            <h4 className="text-lg font-orbitron font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: jorge@jlsreglazing.com</p>
              <p>Phone: (XXX) XXX-XXXX</p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} JL Bath Renovation Services. All rights reserved.</p>
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
