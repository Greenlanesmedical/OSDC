// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Load Google Fonts globally (avoid next/font in _document) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Instrument+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
