import { Menu, X, Package, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-brand-red" : "text-gray-600 hover:text-brand-red";
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-brand-blue tracking-tight">
                UNION<span className="text-brand-red">LOGISTICS</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium transition-colors`}>Home</Link>
            <Link to="/services" className={`${isActive('/services')} font-medium transition-colors`}>Services</Link>
            <Link to="/tracking" className={`${isActive('/tracking')} font-medium transition-colors`}>Tracking</Link>
            <Link to="/about" className={`${isActive('/about')} font-medium transition-colors`}>About Us</Link>
            <Link to="/contact" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 font-medium rounded-md ${isActive('/')}`}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className={`block px-3 py-2 font-medium rounded-md ${isActive('/services')}`}>Services</Link>
            <Link to="/tracking" onClick={() => setIsOpen(false)} className={`block px-3 py-2 font-medium rounded-md ${isActive('/tracking')}`}>Tracking</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 font-medium rounded-md ${isActive('/about')}`}>About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-blue font-bold hover:bg-gray-50 rounded-md">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
