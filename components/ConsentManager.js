// components/ConsentManager.js
'use client';
import { useEffect, useState } from 'react';

export default function ConsentManager() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const c = localStorage.getItem('osdc-consent');
    if (!c) setVisible(true);
    if (c === 'yes') loadAnalytics();
  }, []);

  function accept() {
    localStorage.setItem('osdc-consent', 'yes');
    setVisible(false);
    loadAnalytics();
  }
  function decline() {
    localStorage.setItem('osdc-consent', 'no');
    setVisible(false);
  }
  function loadAnalytics() {
    if (document.getElementById('plausible')) return;
    const s = document.createElement('script');
    s.id = 'plausible';
    s.defer = true;
    // Replace with your UK-hosted Plausible URL and domain
    s.setAttribute('data-domain', 'osdc.example');
    s.src = 'https://analytics.osdc.uk/js/plausible.js';
    document.head.appendChild(s);
  }

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-xl z-[1000] p-4 rounded-2xl border bg-white shadow-subtle">
      <div className="text-sm text-gray-800">
        We use privacy-first analytics to improve this site. No cross-site tracking, and data is stored in the UK.
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="px-4 py-2 rounded-xl bg-heritage-green text-white">Accept</button>
        <button onClick={decline} className="px-4 py-2 rounded-xl border">Decline</button>
        <a className="ml-auto underline text-sm" href="/privacy">Privacy</a>
      </div>
    </div>
  );
}
