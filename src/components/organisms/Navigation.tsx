'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Bathtub Refinishing', path: '/services/bathtub-refinishing' },
    { name: 'Kitchen Refinishing', path: '/services/kitchen-refinishing' },
    { name: 'Sink Refinishing', path: '/services/sink-refinishing' },
    { name: 'Bath Vanity Refinishing', path: '/services/bath-vanity-refinishing' },
    { name: 'Crack & Chip Repair', path: '/services/crack-repair' },
    { name: 'Bathtub Enclosure', path: '/services/bathtub-enclosure' },
    { name: 'Cut-Out Repairs', path: '/services/cut-out-repairs' },
  ]

  return (
    <nav className="bg-brand-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/logo-light.svg" alt="JLS Reglazing" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={link.path}
                    className={`font-jost font-medium transition-all duration-200 pb-2 block ${
                      isActive(link.path)
                        ? 'text-white border-b-2 border-cta'
                        : 'text-gray-100 hover:text-cta border-b-2 border-transparent'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 pt-2 w-64 z-50"
                    >
                      <div className="bg-brand-500 shadow-xl rounded-lg overflow-hidden">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="block px-4 py-3 text-gray-100 hover:bg-cta hover:text-white transition-colors font-jost"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-jost font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-white border-b-2 border-cta'
                      : 'text-gray-100 hover:text-cta border-b-2 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-lg font-jost font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-brand-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-brand-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex justify-between items-center ${
                      isActive(link.path) ? 'bg-cta text-white font-semibold' : 'text-gray-100 hover:bg-cta/20'
                    }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link key={service.path} href={service.path} className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-cta/20 hover:text-white transition-colors" onClick={() => { setServicesDropdownOpen(false); setIsOpen(false) }}>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path) ? 'bg-cta text-white font-semibold' : 'text-gray-100 hover:bg-cta/20'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="mt-4" onClick={() => setIsOpen(false)}>
              <Link href="/contact" className="block w-full text-center bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-jost font-semibold transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
