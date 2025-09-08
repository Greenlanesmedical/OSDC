import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import UtilityBar from "../components/UtilityBar";
import ShopDirectory from "../components/ShopDirectory";
import Map from "../components/Map";

export default function Demo2(){
  return (
    <main id="main" className="heritage">
      <Header />
      <UtilityBar tone="heritage" />
      <Hero title="Oxford Street District" subtitle="Heritage Luxe — deep green & gold, editorial photography and crafted details." tone="heritage" />
      <section className="section" id="governance" aria-labelledby="gov-title">
        <div className="container">
          <h2 id="gov-title">Latest decisions</h2>
          <div className="cards">
            <article className="card"><h3>Board meeting</h3><p>Summary decisions published via Modern.Gov (link-out).</p></article>
            <article className="card"><h3>Planning</h3><p>Arcus: make or track an application (deep link guidance).</p></article>
            <article className="card"><h3>Transparency</h3><p>Performance, accessibility & privacy statements available.</p></article>
          </div>
        </div>
      </section>
      <ShopDirectory tone="heritage" />
      <Map />
      <Footer />
    </main>
  );
}