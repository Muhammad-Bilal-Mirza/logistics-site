import { Globe, ShieldCheck, Target, Users } from 'lucide-react';
import CtaSection from '../components/CtaSection';

export default function About() {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Cargo ship"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">About Union Logistics</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering excellence in global logistics, freight forwarding, and supply chain management for over two decades.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-4xl font-display font-bold text-brand-blue mb-6">A Legacy of Reliability</h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Union Logistics FZE was founded with a singular vision: to simplify global trade. What started as a regional freight forwarder has grown into a global logistics powerhouse, now proudly expanding our operations into Hong Kong and beyond.
                </p>
                <p>
                  Our reliable liner services, Cargo Gulf's operations, are supported by our advanced IT systems, providing accurate and timely information between points of origin and destination.
                </p>
                <p>
                  Through providing shared resources and centralized warehousing, we enable our clients to reduce capital investment, allowing a flexible response to market demands.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" alt="Logistics" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop" alt="Shipping" className="rounded-2xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Core Values</h2>
            <h3 className="text-4xl font-display font-bold text-brand-blue">What Drives Us Forward</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Exact execution of complex supply chain requirements." },
              { icon: ShieldCheck, title: "Reliability", desc: "Consistent, on-time delivery you can count on." },
              { icon: Globe, title: "Global Reach", desc: "Connecting markets across continents seamlessly." },
              { icon: Users, title: "Partnership", desc: "Building long-term relationships with our clients." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-brand-red" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
