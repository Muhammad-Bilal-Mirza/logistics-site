import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import NewsSection from '../components/NewsSection';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <NewsSection />
      <CtaSection />
    </main>
  );
}
