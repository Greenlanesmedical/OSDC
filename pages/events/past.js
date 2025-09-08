// pages/events/past.js
import { useMemo, useState } from 'react';
import Link from 'next/link';
import HeritageHeader from '../../components/HeritageHeader';
import HeritageFooter from '../../components/HeritageFooter';
import SEOHead from '../../components/SEOHead';
import EventCard from '../../components/EventCard';

const PAGE_SIZE = 6;

export default function PastEvents({ events }) {
  const now = new Date();
  const past = useMemo(() => events.filter(e => new Date(e.start) < now).sort((a,b)=> new Date(b.start)-new Date(a.start)), [events]);
  const [page, setPage] = useState(1);
  const total = past.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page-1) * PAGE_SIZE;
  const view = past.slice(start, start + PAGE_SIZE);

  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Past Events — OSDC" description="Archive of past events on Oxford Street." url="https://example.org/events/past" image="/editorial-2.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-head text-4xl">Past Events</h1>
            <Link className="underline" href="/events">Upcoming events →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {view.map(e => <EventCard key={e.title} event={e} />)}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-2 rounded border disabled:opacity-50">Previous</button>
            <div className="text-sm">Page {page} of {totalPages}</div>
            <button disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))} className="px-3 py-2 rounded border disabled:opacity-50">Next</button>
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
