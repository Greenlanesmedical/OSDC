// components/ThemeToggle.js
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const current = document.documentElement.classList.contains('dark');
    setDark(current);
  }, []);
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setDark(v => !v);
  };
  return (
    <button onClick={toggle} className="px-3 py-2 rounded-lg border text-sm hover:bg-black/5 dark:hover:bg-white/10 transition">
      {dark ? '☾ Dark' : '☀︎ Light'}
    </button>
  );
}
