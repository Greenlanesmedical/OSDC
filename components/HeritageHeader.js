// components/HeritageHeader.js
import Link from 'next/link';

export default function HeritageHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-head text-xl">Oxford Street</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#departments" className="hover:underline">Departments</a>
          <a href="#services" className="hover:underline">Services</a>
          <Link href="/news" className="hover:underline">News</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <a href="#visiting" className="hover:underline">Visiting</a>
          <a href="#stakeholders" className="text-xs opacity-80 hover:opacity-100">For Stakeholders</a>
        </nav>
      </div>
    </header>
  );
}
