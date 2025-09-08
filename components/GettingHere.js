import Image from 'next/image';
// components/GettingHere.js
export default function GettingHere({ variant = 'modern' }) {
  const iconPath = (base) => (variant === 'heritage' ? `/icon-${base}-outline.svg` : `/icon-${base}.svg`);
  const isHeritage = variant === 'heritage';
  const wrap = isHeritage ? 'heritage-bg' : 'bg-gray-50';
  const hClass = isHeritage ? 'font-head text-4xl' : 'text-4xl font-bold';
  const card = 'p-6 bg-white rounded-2xl border shadow-subtle';

  return (
    <section className={wrap + " py-12"}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={hClass}>Getting here</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Plan your journey to Oxford Street. Check live updates before you travel.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('tube')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Tube</div>
            </div>
            
            <ul className="mt-3 text-gray-700 space-y-1">
              <li><strong><a className="underline" href="https://tfl.gov.uk/tube/stop/940GZZLUOXC/oxford-circus-underground-station" target="_blank" rel="noreferrer">Oxford Circus (TfL)</a></strong> — Central, Bakerloo, Victoria</li>
              <li><strong><a className="underline" href="https://tfl.gov.uk/tube/stop/940GZZLUBND/bond-street-underground-station" target="_blank" rel="noreferrer">Bond Street (TfL)</a></strong> — Central, Elizabeth</li>
              <li><strong><a className="underline" href="https://tfl.gov.uk/tube/stop/940GZZLUTCR/tottenham-court-road-underground-station" target="_blank" rel="noreferrer">Tottenham Court Road (TfL)</a></strong> — Central, Elizabeth</li>
              <li><strong><a className="underline" href="https://tfl.gov.uk/tube/stop/940GZZLUMBA/marble-arch-underground-station" target="_blank" rel="noreferrer">Marble Arch (TfL)</a></strong> — Central</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">Step-free access available at Bond Street (Elizabeth line) and Tottenham Court Road (Elizabeth line). Check current status.</p>
        
            <div className="mt-4 flex flex-wrap gap-2 station-chips">
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Oxford Circus · 3 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Bond Street · 5 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Tottenham Court Road · 8 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Marble Arch · 7 min walk</span>
            </div>
        
            <a className="inline-block mt-4 underline" href="https://tfl.gov.uk/" target="_blank" rel="noreferrer">Check TfL status</a>
          </div>

          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('bus')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Bus</div>
            </div>
            <p className="mt-3 text-gray-700">
              Frequent services along Oxford Street and Regent Street.
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>Typical routes: 7, 10, 25, 55, 73, 94, 98, 390 (check local boards)</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 station-chips">
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Oxford Circus · 3 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Bond Street · 5 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Tottenham Court Road · 8 min walk</span>
              <span className="px-3 py-1 rounded-full border bg-white text-sm">Marble Arch · 7 min walk</span>
            </div>
        
            <a className="inline-block mt-4 underline" href="https://tfl.gov.uk/bus" target="_blank" rel="noreferrer">Plan a bus journey</a>
          </div>

          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('taxi')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Taxi & Ride-hail</div>
            </div>
            <p className="mt-3 text-gray-700">
              Black cabs and ride-hail drop-offs are available on adjoining streets.
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>Popular drop-offs: Hanover Sq, Margaret St, Vere St</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('car')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Driving</div>
            </div>
            <p className="mt-3 text-gray-700">
              Allow extra time for central London. Consider car parks near Oxford Circus and Soho.
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>Congestion & ULEZ charges may apply</li>
              <li>Look for pre-bookable car parks</li>
            </ul>
          </div>

          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('bike')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Cycling</div>
            </div>
            <p className="mt-3 text-gray-700">
              Santander Cycles and secure racks available nearby.
            </p>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>Use segregated lanes where possible</li>
              <li>Lights and locks recommended</li>
            </ul>
          </div>

          <div className={card}>
            <div className="flex items-center gap-3">
              <img src={iconPath('access')} alt="Tube" className="w-10 h-10" />
              <div className="text-lg font-semibold">Accessibility</div>
            </div>
            <p className="mt-3 text-gray-700">
              Step-free access available at selected stations and entrances.
            </p>
            <a className="inline-block mt-4 underline" href="https://tfl.gov.uk/transport-accessibility/" target="_blank" rel="noreferrer">
              Accessibility info
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border shadow-subtle">
          <img src={isHeritage ? '/hero-heritage.jpg' : '/hero-modern.jpg'} alt="Oxford Street" className="w-full h-[320px] object-cover" />
        
        <div className="mt-8 rounded-2xl overflow-hidden border shadow-subtle">
          <Image src="/isochrone-oxford-street.webp" alt="Walking times to Oxford Street" width={1600} height={900} className="w-full h-[320px] object-cover" />
        </div>
        
      </div>
    </section>
  );
}
