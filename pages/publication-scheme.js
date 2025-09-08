// pages/publication-scheme.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function PublicationScheme() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Publication Scheme — OSDC" description="FOI-ready structure of information we publish." url="https://example.org/publication-scheme" image="/editorial-3.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-4">Publication Scheme</h1>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl space-y-2">
            <li>Who we are and what we do</li>
            <li>What we spend and how we spend it</li>
            <li>What our priorities are and how we are doing</li>
            <li>How we make decisions</li>
            <li>Our policies and procedures</li>
            <li>Lists and registers</li>
            <li>Services we offer</li>
          </ul>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
