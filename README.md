# Axis Immigrations Ltd — Website

Next.js 16 (App Router) + Tailwind CSS 4, built from [plan.md](plan.md) (Brainstorm 2 as the primary brief) and [design.md](design.md).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

Copy `.env.example` to `.env.local` and fill in the values. Enquiries, bookings and chatbot leads are saved to a
**Google Sheet** (setup: [docs/google-sheets-setup.md](docs/google-sheets-setup.md)) and/or emailed with [Resend](https://resend.com).
If neither Google Sheets nor Resend is configured, enquiries are only logged in development and the form returns a
"temporarily unavailable" message in production (so no lead is silently lost).

## Where things live

| What | File |
|---|---|
| Company name, offices (UK HQ, Dubai, Poland), CEO, social, legal notice | `src/data/company.ts` |
| About Us page content | `src/data/about.ts` |
| Logo, CEO photo, background photos | `src/assets/images/` (credits in `CREDITS.md`) |
| The 5 services (copy, lists, FAQs, handling office) | `src/data/services.ts` |
| 30 European destinations + suitability matching | `src/data/countries.ts` |
| Steps, Why Us, sectors, Industry Network, testimonials | `src/data/content.ts` |
| Design tokens (colours, radius, breakpoints) | `src/app/globals.css` |
| Enquiry validation (shared by form and API) | `src/lib/enquiry-schema.ts` |
| Enquiry API (routing, spam checks, emails) | `src/app/api/enquiry/route.ts` |

## Content switches

- **Industry Network** — names are hidden until `permissionConfirmed: true` is set per organisation in `content.ts`.
- **Candidate Stories** — the section only appears once a testimonial has `verified: true`.
- **Facebook link** — set `company.social.facebook.url` once the page URL is confirmed.

## Responsive approach

Mobile-first: base styles target phones (320px+); `xs` 380 · `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536 · `3xl` 1920.
Headings use fluid `clamp()` sizes, the container widens on large screens, and the root font size steps up at 1920px+.
Checked for horizontal overflow at 320, 375, 414, 768, 1024, 1280, 1440, 1920 and 2560px.

## Icons

Icons use a self-hosted subset of Material Symbols (`public/fonts/material-symbols.woff2`, ~10 KB).
After using a new icon name anywhere in `src/`, run `npm run icons` to regenerate the font.

## SEO

- Per-page titles/descriptions/canonicals/Open Graph come from `pageMetadata()` in `src/lib/seo.ts`.
- Structured data (Organization, WebSite, BreadcrumbList, FAQPage, Service, AboutPage, ContactPage) is rendered with `<JsonLd>`.
- Share image: `src/app/opengraph-image.tsx` (shared card in `src/lib/og-card.tsx`).
- Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` to `.env.local` to verify the site.
- Update `LAST_UPDATED` in `src/app/sitemap.ts` when content changes materially.

## Automated tests (Playwright)

End-to-end tests live in `tests/e2e/` and run against a production build in your installed Google Chrome,
on a desktop viewport and an emulated Pixel 7. Form submissions go to a local mock of the Google Sheets script,
so no real sheet or email is touched.

```bash
npm run test:e2e          # full suite (builds the site first, ~25 min on an average laptop)
npm run test:e2e:ui       # interactive runner — pick and watch individual tests
npm run test:e2e:report   # open the HTML report from the last run
npx playwright test tests/e2e/chatbot.spec.ts   # run one file
```

Coverage: all pages, navigation & mobile menu, Europe filters & suitability checker, contact/booking form (incl. sheet delivery),
Aria chatbot & lead flow, WhatsApp/social buttons, enquiry API, SEO metadata & structured data, axe-core accessibility,
and responsive layout from 320px to 2560px.

## Local development speed

- First page after `npm run dev` compiles shared code once (~20 s); after that pages compile in ~1–3 s and reload in well under 1 s.
- Turbopack's on-disk dev cache is **off by default** (`next.config.ts`) because antivirus scanning of `.next` made its
  background writes stall compiles. For faster restarts, exclude this folder from Windows Defender
  (*Windows Security → Virus & threat protection → Manage settings → Exclusions*) and set `NEXT_DEV_DISK_CACHE=1` in `.env.local`.
- If the dev server ever feels slow again, stop it, delete the `.next` folder (a disposable cache) and restart.
- Photos in `src/assets/images` are pre-sized to 2000 px wide; keep new photos at that size or smaller.
- Flags: only the flags in use are bundled — run `npm run flags` after adding a destination.

## Security

See [SECURITY.md](SECURITY.md) for every protection in place (headers, CSP, API hardening, input sanitisation,
rate limiting, spreadsheet safety) and the deployment checklist. Automated checks: `tests/e2e/security.spec.ts`.
