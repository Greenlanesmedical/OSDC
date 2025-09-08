// components/HeritageFeatureRows.js
const FEATURES = [
  { title: 'Seasonal Windows', copy: 'A celebration of craft and theatre along Oxford Street.', img: '/feature-1.jpg' },
  { title: 'Dining on the Mezzanine', copy: 'Refined menus and quiet corners for lingering conversations.', img: '/feature-2.jpg' },
];

export default function HeritageFeatureRows() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {FEATURES.map((f, idx) => (
          <div key={f.title} className={"grid grid-cols-1 sm:grid-cols-2 gap-8 items-center " + (idx % 2 ? "sm:[&>div:first-child]:order-last" : "")}>
            <div className="overflow-hidden rounded-2xl border gold-border shadow-subtle">
              <img src={f.img} alt={f.title} className="w-full h-[300px] object-cover" />
            </div>
            <div>
              <h3 className="font-head text-3xl">{f.title}</h3>
              <p className="mt-3 text-gray-700">{f.copy}</p>
              <div className="mt-5 rule-gold"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
