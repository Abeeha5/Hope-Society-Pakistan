# Hope Society Pakistan — website

Static website built with [Astro](https://astro.build) from the Claude Design mockups.
No database and no server: every page is pre-built to plain HTML, so hosting is free.

## Run it on your computer

Needs Node.js 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # builds the final site into dist/
npm run preview    # serves dist/ to check the build
```

## Where things live

| What you want to change | File |
|---|---|
| Phone, email, socials, payment accounts, forms URL | `src/data/site.ts` |
| Team, departments, clubs, testimonials, chapters, gallery, FAQ, milestones | `src/data/content.ts` |
| Menu links | `src/data/nav.ts` |
| Events (one file per event) | `src/content/events/*.md` |
| Blog posts (one file per article) | `src/content/blog/*.md` |
| Library books (one file per book) | `src/content/library/*.json` |
| Photos | `public/images/` (reference them as `/images/name.jpg`) |
| Colours and fonts | top of `src/styles/global.css` |
| Page layouts | `src/pages/*.astro` |

Anything without a photo shows a branded placeholder box with a label, so it's easy to see what still needs a picture.

### Add an event
Copy any file in `src/content/events/`, rename it (the file name becomes the URL, e.g. `/events/hope-day-2027`) and edit the top section. Events move from **Upcoming** to **Past** automatically the day after their date. `guests`, `agenda`, `gallery` and `registration: true` are optional; see `iqbal-festival-2026.md` for a full example.

### Add a blog post
Create `src/content/blog/my-post.md`:

```md
---
title: "Post title"
date: 2026-11-01
category: "Essay"        # Essay | Poetry | Event report | Newsletter
author: "Name"
authorRole: "Poetry Club, Lahore"   # optional
excerpt: "One-line summary"         # optional
cover: "/images/cover.jpg"          # optional
featured: true                      # optional, shows at the top of /blog
---

Write the article here in Markdown. ## for headings, > for a pull quote.
```

### Add a book to the library
Create `src/content/library/book-name.json`:

```json
{
  "title": "Bang-e-Dra",
  "author": "Allama Muhammad Iqbal",
  "genre": "Poetry",
  "language": "Urdu",
  "year": 1924,
  "pages": 300,
  "description": "Iqbal's first Urdu collection.",
  "file": "bang-e-dra.pdf"
}
```

Genres and languages in the filters are built automatically from the books. `cover` is optional: without it a styled cover is generated. `file` is either a file name (looked up under `libraryBaseUrl` in `src/data/site.ts`) or a full URL.

Only add books that are in the public domain, published by HOPE, or shared with the rights holder's permission.

## Forms (membership, contact, events, partnership, newsletter)

All forms send to one Google Apps Script that writes each submission into a Google Sheet (one tab per form) and emails a notification. It's free and the team can read the sheet without logging into anything new.

1. Follow the setup steps at the top of `forms/google-apps-script.gs`.
2. Copy the Web app URL it gives you.
3. Set it as `PUBLIC_FORMS_ENDPOINT` in Cloudflare Pages (Settings → Environment variables) and redeploy.

Until that's done, forms show a message asking people to email instead, so nothing is silently lost.

## Deploy (free) on Cloudflare Pages

1. Put this folder in a GitHub repository.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Add `PUBLIC_FORMS_ENDPOINT` under environment variables.
5. Custom domains → add `hopesocietypakistan.com` (and `www`).

Every push to GitHub now rebuilds and publishes the site in about a minute. Free plan limits: 500 builds/month, 20,000 files, 25 MB per file.

## Library PDFs on Cloudflare R2 (when the library grows)

Pages can't host files over 25 MB, and big PDFs bloat the repo. When the library outgrows a handful of small PDFs:

1. Cloudflare dashboard → R2 → Create bucket (e.g. `hope-library`). 10 GB is free, and downloads (egress) are always free.
2. Bucket → Settings → Public access → Connect a custom domain, e.g. `library.hopesocietypakistan.com`.
3. Upload PDFs to the bucket (drag and drop in the dashboard).
4. Set `PUBLIC_LIBRARY_BASE_URL=https://library.hopesocietypakistan.com/` in Pages and redeploy.
5. Move the PDFs out of `public/library/`. The JSON entries stay the same.

## Before launch checklist

- [ ] Real payment details in `src/data/site.ts` (currently placeholders)
- [ ] Real social media URLs and Google Maps link in `src/data/site.ts`
- [ ] Team names and photos, advisor names (`src/data/content.ts`)
- [ ] Testimonials: real quotes from members who agreed to be quoted
- [ ] Iqbal Festival guests, venue and time confirmed
- [ ] Sample blog posts replaced or deleted (they say "Sample entry")
- [ ] Chapter list and embassy counts checked
- [ ] Forms connected and tested end-to-end
- [ ] Privacy and Terms reviewed
- [ ] Partner logos on the Impact page
