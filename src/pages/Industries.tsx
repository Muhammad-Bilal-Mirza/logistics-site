import { ShoppingCart, Store, Factory, Pill, Car, Utensils, ArrowRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Specialized fulfillment and last-mile delivery solutions for online retailers, ensuring fast and reliable customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'End-to-end supply chain management for retail chains, from manufacturer to store shelf, optimizing inventory levels.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Just-in-time delivery of raw materials and distribution of finished goods to keep your production lines running smoothly.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Temperature-controlled logistics and strict compliance handling for sensitive medical supplies and healthcare products.',
    image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Complex logistics for parts distribution and vehicle transport, supporting the global automotive supply chain.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    description: 'Cold chain solutions and food-grade warehousing to maintain freshness and safety from farm to table.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Industries() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Industries"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tailored logistics solutions for diverse sectors, meeting unique challenges with precision and expertise.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-brand-blue/20 transition-colors" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <industry.icon className="w-6 h-6 text-brand-red" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <button className="flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
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
