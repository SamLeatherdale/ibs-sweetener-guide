# IBS Sweetener Guide

A mobile-first reference app for IBS sufferers to quickly look up whether a sweetener (by name, E number, or alias) is safe, a caution, or a known IBS trigger — based on FSANZ and Monash University FODMAP guidelines.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Component Primitives | Radix UI (via shadcn/ui) |
| Icons | Lucide React |
| Theme Switching | next-themes |
| Analytics | Vercel Analytics |
| Package Manager | pnpm |

---

## Project Requirements

### Data & Content

- Sweetener data is statically defined in `src/data/sweeteners.ts` with full TypeScript types (`src/types/index.ts`)
- Each sweetener has: name, E number/code, aliases, type (Natural / Artificial / Sugar Alcohol), IBS status (Safe / Caution / Trigger), a short description, IBS-specific advice, and optionally a daily limit and notes
- Data is based on FSANZ and Monash University FODMAP guidelines
- A disclaimer ("Not medical advice — consult a dietitian") appears on both the list page footer and each individual sweetener detail page

### Routing & Navigation

- The list view is the home page (`/`)
- Each sweetener has its own dedicated page at `/sweetener/[id]`, generated as static pages at build time via `generateStaticParams`
- Navigation uses Next.js `<Link>` for true SPA transitions, enabling browser back/forward buttons and OS-level swipe-back gestures (iOS Safari, Android)
- Each detail page has its own `generateMetadata` for SEO (unique title and description per sweetener)

### List Page

- Sticky header with app title, `Salad` icon, and a theme toggle (Light / System / Dark)
- Live search bar filtering by sweetener name, E number, and known aliases
- Default sort order: E number ascending (e.g. E950, E951, E952...)
- Two rows of single-select radio-style filter chips:
  - **Row 1 — IBS Safety:** Safe (green), Caution (orange), Trigger (red) — with `ShieldCheck`, `AlertTriangle`, `ShieldX` icons
  - **Row 2 — Type:** Natural (emerald), Artificial (sky), Sugar Alcohol (violet) — with `Leaf`, `FlaskConical`, `Droplets` icons
  - Selecting a chip within a row replaces the previous selection (not additive); safety and type filters are independent and can both be active simultaneously
  - Tapping an active chip deselects it (returns to "all")
- Footer disclaimer text beneath the list

### Detail Page

- Back navigation to the list
- Large E number badge, sweetener name, type pill, and IBS status badge (colour-coded)
- IBS advice banner with status-specific colour and icon
- Sections for: description, aliases, daily limit (if applicable), and additional notes
- Footer disclaimer text

### Theming & Appearance

- Medical-Lite design: clean white/cool-slate backgrounds, teal primary (`oklch(0.52 0.12 195)`)
- Three-colour IBS status system: Safe = `#22c55e`, Caution = `#f97316`, Trigger = `#ef4444`
- Type badge colours: Natural = emerald, Artificial = sky, Sugar Alcohol = violet
- Full dark mode support with matching cool-slate dark palette
- System theme auto-detection on first load; user preference persisted via `next-themes`
- Mobile-first, responsive layout with no horizontal scrolling

### Accessibility

- `role="radiogroup"` on filter chip rows with `aria-checked` on each chip
- `aria-label` on search input, card links, and filter groups
- Keyboard-navigable (focus rings, Escape to close where applicable)
- `suppressHydrationWarning` on `<html>` to prevent theme flash
