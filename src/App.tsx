/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ArchitecturalDesignPage from './pages/services/ArchitecturalDesignPage';
import ConstructionPage from './pages/services/ConstructionPage';
import GreyStructurePage from './pages/services/GreyStructurePage';
import MepPage from './pages/services/MepPage';
import InteriorDesignPage from './pages/services/InteriorDesignPage';
import FinishingPage from './pages/services/FinishingPage';
import TurnkeyPage from './pages/services/TurnkeyPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Dedicated Service Pages with Unique Custom Designs */}
            <Route path="/services/architectural-design" element={<ArchitecturalDesignPage />} />
            <Route path="/services/architecture" element={<ArchitecturalDesignPage />} />
            <Route path="/services/construction" element={<ConstructionPage />} />
            <Route path="/services/general-construction" element={<ConstructionPage />} />
            <Route path="/services/grey-structure" element={<GreyStructurePage />} />
            <Route path="/services/gray-structure" element={<GreyStructurePage />} />
            <Route path="/services/mep" element={<MepPage />} />
            <Route path="/services/mep-services" element={<MepPage />} />
            <Route path="/services/interior-design" element={<InteriorDesignPage />} />
            <Route path="/services/interior" element={<InteriorDesignPage />} />
            <Route path="/services/finishing" element={<FinishingPage />} />
            <Route path="/services/finishing-works" element={<FinishingPage />} />
            <Route path="/services/turnkey-construction" element={<TurnkeyPage />} />
            <Route path="/services/turnkey" element={<TurnkeyPage />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
