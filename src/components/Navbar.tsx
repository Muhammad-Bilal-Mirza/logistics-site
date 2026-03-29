import { Menu, X, Package, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-brand-red" : "text-gray-600 hover:text-brand-red";
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Network', path: '/network' },
    { name: 'Technology', path: '/technology' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Resources', path: '/resources' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.slice(0, 7).map((link) => (
              <Link key={link.path} to={link.path} className={`${isActive(link.path)} font-semibold text-sm transition-colors`}>
                {link.name}
              </Link>
            ))}
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-600 hover:text-brand-red font-semibold text-sm transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                More <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {navLinks.slice(7).map((link) => (
                  <Link key={link.path} to={link.path} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-red font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/quote" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
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
        <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`block px-4 py-3 font-bold rounded-xl ${isActive(link.path)} hover:bg-gray-50`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/quote" 
              onClick={() => setIsOpen(false)} 
              className="block px-4 py-4 text-center bg-brand-blue text-white font-bold rounded-xl mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
