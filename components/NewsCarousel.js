import { useEffect, useRef, useState } from 'react'
async function loadNews(){ try{ const res = await fetch('/news.sample.json'); if(res.ok) return res.json() }catch(e){} return [] }
export default function NewsCarousel(){
  const railRef = useRef(null); const [items,setItems]=useState([]); const [i,setI]=useState(0);
  useEffect(()=>{ loadNews().then(setItems) },[]);
  useEffect(()=>{ const id=setInterval(()=> setI(p=>(p+1)%Math.max(items.length||1,1)),4200); return ()=>clearInterval(id) },[items.length]);
  useEffect(()=>{ const rail=railRef.current; if(!rail||!items.length) return; const child=rail.children[i]; if(child) child.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}) },[i,items]);
  const nudge=(d)=> items.length && setI((i+d+items.length)%items.length);
  return (
    <section className="panel" id="news">
      <div className="container">
        <h2 className="copy">District updates</h2>
        <div className="carousel" style={{position:'relative'}}>
          <div className="carousel-rail" ref={railRef} role="region" aria-label="News items">
            {items.map((n,idx)=> (
              <article className="slide" key={idx}>
                <div className="small" style={{opacity:.75}}>{n.tag} · {n.date}</div>
                <h3 style={{margin:'6px 0 8px'}}>{n.title}</h3>
                <a href={n.href} target="_blank" rel="noreferrer">Read more →</a>
              </article>
            ))}
          </div>
          <button className="ctrl left" aria-label="Previous" onClick={()=>nudge(-1)}>‹</button>
          <button className="ctrl right" aria-label="Next" onClick={()=>nudge(1)}>›</button>
        </div>
      </div>
    </section>
  )
}
