# Artline Frames — artlineframes.com

Portfolio and lead-generation site for Artline Frames (Dubai, UAE). Next.js 16 + Tailwind CSS 4, fully static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp, address, hours, socials, years, turnaround | `src/lib/site.ts` |
| Services, prices, gallery items, FAQ, testimonials, clients | `src/lib/content.ts` |
| Logo files | `public/brand/` (original in `brand-source/`) |
| Gallery photos | `public/gallery/` → set `src: "/gallery/photo.jpg"` on the gallery item |

Enquiries go through WhatsApp: the contact form opens a WhatsApp chat with the customer's details pre-filled, so no email service is needed.

## Launch checklist

- [ ] Real WhatsApp number (digits only, e.g. `971501234567`) and phone in `site.ts`
- [ ] Shop address, Google Maps / Google Business link, opening hours
- [ ] Confirm email address, years of experience, turnaround time
- [ ] Confirm every "starting from" price in `content.ts`
- [ ] Replace placeholder gallery art with real photos (aim for 12–24, at least 1600px wide)
- [ ] Founder story on the About page (`src/app/about/page.tsx`)
- [ ] Instagram / Facebook / TikTok links
- [ ] Real client names or logos (the Clients section stays hidden while the list is empty)
- [ ] Real customer reviews, then set `showTestimonials: true` (the section only shows in dev until then)
- [ ] Create a Google Business Profile and link it from `mapsUrl`

## Deploy

Push to GitHub, import the repo on Vercel and add the `artlineframes.com` domain in Vercel's project settings.
