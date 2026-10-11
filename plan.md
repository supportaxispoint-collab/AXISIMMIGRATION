# Visa Launch International — Website Plan

**Primary requirement: Brainstorm 2** (Visa Launch International content brief). Its sections, order, wording, services, destinations and contact details define the website.
**Supporting input: Brainstorm 1** (generic React immigration-site brainstorm). Used only for *how* to build things — WhatsApp button, enquiry form, email, chatbot, tech stack, roadmap — and only where it fits Brainstorm 2.

Visual design: [design.md](design.md) · Existing built page: [europe-28.html](europe-28.html)

---

## 1. What the site must do

Present Visa Launch International as **one platform for immigration assistance, European careers, visit visas, Dubai Golden Visa and flight booking**, with a strong Netherlands focus and 28+ European destinations — and turn visitors into consultations.

**Positioning (Brainstorm 2):**
- Tagline: **Your Journey. Our Expertise. Your Next Destination.**
- Descriptor: **Global Immigration • European Careers • Visa Assistance • International Mobility**
- Objective: **Making international mobility simpler, clearer and more professional.**
- Close: **Plan it. Prepare it. Launch it.**

**Primary actions on every page:** Book a Consultation · Explore Opportunities · WhatsApp · Contact.

**Out of scope** (were in Brainstorm 1 but are not Visa Launch services): study visas, permanent residency, family immigration, business immigration.

---

## 2. Services (from Brainstorm 2)

| # | Service | Page |
|---|---|---|
| 01 | European Work Permit Assistance | `/work-permits` |
| 02 | Job Assistance in Europe | `/jobs-in-europe` |
| — | European Opportunities (28+ destinations) | `/europe` |
| — | Netherlands — Key Market | `/netherlands` |
| — | Visit Visa Assistance | `/visit-visas` |
| — | Dubai Golden Visa | `/dubai-golden-visa` |
| — | Flight Ticket Booking Assistance | `/flight-assistance` |

---

## 3. Sitemap & navigation

```
/                      Home — all Brainstorm 2 sections in order (§4)
/work-permits          European Work Permit Assistance
/jobs-in-europe        Job Assistance in Europe
/europe                European Opportunities — 28+ destinations   ← port of europe-28.html
/netherlands           Netherlands — Our Key Market
/visit-visas           Visit Visa Assistance
/dubai-golden-visa     Dubai Golden Visa
/flight-assistance     Flight Ticket Booking Assistance
/how-it-works          How It Works (optional; also on Home)
/contact               Contact Visa Launch International (+ booking)
/privacy  /terms       Legal (required for the enquiry form)
```

**Main nav** (matches the existing header): Overview · Europe 28+ · Netherlands Hub · Dubai Golden Visa · Work Permits · Visit Visas · Flight Assistance · **[Book a Consultation]**
*Job Assistance* sits under Work Permits (dropdown) or in the footer.

**Secondary pages from Brainstorm 1** — add later only if the company wants them: About Us, standalone FAQ.

---

## 4. Home page — section by section

The home page follows Brainstorm 2 exactly, in this order. Copy in quotes is final unless the company changes it.

### 4.1 Hero
- Eyebrow: "Global Immigration • European Careers • Visa Assistance • International Mobility"
- H1: **"Your Journey. Our Expertise. Your Next Destination."**
- Sub: "Turn international opportunities into achievable journeys."
- Body: "Visa Launch International provides professional assistance for work permits, employment opportunities, visit visas, Dubai Golden Visa services and international travel arrangements. With a strong focus on the Netherlands and access to opportunities across 28+ European destinations, we connect aspiring professionals, skilled workers and international travellers with the right pathways for their goals."
- Buttons: **[Explore Opportunities]** → `/europe` · **[Book a Consultation]** → `/contact#book`

### 4.2 Build Your Future Beyond Borders
- H2: "Build Your Future Beyond Borders"
- "The world is full of opportunities. We help you navigate the journey."
- "From identifying suitable employment opportunities to preparing documentation and supporting your visa process, Visa Launch International is designed around one objective:"
- Highlight: **"Making international mobility simpler, clearer and more professional."**
- "We combine immigration assistance, career support and international travel services under one platform."

### 4.3 Our Core Services
Two large numbered cards + links to the other services.
- **01 — European Work Permit Assistance** — "Explore employment-based immigration opportunities across Europe." List: job opportunity identification, employer and vacancy coordination, work permit documentation, employment documentation support, visa application preparation, appointment guidance, travel preparation, pre-departure assistance. Tagline: **"Your career can go further."**
- **02 — Job Assistance in Europe** — "We help candidates explore employment opportunities based on their experience, qualifications and target destination." Sector chips: Logistics • Warehousing • Manufacturing • Transport • Hospitality • Construction • Skilled Trades • Food Production • Operations. Note: "Vacancies, employer requirements, salaries and immigration routes vary by country and position." Tagline: **"Find the opportunity. Prepare the application. Start the journey."**

### 4.4 European Opportunities
- H2: "European Opportunities" · Sub: **"28+ Destinations. One International Platform."**
- Intro: "…assistance for selected immigration and employment pathways across Europe, subject to current vacancies, employer eligibility and applicable immigration regulations."
- Flag grid of all 30 destinations (Netherlands first, highlighted): Netherlands, Germany, Poland, Belgium, France, Spain, Portugal, Italy, Austria, Czech Republic, Slovakia, Hungary, Romania, Bulgaria, Croatia, Slovenia, Lithuania, Latvia, Estonia, Finland, Sweden, Denmark, Greece, Malta, Cyprus, Ireland, Luxembourg, Switzerland, Norway, Iceland.
- Note: **"Availability differs by destination."** + "Every application is assessed according to the applicant's profile, employer requirements, vacancy availability and current immigration rules."
- Button → `/europe` (full directory with filters).

### 4.5 Netherlands — Our Key Market
- Eyebrow: "Netherlands — Our Key Market"
- H2: **"Start Your European Journey in the Netherlands"**
- "The Netherlands is one of our primary European markets."
- Sector tiles: Logistics · Warehousing · Transport · Manufacturing · Technical & Skilled Work · Supply Chain · Operations
- "From the first consultation to documentation and visa preparation, our team helps candidates understand each stage of the process."
- Statement: "Netherlands is not just a destination. **It's an opportunity to build your next chapter.**"
- **[View Netherlands Opportunities]** → `/netherlands`

### 4.6 Visit Visa Assistance
- H2: **"Travel With Confidence"**
- "Planning a business trip, holiday, family visit or international journey? Visa Launch International provides assistance with selected visit visa applications and travel documentation."
- List: destination assessment, document checklist, application preparation, appointment guidance, travel documentation, visa application support, flight booking assistance.
- Tagline: **"One journey. Better preparation."** → `/visit-visas`

### 4.7 Dubai Golden Visa
- H2: **"Build Your Future in the UAE"**
- "Dubai continues to attract entrepreneurs, investors, professionals and international talent. Visa Launch International provides assistance with Dubai Golden Visa pathways for eligible applicants."
- List: eligibility assessment, documentation guidance, application preparation, process coordination, UAE residency-related assistance.
- Tagline: **"Your future deserves a stronger foundation."** · **[Check Your Eligibility]** → `/dubai-golden-visa#eligibility`

### 4.8 Flight Ticket Booking Assistance
- H2: **"From Visa Approval to Take-Off"**
- "Your international journey doesn't end with your visa. We also provide flight ticket booking assistance for destinations worldwide… Europe, the Middle East, Asia or elsewhere… around your immigration and employment timeline."
- Statement: **"Visa. Travel. Arrival. We help connect every step."** → `/flight-assistance`

### 4.9 How It Works
- H2: **"A Simple Journey to Your Next Destination"** — 6 steps:
  1. **Consultation** — Tell us about your goals, qualifications, experience and preferred destination.
  2. **Profile Assessment** — Our team reviews your profile and identifies potentially suitable pathways.
  3. **Opportunity Matching** — Where applicable, we identify suitable job or visa opportunities based on current availability.
  4. **Documentation** — We guide you through the required documents and application preparation.
  5. **Application Support** — Our team assists with the relevant application and appointment process.
  6. **Travel & Arrival** — Once your process is completed, we can also assist with travel arrangements and pre-departure preparation.
- Close: **"Your journey starts with one conversation."** + [Book a Consultation]

### 4.10 Why Visa Launch International?
- H2: **"International Vision. Personal Service."** — 7 cards (use Material icons in place of emoji):
  Multi-Country Reach · Netherlands Specialization · Career-Focused Approach · Documentation Support · End-to-End Travel Support · International Network · Transparent Process (each with Brainstorm 2's one-line description).

### 4.11 Our Industry Network
- H2: **"Connected to Global Logistics & Business Ecosystems"**
- "Our international mobility model is designed around relationships with logistics, supply-chain, technology and business organisations."
- Organisations supplied: Van der Helm Logistics, K.Hartwall, Terralogix, GoAnywhere, Geek+, DSV, GEODIS, DACHSER, Flexport.
- Close: **"A World of Business. A World of Opportunities."**
- ⚠️ Title must stay **"Our Industry Network" / "Industry Connections"** — never "Partners" — and names/logos appear **only with written permission** from each company (see §8). Until then, show the section as sector tiles (warehousing, freight forwarding, robotics, supply chain, logistics technology).

### 4.12 Candidate Stories
- H2: **"Real Journeys. Real Ambition."** — 3 testimonial cards (European Work Permit Client · European Employment Client · International Visa Client).
- ⚠️ The Brainstorm 2 reviews are **samples**. Hide this section until genuine reviews with client permission are available.

### 4.13 Final CTA
- Eyebrow: "Your Next Destination Is Waiting"
- H2: **"Don't Just Dream About Going Abroad."** — then **Plan it. Prepare it. Launch it.**
- "Visa Launch International helps you take the next step toward international opportunities with professional immigration, employment and travel assistance."
- **[Start Your Journey]** → `/contact` · **[Talk to an Advisor]** → WhatsApp

### 4.14 Contact strip
Two office cards (Dubai, Poland) + social links — same data as §6.

### 4.15 Footer (every page)
- "Visa Launch International" · "Global Immigration • European Careers • International Mobility"
- Links: Work Permit Assistance | Job Assistance | Visit Visas | Dubai Golden Visa | Flight Booking Assistance
- Offices, social, Privacy / Terms
- "© {current year} Visa Launch International. All rights reserved."
- **Important Notice (verbatim):** "Visa Launch International provides immigration, employment and travel assistance. Visa approval, work permits, employment offers and immigration decisions are subject to the relevant government authorities, employers and applicable laws. Employment opportunities and destination availability may change without notice. No visa, employment or immigration outcome should be represented as guaranteed."

---

## 5. Inner pages

All service pages share one template, filled from Brainstorm 2 content:

> Hero (H2 + tagline from §4) → intro paragraph → **"What we assist with"** list → who it's for → process (the 6 steps, filtered to what applies) → short FAQ → Important Notice → CTA (Book · WhatsApp · Email)

| Page | Extra content |
|---|---|
| `/work-permits` | Full 8-item assistance list; link to `/europe` and `/jobs-in-europe` |
| `/jobs-in-europe` | Sector grid (9 sectors); "vacancies vary" note; enquiry form preset to *Job Assistance* |
| `/europe` | **Port of europe-28.html**: suitability checker, search, region & permit filters, 30 country cards. Fixes before launch: Romania & Bulgaria are full Schengen members since 1 Jan 2025; drop Spain "fast-track citizenship" wording; soften "48-Hour Legal Review" and "3–6 Months" unless the company commits to them; replace placeholder phone `+971 4 000 8920` and "Trade Centre 1" with real details (§6) |
| `/netherlands` | 7 sector tiles, journey stages, Netherlands FAQs, **[View Netherlands Opportunities]** → form preset to *Netherlands* |
| `/visit-visas` | 7-item assistance list; trip types (business, holiday, family) |
| `/dubai-golden-visa` | Who it's for (entrepreneurs, investors, professionals, talent); 5-item list; `#eligibility` short form |
| `/flight-assistance` | Worldwide regions; "timed around your visa/job dates"; request form (from, to, dates, passengers) |
| `/contact` | §7.3 form, office cards, booking, map, social |

---

## 6. Company contact details (single source of truth)

| | Dubai Office | Poland Office |
|---|---|---|
| Address | 8th St, Deira, Dubai, UAE | 72C4+64, Katowice, Poland *(plus code — get full street address)* |
| Phone / WhatsApp | +971 51 287 4266 | +48 579 260 390 |
| Email | dbsupport@visalaunchinternational.com | support@visalaunchinternational.com |

Social: Instagram **@visalaunchinternational** · Facebook **Visa Launch International**

Stored once in `src/data/company.js`; header, footer, contact page, WhatsApp button and chatbot all read from it.

---

## 7. Supporting features (from Brainstorm 1, adapted)

### 7.1 Sticky WhatsApp button — every page
- Bottom-right, above the chatbot; never covers buttons or forms on mobile.
- Two offices → small chooser: **Dubai (UAE)** / **Poland (Europe)**. Default by page: Golden Visa & Flights → Dubai; Europe, Netherlands, Work Permits, Jobs → Poland.
- `https://wa.me/971512874266?text=…` / `https://wa.me/48579260390?text=…`
- Prefilled: *"Hello, I would like to enquire about Visa Launch International's services."* (+ page name, e.g. "…about Netherlands opportunities").
- Tooltip "Chat with us", `aria-label`, `rel="noopener noreferrer"`, click tracked.

### 7.2 Email
`mailto:` links in header, footer and contact page, with prefilled subject. Form emails sent from the backend only — no API keys in the browser.

### 7.3 Enquiry form (Contact page + preset on service pages)

| Field | Type | Req. |
|---|---|---|
| Full name | Text | ✓ |
| Email | Email | ✓ |
| Phone (with country code) | Phone | ✓ |
| Current country / nationality | Dropdown | ✓ |
| Service | Work Permit · Job Assistance · Visit Visa · Dubai Golden Visa · Flight Booking | ✓ |
| Destination of interest | 30 European countries + UAE + Other | |
| Preferred contact | WhatsApp · Phone · Email | ✓ |
| Preferred office | Dubai · Poland · No preference | |
| Message | Textarea | |
| Privacy consent | Checkbox → Privacy Policy | ✓ |

Flow: validate → spam check (honeypot + Turnstile) → save → email the right office (Golden Visa/Flights → Dubai; Europe services → Poland) → confirmation email to visitor → on-screen success with WhatsApp option.

### 7.4 Consultation booking
"Book a Consultation" opens: preferred date, time slot, timezone, contact method, office. Staff confirm manually by WhatsApp/email.

### 7.5 Chatbot (Phase 3)
Guided menu based on Brainstorm 2 services: "What can we help with?" → 5 services → destination (Europe 30 / UAE) → short answer from site content → **WhatsApp handoff** or form. Collects name/contact only with consent. Later: AI answers limited to the site's verified content. Never promises approvals or invents requirements.

### 7.6 Later (Phase 4)
Admin dashboard for leads and bookings (status, office, notes, follow-ups); multilingual support; full eligibility questionnaire extending the Europe suitability checker.

---

## 8. Legal & trust guardrails

1. **No guarantees anywhere** — the Important Notice in the footer and on every service page.
2. **Industry Network** — "Industry Connections", not "Partners"; company names/logos only with written permission (trademark and misleading-advertising risk otherwise).
3. **Testimonials** — genuine only, with client permission; hide the section until available; no fake star ratings.
4. **Privacy** — Poland office → **EU GDPR** applies; Dubai office → **UAE data protection law**. Privacy policy and terms reviewed by a lawyer; consent checkbox with timestamp; no passport/ID uploads via public forms; delete stale leads after a set period.
5. **Licensing** — confirm what licences are needed to advertise job placement in Poland/EU and immigration services in the UAE; show licence numbers if required.
6. **Accuracy** — country programme details on `/europe` reviewed by the team against official sources; show "last reviewed" date.

---

## 9. Design

Follow **[design.md](design.md)** (Public Sans, purple `#4f378a` + gold `#c9a74d`, lavender surfaces, compact UI). Brainstorm 2 tone maps to it:
- Bold uppercase section headlines ("BUILD YOUR FUTURE BEYOND BORDERS") → hero/eyebrow styles.
- Numbered services and steps (01, 02…) → design.md step cards.
- Short punchy closing lines → highlighted statement under each section.
- Emoji in Brainstorm 2 (🌍 💼 📋 ✈️) → Material Symbols icons; country flags stay as emoji.

---

## 10. Tech stack (Brainstorm 1)

| Need | Choice |
|---|---|
| Framework | React (Vite) — or Next.js if Google search traffic matters (see §13) |
| Styling | Tailwind CSS with design.md tokens |
| Icons | Material Symbols |
| Routing | React Router |
| Forms | React Hook Form + Zod |
| Backend / DB | Supabase (Postgres + RLS + Edge Functions) |
| Email | Resend via Edge Function |
| Spam | Cloudflare Turnstile + honeypot |
| Analytics | Plausible or GA4 (cookie consent) |
| Hosting | Vercel or Cloudflare Pages |

### Folder structure
```
src/
├── components/
│   ├── layout/    Navbar, UtilityBar, Footer, ImportantNotice
│   ├── home/      Hero, BeyondBorders, CoreServices, EuropeTeaser, NetherlandsSection,
│   │              VisitVisaSection, GoldenVisaSection, FlightSection, HowItWorks,
│   │              WhyUs, IndustryNetwork, CandidateStories, FinalCta, ContactStrip
│   ├── europe/    SuitabilityChecker, CountryFilters, CountryCard
│   ├── contact/   WhatsAppButton, EnquiryForm, BookingForm, OfficeCard
│   ├── chatbot/   Chatbot, flows.js
│   └── ui/        Button, Badge, SectionHeading, StepCard, FeatureList, CtaBand
├── pages/         Home, WorkPermits, JobsInEurope, Europe, Netherlands, VisitVisas,
│                  DubaiGoldenVisa, FlightAssistance, Contact, Privacy, Terms
├── data/          company.js, services.js, countries.js, steps.js, whyUs.js,
│                  industryNetwork.js, testimonials.js
├── lib/           supabase.js, analytics.js, whatsapp.js
├── App.jsx
└── main.jsx
supabase/functions/  send-enquiry/, send-booking/
```
Each Home section = one component, so the order in §4 maps 1:1 to code. All Brainstorm 2 copy lives in `data/` for easy editing.

### Data (Supabase)
- `enquiries` — name, email, phone, nationality, service, destination, contact_method, office, message, source (form/booking/chatbot), status, notes, consent_at
- `appointments` — enquiry_id, date, slot, timezone, office, status
- RLS: public can insert only; staff read/update.

---

## 11. Roadmap

| Phase | Scope | Done when |
|---|---|---|
| **1 — Brainstorm 2 site** | Project setup with design.md; all 14 Home sections (§4); 7 service pages + Europe port + Contact + legal; real contact data; Important Notice | Every Brainstorm 2 section is live, responsive, with no placeholder data or sample reviews visible |
| **2 — Enquiries** | WhatsApp button (2 offices), mailto links, enquiry form → Supabase → office email + visitor confirmation, booking request, analytics | A test enquiry for each service reaches the correct office inbox |
| **3 — Engagement** | Guided chatbot with WhatsApp handoff, Golden Visa eligibility form, flight request form, testimonials (once genuine) | Chatbot routes each service to the right page/office |
| **4 — Operations** | Admin dashboard, lead statuses & follow-ups, multilingual, AI chatbot on verified content | Staff manage leads without touching the database |

**Launch after Phases 1 + 2.**

---

## 12. Needed from the company

- [ ] Logo files (SVG/PNG)
- [ ] Full Katowice street address; office hours for both offices
- [ ] Confirm which office handles which service
- [ ] Written permission for each Industry Network company (or approval to show sectors only)
- [ ] Genuine testimonials with permission
- [ ] Licence/registration numbers, if applicable
- [ ] Team review of the 30 country cards on `/europe`
- [ ] Domain and DNS access (to send email from `@visalaunchinternational.com`)
- [ ] Photos: offices, team, destinations (or licensed stock)

---

## 13. Open questions

1. **Vite or Next.js?** Next.js (still React) gets the 7 service pages and `/europe` indexed better by Google. *Recommendation: Next.js if search is a lead source; Vite if traffic is mainly Instagram/Facebook/WhatsApp.*
2. **"28+" label** — keep, given the list has 30 destinations (including non-EU Switzerland, Norway, Iceland)?
3. **Languages** after English?
4. **Fees** — shown on the site, or "discussed at consultation"?
5. **About / FAQ pages** (Brainstorm 1) — add in Phase 3, or skip?
