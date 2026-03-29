import React, { useState } from 'react';
import { Search, Package, Truck, Ship, CheckCircle2, MapPin } from 'lucide-react';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-brand-light flex flex-col">
      <div className="bg-brand-blue py-24 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E63946 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Track Your Cargo</h1>
          <p className="text-xl text-gray-300 mb-10">
            Enter your Union Logistics tracking number to get real-time updates on your shipment.
          </p>
          
          <form onSubmit={handleTrack} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
            <div className="relative flex-grow flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g. UL-123456)" 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none text-gray-700 text-lg"
                required
              />
            </div>
            <button type="submit" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-lg">
              Track Now
            </button>
          </form>
        </div>
      </div>

      {isTracking && (
        <div className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-gray-100 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-1">Shipment #{trackingNumber.toUpperCase()}</h2>
                <p className="text-gray-500">Estimated Delivery: March 18, 2026</p>
              </div>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                In Transit
              </div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100"></div>

              <div className="space-y-10 relative">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-brand-red/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-blue">Shipment Picked Up</h4>
                    <p className="text-gray-500 text-sm mb-1">Dubai, UAE</p>
                    <p className="text-gray-400 text-xs">March 12, 2026 - 09:30 AM</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-brand-red/20">
                    <Package className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-blue">Processed at Origin Hub</h4>
                    <p className="text-gray-500 text-sm mb-1">Jebel Ali Port, UAE</p>
                    <p className="text-gray-400 text-xs">March 13, 2026 - 14:15 PM</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-brand-blue/20 ring-4 ring-white">
                    <Ship className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-blue">Departed Origin</h4>
                    <p className="text-gray-500 text-sm mb-1">Vessel: Cargo Gulf Express V.42</p>
                    <p className="text-gray-400 text-xs">March 14, 2026 - 08:00 AM</p>
                  </div>
                </div>

                {/* Step 4 (Pending) */}
                <div className="flex gap-6 opacity-50">
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-gray-700">Arrival at Destination Port</h4>
                    <p className="text-gray-500 text-sm mb-1">Hong Kong Port, HK</p>
                    <p className="text-gray-400 text-xs">Pending</p>
                  </div>
                </div>

                {/* Step 5 (Pending) */}
                <div className="flex gap-6 opacity-50">
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-gray-700">Out for Delivery</h4>
                    <p className="text-gray-500 text-sm mb-1">Hong Kong</p>
                    <p className="text-gray-400 text-xs">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
