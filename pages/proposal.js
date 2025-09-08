// pages/proposal.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function Proposal() {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Submit a Public Realm Proposal — OSDC" description="Guidance for landowners to propose public realm activations and improvements." url="https://example.org/proposal" image="/editorial-4.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-6">Submit a Public Realm Proposal</h1>
          <p className="text-gray-700 max-w-3xl">Outline your concept, location, timeframes, and anticipated benefits. We’ll follow up with next steps and coordination pathways.</p>
          <div className="mt-6 p-6 bg-white rounded-2xl border gold-border shadow-subtle">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Download the guidance template (coming soon).</li>
              <li>Email your proposal to <a className="underline" href="mailto:osdc-proposals@example.org">osdc-proposals@example.org</a>.</li>
              <li>We’ll review and respond within 10 working days.</li>
            </ol>
          </div>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
