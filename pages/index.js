// pages/index.js
import SEOHead from '../components/SEOHead';
import HeritageHeader from '../components/HeritageHeader';
import HeritageHero from '../components/HeritageHero';
import HeritageDepartments from '../components/HeritageDepartments';
import HeritageFeatureRows from '../components/HeritageFeatureRows';
import StakeholderHub from '../components/StakeholderHub';
import GettingHere from '../components/GettingHere';
import HeritageFooter from '../components/HeritageFooter';

export default function Home() {
  return (
    <main id="main" className="bg-white min-h-screen">
      <SEOHead title="Oxford Street — Plan your visit" description="What’s on, where to go, and how to get here." url="https://example.org" image="/hero-heritage.webp" />
      <HeritageHeader />
      <HeritageHero />
      <HeritageDepartments />
      <HeritageFeatureRows />
      <StakeholderHub />
      <GettingHere />
      <HeritageFooter />
    </main>
  );
}
