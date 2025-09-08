export default function Hero({ title, subtitle, tone="modern" }){
  return (
    <section className={`hero ${tone}`} role="region" aria-label="Hero">
      <div className="container" style={{color:"white"}}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="cta" href="#shops">{tone==="modern" ? "Explore shops" : "Explore the district"}</a>
      </div>
    </section>
  );
}