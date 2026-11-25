# Andromeda

Statische Website für Andromeda JuniorCompany. Nur HTML, CSS und Vanilla JS – kein Backend, kein Build-Schritt.

## Struktur

- `index.html` – Startseite (Deutsch, Englisch per DE | EN)
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutzerklärung
- `404.html` – leitet fehlende Seiten automatisch zur Startseite weiter
- `css/main.css` – Layout und selbst gehostete Schriften
- `js/i18n.js` – Übersetzungen und Sprachumschaltung (`localStorage`)
- `js/main.js` – Sternenfeld, Scroll-Reveals, Navigation
- `fonts/` – lokale WOFF2-Dateien plus OFL-Lizenzen
- `CNAME`, `.nojekyll` – GitHub-Pages-Konfiguration

## Lokal ansehen

Kein Node oder Docker nötig:

    python -m http.server 8000

Dann <http://localhost:8000> öffnen.

## GitHub Pages

1. Änderungen auf `main` pushen.
2. Im Repository: **Settings → Pages**.
3. Unter **Build and deployment**: Source **Deploy from a branch**, Branch `main`, Ordner `/ (root)`, **Save**.
4. GitHub Pages ist bei privaten Repositories nur mit einem kostenpflichtigen GitHub-Plan verfügbar. Falls das Repository privat ist und Pages nicht angeboten wird: Repository öffentlich stellen oder Plan upgraden.
5. Unter **Custom domain** `andromeda-dev.space` eintragen (steht bereits in `CNAME`) und speichern.
6. DNS beim Domain-Anbieter:
   - Apex `andromeda-dev.space`: A-Records auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional IPv6: AAAA auf `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www`: CNAME auf `<dein-github-name>.github.io`
7. Nach der DNS-Prüfung **Enforce HTTPS** aktivieren.

## Hinweise

- Vor dem Livegang `[RECHTSFORM]` in `index.html` und `impressum.html` durch die tatsächliche Rechtsform ersetzen.
- E-Mail-Adressen sind im Quelltext als HTML-Entitäten hinterlegt, damit sie nicht im Klartext auftauchen.
- Die Schriften Unbounded, Space Grotesk und Space Mono liegen lokal in `fonts/`; die Lizenzen stehen daneben.
- Die 404-Seite nutzt einen relativen Redirect, damit sie auch bei fehlenden Unterpfaden zur Startseite führt.
