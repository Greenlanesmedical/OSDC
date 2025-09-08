// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' });
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ ok:false, error:'Missing fields' });

  // Optional UK-hosted webhook (e.g., to a UK serverless endpoint)
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, message, ts: Date.now() }) });
    } catch (e) { /* fail-soft */ }
  }
  return res.status(200).json({ ok:true });
}
