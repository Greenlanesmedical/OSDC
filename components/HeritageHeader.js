// components/HeritageHeader.js
import Link from 'next/link';
import dynamic from 'next/dynamic';
const HeaderSearch = dynamic(()=>import('./HeaderSearch'), { ssr:false });

export default function HeritageHeader() {
  const items = ['Overview','Background','Requirements','Brand','Website','Stakeholders','Visiting','Timeline'];
  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-1"></div>
        <div className="text-2xl font-head tracking-wide">
          <span className="px-3 py-1 border gold-border rounded-full gold-text">OS</span>
        </div>
        <nav className="flex-1 flex items-center justify-end gap-6 text-sm">
          {items.map(i => (
            <Link key={i} href={i === "Visiting" ? "/getting-here" : (i === "Stakeholders" ? "#stakeholders" : (i === "Timeline" ? "#timeline" : ("#" + i.toLowerCase())))} className="text-gray-800 hover:text-black">{i}</Link>
          ))}
        <HeaderSearch />
        </nav>
      </div>
      <div className="rule-hairline"></div>
    </header>
  );
}
