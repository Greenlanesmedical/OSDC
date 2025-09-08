// components/StickyShowcase.js
'use client';
import { useEffect, useRef, useState } from 'react';

const FEATURES = [
  // Main images already set; supportImages used in grid

  { title: 'Live Storefront', copy: 'Real‑time drops and appointments with subtle haptics and delight.', img: '/feature-modern-1.jpg' },
  { title: 'Immersive Windows', copy: 'Parallax scenes echoing Oxford Street facades and lighting.', img: '/feature-modern-2.jpg' },
  { title: 'Concierge Connect', copy: 'Tap to chat, reserve, or arrange pick‑up in minutes.', img: '/feature-modern-3.jpg' },
];

export default function StickyShowcase() {
  const [active, setActive] = useState(0);
  const rightRef = useRef(null);

  useEffect(() => {
    const nodes = rightRef.current?.querySelectorAll('[data-feature]') ?? [];
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.getAttribute('data-index') || '0', 10);
            setActive(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );
    nodes.forEach(n => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sticky visual */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border shadow-subtle">
            <img
              src={FEATURES[active].img}
              alt={FEATURES[active].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="mt-3 text-sm text-gray-600">Showing: {FEATURES[active].title}</div>
        </div>

        {/* Scroll features */}
        <div ref={rightRef} className="space-y-16">
          {FEATURES.map((f, i) => (
            <article key={f.title} data-feature data-index={i} className="reveal-up">
              <h3 className="text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-gray-600">{f.copy}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["/feature-modern-4.jpg","/feature-modern-5.jpg","/feature-modern-6.jpg"].map(src => (
                  <div key={src} className="rounded-xl overflow-hidden border card-hover">
                    <img src={src} alt="Showcase detail" className="w-full h-24 object-cover" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
