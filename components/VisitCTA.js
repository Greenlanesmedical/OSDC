// components/VisitCTA.js
export default function VisitCTA() {
  return (
    <section id="visit" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Visit Oxford Street</h2>
        <p className="mt-3 text-white/80">Plan your route, reserve times, and get concierge support.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#hero" className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">Back to top</a>
        </div>
      </div>
    </section>
  );
}
