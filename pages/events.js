import { useState, useMemo } from 'react';
// pages/events.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import EventCard from '../components/EventCard';
import SEOHead from '../components/SEOHead';


function FilterControls() { return null; }

export default function EventsArchive({ events }) {
  
  const [showPast, setShowPast] = useState(false);
  const [tag, setTag] = useState('All');
  const now = new Date();
  const filtered = useMemo(() => {
    const byTime = events.filter(e => showPast ? new Date(e.start) < now : new Date(e.start) >= now);
    if (tag === 'All') return byTime;
    return byTime.filter(e => (e.tags || []).includes(tag));
  }, [events, showPast, tag, now]);

  function FilterControls() {
    const tags = Array.from(new Set(events.flatMap(e => e.tags || [])));
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <label className="flex items-center gap-1"><input type="checkbox" onChange={e=>setShowPast(e.target.checked)} /> Show past</label>
        <select value={tag} onChange={e=>setTag(e.target.value)} className="px-2 py-1 rounded border">
          <option>All</option>
          {tags.map(t => <option key={t}>{t}</option>)}
        </select>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Events — OSDC" description="Editorial events and seasonal moments on Oxford Street." url="https://example.org/events" image="/editorial-6.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-6">Events</h1>
          <div className="mb-6 flex flex-wrap gap-3 text-sm">
            <FilterControls />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS.map(e => <EventCard key={e.title} event={e} />)}
          </div>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}


export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const dataPath = path.join(process.cwd(), 'public', 'data', 'events.json');
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return { props: { events: items }, revalidate: 3600 };
}
