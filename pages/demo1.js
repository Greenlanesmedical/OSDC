import ModernHeader from "../components/ModernHeader";
import ModernHero from "../components/ModernHero";
import SectionNav from "../components/SectionNav";
import StickyDevice from "../components/StickyDevice";
import StickyDeviceAlt from "../components/StickyDeviceAlt";
import FeatureGridModern from "../components/FeatureGridModern";
import StatsStrip from "../components/StatsStrip";
import ShopDirectory from "../components/ShopDirectory";
import Map from "../components/Map";
import NewsCarousel from "../components/NewsCarousel";

export default function Demo1(){
  return (
    <main id="main">
      <ModernHeader />
      <ModernHero />
      <SectionNav />
      <div className="snap">
        <StickyDevice />
        <StickyDeviceAlt />
        <FeatureGridModern />
        <StatsStrip />
        <NewsCarousel />
        <ShopDirectory />
        <Map />
      </div>
      <footer className="footer">
        <div className="container">
          <div>© {new Date().getFullYear()} OSDC — Modern Luxe demo.</div>
          <div className="small">Tip: add <code>hero-modern.mp4</code> and poster <code>hero-modern.jpg</code> to <code>/public</code> for a cinematic hero.</div>
        </div>
      </footer>
    </main>
  );
}
