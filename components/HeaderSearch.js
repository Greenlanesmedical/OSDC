// components/HeaderSearch.js
'use client';
import { useState } from 'react';

export default function HeaderSearch() {
  const [q, setQ] = useState('');
  const suggestions = [
    { label: 'News', href: '/news' },
    { label: 'Events', href: '/events' },
    { label: 'Planning', href: (process.env.NEXT_PUBLIC_MODERN_GOV_URL || 'https://westminster.moderngov.co.uk') },
    { label: 'Visiting', href: '/getting-here' },
  ];
  const submit = (e) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    if (!term) return;
    if (term.includes('event')) window.location.href = '/events';
    else if (term.includes('news')) window.location.href = '/news';
    else if (term.includes('visit') || term.includes('getting')) window.location.href = '/getting-here';
    else if (term.includes('plan') || term.includes('govern')) window.location.href = (process.env.NEXT_PUBLIC_MODERN_GOV_URL || 'https://westminster.moderngov.co.uk');
    else window.location.href = '/news';
  };
  return (
    <div className="hidden md:flex items-center gap-2">
      <form onSubmit={submit} className="flex items-center gap-2">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Search…"
          className="px-3 py-2 rounded-lg border w-44 focus:outline-none focus:ring-2 focus:ring-[var(--heritage-gold)]"
        />
        <button className="px-3 py-2 rounded-lg border">Go</button>
      </form>
      <div className="flex items-center gap-2 text-sm text-gray-700">
        {suggestions.map(s => (
          <a key={s.label} href={s.href} className="px-2 py-1 rounded-full border hover:bg-[var(--heritage-gold)]/10">{s.label}</a>
        ))}
      </div>
    </div>
  );
}
