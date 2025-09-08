// components/InPageNav.js
'use client';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'background', label: 'Background' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'brand', label: 'Brand' },
  { id: 'website', label: 'Website' },
  { id: 'stakeholders', label: 'Stakeholders' },
  { id: 'numbers', label: 'In Numbers' },
  { id: 'timeline', label: 'Timeline' },
];

export default function InPageNav() {
  const [active, setActive] = useState(SECTIONS[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 });
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-14 z-30 bg-white/70 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <ul className="flex gap-4 py-2 text-sm">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={"inline-block px-3 py-2 rounded-full " + (active===s.id ? "bg-[var(--heritage-gold)]/15 text-black border gold-border" : "text-gray-700 hover:text-black")}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
