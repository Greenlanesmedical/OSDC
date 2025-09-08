// pages/demo1.js
import LuxeHeader from '../components/LuxeHeader';
import ParallaxHero from '../components/ParallaxHero';
import StickyShowcase from '../components/StickyShowcase';
import InteractiveGrid from '../components/InteractiveGrid';
import Testimonials from '../components/Testimonials';
import VisitCTA from '../components/VisitCTA';
import StatsStrip from '../components/StatsStrip';
import Map from '../components/Map';

export default function ModernLuxe() {
  return (
    <main className="min-h-screen bg-white">
      <LuxeHeader />
      <ParallaxHero />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <StatsStrip />
        </div>
      </section>
      <StickyShowcase />
      <InteractiveGrid />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Find us</h2>
          <div className="rounded-2xl overflow-hidden border shadow-subtle">
            <Map />
          </div>
        </div>
      </section>
      <Testimonials />
      <VisitCTA />
    </main>
  );
}
