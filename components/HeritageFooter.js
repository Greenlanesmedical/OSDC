// components/HeritageFooter.js
export default function HeritageFooter() {
  return (
    <footer className="bg-heritage-green text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="font-head text-xl mb-3">About</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#">Story</a></li>
            <li><a href="#">Craft</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="font-head text-xl mb-3">Departments</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div>
          <div className="font-head text-xl mb-3">Services</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#">Concierge</a></li>
            <li><a href="#">Personal Shopping</a></li>
            <li><a href="#">Gifting</a></li>
          </ul>
        </div>
        <div>
          <div className="font-head text-xl mb-3">Visit</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Oxford Street</li>
            <li>Open daily 10–20</li>
            <li><a href="#">Getting here</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-80 py-4 border-t border-white/20">© Heritage Oxford Street</div>
    </footer>
  );
}
