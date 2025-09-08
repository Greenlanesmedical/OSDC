import { useState, useMemo } from 'react';
// pages/events.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';
import EventCard from '../components/EventCard';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function EventsPage({ items = [] }) {
  const [showPast, setShowPast] = useState(false);
  const [tag, setTag] = useState('All');
  const tags = useMemo(() => ['All', ...Array.from(new Set(items.flatMap(i => i.tags || [])))], [items]);

  const now = new Date();
  const filtered = useMemo(() => {
    let list = items.slice();
    list = list.filter(i => showPast ? new Date(i.start) < now : new Date(i.start) >= now);
    if (tag !== 'All') list = list.filter(i => (i.tags || []).includes(tag));
    return list.sort((a,b)=> new Date(a.start) - new Date(b.start));
  }, [items, showPast, tag, now]);

  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Events — OSDC" description="What’s on across Oxford Street." url="https://example.org/events" image="/editorial-6.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="font-head text-4xl">Events</h1>
            <div className="flex items-center gap-3">
              <label className="text-sm">View:</label>
              <button onClick={()=>setShowPast(false)} className={`px-3 py-1 rounded-full border ${!showPast ? 'bg-[var(--heritage-green)] text-white' : ''}`}>Upcoming</button>
              <button onClick={()=>setShowPast(true)} className={`px-3 py-1 rounded-full border ${showPast ? 'bg-[var(--heritage-green)] text-white' : ''}`}>Past</button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-sm">Filter:</span>
            {tags.map(t => (
              <button key={t} onClick={()=>setTag(t)} className={`px-3 py-1 rounded-full border ${tag===t ? 'bg-[var(--heritage-gold)]/10' : ''}`}>{t}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(ev => <EventCard key={ev.title + ev.start} event={ev} />)}
          </div>

          {showPast && (
            <div className="mt-6">
              <Link href="/events/past" className="underline">Browse the past events archive →</Link>
            </div>
          )}
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
  let items = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    items = JSON.parse(raw);
  } catch (e) {
    // fallback example
    items = [{
      title: 'Welcome to Oxford Street',
      start: new Date().toISOString(),
      end: new Date(Date.now()+3600e3).toISOString(),
      description: 'Launch moment for the demo.',
      tags: ['Seasonal'],
      img: '/editorial-6.webp',
      location: 'Oxford Street, London'
    }];
  }
  return { props: { items }, revalidate: 3600 };
}
