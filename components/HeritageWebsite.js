// components/HeritageWebsite.js
export default function HeritageWebsite() {
  return (
    <section id="website" className="heritage-bg py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl">Website</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          The public face of OSDC—designed around user needs with phased discovery, options and iterative feedback.
          Built for performance, security and accessibility, with UK-based hosting.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border gold-border shadow-subtle bg-white">
            <h3 className="font-head text-2xl">Delivery</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>Key requirements & prioritisation.</li>
              <li>Design/build with multiple feedback stages.</li>
              <li>Initial content supplied by GLA, shaped to the new brand.</li>
              <li>4 months of hosting & support post go-live, with handover pack.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border gold-border shadow-subtle bg-white">
            <h3 className="font-head text-2xl">Compliance & integration</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>GDPR-compliant data processing.</li>
              <li>Links to Modern.Gov and Arcus planning system.</li>
              <li>Accessibility best practices WCAG 2.2 AA.</li>
              <li>UK-based hosting and data residency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
