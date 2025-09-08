// components/OSDCNumbers.js
export default function OSDCNumbers() {
  const stats = [
    { value: '£25bn', label: 'Annual contribution' },
    { value: '120m', label: 'Visitors / year' },
    { value: '2026', label: 'Target: operational' },
  ];
  return (
    <section className="heritage-bg py-10" id="numbers">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-3 gap-4">
          {stats.map(s => (
            <li key={s.label} className="text-center p-6 rounded-2xl bg-white border gold-border shadow-subtle">
              <div className="font-head text-3xl">{s.value}</div>
              <div className="mt-1 text-gray-700 text-sm">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
