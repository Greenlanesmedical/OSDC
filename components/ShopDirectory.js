import { useMemo, useState } from "react";
import { SHOPS } from "./shops";

export default function ShopDirectory({ tone="modern" }){
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = useMemo(()=>["All", ...Array.from(new Set(SHOPS.map(s=>s.category)))],[]);
  const list = SHOPS.filter(s => 
    (cat==="All" || s.category===cat) &&
    (q==="" || s.name.toLowerCase().includes(q.toLowerCase()) || (s.address||"").toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <section className="section" aria-labelledby="shops-title">
      <div className="container">
        <h2 id="shops-title">Shops on and around Oxford Street</h2>
        <div className="search">
          <input aria-label="Search shops" placeholder="Search by name or address" value={q} onChange={e=>setQ(e.target.value)} />
          <select aria-label="Filter by category" value={cat} onChange={e=>setCat(e.target.value)}>
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="shop-list">
          {list.map((s,i)=> (
            <div className="shop-item" key={i}>
              <div style={{fontWeight:600}}>{s.name}</div>
              <div className="small">{s.category}</div>
              <div className="small">{s.address}</div>
            </div>
          ))}
        </div>
        <p className="small" style={{marginTop:12}}>List is indicative for demo purposes only. Please verify locations and opening times before visiting.</p>
      </div>
    </section>
  );
}