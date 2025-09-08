// components/HeritageDepartments.js
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

const items = [
  { title: 'Fashion', img: PHOTO_SOURCES.editorial2 },
  { title: 'Beauty', img: PHOTO_SOURCES.editorial3 },
  { title: 'Home', img: PHOTO_SOURCES.editorial5 },
  { title: 'Food Hall', img: PHOTO_SOURCES.editorial6 },
  { title: 'Gifts', img: PHOTO_SOURCES.editorial1 },
  { title: 'Kids', img: PHOTO_SOURCES.editorial4 },
];

export default function HeritageDepartments() {
  return (
    <section className="py-14 bg-white" id="departments">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-2">Departments</h2>
        <p className="text-gray-700 mb-6">From fashion to food, explore the best of Oxford Street.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(it => (
            <article key={it.title} className="rounded-2xl overflow-hidden border gold-border shadow-subtle">
              <div className="h-40 relative overflow-hidden">
                <Image src={it.img} alt={it.title} fill className="object-cover img-grade" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <h3 className="font-head text-xl">{it.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
