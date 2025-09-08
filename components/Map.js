export default function Map(){
  return (
    <section className="section" id="map" aria-labelledby="map-title">
      <div className="container">
        <h2 id="map-title">Directions & Map</h2>
        <iframe
          className="map"
          title="Oxford Street Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.161%2C51.511%2C-0.133%2C51.518&layer=mapnik&marker=51.514%2C-0.144">
        </iframe>
        <p className="small">Map © OpenStreetMap contributors.</p>
      </div>
    </section>
  );
}