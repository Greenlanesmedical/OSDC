// pages/index.js
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 dark:text-white transition-colors">
      <div className="max-w-5xl w-full px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold">Choose Experience</h1>
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/demo1" className="block border dark:border-white/20 rounded-2xl card-hover overflow-hidden bg-white dark:bg-neutral-900">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/hero-modern.jpg" alt="Modern Luxe preview" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Modern Luxe</h2>
              <p className="text-gray-600 dark:text-gray-300">Sleek, immersive Oxford Street experience.</p>
            </div>
          </Link>
          <Link href="/demo2" className="block border dark:border-white/20 rounded-2xl card-hover overflow-hidden bg-white dark:bg-neutral-900">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/hero-heritage.jpg" alt="Heritage preview" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 font-head">Heritage</h2>
              <p className="text-gray-600 dark:text-gray-300">Editorial, department-store style.</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
