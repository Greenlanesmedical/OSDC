// components/LuxeHeader.js
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LuxeHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    'fixed top-0 inset-x-0 z-50 transition-all',
    scrolled ? 'backdrop-blur bg-white/70 border-b' : 'bg-transparent'
  ].join(' ');

  const linkClass = "px-3 py-2 text-sm text-gray-700 hover:text-black";
  return (
    <header className={classes}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="font-bold tracking-tight">Modern Luxe · Oxford Street</div>
        <nav className="hidden sm:flex items-center">
          <a href="#hero" className={linkClass}>Overview</a>
          <a href="#showcase" className={linkClass}>Showcase</a>
          <a href="#discover" className={linkClass}>Discover</a>
          <a href="#visit" className={linkClass}>Visit</a>
        </nav>
      </div>
    </header>
  );
}
