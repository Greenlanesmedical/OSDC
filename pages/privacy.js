// pages/privacy.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Privacy — OSDC" description="How we handle data and analytics on this site." url="https://example.org/privacy" image="/editorial-1.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-4">Privacy</h1>
          <p className="text-gray-700 max-w-3xl">
            We use privacy-first analytics hosted in the UK to understand aggregate traffic and improve the site.
            No cross-site tracking and no personally identifiable profiles. You can change consent any time by
            clearing site data in your browser settings.
          </p>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
