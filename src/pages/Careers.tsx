import { Briefcase, Heart, Rocket, GraduationCap, ArrowRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const jobs = [
  {
    title: 'Logistics Operations Manager',
    location: 'Dubai, UAE',
    type: 'Full-time',
    category: 'Operations'
  },
  {
    title: 'Supply Chain Analyst',
    location: 'Hong Kong',
    type: 'Full-time',
    category: 'Data & Analytics'
  },
  {
    title: 'Warehouse Supervisor',
    location: 'Singapore',
    type: 'Full-time',
    category: 'Logistics'
  },
  {
    title: 'Customer Success Specialist',
    location: 'London, UK',
    type: 'Full-time',
    category: 'Customer Support'
  }
];

export default function Careers() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
            alt="Careers"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build the future of global logistics with a team that values innovation, reliability, and growth.
          </p>
        </div>
      </div>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Our Culture</h2>
            <h3 className="text-4xl font-display font-bold text-brand-blue">Why Work at Union Logistics?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="text-2xl font-bold text-brand-blue mb-4">Innovation First</h4>
              <p className="text-gray-600">We embrace new technologies and creative problem-solving to stay ahead in a rapidly changing industry.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="text-2xl font-bold text-brand-blue mb-4">People Centric</h4>
              <p className="text-gray-600">Our employees are our greatest asset. We foster an inclusive, supportive, and collaborative environment.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="text-2xl font-bold text-brand-blue mb-4">Growth Mindset</h4>
              <p className="text-gray-600">We invest in your professional development with continuous learning opportunities and career paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Opportunities</h2>
              <h3 className="text-4xl font-display font-bold text-brand-blue">Current Openings</h3>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-500 font-medium">Showing {jobs.length} positions</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow group cursor-pointer">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <div className="text-sm text-brand-red font-bold uppercase tracking-widest mb-1">{job.category}</div>
                  <h4 className="text-2xl font-bold text-brand-blue group-hover:text-brand-red transition-colors">{job.title}</h4>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><Rocket className="w-4 h-4" /> {job.location}</span>
                  </div>
                </div>
                <button className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-red transition-colors flex items-center gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
