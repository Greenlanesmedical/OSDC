export default function ModernHero(){
  return (
    <section className="hero-modern" role="region" aria-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="/hero-modern.jpg">
          <source src="/hero-modern.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient" />
      </div>
      <div className="hero-content container">
        <h1 className="hero-title">Oxford Street District</h1>
        <p className="hero-sub">Modern Luxe — precision typography, motion restraint, and pace that feels instant.</p>
        <a className="cta" href="#story">Explore the vision</a>
      </div>
    </section>
  )
}
