// pages/_app.js
import '../styles/globals.css';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-ui' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','700'], variable: '--font-head' });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${cormorant.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
