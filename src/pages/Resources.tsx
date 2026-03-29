import { ArrowRight, Calendar, Search, Tag } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const blogPosts = [
  {
    title: "The Future of E-commerce Logistics in 2026",
    date: "March 25, 2026",
    category: "Industry Insights",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    excerpt: "How automation and AI are reshaping the last-mile delivery landscape for online retailers worldwide."
  },
  {
    title: "Optimizing Sea Freight: A Guide for Manufacturers",
    date: "March 18, 2026",
    category: "Shipping Guides",
    author: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Strategies to reduce transit times and costs in ocean shipping while maintaining supply chain resilience."
  },
  {
    title: "Case Study: Streamlining Pharma Cold Chain",
    date: "March 10, 2026",
    category: "Case Studies",
    author: "Dr. Robert Chen",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2070&auto=format&fit=crop",
    excerpt: "How Union Logistics helped a major pharmaceutical firm achieve 100% temperature compliance across borders."
  },
  {
    title: "Hong Kong: The Gateway to Asian Markets",
    date: "March 05, 2026",
    category: "News Updates",
    author: "Sarah Lee",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Exploring the strategic importance of our new Hong Kong hub for global trade routes."
  },
  {
    title: "Sustainable Warehousing: Beyond Solar Panels",
    date: "February 22, 2026",
    category: "Sustainability",
    author: "Mark Thompson",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Innovative approaches to reducing the environmental impact of large-scale logistics facilities."
  },
  {
    title: "Navigating Post-Brexit Trade Regulations",
    date: "February 15, 2026",
    category: "Shipping Guides",
    author: "William Parker",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Essential tips for businesses shipping between the UK and the European Union in the current landscape."
  }
];

export default function Resources() {
  return (
    <main className="pt-20">
      <div className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Resources"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Resources & Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest industry insights, shipping guides, and company updates.
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-transparent shadow-sm focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="Search articles..." />
            </div>
            <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {['All', 'Insights', 'Guides', 'Case Studies', 'News'].map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${i === 0 ? 'bg-brand-red text-white' : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand-red uppercase tracking-widest flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-red transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-red transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            {[1, 2, 3].map((num) => (
              <button key={num} className={`w-12 h-12 rounded-xl font-bold transition-all ${num === 1 ? 'bg-brand-blue text-white' : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'}`}>
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
