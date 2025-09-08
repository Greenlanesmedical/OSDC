// pages/index.js
import dynamic from 'next/dynamic';
import HeritageHeader from '../components/HeritageHeader';
import HeritageHero from '../components/HeritageHero';
import HeritageDepartments from '../components/HeritageDepartments';
import HeritageFeatureRows from '../components/HeritageFeatureRows';
import HeritageServices from '../components/HeritageServices';
import HeritageNewsletter from '../components/HeritageNewsletter';
import ShopDirectory from '../components/ShopDirectory';
import StakeholderHub from '../components/StakeholderHub';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

const NewsCarousel = dynamic(() => import('../components/NewsCarousel'), { ssr: false });
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <main id="main" className="bg-white min-h-screen">
      <SEOHead title="Oxford Street — Visit, Shop, Explore" description="Plan your visit to Oxford Street: shops, events and how to get here." image="/hero-heritage.webp" />
      <HeritageHeader />
      <HeritageHero />
      <HeritageDepartments />
      <HeritageFeatureRows />
      <HeritageServices />
      <NewsCarousel />
      <ShopDirectory />
      <StakeholderHub />
      <Map />
      <HeritageNewsletter />
      <HeritageFooter />
    </main>
  );
}
