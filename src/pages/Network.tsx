import { Globe, MapPin, Building2, Warehouse, Phone, Mail } from 'lucide-react';

const locations = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    type: 'Headquarters & Logistics Hub',
    address: 'Jebel Ali Free Zone, South Zone, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'uae@unionlogistics.ae',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Hong Kong',
    country: 'China',
    type: 'Regional Hub (Asia-Pacific)',
    address: 'Kwai Chung Container Terminal, New Territories, HK',
    phone: '+852 2345 6789',
    email: 'hk@unionlogistics.ae',
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    type: 'Distribution Center',
    address: 'Jurong Port Road, Singapore 619110',
    phone: '+65 6789 0123',
    email: 'sg@unionlogistics.ae',
    image: 'https://images.unsplash.com/photo-1525625230556-8e8b7e96978e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    type: 'European Gateway',
    address: 'Heathrow Logistics Park, Middlesex, UK',
    phone: '+44 20 7890 1234',
    email: 'uk@unionlogistics.ae',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Network() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Global Network"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Global Network</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Strategically located offices and warehouses connecting major trade routes across the globe.
          </p>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue/5 rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
              <Globe className="w-[600px] h-[600px] text-brand-blue" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">Service Areas & Coverage</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Countries Covered</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2">45</div>
                  <div className="text-gray-600 font-medium">Global Offices</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2">1.2M</div>
                  <div className="text-gray-600 font-medium">sq. ft. Warehousing</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Partner Carriers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img src={loc.image} alt={loc.city} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4" />
                    {loc.country}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">{loc.city}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {loc.type}
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-3 text-gray-600 text-sm">
                      <Warehouse className="w-4 h-4 text-brand-red mt-1 flex-shrink-0" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{loc.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
