// pages/news.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import NewsCard from '../components/NewsCard';
import SEOHead from '../components/SEOHead';

export default function NewsArchive({ news }) {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="News — OSDC" description="Updates on the Oxford Street Development Corporation and partners." url="https://example.org/news" image="/editorial-5.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-6">News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS.map(n => <NewsCard key={n.title} item={n} />)}
          </div>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}


export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const dataPath = path.join(process.cwd(), 'public', 'data', 'news.json');
  const items = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return { props: { news: items }, revalidate: 3600 };
}
