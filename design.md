# DEVOPS ACADEMY — Design

Public Russian-language marketing site for DEVOPS ACADEMY. Dark, technical, cinematic, restrained. The site sells and routes visitors to two existing student portals; it has no auth, no database, no checkout.

## Palette

| Token | Hex | Use |
|---|---|---|
| ink | #070B14 | Page background |
| ink-2 | #0B1220 | Cards, secondary sections |
| brand | #0F47AD | Primary button fill |
| electric | #3B82F6 | Links, system-administration accent, lines |
| cyan | #22D3EE | Focus rings, eyebrow labels, active states |
| violet | #8B5CF6 | AI for Life accent |
| fg | #F8FAFC | Primary text |
| mute | #94A3B8 | Secondary text |

Hairlines: `rgba(148,163,184,.14)`. Gradients are limited to the hero glow and course visuals.

## Typography

- Display: Unbounded (700), uppercase headlines.
- Body: Manrope (400/500/600/700).
- Labels and eyebrows: JetBrains Mono, 12px, uppercase, letter-spacing .14em.
- Headline scale: `clamp(1.75rem, 4.2vw, 3.5rem)`. Body 16–18px, line-height 1.6.

## Spacing and shape

- Section padding: 96px desktop, 72px mobile. Container max-width 1280px, 20px side padding (32px at lg).
- Radii: 8px buttons, 14px cards.
- Touch targets: minimum 44–48px.

## Motion

- Hero: one GSAP timeline (eyebrow, headline words, text, buttons, visual). No intro delay beyond ~1.2s total.
- Reveals: `[data-reveal]` fades and lifts once on scroll (ScrollTrigger, `once`).
- Parallax: `[data-parallax]` scrubbed transform, desktop with fine pointer only.
- Journey: scrubbed progress line plus `is-current` toggle. Native scroll is never hijacked.
- Hover/focus: CSS transitions, 250–500ms, ease-out.
- `prefers-reduced-motion: reduce` disables all GSAP motion and the canvas animation (a single static frame is drawn).

## Sections (in order)

1. Header — wordmark, anchor links, "Выбрать курс", mobile menu with Escape and focus return.
2. Hero — eyebrow, headline, copy, CTAs, canvas node network with pointer tilt.
3. Intro (`#about`) — three learning principles.
4. Courses (`#courses`) — cards generated from `data/courses.ts`.
5. Platform (`#learning`) — illustrative mockups, then the portal options (`#portals`).
6. Journey — ОБУЧЕНИЕ → ПРАКТИКА → ПРОЕКТЫ → РАЗВИТИЕ.
7. Why (`#why`) — numbered rows, sticky headline.
8. Pricing (`#pricing`) — 500 / 250 сомони, course selector, link to the chosen course page.
9. FAQ (`#faq`) — native `details` accordion.
10. Final CTA and footer.

## Anti-patterns avoided

No generic card grids of identical icons, no purple-on-white, no glassmorphism, no invented statistics, testimonials, prices, or accreditations.
