import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <main id="main">
      <Header />
      <section className="section">
        <div className="container">
          <h1>OSDC Demos</h1>
          <p>Two concept routes for Oxford Street District — ready to preview on Vercel.</p>
          <ul>
            <li><a href="/demo1">Route A: Modern Luxe</a></li>
            <li><a href="/demo2">Route B: Heritage Luxe</a></li>
          </ul>
          <p className="small">Tip: add your own images in <code>/public/hero-modern.jpg</code> and <code>/public/hero-heritage.jpg</code> for richer hero sections.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}