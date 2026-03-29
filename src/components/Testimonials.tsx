import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Union Logistics has completely transformed our supply chain. Their expansion into Hong Kong gave us the exact leverage we needed for our Asian markets.",
    author: "Sarah Jenkins",
    role: "Supply Chain Director, TechCorp",
    rating: 5
  },
  {
    content: "The Cargo Gulf operations are incredibly reliable. We've seen a 40% reduction in transit delays since switching to their sea freight services.",
    author: "Ahmed Al-Fayed",
    role: "Operations Manager, Global Trade LLC",
    rating: 5
  },
  {
    content: "Their centralized warehousing solutions helped us cut capital investment significantly. The IT systems provide transparency we never had before.",
    author: "Michael Chen",
    role: "CEO, Chen Manufacturing",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-4xl font-display font-bold mb-6">Trusted by Global Enterprises</h3>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our partners have to say about our logistics and freight forwarding services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-brand-red text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
