// components/EventCard.js
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

function toICSDate(d) {
  return new Date(d).toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
}

export default function EventCard({ event }) {
  const qs = new URLSearchParams({
    title: event.title,
    description: event.description || '',
    location: event.location || 'Oxford Street, London',
    start: toICSDate(event.start),
    end: toICSDate(event.end),
  }).toString();

  return (
    <article className="rounded-2xl overflow-hidden border gold-border shadow-subtle bg-white">
      <Image
        src={event.img || PHOTO_SOURCES.editorial6}
        alt={event.title || 'Event image'}
        width={1600}
        height={900}
        className="w-full h-48 object-cover img-darken img-grade"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="p-5">
        <div className="text-xs text-gray-500">{new Date(event.start).toLocaleString()}</div>
        <h3 className="font-head text-2xl mt-1">{event.title}</h3>
        <p className="text-gray-700 mt-2">{event.description}</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          <a href={`/api/event-ics?${qs}`} className="underline">Add to calendar (.ics)</a>
          {event.href && <a href={event.href} className="underline">Learn more</a>}
        </div>
        <div className="mt-1 text-xs text-gray-600">Add to:</div>
        <div className="flex gap-3 text-sm flex-wrap">
          <a
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${toICSDate(event.start)}/${toICSDate(event.end)}&details=${encodeURIComponent(event.description||'')}&location=${encodeURIComponent(event.location||'Oxford Street, London')}`}
            target="_blank" rel="noreferrer" className="underline">Google Calendar</a>
          <a
            href={`https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${encodeURIComponent(new Date(event.start).toISOString())}&enddt=${encodeURIComponent(new Date(event.end).toISOString())}&body=${encodeURIComponent(event.description||'')}&location=${encodeURIComponent(event.location||'Oxford Street, London')}`}
            target="_blank" rel="noreferrer" className="underline">Outlook (personal)</a>
          <a
            href={`https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${encodeURIComponent(new Date(event.start).toISOString())}&enddt=${encodeURIComponent(new Date(event.end).toISOString())}&body=${encodeURIComponent(event.description||'')}&location=${encodeURIComponent(event.location||'Oxford Street, London')}`}
            target="_blank" rel="noreferrer" className="underline">Outlook (work)</a>
        </div>
      </div>
    </article>
  );
}
