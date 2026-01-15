import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng)

    // Update URL based on language
    const currentPath = location.pathname
    if (lng === 'es') {
      // Add /es prefix if not already there
      if (!currentPath.startsWith('/es')) {
        navigate(`/es${currentPath}`)
      }
    } else {
      // Remove /es prefix if present
      if (currentPath.startsWith('/es')) {
        navigate(currentPath.replace('/es', '') || '/')
      }
    }

    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Select language"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="font-jost font-medium">
          {i18n.language === 'es' ? 'ES' : 'EN'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[150px]"
          >
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                i18n.language === 'en'
                  ? 'bg-[#FB8040] text-white hover:bg-[#FB8040]/90'
                  : 'text-gray-700'
              }`}
            >
              <span className="text-2xl">🇺🇸</span>
              <span className="font-jost">English</span>
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                i18n.language === 'es'
                  ? 'bg-[#FB8040] text-white hover:bg-[#FB8040]/90'
                  : 'text-gray-700'
              }`}
            >
              <span className="text-2xl">🇲🇽</span>
              <span className="font-jost">Español</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
