// components/SEOHead.js
import Head from 'next/head';

export default function SEOHead({ title = 'OSDC — Oxford Street Development Corporation', description = 'Transforming London’s Oxford Street into a world-class destination for Londoners and visitors, led by the Oxford Street Development Corporation (OSDC).', url = 'https://example.org/', image = '/hero-heritage.jpg' }) {
  const fullTitle = title;
  const canonical = url;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: 'Oxford Street Development Corporation',
    url,
    areaServed: 'London, United Kingdom'
  };
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
