// components/InteractiveGrid.js
'use client';
import { useRef } from 'react';

function TiltCard({ title, copy }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*8).toFixed(2)}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'rotateX(0) rotateY(0)';
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="p-6 border rounded-2xl bg-white shadow-subtle transition-transform will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-gray-600">{copy}</p>
    </div>
  );
}

export default function InteractiveGrid() {
  const items = [
    { title: 'Seamless Reservations', copy: 'Frictionless booking with wallet passes and reminders.' },
    { title: 'Wayfinding', copy: 'Indoor maps and A/B tested flows to reduce time-to-purchase.' },
    { title: 'Social Moments', copy: 'Shareable, on‑brand captures with consent built‑in.' },
    { title: 'Sustainable Mode', copy: 'Low‑energy animations and eco badges.' },
    { title: 'VIP Mode', copy: 'Priority access and invites surfaced contextually.' },
    { title: 'Insights', copy: 'Privacy‑first analytics to drive the Oxford Street roadmap.' },
  ];
  return (
    <section id="discover" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Micro‑interactions that delight</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => <TiltCard key={i.title} {...i} />)}
        </div>
      </div>
    </section>
  );
}
