// pages/contact.js
'use client';
import { useState } from 'react';
import HeritageHeader from '../components/HeritageHeader';
import HeritageFooter from '../components/HeritageFooter';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('Please fill all fields.'); return; }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('Failed');
      setStatus('Thanks — your message has been received.');
      setForm({ name:'', email:'', message:'' });
    } catch {
      setStatus('Sorry, something went wrong.');
    }
  }
  return (
    <main className="min-h-screen bg-white" id="main">
      <SEOHead title="Contact — OSDC" description="Get in touch with the Oxford Street Development Corporation." url="https://example.org/contact" image="/editorial-1.webp" />
      <HeritageHeader />
      <section className="py-14 heritage-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-head text-4xl mb-4">Contact us</h1>
          <p className="text-gray-700 mb-6">Use the form below, or email <a className="underline" href="mailto:info@osdc.example">info@osdc.example</a>.</p>
          <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-2xl border gold-border shadow-subtle">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full px-3 py-2 rounded border" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full px-3 py-2 rounded border" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full px-3 py-2 rounded border h-32" required />
            </div>
            <button className="px-4 py-2 rounded-xl bg-heritage-green text-white">Send</button>
            {status && <div className="text-sm mt-2">{status}</div>}
          </form>
          <div className="mt-6 text-sm text-gray-600">
            Prefer to share structured feedback? <a className="underline" href={process.env.NEXT_PUBLIC_MODERN_GOV_CONSULTATIONS_URL || '#'}>Have your say on Modern.Gov</a>.
          </div>
        </div>
      </section>
      <HeritageFooter />
    </main>
  );
}
