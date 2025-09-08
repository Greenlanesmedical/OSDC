// components/HeritageBrand.js
export default function HeritageBrand() {
  return (
    <section id="brand" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-head text-3xl">Brand Identity</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          We will develop a consistent, recognisable identity that is professional, high quality and flexible across
          channels. The brand will reflect OSDC’s ethos and the Mayor’s ambitions for regeneration.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border gold-border shadow-subtle bg-white">
            <h3 className="font-head text-2xl">Deliverables</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>Brand Strategy (workshops to define values and long-term vision).</li>
              <li>At least two initial identity options for discussion.</li>
              <li>Brand Guidelines (logo, palette, type, tone and application across assets).</li>
              <li>Guidance on logo hierarchy and digital/social templates.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border gold-border shadow-subtle bg-white">
            <h3 className="font-head text-2xl">Imagery & iconography</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>Photography and illustration styles for complex messages.</li>
              <li>Examples of brand in campaign assets (e.g. event posters, social content).</li>
              <li>Accessible iconography system consistent with OSDC tone.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
