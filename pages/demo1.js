import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import UtilityBar from "../components/UtilityBar";
import ShopDirectory from "../components/ShopDirectory";
import Map from "../components/Map";

export default function Demo1(){
  return (
    <main id="main" className="modern">
      <Header />
      <UtilityBar tone="modern" />
      <Hero title="Oxford Street District" subtitle="Modern Luxe — a sleek, inclusive experience for visitors, residents and businesses." tone="modern" />
      <section className="section" id="news" aria-labelledby="news-title">
        <div className="container">
          <h2 id="news-title">Our focus</h2>
          <div className="cards">
            <article className="card"><h3>High streets</h3><p>Support diverse retail & hospitality with clear wayfinding and events.</p></article>
            <article className="card"><h3>Clean & safe</h3><p>Cleaner air, safer walking & cycling with public realm improvements.</p></article>
            <article className="card"><h3>Culture</h3><p>Celebrate the district with seasonal moments and public art.</p></article>
          </div>
        </div>
      </section>
      <ShopDirectory tone="modern" />
      <Map />
      <Footer />
    </main>
  );
}