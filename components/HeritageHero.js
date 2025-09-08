// components/HeritageHero.js
import Head from 'next/head';
import Image from 'next/image';
import { PHOTO_SOURCES } from '../lib/photoSources';

export default function HeritageHero() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/hero-heritage.webp" imagesrcset="/hero-heritage.webp 1x" />
      </Head>
      <section className="heritage-bg py-16 gold-lines relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={PHOTO_SOURCES.hero} alt="Oxford Street at dusk" fill className="object-cover img-darken img-grade-strong" priority />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-head text-5xl sm:text-6xl">Discover Oxford Street</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Shops, culture and seasonal moments — plan your visit and see what’s on today.
          </p>
        </div>
      </section>
    </>
  );
}
