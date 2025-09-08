import Link from 'next/link'
export default function ModernHeader(){
  return (
    <div className="glass-header">
      <div className="glass-header-inner container">
        <div className="brand-neo">OSDC</div>
        <nav className="nav" aria-label="Primary">
          <Link href="/demo1">Modern</Link>
          <Link href="/demo2">Heritage</Link>
          <Link href="#shops">Shops</Link>
          <Link href="#map">Map</Link>
        </nav>
      </div>
    </div>
  )
}
