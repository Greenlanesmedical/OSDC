// pages/_app.js
import '../styles/globals.css';
import dynamic from 'next/dynamic';
const ConsentManager = dynamic(() => import('../components/ConsentManager'), { ssr: false });
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-ui' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','700'], variable: '--font-head' });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${cormorant.variable}`}>
      <Component {...pageProps} />
      <ConsentManager />
    </div>
  <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[1000] bg-black text-white px-3 py-2 rounded">Skip to content</a>
  );
}
