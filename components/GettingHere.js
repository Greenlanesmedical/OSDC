// components/GettingHere.js
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

const Card = ({ title, children }) => (
  <div className="p-6 bg-white rounded-2xl border gold-border shadow-subtle">
    <h3 className="font-head text-xl mb-2">{title}</h3>
    <div className="text-gray-700">{children}</div>
  </div>
);

export default function GettingHere() {
  return (
    <section className="py-14 heritage-bg" id="visiting">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 rounded-2xl overflow-hidden border gold-border shadow-subtle">
          <Image src={PHOTO_SOURCES.tube} alt="Oxford Circus Underground roundel" width={1600} height={900} className="w-full h-[320px] object-cover img-grade" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Tube">
            Oxford Circus (Central, Bakerloo, Victoria) — <span className="inline-block px-2 py-1 text-xs rounded-full border">3 min walk</span><br/>
            Bond Street (Central, Elizabeth line) — <span className="inline-block px-2 py-1 text-xs rounded-full border">7 min walk</span><br/>
            Tottenham Court Road (Central, Northern, Elizabeth line) — <span className="inline-block px-2 py-1 text-xs rounded-full border">12 min walk</span>
          </Card>
          <Card title="Bus">
            Multiple routes along Oxford Street, Regent Street and Tottenham Ct Rd. Use TfL for live routes.
          </Card>
          <Card title="Taxi">
            Black cabs available across the district. Consider walking during peak times for faster journeys.
          </Card>
          <Card title="Driving">
            Limited parking in the West End; use nearby car parks and check local restrictions. Consider Park & Ride or rail.
          </Card>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border shadow-subtle">
          <Image src={PHOTO_SOURCES.hero} alt="Oxford Street" width={1600} height={900} className="w-full h-[320px] object-cover img-grade" />
        </div>
      </div>
    </section>
  );
}
