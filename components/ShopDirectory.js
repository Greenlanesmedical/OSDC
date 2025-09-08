import { useMemo, useState } from "react";
import { SHOPS } from "./shops";
import Modal from "./Modal";

export default function ShopDirectory(){
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const cats = useMemo(()=>["All", ...Array.from(new Set(SHOPS.map(s=>s.category)))],[]);
  const list = SHOPS.filter(s => 
    (cat==="All" || s.category===cat) &&
    (q==="" || s.name.toLowerCase().includes(q.toLowerCase()) || (s.address||"").toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <section id="shops" className="panel">
      <div className="container">
        <div className="grid" style={{marginBottom:10}}>
          <div>
            <h2 className="copy">Shops directory</h2>
            <p className="small">Search and filter retailers on and around Oxford Street.</p>
          </div>
        </div>
        <div className="search" role="search">
          <input aria-label="Search shops" placeholder="Search by name or address" value={q} onChange={e=>setQ(e.target.value)} />
          <select aria-label="Filter by category" value={cat} onChange={e=>setCat(e.target.value)}>
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="grid" style={{marginTop:14}}>
          {list.map((s,i)=> (
            <button className="card" key={i} onClick={()=>setActive(s)} aria-haspopup="dialog" style={{textAlign:"left"}}>
              <h3>{s.name}</h3>
              <div className="small">{s.category} · {s.address}</div>
            </button>
          ))}
        </div>
        <p className="small" style={{marginTop:12}}>List is indicative for demo purposes only. Verify locations and opening times before visiting.</p>
      </div>
      <Modal open={!!active} onClose={()=>setActive(null)} title={active?.name}>
        <p className="small">{active?.category} · {active?.address}</p>
        <p>{active?.desc || "Retailer information and highlights to be confirmed."}</p>
        <p><a href={"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(active?.name + " Oxford Street London")} target="_blank" rel="noreferrer">Open in Google Maps →</a></p>
      </Modal>
    </section>
  );
}
