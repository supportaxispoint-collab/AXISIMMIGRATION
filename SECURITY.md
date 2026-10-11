# Security — Axis Immigrations Ltd website

Last full review: October 2026. Automated checks: `tests/e2e/security.spec.ts` (run with `npm run test:e2e`).

## What the site is (attack surface)

- Public marketing pages, pre-built as static HTML.
- **One writable endpoint:** `POST /api/enquiry` (contact form, booking form, chatbot lead flow).
- Leads go to a **private Google Sheet** via an Apps Script web app, and optionally to email via Resend.
- **No user accounts, no admin area, no database, no stored passwords** — so there is nothing to log in to or brute-force.
  The Google Sheet (protected by Google's own login) is the lead "back office".

## Protections in place

| Area | What's done | Where |
|---|---|---|
| Secrets | Only server-side env vars hold secrets; nothing secret uses `NEXT_PUBLIC_`. `import "server-only"` makes the build fail if secret-holding code is ever imported into the browser. Values are never logged. | `src/lib/env.ts`, `src/lib/sheets.ts` |
| Env validation | Checked at startup: Sheets URL must be `https://script.google.com/…`, secret ≥ 24 chars, Resend key format, paired variables, https site URL. Problems are logged by name only. | `src/lib/env.ts`, `src/instrumentation.ts` |
| Same-origin only | API rejects requests whose `Origin` is another website (403). No CORS headers are ever sent. | `src/lib/security.ts` |
| Request shape | JSON only (415 otherwise — blocks cross-site "simple" form posts), 16 KB cap streamed (413), POST only (405). | `src/lib/security.ts`, route |
| Input sanitisation | Control, zero-width and bidi-override characters stripped; line breaks removed from single-line fields (no email-header injection); names/countries limited to letters in any language; destination must be a listed option; length caps after cleaning. Shared by form and server. | `src/lib/enquiry-schema.ts` |
| XSS | React escapes all output; the only raw HTML is JSON-LD (escapes `<`) and a constant inline script; email HTML is escaped; strict CSP limits scripts/styles/images/fonts to this site. | `next.config.ts`, `src/components/seo/JsonLd.tsx` |
| Spreadsheet injection | Values starting with `= + - @`, tab or CR are stored as text; unknown fields dropped; 2,000-char cell cap; 20 KB request cap; constant-time secret check; unknown request types refused. | `scripts/google-apps-script.gs` |
| Rate limiting | 5 submissions / 10 min per IP plus a site-wide ceiling. IP comes from the proxy-appended (last) `X-Forwarded-For` entry or `X-Real-IP`/`CF-Connecting-IP` — rotating forged headers no longer bypasses it. Memory-bounded. | `src/lib/security.ts` |
| Spam bots | Hidden honeypot field (bots get a fake success, nothing is stored). | form + route |
| Security headers | `Content-Security-Policy`, `Strict-Transport-Security` (2 years), `X-Frame-Options: DENY` + `frame-ancestors 'none'`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` (camera, mic, location… off), `Cross-Origin-Opener-Policy`. `X-Powered-By` removed. API responses `no-store` + `noindex`. | `next.config.ts` |
| Debug / leakage | No browser source maps; Next's production error pages don't expose stack traces; personal data is only logged in development; Sheets errors don't echo response bodies. | `next.config.ts`, route |
| Exposed files | Only `public/` is served — `.env*`, source, scripts, tests, `.next` internals all return 404 (tested). | — |
| Privacy | Chatbot doesn't save the personal details typed in "Leave my details" to browser storage. | `ChatPanel.tsx` |
| Dependencies | Production dependencies: **0 known vulnerabilities**. Dev-only: `braces` (via ESLint) has an advisory with **no patched version available** — it only processes this project's own lint patterns, never runs in production. Accepted risk; re-check with `npm audit`. | `package.json` |
| Secret scan | Whole project scanned for API keys, tokens and private keys — none found (the project isn't a git repository yet, so there's no history to scan). | — |

## The CSP and `'unsafe-inline'`

Next.js puts small inline scripts in static pages to start the app. A nonce-based CSP would force every page to be
rendered per request (losing static/CDN speed), so `script-src` allows inline scripts **from this site only**.
External scripts are still blocked. If you add analytics (e.g. Plausible/GA4), add its domain to `script-src` and
`connect-src` in `next.config.ts`.

## Your checklist at deployment

1. **Environment variables** — set them in the host's dashboard (never commit `.env.local`):
   `NEXT_PUBLIC_SITE_URL` (https), `GOOGLE_SHEETS_WEBHOOK_URL`, `GOOGLE_SHEETS_SECRET` (32+ random chars, same as the
   Apps Script `SHARED_SECRET`), optional `RESEND_API_KEY` + `ENQUIRY_FROM_EMAIL`. Never set `E2E_ALLOW_LOCAL_SHEET`
   or `ENQUIRY_RATE_LIMIT` in production. Check the server log for `[config]` warnings after the first start.
2. **HTTPS** — enable SSL (Hostinger free SSL / certbot). HSTS is sent, so the site must stay on HTTPS.
3. **Proxy header** — on a VPS, nginx must set `X-Real-IP $remote_addr` (or `X-Forwarded-For`) so rate limiting sees real visitor IPs.
4. **Google Sheet** — share only with staff who handle leads; turn on **2-step verification** for that Google account;
   use a long random `SHARED_SECRET`; redeploy the Apps Script after any edit.
5. **Git** — when you create the repository, keep `.gitignore` as is. Before the first push, run a secret scanner
   such as `npx gitleaks detect` (or GitHub's secret scanning) to confirm nothing sensitive is committed.
6. **Keep updated** — run `npm audit` and `npm outdated` monthly; update Next.js promptly when security releases appear.
7. **Optional hardening** — Cloudflare in front of the site (DDoS + bot protection); Cloudflare Turnstile on the form if spam
   appears; a shared rate-limit store (Upstash Redis) if you ever run more than one server instance.

## If you add an admin area later

Use an established auth library (Auth.js / NextAuth or Clerk) rather than custom code; store passwords only as
**argon2id or bcrypt** hashes; protect routes in `middleware`/`proxy` *and* in each server action/route; require 2FA for staff;
add CSRF protection for any cookie-authenticated form; and log admin actions.
