export default function FeatureGridModern(){
  const items = [
    {title:'Performance', copy:'AVIF assets, lazy load and near-zero CLS for snap acceleration.'},
    {title:'Accessibility', copy:'WCAG 2.2 AA patterns, keyboard-first, prefers-reduced-motion respected.'},
    {title:'Governance', copy:'Modern.Gov links & latest decisions feed; clear transparency.'},
    {title:'Planning', copy:'Arcus deep links and content guidance; API-ready.'},
    {title:'Design System', copy:'Tokens, components and docs for consistency and scale.'},
    {title:'Hosting', copy:'UK-based, privacy-first infra and backups; monitoring & alerts.'},
  ]
  return (
    <section id="features" className="panel">
      <div className="container">
        <div className="grid">
          {items.map((it,i)=> (
            <article className="card" key={i}>
              <h3>{it.title}</h3>
              <p>{it.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
