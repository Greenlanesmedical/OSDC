import { PHOTO_SOURCES } from '../lib/photoSources';
import Image from 'next/image';
// components/StakeholderHub.js
export default function StakeholderHub() {
  const groups = [
    {
      title: 'Residents & Developers',
      copy: 'Planning applications, consultations and governance documents.',
      links: [
        { label: 'Modern.Gov (Meetings & Docs)', href: process.env.NEXT_PUBLIC_MODERN_GOV_URL || 'https://westminster.moderngov.co.uk' },
        { label: 'Arcus Planning (Applications)', href: process.env.NEXT_PUBLIC_ARCUS_URL || '#' }
      ],
      img: '/editorial-1.webp'
    },
    {
      title: 'Landowners',
      copy: 'Partnerships for public realm, events and activation.',
      links: [
        { label: 'Opportunities', href: '#' },
        { label: 'Contact the OSDC team', href: '#' }
      ],
      img: '/editorial-2.webp'
    },
    {
      title: 'Retail & Hospitality',
      copy: 'Trading info, footfall insights and participation in district moments.',
      links: [
        { label: 'Join a seasonal campaign', href: '#' },
        { label: 'Trading updates', href: '#' }
      ],
      img: '/editorial-3.webp'
    },
    {
      title: 'Press',
      copy: 'Press releases, media kits and brand assets.',
      links: [
        { label: 'Latest news', href: '/news' },
        { label: 'Press contacts', href: '#' }
      ],
      img: '/editorial-4.webp'
    }
  ];

  return (
    <section className="py-14 bg-white" id="stakeholders">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-2">Stakeholder Hub</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">Tailored information and routes into OSDC for our key audiences.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map(g => (
            <article key={g.title} className="rounded-2xl overflow-hidden border gold-border shadow-subtle img-card">
              <div className="relative h-48 overflow-hidden">
                <Image src=g.img alt={g.title} width={1600} height={900} className="w-full h-full object-cover img-darken" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 img-gradient" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-head text-2xl">{g.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700">{g.copy}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {([{ label: 'Start here', href: (g.title==='Residents & Developers' ? (process.env.NEXT_PUBLIC_MODERN_GOV_CONSULTATIONS_URL || (process.env.NEXT_PUBLIC_MODERN_GOV_URL || 'https://westminster.moderngov.co.uk')) : (g.title==='Retail & Hospitality' ? '/events' : (g.title==='Landowners' ? '/proposal' : '/news'))) }, ...g.links].map(l => (
                    <a key={l.label} href={l.href} className="px-3 py-2 text-sm rounded-full border gold-border hover:bg-[var(--heritage-gold)]/10">
                      {l.label} →
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
