import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue z-0">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E63946 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Partner with Union Logistics today and experience seamless, cost-effective, and reliable freight forwarding solutions worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:+97141234567" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center backdrop-blur-sm">
            <PhoneCall className="w-5 h-5" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
