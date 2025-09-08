// pages/index.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageHero from '../components/HeritageHero';
import InPageNav from '../components/InPageNav';
import OSDCNumbers from '../components/OSDCNumbers';
import SEOHead from '../components/SEOHead';
import HeritageIntro from '../components/HeritageIntro';
import HeritageBackground from '../components/HeritageBackground';
import HeritageRequirements from '../components/HeritageRequirements';
import HeritageBrand from '../components/HeritageBrand';
import HeritageWebsite from '../components/HeritageWebsite';
import HeritageTimeline from '../components/HeritageTimeline';
import StakeholderHub from '../components/StakeholderHub';
import HeritageServices from '../components/HeritageServices';
import HeritageDepartments from '../components/HeritageDepartments';
import ShopDirectory from '../components/ShopDirectory';
import dynamic from 'next/dynamic';
const NewsCarousel = dynamic(() => import('../components/NewsCarousel'), { ssr: false });
const Map = dynamic(() => import('../components/Map'), { ssr: false });
const HeritageNewsletter = dynamic(() => import('../components/HeritageNewsletter'), { ssr: false });
import HeritageFooter from '../components/HeritageFooter';

export default function HeritageHome() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="OSDC — Oxford Street Development Corporation" description="Revitalising Oxford Street with OSDC. Brand, public realm, events and partners." url="https://example.org/" image="/hero-heritage.jpg" />
      <HeritageHeader />
      <HeritageHero />
      <InPageNav />
      <HeritageIntro />
      <HeritageBackground />
      <HeritageRequirements />
      <HeritageBrand />
      <HeritageWebsite />
      <OSDCNumbers />
      <StakeholderHub />
      <HeritageTimeline />
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
          <p className="text-sm text-gray-600 mb-4">See <a className="underline" href="/news">all news</a> and <a className="underline" href="/events">events</a>.</p>
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