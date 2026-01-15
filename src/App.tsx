import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from './components/templates/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Process from './pages/Process'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SanBernardino from './pages/counties/SanBernardino'
import Riverside from './pages/counties/Riverside'
import Hemet from './pages/counties/Hemet'
import LosAngeles from './pages/counties/LosAngeles'
import Victorville from './pages/counties/Victorville'

// Individual Service Pages
import BathtubRefinishing from './pages/services/BathtubRefinishing'
import KitchenRefinishing from './pages/services/KitchenRefinishing'
import SinkRefinishing from './pages/services/SinkRefinishing'
import BathVanityRefinishing from './pages/services/BathVanity'
import CrackRepair from './pages/services/CrackRepair'
import BathtubEnclosureRefinishing from './pages/services/EnclosureRefinishing'
import CutOutRepairs from './pages/services/CutOutRepairs'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Language synchronization component
function LanguageSync() {
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const isSpanishRoute = location.pathname.startsWith('/es')
    const currentLang = i18n.language

    if (isSpanishRoute && currentLang !== 'es') {
      i18n.changeLanguage('es')
    } else if (!isSpanishRoute && currentLang === 'es') {
      i18n.changeLanguage('en')
    }
  }, [location.pathname, i18n])

  return null
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <LanguageSync />
      <Layout>
        <Routes>
          {/* English Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/san-bernardino-reglazing" element={<SanBernardino />} />
          <Route path="/riverside-reglazing" element={<Riverside />} />
          <Route path="/hemet-reglazing" element={<Hemet />} />
          <Route path="/los-angeles-reglazing" element={<LosAngeles />} />
          <Route path="/victorville-reglazing" element={<Victorville />} />
          {/* Individual Service Pages */}
          <Route path="/services/bathtub-refinishing" element={<BathtubRefinishing />} />
          <Route path="/services/kitchen-refinishing" element={<KitchenRefinishing />} />
          <Route path="/services/sink-refinishing" element={<SinkRefinishing />} />
          <Route path="/services/bath-vanity-refinishing" element={<BathVanityRefinishing />} />
          <Route path="/services/crack-repair" element={<CrackRepair />} />
          <Route path="/services/bathtub-enclosure" element={<BathtubEnclosureRefinishing />} />
          <Route path="/services/cut-out-repairs" element={<CutOutRepairs />} />

          {/* Spanish Routes - Mirror all routes with /es prefix */}
          <Route path="/es" element={<Home />} />
          <Route path="/es/services" element={<Services />} />
          <Route path="/es/process" element={<Process />} />
          <Route path="/es/about" element={<About />} />
          <Route path="/es/gallery" element={<Gallery />} />
          <Route path="/es/contact" element={<Contact />} />
          <Route path="/es/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/es/san-bernardino-reglazing" element={<SanBernardino />} />
          <Route path="/es/riverside-reglazing" element={<Riverside />} />
          <Route path="/es/hemet-reglazing" element={<Hemet />} />
          <Route path="/es/los-angeles-reglazing" element={<LosAngeles />} />
          <Route path="/es/victorville-reglazing" element={<Victorville />} />
          {/* Spanish Individual Service Pages */}
          <Route path="/es/services/bathtub-refinishing" element={<BathtubRefinishing />} />
          <Route path="/es/services/kitchen-refinishing" element={<KitchenRefinishing />} />
          <Route path="/es/services/sink-refinishing" element={<SinkRefinishing />} />
          <Route path="/es/services/bath-vanity-refinishing" element={<BathVanityRefinishing />} />
          <Route path="/es/services/crack-repair" element={<CrackRepair />} />
          <Route path="/es/services/bathtub-enclosure" element={<BathtubEnclosureRefinishing />} />
          <Route path="/es/services/cut-out-repairs" element={<CutOutRepairs />} />
        </Routes>
      </Layout>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
