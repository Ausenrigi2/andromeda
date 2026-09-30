# Andromeda website

Single-page marketing site for "Andromeda", a studio selling custom websites and software to businesses. Space-themed, dark, vanilla HTML/CSS/JS, no build step.

## Files

- `index.html` — full page markup (hero, services, process, pricing, beyond-web, quote, contact, footer)
- `css/main.css` — all styling: palette tokens, panels, 3D console buttons, responsive, reduced-motion rules
- `js/main.js` — canvas starfield (3 depth layers, per-layer parallax + continuous drift + twinkle), nebula parallax, scroll reveals, header state

## Run

Any static server works, e.g. from this directory:

    python3 -m http.server 4173

then open http://127.0.0.1:4173/index.html.

## Design decisions

- Background: fixed canvas starfield behind everything. Each of the 3 layers scrolls slower than the page (parallax factors 0.05 / 0.12 / 0.22) and drifts sideways on its own. Soft nebula gradients + faint Milky Way band in a CSS layer that parallaxes at 0.045. Respects `prefers-reduced-motion` (static frame, no loop).
- Type: Unbounded (display), Space Grotesk (body), Space Mono (telemetry only: delivery times, coordinates). Google Fonts CDN.
- Buttons: gray ramp with beveled top highlight, hard bottom edge, presses down 3px on :active. Primary variant adds a cyan rim glow.
- Pricing tiers: Landing ($2,400, static HTML/CSS), Orbit ($6,900, dynamic site, featured), Deep Field ($16,000, backend app).
- `?capture=1` query param forces all scroll-reveals visible (used for headless screenshots, harmless otherwise).
- Scrollbar styled dark via webkit pseudo-elements.

## Current state

Complete as of initial build (30 Sep 2026). Screenshotted section by section via headless Brave + CDP; hero, services, process, pricing, contact, footer all verified.

Ideas not yet done (only if asked): mobile hamburger menu (nav links currently hidden under 820px), real contact form, more client quotes, per-tier case studies.
