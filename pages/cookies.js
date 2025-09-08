// pages/cookies.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function Cookies() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Cookie Policy — OSDC" description="How cookies are used on this website." url="https://example.org/cookies" image="/editorial-1.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-4">Cookie Policy</h1>
          <p className="text-gray-700 max-w-3xl">We only use strictly necessary cookies and privacy-first analytics when you opt in. No cross-site tracking.</p>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
