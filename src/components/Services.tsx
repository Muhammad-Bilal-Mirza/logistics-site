import { Plane, Ship, Warehouse, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Expedient routing to any city or continent. Goods are collected, cleared through customs, and delivered to the consignee efficiently.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop'
  },
  {
    icon: Ship,
    title: 'Sea Freight & Liner Services',
    description: 'Reliable Cargo Gulf operations supported by advanced IT systems, providing accurate and timely information between origin and destination.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Warehouse,
    title: 'Centralized Warehousing',
    description: 'Reduce capital investment with shared resources. Flexible response to market demands with coordinated production runs.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: ShieldCheck,
    title: 'Customs Clearance',
    description: 'Seamless navigation of complex international trade regulations, ensuring your cargo moves across borders without delay.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-brand-blue mb-6">Comprehensive Logistics Solutions</h3>
          <p className="text-gray-600 text-lg">
            We provide end-to-end supply chain solutions tailored to your specific business needs, 
            ensuring cost-effective and timely delivery worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 relative">
                <div className="w-12 h-12 bg-brand-red text-white rounded-xl flex items-center justify-center absolute -top-6 right-6 shadow-lg shadow-brand-red/30 group-hover:-translate-y-1 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3 mt-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
