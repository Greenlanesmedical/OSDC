// pages/news.js
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';
import NewsCard from '../components/NewsCard';

export default function NewsPage({ items = [] }) {
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="News — OSDC" description="Latest updates from the Oxford Street Development Corporation." url="https://example.org/news" image="/editorial-5.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-6">News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map(n => <NewsCard key={n.title + n.date} item={n} />)}
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
  let items = [];
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    items = JSON.parse(raw);
  } catch (e) {
    // fallback example
    items = [{
      title: 'OSDC demo launched',
      date: new Date().toISOString().slice(0,10),
      excerpt: 'The Heritage demo site goes live.',
      href: '#',
      img: '/editorial-5.webp'
    }];
  }
  // newest first
  items.sort((a,b)=> new Date(b.date) - new Date(a.date));
  return { props: { items }, revalidate: 3600 };
}