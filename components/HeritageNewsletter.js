// components/HeritageNewsletter.js
import { useState } from 'react';

export default function HeritageNewsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h3 className="font-head text-3xl">Join the Circle</h3>
        <p className="mt-2 text-gray-600">Seasonal previews, events and concierge notes.</p>
        {!done ? (
          <form className="mt-6 flex items-center gap-3 justify-center" onSubmit={(e)=>{e.preventDefault(); setDone(true);}}>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
              placeholder="Your email" className="w-64 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--heritage-gold)]" />
            <button className="px-5 py-3 rounded-xl bg-heritage-green text-white">Subscribe</button>
          </form>
        ) : (<div className="mt-6 text-green-700">Thanks! We&apos;ll be in touch.</div>)}
      </div>
    </section>
  );
}
