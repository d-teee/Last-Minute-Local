# Handoff: Last Minute Local — Marketing Landing Page

## Overview
A public marketing/waitlist landing page for Last Minute Local, a real-time last-minute deals platform connecting independent local businesses (barbers, studios, restaurants, retail) with nearby customers. The page explains why the product exists, how it works for both customers and businesses, the AI-driven reverse-surge pricing mechanic, and collects pre-launch waitlist signups from both customers and business owners. First launch market is Brighton, UK.

## About the Design Files
The bundled file (`Last Minute Local Landing Page.html`) is a **design reference built in HTML/CSS/vanilla JS** — a high-fidelity prototype of the intended look, copy, and interaction, not production code to ship as-is. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Next.js, etc.) using its established component patterns, styling approach, and form/data-handling conventions — or, if no frontend environment exists yet, to choose the most appropriate framework and implement the design there.

The waitlist form in the prototype currently just writes signups to `localStorage` client-side as a placeholder — it has **no real backend**. The developer needs to wire it to an actual data store / email service (see State Management below).

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and layout are final/near-final. Recreate pixel-close using the codebase's existing design system/component library if one exists; otherwise the design tokens below define the system.

## Screens / Views
This is a single scrolling page with the following sections, in order:

### 1. Nav (sticky header)
- Sticky, `top: 0`, `z-index: 40`, translucent white background (`rgba(255,255,255,0.85)`) with `backdrop-filter: blur(14px) saturate(1.1)`, 1px bottom border `rgba(44,44,44,0.06)`.
- Max-width 1160px inner container, `padding: 18px 32px`, flex row, `justify-content: space-between`.
- Left: logo mark (SVG pin/location shape with a clock icon inside, teal fill) + wordmark "Last Minute Local", 19px/800 weight.
- Center/right: nav links — "Why we exist" (#why), "The AI" (#ai), "How it works" (#how), "For business" (#business) — 15px/600, grey, hover to ink. Hidden below 900px.
- Right: primary CTA button "Join the waitlist" linking to `#waitlist`.

### 2. Hero
- Padding `96px 0 60px`. Two-column grid (1.05fr / 0.95fr), gap 60px, centered vertically. Stacks to 1 column under 900px.
- Left column:
  - Small pill badge: "● Launching first in Brighton, UK" — teal-tinted background, teal-deep text, pulsing dot animation (`@keyframes pulse`, 2s infinite box-shadow ring).
  - H1, 66px/800, line-height 1.03, letter-spacing -0.03em, max-width 12ch: "Local deals that find you **before they're gone.**" (the italic/emphasis span is colored teal-dark, not italic style).
  - Subhead, 21px/500, grey, max-width 42ch: "Last Minute Local pushes real-time discounts from nearby shops, salons and restaurants straight to your phone, the moment they need filling."
  - Two CTA buttons: "Get early access" (filled teal, primary) and "List your business" (ghost/outline) — both scroll to `#waitlist` and pre-select the matching waitlist tab via `selectAudience('customer'|'business')`.
  - Small note below CTAs, 14px grey: "Free to join. No commitment. We'll email you the day we go live near you."
- Right column: phone mockup (see Assets/Components below) showing a live "nearby deals" app screen with a floating notification banner and a floating "saved" toast overlapping the phone bezel for visual depth.

### 3. Why we exist (`#why`, light grey `--surface` background)
- Section head: eyebrow "Why we exist", H2 (42px/800): "Independent businesses lose money every single hour, quietly.", supporting paragraph about unfilled slots losing value the instant they pass.
- 2×2 grid of white cards (`border-radius: 20px`, subtle border, 32px padding), each with a small 46×46 teal-tinted icon square (simple line-art SVG icon), a 19px/700 heading, and a 15.5px grey body paragraph. Four cards:
  1. "Time-bound inventory has no second chance"
  2. "Small businesses can't compete on visibility"
  3. "Customers want spontaneity, not spam"
  4. "The gap has simply never been filled"

### 4. The AI (`#ai`, `--surface` background)
- Two-column grid (1fr/1fr, gap 64px), stacks under 900px.
- Left: eyebrow "The AI", H2 (38px/800): "Our AI sets the price. Not guesswork, not panic.", paragraph explaining the reverse-surge pricing mechanic (discount rises in real time as a slot nears expiry; retailer sets a floor the AI never crosses). Three pill tags below: "Retailer sets the floor", "Repriced in real time", "Zero manual work".
- Right: a "surge" visual — a white rounded card containing a vertical timeline (2px gradient line from teal-tint to red) with 4 stages, each a 3-column row (time label / dot / percentage):
  1. "2 hrs left" → "10% off" (teal dot)
  2. "45 min left" → "25% off" (teal dot)
  3. "15 min left" → "40% off" (teal dot)
  4. "Last call" → "55% off" (red dot + red text, `.urgent` variant)

### 5. How it works (`#how`)
- Centered section head: eyebrow "How it works", H2: "Live in a minute. Claimed in a tap."
- Toggle control (pill segmented control, dark active state) switching between "For customers" and "For business" — toggles visibility of two 3-column grids of step cards via JS (`showSteps()`).
- Each step card: white background, rounded 20px, subtle shadow, a 150px photo thumbnail at the top (full-bleed, `object-fit: cover`), then body padding with a small 40×40 rounded-square numbered badge (teal-tint bg, teal-deep text), a 20px/700 heading, and a 15.5px grey paragraph.
- Customer steps: "Browse locally" / "Tap to claim" / "Redeem & go".
- Business steps: "Snap a photo" / "Set your floor" / "Go live".

### 6. For business owners (`#business`, `--surface` background)
- Section head: eyebrow "For business owners", H2: "Fill the chair. Save the sale. Free to join.", supporting paragraph.
- 3-column grid of value cards (same visual style as the "why" cards — icon square, heading, paragraph), no pricing figures shown:
  1. "Free to list, always"
  2. "Reach real local demand"
  3. "AI protects your margin"

### 7. Waitlist (`#waitlist`)
- Dark card (`--ink` background, 28px border-radius, 64px padding, radial teal glow decoration top-right, `overflow: hidden`).
- Heading block: eyebrow "Join the waitlist" (teal), H2 (38px/800, white): "Be first in line when we go live.", supporting paragraph (white/70%).
- Segmented toggle: "I'm a customer" / "I'm a business" (dark pill control, teal active state) — switches which form is visible.
- **Customer form**: email input + UK postcode input (placeholder "UK postcode, e.g. BN1 1AA"), submit button "Get early access", fine print about being free/unsubscribe.
- **Business form**: business name input + business-type select (Hair & beauty / Fitness & wellness / Restaurant & café / Retail & boutique / Other services), then email + UK postcode inputs, submit button "List your business", fine print.
- Both forms validate the postcode client-side against a UK postcode regex before allowing submit, showing an inline red error message and red input border if invalid.
- On successful submit: the active form is hidden and a success panel appears (teal-tinted bordered box, checkmark icon, "You're on the list." + a kind-specific confirmation line).
- Below the form: a subtle single line of muted text — "Investor or potential partner? **Get in touch**." — the link is a `mailto:` link with a pre-filled subject.

### 8. Footer
- Logo + wordmark, `© 2026 Last Minute Local. Made for the high street.`, and repeated nav links (Why we exist / How it works / Join waitlist). Simple flex row, wraps on small screens, top border.

## Interactions & Behavior
- **Smooth scroll**: `html { scroll-behavior: smooth }` for all in-page anchor links.
- **Toggle: How it works** — `showSteps('customer'|'business', btn)` toggles an `.active` class on the clicked toggle button and shows/hides the matching `.step-panel`.
- **Toggle: Waitlist audience** — `switchWaitlist('customer'|'business')` toggles active states on both toggle buttons and both forms (uses both a class and an inline `display` toggle), and hides any previously-shown success panel.
- **Hero CTA pre-selection** — clicking "Get early access" or "List your business" in the hero calls `selectAudience()` which calls `switchWaitlist()` before the smooth-scroll anchor navigates, so the visitor lands on the correct pre-selected tab.
- **Form submit** — `submitWaitlist(event, kind)`:
  1. Prevents default submit.
  2. For both customer and business forms, validates the postcode field against `/^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i`. If invalid, adds an `.invalid` class to the input, shows the paired `.wl-error` message, focuses the field, and aborts submit.
  3. On valid submit, serializes form data via `FormData`, appends `{ kind, ...data, ts: Date.now() }` to a JSON array in `localStorage` under key `lml_waitlist_signups` (**placeholder only — replace with a real API call / CRM / email-capture service**).
  4. Hides both forms, shows the success panel with a kind-specific message (business message includes the entered business name).
- **Pulsing dot animations** — the hero "Launching first in Brighton" badge dot and the floating notification banner dot both use the same `@keyframes pulse` (box-shadow ring expanding/fading, 2s loop). Respect `prefers-reduced-motion` if the target codebase has a global convention for this (the prototype does not currently gate it, since it's a subtle looping micro-animation rather than an entrance animation).
- **Responsive** — single breakpoint at `900px`: hero/AI/why grids collapse to 1 column, step cards collapse to 1 column, nav links hide, waitlist card padding shrinks, floating hero banner/toast reposition inward so they don't overflow the viewport.

## State Management
- No real backend today. All state is local component/DOM state (which tab/toggle is active) plus a `localStorage` array as a stand-in for persisted signups.
- For production: replace the `localStorage.setItem` call with a real submission (REST/GraphQL endpoint, or a third-party waitlist/email tool), including server-side validation of postcode/email and duplicate-signup handling. Decide whether customer vs. business signups go to the same table with a `kind` discriminator (as modeled here) or separate tables.
- Success/error UI state (form vs. success panel, invalid-field state) should become proper component state (e.g. `useState` in React) rather than direct classList/style manipulation.

## Design Tokens

### Colors
- `--teal: #3DBFA0` (primary brand)
- `--teal-dark: #2A9E82` (hover/darker accent)
- `--teal-deep: #1F7E68` (deepest accent, icon/text on tint)
- `--teal-tint: #E6F5F0` (light backgrounds for icons/badges)
- `--bg: #FFFFFF`
- `--surface: #F7F9F8` (alternating section background)
- `--ink: #2C2C2C` (primary text / dark surfaces)
- `--grey: #6B7280` (secondary text)
- `--grey-light: #D1D5DB` (borders)
- `--amber: #F59E0B` (deal timer accent)
- `--red: #EF4444` (urgency accent)

### Typography
- Font family: `'Inter'` (400/500/600/700/800/900) with `'JetBrains Mono'` (500/700) for numeric/timer displays, loaded from Google Fonts.
- Hero H1: 66px / weight 800 / line-height 1.03 / letter-spacing -0.03em (46px on mobile).
- Section H2: 42px (or 38px in AI/waitlist) / weight 800 / letter-spacing -0.025em (32px on mobile).
- Section subhead paragraph: 19px / weight 500 / grey.
- Card heading: 19–20px / weight 700.
- Card body: 15.5px / grey.
- Eyebrow label: 14px / weight 700 / letter-spacing 0.14em / uppercase / teal-deep.

### Spacing / Shape
- Page content max-width: 1160px, horizontal padding 32px.
- Section vertical padding: 108px (`.section-pad`).
- Card border-radius: 20px (content cards), 16px (deal cards), 999px (pills/buttons/badges).
- Shadow (card): `0 24px 48px -20px rgba(31,126,104,0.18), 0 4px 12px rgba(44,44,44,0.06)`.

## Assets
- **Logo mark**: inline SVG, a rounded pin/teardrop shape (teal fill) with a white circle and a simple clock-hands glyph inside — hand-drawn as vector paths in the prototype (see `<svg viewBox="0 0 100 120">` in the header/footer). Should be recreated as a proper brand asset/icon component, not copy-pasted inline SVG, if the codebase has an icon system.
- **Photography**: Unsplash stock photos used as placeholders for barber/yoga/restaurant/retail imagery (phone deal cards, how-it-works step thumbnails). These are placeholder imagery only — replace with real product/brand photography before production. Unsplash URLs are referenced directly via `<img src>` in the HTML; there is no local asset folder.
- **Icons**: all section icons (why-cards, business value cards) are simple inline line-art SVGs (circles/paths), no icon library dependency.

## Files
- `Last Minute Local Landing Page.html` — the full page (HTML + embedded `<style>` + embedded `<script>`), self-contained except for the Google Fonts link and Unsplash image URLs.
