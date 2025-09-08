import { useEffect, useState } from 'react'
export default function SectionNav(){
  const [current, setCurrent] = useState('story')
  useEffect(()=>{
    const ids = ['story','features','stats','shops','map']
    const obs = new IntersectionObserver((entries)=>{
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);
      if(visible[0]) setCurrent(visible[0].target.id)
    },{threshold:[0.3,0.6]})
    ids.forEach(id => { const el = document.getElementById(id); if(el) obs.observe(el) })
    return ()=>obs.disconnect()
  },[])
  return (
    <div className="section-nav">
      <div className="rail container">
        <a className="pill" href="#story" aria-current={current==='story'}>Story</a>
        <a className="pill" href="#features" aria-current={current==='features'}>Features</a>
        <a className="pill" href="#stats" aria-current={current==='stats'}>Results</a>
        <a className="pill" href="#shops" aria-current={current==='shops'}>Directory</a>
        <a className="pill" href="#map" aria-current={current==='map'}>Map</a>
      </div>
    </div>
  )
}
