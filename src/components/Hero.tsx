import { ArrowRight, MapPin, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
          alt="Cargo ship at port"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-brand-red" />
            <span>Now expanding operations in Hong Kong</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Global Logistics, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-400">
              Delivered Locally.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Union Logistics FZE provides comprehensive import and export solutions. 
            From air freight to centralized warehousing, we ensure your cargo reaches 
            any continent, whenever you need it.
          </p>

          {/* Tracking Widget */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-xl flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Enter tracking number (e.g. UL-123456)" 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none text-gray-700"
              />
            </div>
            <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Track Cargo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">150+</div>
              <div className="text-sm text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white mb-1">99%</div>
              <div className="text-sm text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
