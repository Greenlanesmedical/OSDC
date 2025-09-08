import Head from 'next/head';
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';
import Image from 'next/image';
// components/HeritageHero.js
export default function HeritageHero() {
  return (<>
<Head>
  <link rel="preload" as="image" href="/hero-heritage.webp" imagesrcset="/hero-heritage.webp 1x" />
</Head>

<section className="heritage-bg py-16 gold-lines">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="font-head text-5xl sm:text-6xl">Oxford Street Heritage</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          An OSDC-led editorial experience for London’s Oxford Street—timeless detail, modern polish, and world-class public realm.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border gold-border shadow-subtle">
          <Image src="/hero-heritage.jpg" alt="Heritage Hero" width={1600} height={900} className="w-full h-[360px] object-cover" priority />
        </div>
      </div>
    </section>
</>
  );
}
