import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    title: "Union Logistics Announces Major Expansion into Hong Kong",
    date: "March 10, 2026",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1580828369019-2220b0a88746?q=80&w=2069&auto=format&fit=crop",
    excerpt: "Strengthening our Asian presence to provide seamless end-to-end supply chain solutions across the continent."
  },
  {
    title: "Navigating Global Customs: 2026 Regulatory Updates",
    date: "February 28, 2026",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    excerpt: "A comprehensive guide to the latest changes in international trade regulations and how they affect your cargo."
  },
  {
    title: "Sustainable Shipping: Our Commitment to Green Logistics",
    date: "February 15, 2026",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop",
    excerpt: "How Union Logistics is reducing carbon footprints through optimized routing and eco-friendly warehousing."
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Latest Updates</h2>
            <h3 className="text-4xl font-display font-bold text-brand-blue">News & Insights</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-red transition-colors">
            View All News <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-brand-red font-semibold">{item.category}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {item.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3 hover:text-brand-red transition-colors cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-red transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 text-brand-blue font-semibold hover:text-brand-red transition-colors">
          View All News <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
