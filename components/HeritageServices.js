// components/HeritageServices.js
const SERVICES = [
  { name: 'Concierge', copy: 'Itineraries, reservations, insider tips.' },
  { name: 'Personal Shopping', copy: 'Private suites and styling appointments.' },
  { name: 'Gifting', copy: 'Wrapping, engraving, personal notes.' },
  { name: 'Events', copy: 'Talks, trunk shows, exhibitions.' },
];

export default function HeritageServices() {
  return (
    <section className="py-14 heritage-bg" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-6">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div key={s.name} className="p-6 bg-white rounded-xl border gold-border shadow-subtle">
              <div className="font-head text-2xl">{s.name}</div>
              <p className="mt-2 text-gray-700">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
