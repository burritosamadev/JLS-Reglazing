import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend) // Load translations from /public/locales
  .use(LanguageDetector) // Detect user language from browser
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    debug: false,

    detection: {
      // Order of detection methods
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language preference
      caches: ['localStorage'],
      // localStorage key name
      lookupLocalStorage: 'i18nextLng',
    },

    backend: {
      // Path to translation files
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    // Default namespace to use
    defaultNS: 'common',

    // Namespaces to load
    ns: ['common', 'navigation', 'home', 'services', 'about', 'contact', 'gallery', 'seo'],

    // React specific options
    react: {
      useSuspense: true,
    },
  })

export default i18n
