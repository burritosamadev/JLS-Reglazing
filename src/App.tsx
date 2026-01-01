import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
// Individual Service Pages - Disabled for now, re-enable later
// import BathtubReglazing from './pages/services/BathtubReglazing'
// import KitchenCountertop from './pages/services/KitchenCountertop'
// import SinkRefinishing from './pages/services/SinkRefinishing'
// import BathVanity from './pages/services/BathVanity'
// import CrackRepair from './pages/services/CrackRepair'
// import EnclosureRefinishing from './pages/services/EnclosureRefinishing'
// import CutOutRepairs from './pages/services/CutOutRepairs'

function App() {
  return (
    <Router>
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
          {/* Individual Service Pages - Disabled for now, re-enable later */}
          {/* <Route path="/services/bathtub-reglazing" element={<BathtubReglazing />} /> */}
          {/* <Route path="/services/kitchen-countertop-reglazing" element={<KitchenCountertop />} /> */}
          {/* <Route path="/services/sink-refinishing" element={<SinkRefinishing />} /> */}
          {/* <Route path="/services/bath-vanity-restoration" element={<BathVanity />} /> */}
          {/* <Route path="/services/crack-chip-repair" element={<CrackRepair />} /> */}
          {/* <Route path="/services/bathtub-enclosure-refinishing" element={<EnclosureRefinishing />} /> */}
          {/* <Route path="/services/cut-out-repairs" element={<CutOutRepairs />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
