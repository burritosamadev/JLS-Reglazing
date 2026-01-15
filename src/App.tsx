import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
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
