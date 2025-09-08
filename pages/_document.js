import { Html, Head, Main, NextScript } from 'next/document'
import { Inter, Instrument_Serif } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-ui' })
const instrument = Instrument_Serif({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-head' })
export default function Document() {
  return (
    <Html className={`${inter.variable} ${instrument.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
