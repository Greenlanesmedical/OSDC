// pages/_app.js
import '../styles/globals.css';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { useEffect } from 'react';
import ConsentManager from '../components/ConsentManager';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-cormorant' });

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Prevent unexpected jump on first paint unless user followed a hash link
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return (
    <div className={`${inter.variable} ${cormorant.variable}`}>
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[1000] bg-black text-white px-3 py-2 rounded">Skip to content</a>
      <Component {...pageProps} />
      <ConsentManager />
    </div>
  );
}
