import Image from 'next/image';
// components/NewsCard.js
export default function NewsCard({ item }) {
  return (
    <article className="rounded-2xl overflow-hidden border gold-border shadow-subtle bg-white">
      <Image src=item.img || '/editorial-5.webp' alt="" width={1600} height={900} className="w-full h-48 object-cover img-darken img-grade" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="p-5">
        <div className="text-xs text-gray-500">{item.date}</div>
        <h3 className="font-head text-2xl mt-1">{item.title}</h3>
        <p className="text-gray-700 mt-2">{item.excerpt}</p>
        <a href={item.href || '#'} className="inline-block mt-3 underline">Read more</a>
      </div>
    </article>
  );
}
