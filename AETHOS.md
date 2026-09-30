# Andromeda website

Single-page marketing site for "Andromeda", a studio selling custom websites and software to businesses. Space-themed, dark, vanilla HTML/CSS/JS front end served by a minimal Express server. No build step on the front end.

## Files

- `index.html` — full page markup (hero, services, process, pricing incl. hosting add-on note, beyond-web, contact, footer) + mobile nav toggle button
- `css/main.css` — all styling: palette tokens, panels, 3D console buttons, hidden scrollbar, responsive incl. mobile dropdown menu, reduced-motion rules
- `js/main.js` — canvas starfield (3 depth layers, per-layer parallax + continuous drift + twinkle), nebula parallax, scroll reveals, header state, mobile nav open/close
- `server.js` — Express static server; unknown paths fall back to index.html; PORT env, default 4173
- `package.json` / `package-lock.json` — express ^5.2.1, `npm start` runs the server
- `Dockerfile` — node:22-alpine, npm ci --omit=dev, non-root user, EXPOSE 4173, wget healthcheck
- `docker-compose.yml` — maps host 4173 → container 4173, restart unless-stopped
- `.dockerignore`, `.gitignore`

## Run

Local (needs Node):

    npm install
    npm start            # http://127.0.0.1:4173

Docker (no Node needed):

    docker compose up --build
    # http://127.0.0.1:4173
    # stop with: docker compose down

Any other static server also works since the front end is fully static.

## Design decisions

- Background: fixed canvas starfield behind everything. Each of the 3 layers scrolls slower than the page (parallax factors 0.05 / 0.12 / 0.22) and drifts sideways on its own. Soft nebula gradients + faint Milky Way band in a CSS layer that parallaxes at 0.045. Respects `prefers-reduced-motion` (static frame, no loop).
- Type: Unbounded (display), Space Grotesk (body), Space Mono (telemetry only: delivery times, coordinates). Google Fonts CDN.
- Buttons: gray ramp with beveled top highlight, hard bottom edge, presses down 3px on :active. Primary variant adds a cyan rim glow.
- Pricing tiers: Landing (€400, static HTML/CSS), Orbit (€600, dynamic site, featured), Deep Field (€1,000, backend app). Hosting is not included anywhere: Andromeda doesn't host anyone's site, but offers a €50 flat add-on to set it up on a Hetzner node.
- No client quotes or case studies: the studio has no shipped clients yet, so nothing is invented (removed in session 3).
- Scrollbar is hidden (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`); scrolling still works normally.
- Mobile (≤820px): header CTA stays inline, hamburger button (44px touch target, bars animate to X) opens a full-width dropdown panel under the fixed header. Closes on link click, Escape, outside click, or resize past 820px; aria-expanded/label kept in sync. ≤560px: CTA and logo shrink so the header fits 320px.
- `?capture=1` query param forces all scroll-reveals visible (used for headless screenshots, harmless otherwise).

## Current state

Session 2 (30 Sep 2026): Express server + package.json, Dockerfile + docker compose (verified: image builds, container healthy, all routes serve 200), hidden scrollbar, working mobile nav menu.
Session 3 (30 Sep 2026): removed the client quote (no clients yet), repriced to €400 / €600 / €1,000, retitled contact section to "Want custom software that isn't a website?", added €50 Hetzner hosting add-on note below pricing.

Ideas not yet done (only if asked): real contact form, case studies and client quotes once there are actual clients.
