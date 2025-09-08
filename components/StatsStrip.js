// components/StatsStrip.js
export default function StatsStrip() {
  const stats = [
    { label: 'Clinics', value: '14' },
    { label: 'Doctors', value: '56' },
    { label: 'Patients', value: '12k+' },
    { label: 'Avg. Wait', value: '7 min' },
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <div className="text-3xl font-extrabold leading-tight">{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
