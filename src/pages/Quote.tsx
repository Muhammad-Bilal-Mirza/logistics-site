import { Calculator, Package, MapPin, Scale, Ruler, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Quote() {
  const [weight, setWeight] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  useEffect(() => {
    if (weight > 0 && length > 0 && width > 0 && height > 0) {
      // Simple mock calculation: (Volume * 0.5) + (Weight * 2)
      const volume = (length * width * height) / 1000; // in dm3
      const cost = (volume * 0.5) + (weight * 2) + 50; // base fee 50
      setEstimatedCost(Math.round(cost));
    } else {
      setEstimatedCost(null);
    }
  }, [weight, length, width, height]);

  return (
    <main className="pt-20 bg-brand-light min-h-screen">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E63946 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Get a Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Receive a customized logistics estimate for your shipment in minutes.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Quote Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-3">
                <Package className="w-6 h-6 text-brand-red" />
                Shipment Details
              </h3>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Origin City/Country</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="e.g. Dubai, UAE" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Destination City/Country</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="e.g. Hong Kong" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Weight (kg)</label>
                    <div className="relative">
                      <Scale className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input 
                        type="number" 
                        value={weight || ''}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" 
                        placeholder="0" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Length (cm)</label>
                    <div className="relative">
                      <Ruler className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input 
                        type="number" 
                        value={length || ''}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" 
                        placeholder="0" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Width (cm)</label>
                    <div className="relative">
                      <Ruler className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input 
                        type="number" 
                        value={width || ''}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" 
                        placeholder="0" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Height (cm)</label>
                    <div className="relative">
                      <Ruler className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input 
                        type="number" 
                        value={height || ''}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" 
                        placeholder="0" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none text-gray-700">
                    <option>Standard Air Freight</option>
                    <option>Express Air Freight</option>
                    <option>Sea Freight (FCL)</option>
                    <option>Sea Freight (LCL)</option>
                    <option>Land Transportation</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  Submit Quote Request <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Calculator Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-blue p-8 rounded-3xl shadow-xl sticky top-24 text-white">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-brand-red" />
                <h3 className="text-xl font-bold">Instant Estimate</h3>
              </div>
              
              <div className="space-y-6 mb-8 pb-8 border-b border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Base Rate</span>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Weight Surcharge</span>
                  <span>${(weight * 2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Volume Surcharge</span>
                  <span>${((length * width * height / 1000) * 0.5).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-gray-400 font-medium">Estimated Total</span>
                <span className="text-4xl font-display font-bold text-brand-red">
                  {estimatedCost ? `$${estimatedCost}` : '---'}
                </span>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed italic">
                * This is a rough estimate for standard shipping. Final pricing may vary based on specific requirements, fuel surcharges, and customs duties.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
