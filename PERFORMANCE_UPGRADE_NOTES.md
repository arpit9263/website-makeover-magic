# Performance Upgrade Notes

Completed optimizations for the Kamla Hospital Vite + React project:

- Compressed and resized heavy JPG/JPEG/PNG assets while preserving visual quality.
- Reduced the homepage virtual tour video from ~17.7 MB to ~6.0 MB.
- Changed the virtual tour video to lazy-load only when the section is near the viewport.
- Added React route-level code splitting with `React.lazy` and `Suspense`.
- Reduced initial JavaScript by moving pages into separate route chunks.
- Removed eager preloading of every hero carousel image; only the first hero image is preloaded.
- Kept key hero image priority for LCP.
- Fixed Tailwind ambiguous `duration-[1200ms]` build warning.
- Added stronger cache headers for HTML/media/assets in `public/_headers`.
- Ran production build and Vitest successfully.
- Ran `npm audit fix`; remaining audit items require breaking major updates and were not forced.

Build commands:

```bash
npm install
npm run build
npm test -- --run
```

Deploy the generated `dist/` folder to Cloudflare Pages, Netlify, Vercel static hosting, or your chosen hosting provider.
