import { CheckCircle2, TrendingUp, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'Advanced IT Systems',
    description: 'Accurate and timely information between points of origin and destination.',
    icon: TrendingUp,
  },
  {
    title: 'Cost Effective',
    description: 'Reduce capital investment with shared resources and flexible response.',
    icon: CheckCircle2,
  },
  {
    title: 'Expert Team',
    description: 'Dedicated professionals managing your cargo every step of the way.',
    icon: Users,
  },
  {
    title: 'Expedient Routes',
    description: 'Delivered to the end consignee using the most efficient paths.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-[2rem] transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
              alt="Logistics operations" 
              className="relative rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-blue">25+</div>
                  <div className="text-sm text-gray-500 font-medium">Years Experience</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Delivering excellence in global logistics and supply chain management.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6 leading-tight">
              We Enable You to Reduce Capital Investment
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Through providing shared resources and centralized warehousing, we enable you to reduce your capital investment, allowing a flexible response to market demands. Savings can also be made by coordinating production runs with no under- or overstocking of inventory.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-blue mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
