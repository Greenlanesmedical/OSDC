import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';
// pages/getting-here.js
import HeritageHeader from '../components/HeritageHeader';
import GettingHere from '../components/GettingHere';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function HeritageGettingHere() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Getting Here — OSDC" description="Plan your journey to Oxford Street: Tube, bus, taxi, cycling, accessibility." url="https://example.org/getting-here" image="/hero-heritage.jpg" />
      <HeritageHeader />
      <GettingHere variant="heritage" />
      <HeritageFooter />
    </main>
  );
}
