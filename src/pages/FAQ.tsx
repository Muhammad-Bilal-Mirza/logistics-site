import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import CtaSection from '../components/CtaSection';

const faqs = [
  {
    question: "What are your typical shipping timelines?",
    answer: "Shipping timelines vary by service and destination. Standard Air Freight typically takes 3-5 business days, while Express services can deliver within 1-2 days. Sea Freight varies from 15-45 days depending on the route and port congestion.",
    category: "Shipping"
  },
  {
    question: "How is the shipping cost calculated?",
    answer: "Costs are calculated based on several factors: actual weight vs. volumetric weight (whichever is higher), origin and destination, service type (Air/Sea/Land), and any additional requirements like insurance or special handling.",
    category: "Pricing"
  },
  {
    question: "Do you handle customs clearance for international shipments?",
    answer: "Yes, Union Logistics provides comprehensive customs clearance services. Our expert brokers handle all documentation, tariff classification, and regulatory compliance to ensure smooth border crossings.",
    category: "Services"
  },
  {
    question: "What items are prohibited from shipping?",
    answer: "Prohibited items include hazardous materials (unless specifically certified), illegal substances, perishable goods (without proper cold chain), and items restricted by international trade laws or specific country regulations.",
    category: "Policies"
  },
  {
    question: "How can I track my shipment in real-time?",
    answer: "You can track your shipment using your unique tracking ID on our 'Tracking' page. Our system provides real-time updates from pickup to final delivery, including customs status and transit milestones.",
    category: "Tracking"
  },
  {
    question: "Do you offer insurance for my cargo?",
    answer: "Yes, we offer various cargo insurance options to protect your goods against loss or damage during transit. We highly recommend insurance for high-value or fragile shipments.",
    category: "Policies"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E63946 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find quick answers to common questions about our logistics services, pricing, and policies.
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-brand-red" />
                    </div>
                    <span className="text-lg font-bold text-brand-blue">{faq.question}</span>
                  </div>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8 pt-2">
                    <div className="pl-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/5 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
