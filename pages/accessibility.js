// pages/accessibility.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Accessibility Statement — OSDC" description="Our commitment to accessibility and WCAG 2.2 AA." url="https://example.org/accessibility" image="/editorial-2.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-4">Accessibility Statement</h1>
          <p className="text-gray-700 max-w-3xl">We aim to meet WCAG 2.2 AA across the site. If you experience barriers, contact <a className="underline" href="/contact">the team</a>.</p>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
