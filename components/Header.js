export default function Header(){
  return (
    <header className="header" role="banner">
      <div className="brand">OSDC Demos</div>
      <nav className="nav" aria-label="Primary">
        <a href="/">Home</a>
        <a href="/demo1">Demo 1</a>
        <a href="/demo2">Demo 2</a>
      </nav>
    </header>
  );
}