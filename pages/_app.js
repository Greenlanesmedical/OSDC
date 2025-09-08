// pages/_app.js
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ConsentManager from '../components/ConsentManager';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Prevent unwanted auto-scroll on hydration or route changes
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // On first mount, scroll to top unless a hash is present
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
    const handleRoute = (url) => {
      if (!url.includes('#')) window.scrollTo({ top: 0 });
    };
    router.events.on('routeChangeComplete', handleRoute);
    return () => router.events.off('routeChangeComplete', handleRoute);
  }, [router.events]);

  return (
    <div className={`${inter.variable} ${cormorant.variable}`}>
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[1000] bg-black text-white px-3 py-2 rounded">
        Skip to content
      </a>
      <Component {...pageProps} />
      <ConsentManager />
    </div>
  );
}
