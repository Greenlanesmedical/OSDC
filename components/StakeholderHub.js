// components/StakeholderHub.js
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

export default function StakeholderHub() {
  const groups = [
    { title: 'Residents & Developers', copy: 'Planning applications and consultations.', img: PHOTO_SOURCES.editorial1, links: [{label:'Modern.Gov', href: (process.env.NEXT_PUBLIC_MODERN_GOV_URL || '#')}] },
    { title: 'Landowners', copy: 'Public realm and streetscape proposals.', img: PHOTO_SOURCES.editorial2, links: [{label:'Submit a proposal', href:'/proposal'}] },
    { title: 'Retail & Hospitality', copy: 'Seasonal activations and opportunities.', img: PHOTO_SOURCES.editorial3, links: [{label:'Upcoming events', href:'/events'}] },
    { title: 'Press', copy: 'Latest updates and contacts.', img: PHOTO_SOURCES.editorial4, links: [{label:'Newsroom', href:'/news'}] },
  ];

  return (
    <section className="py-14 bg-white" id="stakeholders">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-2">Stakeholder Hub</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">Quick routes for our partners across Oxford Street.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map(g => (
            <article key={g.title} className="rounded-2xl overflow-hidden border gold-border shadow-subtle img-card">
              <div className="relative h-48 overflow-hidden">
                <Image src={g.img} alt={g.title} fill className="object-cover img-darken img-grade" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 img-gradient" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-head text-2xl">{g.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700">{g.copy}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.links.map(l => (
                    <a key={l.label} href={l.href} className="px-3 py-2 text-sm rounded-full border gold-border hover:bg-[var(--heritage-gold)]/10">
                      {l.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
