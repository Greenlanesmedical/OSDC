export default function Map(){
  const bbox = "-0.161%2C51.511%2C-0.133%2C51.518";
  const marker = "51.514%2C-0.144";
  return (
    <section id="map" className="panel">
      <div className="container">
        <div className="wrap" style={{gridTemplateColumns:"1fr 1.2fr"}}>
          <div className="copy">
            <h2>Directions & Map</h2>
            <p>Find the best route by Tube, bus or on foot. Links open your default maps app.</p>
            <p className="small">
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${marker}`} target="_blank" rel="noreferrer">Google Maps</a> ·{" "}
              <a href={`https://maps.apple.com/?daddr=${marker}`} target="_blank" rel="noreferrer">Apple Maps</a>
            </p>
          </div>
          <div className="media">
            <iframe className="map" title="Oxford Street Map" src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
