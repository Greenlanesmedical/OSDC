// components/Testimonials.js
export default function Testimonials() {
  const quotes = [
    { q: 'It feels like a flagship from the first pixel.', a: 'Guest, Oxford Street' },
    { q: 'Fast, elegant, and memorable.', a: 'Retail partner' },
    { q: 'Exactly the tone to win premium shoppers.', a: 'Brand director' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">What people say</h2>
        <div className="overflow-x-hidden">
          <div className="marquee flex gap-8">
            {quotes.concat(quotes).map((x, idx) => (
              <figure key={idx} className="min-w-[320px] max-w-[420px] p-6 border rounded-2xl bg-white shadow-subtle">
                <blockquote className="text-lg">&ldquo;{x.q}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm text-gray-600">— {x.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
