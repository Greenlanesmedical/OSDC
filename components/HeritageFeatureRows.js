// components/HeritageFeatureRows.js
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

const rows = [
  {
    title: 'Seasonal Windows',
    copy: 'See the latest displays and photo moments along the street.',
    img: PHOTO_SOURCES.editorial6
  },
  {
    title: 'Dining & Treats',
    copy: 'From quick bites to sit‑down classics just off the main drag.',
    img: PHOTO_SOURCES.editorial3
  }
];

export default function HeritageFeatureRows() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {rows.map((r, i) => (
          <div key={r.title} className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${i%2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div className="relative h-56 rounded-2xl overflow-hidden border gold-border shadow-subtle">
              <Image src={r.img} alt={r.title} fill className="object-cover img-grade" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <h3 className="font-head text-2xl">{r.title}</h3>
              <p className="text-gray-700 mt-2">{r.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
