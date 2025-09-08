// components/HeritageBackground.js
export default function HeritageBackground() {
  return (
    <section id="background" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="font-head text-3xl">Background</h2>
        <p className="text-sm text-gray-600 mt-1 micro-intro">Why Oxford Street must evolve now — the context and mandate for OSDC.</p>
          <p className="mt-3 text-gray-700">
            Oxford Street contributes ~£25bn annually and attracts ~120m visitors each year. Recent
            headwinds—pandemic impacts and the growth of online shopping—mean the street must evolve quickly to
            remain vibrant and competitive.
          </p>
          <p className="mt-3 text-gray-700">
            The Mayor of London intends to establish OSDC as a Mayoral Development Corporation with full planning
            authority for Oxford Street and its immediate surroundings (target operational date: 1 January 2026).
            OSDC will coordinate partners to deliver pedestrian-first streets (subject to consultation), exceptional
            public realm, curated events and an exciting mix of businesses.
          </p>
          <p className="mt-3 text-gray-700">
            Success will depend on strong relationships across landowners, retail and hospitality, local authorities
            (Westminster & Camden), and the wider business community.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border gold-border shadow-subtle">
          <img src="/hero-heritage.jpg" alt="Oxford Street" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
