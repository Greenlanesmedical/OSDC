export default function UtilityBar({ tone="modern" }){
  return (
    <div className="utility" role="navigation" aria-label="Utility">
      <div className="bar container">
        <a className="badge" href="#shops">Shops</a>
        <a className="badge" href="#map">Map</a>
        <a className="badge" href="#news">News</a>
        <a className="badge" href="#governance">Governance</a>
      </div>
    </div>
  );
}