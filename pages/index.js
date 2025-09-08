// pages/index.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageHero from '../components/HeritageHero';
import HeritageIntro from '../components/HeritageIntro';
import HeritageBackground from '../components/HeritageBackground';
import HeritageRequirements from '../components/HeritageRequirements';
import HeritageBrand from '../components/HeritageBrand';
import HeritageWebsite from '../components/HeritageWebsite';
import HeritageServices from '../components/HeritageServices';
import HeritageDepartments from '../components/HeritageDepartments';
import ShopDirectory from '../components/ShopDirectory';
import NewsCarousel from '../components/NewsCarousel';
import Map from '../components/Map';
import HeritageNewsletter from '../components/HeritageNewsletter';
import HeritageFooter from '../components/HeritageFooter';

export default function HeritageHome() {
  return (
    <main className="min-h-screen bg-white">
      <HeritageHeader />
      <HeritageHero />
      <HeritageIntro />
      <HeritageBackground />
      <HeritageRequirements />
      <HeritageBrand />
      <HeritageWebsite />
      <HeritageDepartments />
      <HeritageServices />
      <section className="heritage-bg py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-head text-3xl mb-6">Shop Directory</h2>
          <div className="p-4 rounded-xl bg-white border gold-border shadow-subtle">
            <ShopDirectory />
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-head text-3xl mb-6">News</h2>
          <NewsCarousel />
        </div>
      </section>
      <section className="py-10 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-head text-3xl mb-6">Find Us</h2>
          <div className="rounded-xl overflow-hidden border gold-border shadow-subtle">
            <Map />
          </div>
        </div>
      </section>
      <HeritageNewsletter />
      <HeritageFooter />
    </main>
  );
}
