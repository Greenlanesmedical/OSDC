// components/HeritageTimeline.js
export default function HeritageTimeline() {
  const items = [
    { date: 'Autumn 2025', title: 'Engagement & Pilot Prep', copy: 'Stakeholder workshops; public realm pilots scoped.' },
    { date: 'Winter 2025', title: 'Windows & Winter Moments', copy: 'District activations; brand and wayfinding trials.' },
    { date: '1 Jan 2026', title: 'OSDC Operational Target', copy: 'Corporate setup, governance, and public interface live.' },
    { date: 'Spring 2026', title: 'Public Realm Phase 1', copy: 'Greening, seating, access and wayfinding implementations.' },
  ];
  return (
    <section id="timeline" className="py-14 heritage-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-6">Timeline to 1 Jan 2026</h2>
        <ol className="relative border-l gold-border pl-6 space-y-6">
          {items.map(i => (
            <li key={i.title}>
              <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-[var(--heritage-gold)]" />
              <div className="text-xs text-gray-600">{i.date}</div>
              <div className="font-head text-xl">{i.title}</div>
              <p className="text-gray-700">{i.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
