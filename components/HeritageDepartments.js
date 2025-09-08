// components/HeritageDepartments.js
const DEPTS = [
  { name: 'Fashion', href: '#', img: '/feature-1.jpg' },
  { name: 'Beauty', href: '#', img: '/feature-2.jpg' },
  { name: 'Home', href: '#', img: '/feature-3.jpg' },
  { name: 'Food Hall', href: '#', img: '/feature-4.jpg' },
  { name: 'Gifts', href: '#', img: '/feature-5.jpg' },
  { name: 'Kids', href: '#', img: '/feature-6.jpg' },
];

export default function HeritageDepartments() {
  return (
    <section className="py-14 heritage-bg" id="departments">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl mb-6">Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DEPTS.map(d => (
            <a key={d.name} href={d.href} className="group block overflow-hidden rounded-xl border gold-border bg-white shadow-subtle">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-head text-xl">{d.name}</span>
                <span className="gold-text">Explore →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
