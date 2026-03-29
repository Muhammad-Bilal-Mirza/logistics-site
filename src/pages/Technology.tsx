import { Cpu, Database, Code2, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const solutions = [
  {
    icon: Cpu,
    title: 'Automation Tools',
    description: 'Automated sorting, label generation, and documentation workflows to minimize human error and maximize throughput.',
  },
  {
    icon: Database,
    title: 'Logistics Platform',
    description: 'A unified cloud-based dashboard for managing orders, tracking shipments, and analyzing supply chain performance in real-time.',
  },
  {
    icon: Code2,
    title: 'API Integrations',
    description: 'Seamlessly connect your e-commerce store or ERP system with our logistics infrastructure for automated order fulfillment.',
  },
  {
    icon: Zap,
    title: 'Real-time Tracking',
    description: 'Advanced GPS and IoT sensors provide granular visibility into your cargo\'s location, temperature, and handling status.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security protocols ensuring your proprietary trade data and customer information are always protected.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'AI-driven insights to forecast demand, optimize routes, and identify potential supply chain disruptions before they happen.',
  }
];

export default function Technology() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Technology"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Technology & Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powering the future of logistics with cutting-edge software, automation, and real-time data integration.
          </p>
        </div>
      </div>

      {/* Platform Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Our Platform</h2>
              <h3 className="text-4xl font-display font-bold text-brand-blue mb-6 leading-tight">
                One Unified Dashboard for Your Entire Supply Chain
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our proprietary logistics platform gives you complete control over your global operations. From booking shipments to managing inventory across multiple warehouses, everything is accessible through a single, intuitive interface.
              </p>
              <ul className="space-y-4 mb-10">
                {['Real-time GPS tracking', 'Automated customs documentation', 'Inventory level alerts', 'Cost analysis & reporting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-blue font-semibold">
                    <div className="w-2 h-2 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue/90 transition-all">
                Request a Demo
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-brand-red/5 rounded-[2rem] transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Dashboard" 
                className="relative rounded-2xl shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Innovation</h2>
            <h3 className="text-4xl font-display font-bold text-brand-blue">Digital Logistics Infrastructure</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
                  <sol.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-4">{sol.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
