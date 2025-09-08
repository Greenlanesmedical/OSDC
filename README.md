# OSDC Demos (Vercel-ready, Next.js)

This repo exposes two demo pages for the OSDC pitch:

- `/demo1` — Route A: **Modern Luxe** (clean, contemporary)
- `/demo2` — Route B: **Heritage Luxe** (deep green + gold)

## Quick start (Vercel)

1. Create a new GitHub repo (empty) and **upload all files** from this folder.
2. In Vercel, click **New Project → Import Git Repository**, select the repo.
3. Vercel will auto-detect **Next.js**. Use default settings (Build Command: `next build`, Output: `.next`).
4. On deploy, your site will be live (e.g., `https://your-project.vercel.app`).  
   - Route A: `https://your-project.vercel.app/demo1`
   - Route B: `https://your-project.vercel.app/demo2`

## Optional assets

Place CC or owned hero images in `/public` with the following filenames to override gradients:

- `hero-modern.jpg` (Modern Luxe hero)
- `hero-heritage.jpg` (Heritage Luxe hero)

If these images are missing, the pages gracefully fall back to gradient backgrounds.

## Notes

- A lightweight **shops directory** with client-side search is included on both pages.
- The **map** uses an OpenStreetMap embed (no API key needed).
- Accessibility basics: skip link, semantic landmarks, focus states.
