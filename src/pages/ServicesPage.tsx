import { Plane, Ship, Warehouse, ShieldCheck, Truck, PackageCheck } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const detailedServices = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Union Logistics air freight management capability ensures your cargo reaches any city, country or continent, whenever you need. Goods are collected at the point of origin, cleared through customs and delivered to the end consignee using the most cost effective and expedient route.',
    features: ['Door-to-door delivery', 'Express services', 'Charter flights', 'Dangerous goods handling']
  },
  {
    icon: Ship,
    title: 'Sea Freight & Cargo Gulf',
    description: 'Our reliable liner services, Cargo Gulf operations are supported by Union Logistics advanced IT system, providing accurate and timely information between points of origin and destination. We handle FCL, LCL, and break-bulk shipments globally.',
    features: ['FCL & LCL services', 'Port-to-port', 'Ro-Ro services', 'Project cargo']
  },
  {
    icon: Warehouse,
    title: 'Centralized Warehousing',
    description: 'Through providing shared resources and centralized warehousing, we enable you to reduce your capital investment, allowing a flexible response to market demands. Savings can also be made by coordinating production runs with no under- or overstocking of inventory.',
    features: ['Inventory management', 'Cross-docking', 'Temperature controlled', 'Pick and pack']
  },
  {
    icon: Truck,
    title: 'Land Transportation',
    description: 'Comprehensive road freight services connecting major hubs. Our modern fleet ensures safe and timely delivery of your goods across borders with real-time tracking capabilities.',
    features: ['FTL & LTL', 'Cross-border transport', 'Heavy haulage', 'Last-mile delivery']
  },
  {
    icon: ShieldCheck,
    title: 'Customs Clearance',
    description: 'Expert navigation of complex international trade regulations. Our dedicated customs brokers ensure your cargo moves across borders without delay, handling all necessary documentation.',
    features: ['Import/Export clearance', 'Tariff classification', 'Duty consulting', 'Regulatory compliance']
  },
  {
    icon: PackageCheck,
    title: 'Supply Chain Solutions',
    description: 'End-to-end supply chain optimization. We analyze your logistics requirements and design custom solutions to improve efficiency, reduce costs, and enhance visibility.',
    features: ['Supply chain consulting', 'Vendor management', 'PO management', 'Reverse logistics']
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics Services"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive, end-to-end logistics solutions designed to optimize your supply chain and drive business growth.
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-brand-blue">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
