// components/HeritageRequirements.js
export default function HeritageRequirements() {
  return (
    <section id="requirements" className="heritage-bg py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-head text-3xl">Requirements</h2>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Externally-facing brand (incl. logo), digital assets and website design for OSDC.</li>
            <li>Brand to work across online & offline channels and reflect the Mayor’s regeneration ambitions.</li>
            <li>Website built for speed, accessibility, GDPR compliance and UK hosting.</li>
            <li>Integration via links to Modern.Gov and Arcus planning system.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-head text-2xl mt-2">Target audience</h3>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Londoners and UK/international visitors to Oxford Street.</li>
            <li>Stakeholders: real estate/development industry, residents and developers seeking governance info.</li>
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-white border gold-border shadow-subtle">
            <div className="text-sm text-gray-600">Timeline</div>
            <div className="font-head text-xl">Operational target: 1 January 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
