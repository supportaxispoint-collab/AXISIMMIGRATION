# Axis Immigrations Ltd — Design System

> **Brand update (Oct 2026):** the company is now **Axis Immigrations Ltd**. The palette moved from purple to the logo's **navy (`#0e2f74`) + gold (`#e0b13d`)**. Token *names* and usage rules below are unchanged — the current values live in `src/app/globals.css` (`@theme`), which is the source of truth.

Design reference for building new pages that match the **Europe 28+** page (`europe-28.html`).
Stack: plain HTML + **Tailwind CSS (CDN)** + **Public Sans** + **Material Symbols Outlined**.
The palette is a Material 3–style token set (purple primary, gold tertiary, lavender-tinted neutrals).

---

## 1. Page setup (copy into every page `<head>`)

```html
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Page Name | Visa Launch International</title>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300..900;1,300..900&display=swap"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

<style>
  @layer base { html, body { margin:0; padding:0; } body { overscroll-behavior:none; } }
  ::-webkit-scrollbar { display:none; }
</style>

<script src="https://cdn.tailwindcss.com"></script>
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: { extend: {
    colors: {
      "primary": "#4f378a", "on-primary": "#ffffff",
      "primary-container": "#6750a4", "on-primary-container": "#e0d2ff",
      "primary-fixed": "#e9ddff", "primary-fixed-dim": "#cfbcff",
      "on-primary-fixed": "#22005d", "on-primary-fixed-variant": "#4f378a",
      "inverse-primary": "#cfbcff", "surface-tint": "#6750a4",

      "secondary": "#63597c", "on-secondary": "#ffffff",
      "secondary-container": "#e1d4fd", "on-secondary-container": "#645a7d",
      "secondary-fixed": "#e9ddff", "secondary-fixed-dim": "#cdc0e9",
      "on-secondary-fixed": "#1f1635", "on-secondary-fixed-variant": "#4b4263",

      "tertiary": "#765b00", "on-tertiary": "#ffffff",
      "tertiary-container": "#c9a74d", "on-tertiary-container": "#503d00",
      "tertiary-fixed": "#ffdf93", "tertiary-fixed-dim": "#e7c365",
      "on-tertiary-fixed": "#241a00", "on-tertiary-fixed-variant": "#594400",

      "error": "#ba1a1a", "on-error": "#ffffff",
      "error-container": "#ffdad6", "on-error-container": "#93000a",

      "background": "#fdf7ff", "on-background": "#1d1b20",
      "surface": "#fdf7ff", "surface-bright": "#fdf7ff", "surface-dim": "#ded8e0",
      "surface-container-lowest": "#ffffff", "surface-container-low": "#f8f2fa",
      "surface-container": "#f2ecf4", "surface-container-high": "#ece6ee",
      "surface-container-highest": "#e6e0e9", "surface-variant": "#e6e0e9",
      "on-surface": "#1d1b20", "on-surface-variant": "#494551",
      "inverse-surface": "#322f35", "inverse-on-surface": "#f5eff7",
      "outline": "#7a7582", "outline-variant": "#cbc4d2"
    },
    borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
    fontFamily: { headline: ["Public Sans"], display: ["Public Sans"], body: ["Public Sans"], label: ["Public Sans"] }
  } }
}
</script>
```

Body: `<body class="bg-surface font-body text-on-surface antialiased">`

---

## 2. Color

### Roles

| Role | Token | Hex | Use for |
|---|---|---|---|
| Brand | `primary` | `#4f378a` | Primary buttons, active nav/filter, links, icons, step numbers |
| Brand (lighter) | `primary-container` | `#6750a4` | Hover state of primary buttons, active nav pill |
| Muted brand | `secondary` | `#63597c` | Sub-labels, active permit-class chip, timelines |
| Accent (gold) | `tertiary-container` | `#c9a74d` | "High Demand" badges, recommendation icon, CTA button on purple |
| Deep gold | `tertiary` | `#765b00` | Small solid badges on photos ("2025 Priority Intake") |
| Page | `surface` | `#fdf7ff` | Page background |
| Card | `surface-container-lowest` | `#ffffff` | Cards, widgets |
| Inset | `surface-container-low` | `#f8f2fa` | Inputs, detail boxes inside cards, filter tracks, top utility bar |
| Inset (stronger) | `surface-container` / `-high` | `#f2ecf4` / `#ece6ee` | Side panels, neutral badges, hover fills |
| Text | `on-surface` | `#1d1b20` | Headings, values |
| Text (muted) | `on-surface-variant` | `#494551` | Body copy, descriptions |
| Text (faint) | `outline` | `#7a7582` | Labels, captions, placeholders, metadata |
| Dark band | `inverse-surface` | `#322f35` | Footer |

### Rules
- **Separate with surfaces, not borders.** Cards are white on a lavender page; inset areas use `surface-container-low`. Borders appear only in the footer divider.
- **Gold is the only accent.** Use it for status/priority signals and one CTA per dark section, never for body text.
- Always pair a fill with its `on-` token (`bg-primary text-on-primary`, `bg-tertiary-container text-on-tertiary-container`).
- Translucent tints are fine for decoration: `bg-primary/5`, `bg-tertiary-container/10`, `bg-surface-container-high/60`.

---

## 3. Typography

One family: **Public Sans**. Hierarchy comes from size, weight and uppercase tracking.

| Style | Classes |
|---|---|
| Hero H1 | `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-headline` (uppercase text) |
| Hero tagline | `text-sm sm:text-base font-bold tracking-widest uppercase text-secondary` |
| Section H2 | `text-xl sm:text-2xl font-bold font-headline text-on-surface` |
| Card / banner H3 | `text-xl sm:text-2xl font-bold` (banner) · `text-base font-bold` (card) |
| Eyebrow | `text-xs font-bold uppercase tracking-wide text-primary` + 16px icon, `gap-1.5` |
| Body | `text-xs sm:text-sm leading-relaxed text-on-surface-variant` |
| Card body | `text-xs leading-relaxed text-on-surface-variant` |
| Micro label | `text-[10px] font-bold uppercase tracking-wider text-outline` |
| Key–value row | `text-[11px]` label `text-outline`, value `font-semibold text-on-surface` |
| Big stat | `text-2xl font-black text-on-surface` |

The site is intentionally **compact**: most UI text is `text-xs` (12px); `text-[11px]` and `text-[10px]` are used for metadata.

---

## 4. Shape, elevation, spacing

### Radius (custom scale — note the overrides)
| Class | Value | Use |
|---|---|---|
| `rounded` | 2px | Small badges/tags |
| `rounded-md` | 6px (Tailwind default) | Permit-class chips |
| `rounded-lg` | **4px** | Buttons, inputs, inner boxes, nav pills |
| `rounded-xl` | **8px** | Cards, sections, banners |
| `rounded-full` | **12px — not a circle!** | Pills. For true circles use `rounded-[50%]` |

> ⚠️ Because `full` is overridden, `w-10 h-10 rounded-full` renders as a rounded square. Small dots (`w-2 h-2`) still look round.

### Shadows
- Cards: `shadow-md` → `hover:shadow-xl` with `transition-all`
- Key widgets (checker, CTA band): `shadow-xl`
- Photo banner: `shadow-lg`
- Header: `shadow-[0_1px_8px_rgba(0,0,0,0.04)]`

### Layout
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Page top offset under fixed header: `pt-28`
- Section spacing: `mb-12` / `mb-14` / `mt-16` between major blocks
- Grid gaps: `gap-6` (cards), `gap-3`–`gap-4` (tiles/ribbons)
- Card padding: `p-5`; widget padding: `p-6 sm:p-8`; inset boxes: `p-2.5`–`p-4`
- Card grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

## 5. Iconography

Material Symbols Outlined, as `<span class="material-symbols-outlined">icon_name</span>`.
Sizes: `text-sm` in links, `text-base`/`text-lg` inline, `text-xl` in tiles, `text-[15px]` in the utility bar, `text-4xl` in empty states.
Colour: `text-primary` by default; `text-secondary` or `text-outline` for low emphasis.

Common icons: `location_on`, `support_agent`, `public`, `verified`, `verified_user`, `hub`, `flight_takeoff`, `schedule`, `travel_explore`, `precision_manufacturing`, `rule`, `recommend`, `filter_alt`, `search`, `chevron_right`, `arrow_forward`, `route`.

Flags are emoji (`🇳🇱`) at `text-3xl`.

---

## 6. Components

### Header (fixed, two tiers)
```html
<header class="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
  <!-- Utility bar -->
  <div class="bg-surface-container-low text-xs text-on-surface-variant py-1.5 px-6 lg:px-12">…offices · phone · language…</div>
  <!-- Main bar -->
  <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
    <!-- Logo: image + stacked wordmark -->
    <div class="flex flex-col">
      <span class="text-base font-bold tracking-tight uppercase leading-tight">Visa Launch</span>
      <span class="text-[10px] tracking-wider text-secondary font-medium uppercase leading-tight">International Mobility</span>
    </div>
    <!-- Nav: pill track -->
    <nav class="hidden xl:flex items-center gap-1 p-1 bg-surface-container/60 rounded-xl">
      <a class="px-3 py-2 text-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors" href="#">Overview</a>
      <a aria-current="page" class="px-3 py-2 text-xs bg-primary-container text-on-primary-container font-semibold rounded-lg" href="#">Europe 28+</a>
    </nav>
    <a class="hidden sm:inline-flex px-4 py-2.5 rounded-lg bg-primary text-on-primary text-xs font-semibold tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-all" href="#">Book a Consultation</a>
  </div>
</header>
```

### Buttons
| Variant | Classes |
|---|---|
| Primary | `px-4 py-2.5 rounded-lg bg-primary text-on-primary text-xs font-bold hover:bg-primary-container hover:text-on-primary-container transition-all` |
| Gold (on purple bg) | `px-5 py-3 rounded-lg bg-tertiary-container text-on-tertiary-container text-xs font-bold hover:bg-tertiary-fixed` |
| Tonal (on purple bg) | `px-5 py-3 rounded-lg bg-primary-container text-on-primary-container text-xs font-bold hover:bg-primary-fixed hover:text-on-primary-fixed` |
| Text link | `text-xs font-bold text-primary flex items-center gap-1 hover:underline` + `chevron_right` / `arrow_forward` icon |

Buttons with icons: `inline-flex items-center justify-center gap-2`. Full width on mobile: `w-full sm:w-auto`.

### Badges
- Priority: `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-tertiary-container text-on-tertiary-container` (High Demand, High Quota, Fast Track)
- Neutral: same, with `bg-surface-container-high text-on-surface-variant` (Moderate, Active, Selective)
- Solid on photo: `bg-tertiary text-on-tertiary px-2.5 py-1`
- Status pill: `text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full`
- Live dot: `w-2 h-2 rounded-full bg-primary animate-ping`

### Country / content card
```html
<article class="bg-surface-container-lowest rounded-xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
  <div class="space-y-3">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-2.5">
        <span class="text-3xl">🇳🇱</span>
        <div>
          <h3 class="font-bold text-base text-on-surface">Netherlands</h3>
          <span class="text-[11px] text-secondary font-medium">Programme name</span>
        </div>
      </div>
      <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-tertiary-container text-on-tertiary-container">High Demand</span>
    </div>
    <p class="text-xs text-on-surface-variant leading-relaxed">One–two sentence description.</p>
    <div class="bg-surface-container-low p-2.5 rounded-lg space-y-1.5">
      <div class="flex justify-between items-center text-[11px]">
        <span class="text-outline">Key Sectors:</span>
        <span class="font-semibold text-on-surface">Logistics, Tech</span>
      </div>
      <!-- Criteria row; optional Timeline row with value in text-secondary -->
    </div>
  </div>
  <div class="pt-4 mt-4 flex items-center justify-between">
    <a class="text-xs font-bold text-primary flex items-center gap-1" href="#">View Track <span class="material-symbols-outlined text-sm">chevron_right</span></a>
    <span class="text-[10px] text-outline">Western EU</span>
  </div>
</article>
```
**Flagship variant:** add `verified` icon after the name and make the subtitle `text-[11px] text-primary font-bold uppercase tracking-wider`; footer tag becomes a neutral badge.

### Stat tile
```html
<div class="bg-surface-container-lowest p-4 rounded-xl shadow-md flex items-center justify-between">
  <div>
    <div class="text-[10px] font-bold text-outline uppercase tracking-wider">Active Programs</div>
    <div class="text-2xl font-black text-on-surface">30 Territories</div>
  </div>
  <div class="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
    <span class="material-symbols-outlined">hub</span>
  </div>
</div>
```

### Metrics ribbon
Track: `grid grid-cols-2 md:grid-cols-4 gap-3 bg-surface-container-low p-3 rounded-xl`.
Item: `flex items-center gap-3 px-3 py-2` → icon `text-primary text-xl` + bold title + `text-outline text-[11px]` caption.

### Photo banner
`relative rounded-xl overflow-hidden min-h-[220px] shadow-lg flex items-end p-6 text-on-primary` with a background image, overlay `absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent`, content in `relative z-10 space-y-2`.

### Form controls
- Select / input: `w-full bg-surface-container-low text-xs font-medium text-on-surface px-3.5 py-3 rounded-lg focus:outline-none focus:bg-surface-container-high transition-colors` (no border — focus is shown by a darker fill)
- Search: same, plus `pl-10` with an absolutely-positioned `search` icon at `left-3.5`
- Field label: `text-xs font-bold uppercase tracking-wider text-on-surface-variant` with a numbered circle `w-5 h-5 bg-primary text-on-primary text-[10px] font-bold`

### Filter controls
- **Segmented pills** (region): track `bg-surface-container-low p-1.5 rounded-xl`; button `px-3 py-1.5 text-xs rounded-lg`; active `bg-primary text-on-primary font-semibold`; idle `font-medium text-on-surface-variant hover:text-on-surface`
- **Chips** (permit class): `px-3 py-1 rounded-md text-xs font-medium`; active `bg-secondary text-on-secondary`; idle `bg-surface-container hover:bg-surface-container-high text-on-surface-variant`
- Result counter: `ml-auto text-[11px] font-semibold text-secondary`
- Info banner: `bg-primary-fixed/60 text-on-primary-fixed-variant px-4 py-2.5 rounded-lg text-xs`

### Process step
`bg-surface-container-lowest p-5 rounded-xl shadow-md space-y-2` → number box `w-8 h-8 rounded-lg bg-primary text-on-primary text-xs font-bold` ("01") → `text-sm font-bold` title → `text-xs` body. Laid out in `grid sm:grid-cols-2 lg:grid-cols-4 gap-4`.

### CTA band
`rounded-xl bg-primary text-on-primary p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl`; supporting text in `text-primary-fixed`; gold primary button + tonal secondary button.

### Empty state
`flex flex-col items-center text-center gap-2 py-16 bg-surface-container-low rounded-xl` with a `text-4xl text-outline` icon, bold one-line title, muted hint, and a primary "Reset" button.

### Footer
`bg-inverse-surface text-inverse-on-surface`; 4-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs py-12`); column headings `text-[11px] font-bold uppercase tracking-wider text-inverse-primary`; links `text-surface-dim hover:text-inverse-on-surface`; bottom bar `border-t border-on-surface-variant/40 text-[11px] text-outline-variant`.

### Decorative background
Hero wrapper: `relative overflow-hidden bg-gradient-to-b from-surface-container-high/60 via-surface to-surface`, with blurred blobs:
`absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none` and `bg-tertiary-container/10`.

---

## 7. Interaction

- Transitions: `transition-all` / `transition-colors` (Tailwind default 150ms). No custom animation except `animate-ping` on live dots.
- Hover: cards lift (`shadow-md → shadow-xl`); primary buttons lighten to `primary-container`; links underline or shift to `primary-container`.
- Active state (nav, filters) is a **filled** background, never an underline.
- Filters are client-side: toggle `hidden` on cards via `data-*` attributes (`data-country`, `data-region`, `data-visa="a,b,c"`), then update a "Showing N" counter and show the empty state at 0.
- Internal links use `href="#"` + `data-path="page-slug"` for routing.

---

## 8. Responsive

- Mobile-first; breakpoints used: `sm` (640), `md` (768), `lg` (1024), `xl` (1280).
- Main nav is hidden below `xl`; the header CTA is hidden below `sm`.
- Grids step `1 → 2 → 3/4` columns; hero splits `lg:grid-cols-12` (8 + 4).
- Text scales one step up at `sm` (`text-xs sm:text-sm`).

---

## 9. Content & voice

- Headings: confident and short. Hero H1 in caps ("EUROPEAN OPPORTUNITIES"); taglines in tracked uppercase.
- Use official programme names (Kennismigrant, Chancenkarte, Red-White-Red Card) and authority acronyms (IND, SIRI, Migri).
- Always qualify outcomes: "subject to vacancies, employer eligibility and current rules". Never promise visas, jobs or fixed processing times.
- Every page ends with the disclaimer: the company is not a government body and decisions rest with the immigration authorities.

---

## 10. Accessibility notes

- `on-surface-variant` (#494551) on white passes WCAG AA comfortably. `outline` (#7a7582) is about 4.5:1 on white — right at the AA limit, and below it on lavender surfaces — so keep it for labels and metadata, and never use anything lighter for text.
- Gold `tertiary-container` is for fills only — put `on-tertiary-container` text on it, never white.
- Give the active nav link `aria-current="page"`; give icon-only elements a `title` or `aria-label`.
- Inputs remove the outline on focus — keep the darker focus fill so focus stays visible, or add `focus-visible:ring-2 ring-primary`.
