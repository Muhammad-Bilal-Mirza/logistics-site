import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-20">
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
          <h1 className="text-5xl font-display font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our logistics experts to discuss your supply chain needs.
          </p>
        </div>
      </div>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-display font-bold text-brand-blue mb-8">We're Here to Help</h3>
              <p className="text-gray-600 text-lg mb-12">
                Whether you have a question about our services, need a quote, or want to track a shipment, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-blue mb-2">Head Office (UAE)</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Union Logistics FZE<br />
                      Jebel Ali Free Zone<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-blue mb-2">Hong Kong Office</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Union Logistics HK Ltd.<br />
                      Kwai Chung, New Territories<br />
                      Hong Kong
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-blue mb-2">Phone</h4>
                    <p className="text-gray-600 leading-relaxed">
                      UAE: +971 4 123 4567<br />
                      HK: +852 2345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-blue mb-2">Email</h4>
                    <p className="text-gray-600 leading-relaxed">
                      info@unionlogistics.ae<br />
                      quotes@unionlogistics.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-8">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none text-gray-700">
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Land Transportation</option>
                    <option>Warehousing</option>
                    <option>Customs Clearance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
