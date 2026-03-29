/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Tracking from './pages/Tracking';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Quote from './pages/Quote';
import Network from './pages/Network';
import Technology from './pages/Technology';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-red selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/network" element={<Network />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
