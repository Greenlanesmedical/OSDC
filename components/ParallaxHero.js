// components/ParallaxHero.js
'use client';
import { useEffect, useState } from 'react';

export default function ParallaxHero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setOffset(Math.min(120, y * 0.35));
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="relative h-[80vh] min-h-[520px] overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="/hero-modern.jpg"
          alt="Oxford Street modern hero"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight reveal-up">
            The Oxford Street <span className="block">Modern Luxe Experience</span>
          </h1>
          <p className="max-w-xl mt-4 text-lg text-white/85 reveal-up delay-1">
            Designed to win hearts—and the bid. Fast, immersive, and unmistakably flagship.
          </p>
          <div className="mt-8 flex gap-3 reveal-up delay-2">
            <a href="#showcase" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition">Explore the concept</a>
            <a href="#visit" className="px-5 py-3 rounded-xl border border-white/60 hover:bg-white/10 transition">Visit Oxford Street</a>
          </div>
        </div>
      </div>
    </section>
  );
}
