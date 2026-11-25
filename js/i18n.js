/* Andromeda — DE/EN translations. German is the source text in the HTML. */
(() => {
  "use strict";

  const STORAGE_KEY = "andromeda-lang";

  const EN = {
    /* shared */
    "nav.label": "Main",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "cta.start": "Start a project",
    "footer.address": "Limesstraße 12–14, 4060 Leonding, Upper Austria",
    "footer.copy": "© 2026 Andromeda JuniorCompany · custom websites & software, built to order",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "legal.country": "Austria",
    "legal.translationNote": "This is a translation. The German version is legally binding.",

    /* index */
    "index.title": "Andromeda · Custom Websites & Software",
    "index.description": "Andromeda designs and builds custom websites, web applications, and standalone software for businesses. From a single static page to full backend systems.",
    "hero.sub": "We design and build custom websites and software for businesses that have outgrown templates. One team, from first sketch to launch day — and still around when things need fixing.",
    "hero.secondary": "See website pricing",
    "services.title": "What we build",
    "services.lede": "Three ways companies usually need us. All of them start the same way: a conversation about the problem, not the solution.",
    "services.websites.title": "Websites",
    "services.websites.text": "Marketing sites, product pages, shops. Designed around how your customers actually move, not around page counts. Fast, legible, and yours to host anywhere.",
    "services.apps.title": "Web applications",
    "services.apps.text": "Portals, dashboards, customer areas. Software that does something when you click it, backed by data that belongs to you — with an admin side your team can use without asking us first.",
    "services.standalone.title": "Standalone programs",
    "services.standalone.text": "Automations, internal tools, one-off utilities. If a task repeats itself every week, it probably shouldn't be manual. We'll tell you straight if it needs software at all.",
    "process.title": "How a build runs",
    "process.lede": "Five steps. No black box, no disappearing acts, no big-reveal on the last day.",
    "process.scope.title": "Scope",
    "process.scope.text": "A short call about what's broken or missing. You get a fixed quote within five working days — a number, not a range with asterisks.",
    "process.design.title": "Design",
    "process.design.text": "You see a clickable prototype before any final code exists. Changes are cheap now and expensive later, so we spend the time here.",
    "process.build.title": "Build",
    "process.build.text": "Weekly demos while we work. You watch the thing take shape instead of waiting for a demo nobody prepared for.",
    "process.launch.title": "Launch",
    "process.launch.text": "We ship, monitor, and stay on the line for two weeks. No \"good luck, it's Friday\" deploys.",
    "process.support.title": "Support",
    "process.support.text": "Monthly care or ad-hoc, your call. Same team that built it, so nothing gets lost in a handover.",
    "pricing.title": "Website packages",
    "pricing.lede": "Three starting points, from a static page to a full backend. Every project starts with a call and ends with a fixed quote before any work begins.",
    "price.from": "from",
    "tier.landing.name": "Landing",
    "tier.landing.desc": "A static site in clean HTML and CSS. For showing up well without running anything.",
    "tier.landing.delivery": "delivery 1–2 weeks",
    "tier.landing.f1": "Up to four pages, hand-written markup",
    "tier.landing.f2": "Responsive down to small phones",
    "tier.landing.f3": "Fast by default, Lighthouse 95+ target",
    "tier.landing.f4": "On-page SEO basics and meta setup",
    "tier.landing.f5": "One revision round included",
    "tier.landing.f6": "Files handed over, host it anywhere",
    "tier.orbit.name": "Orbit",
    "tier.orbit.desc": "A dynamic site you can edit yourself, built to keep growing after launch.",
    "tier.orbit.delivery": "delivery 3–5 weeks",
    "tier.orbit.f1": "Everything in Landing, plus a real content layer",
    "tier.orbit.f2": "Add or edit pages without touching code",
    "tier.orbit.f3": "Blog, categories, and search",
    "tier.orbit.f4": "Multilingual ready",
    "tier.orbit.f5": "Forms wired to your inbox or CRM",
    "tier.orbit.f6": "Analytics, privacy-friendly tracking",
    "tier.deep.name": "Deep Field",
    "tier.deep.desc": "A web application with its own backend. For when the website is just the front door.",
    "tier.deep.delivery": "delivery 6–10 weeks",
    "tier.deep.f1": "Custom backend, database, auth and roles",
    "tier.deep.f2": "Integrations: APIs, payments, internal systems",
    "tier.deep.f3": "Admin area your team runs day to day",
    "tier.deep.f4": "Deployed on your cloud or ours",
    "tier.deep.f5": "Docs and a training session included",
    "tier.deep.f6": "14 days of post-launch support",
    "pricing.note": "Every package ships with source code, documentation, and ownership that is entirely yours.",
    "postlaunch.title": "After launch",
    "postlaunch.text": "14 days of support after delivery. Changes after that: price on request.",
    "custom.title": "Beyond the browser",
    "custom.lede": "Not every build needs a website. Andromeda also ships standalone software: data pipelines, process automations, desktop tools, one-off utilities. If a process keeps eating hours of your team's week, send it over — we'll tell you honestly whether it needs building at all, and if it does, we'll build it properly.",
    "contact.title": "Want custom software that isn't a website?",
    "contact.lede": "Send us the problem instead of a spec — a process that drags, a pipeline that breaks, a tool your team keeps wishing existed. A short call, a straight answer, and a number if it's worth doing.",

    /* imprint */
    "imprint.pageTitle": "Imprint · Andromeda",
    "imprint.title": "Imprint",
    "imprint.description": "Imprint and legal information for Andromeda JuniorCompany.",
    "imprint.eyebrow": "Legal",
    "imprint.intro": "Information according to § 5 of the Austrian E-Commerce Act (ECG).",
    "imprint.owner.title": "Media owner and operator",
    "imprint.legalFormLabel": "Legal form:",
    "imprint.responsible": "Responsible for content: Niklas Maurer",
    "imprint.contact.title": "Contact",
    "imprint.subject.title": "Business purpose",
    "imprint.subject.text": "Services in automatic data processing and information technology",
    "imprint.company.title": "Company details",
    "imprint.company.register": "Commercial register: not registered in the commercial register",
    "imprint.company.authority": "Supervisory authority: none",
    "imprint.dispute.title": "Consumer dispute resolution",
    "imprint.dispute.text": "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    "imprint.liability.title": "Liability for content",
    "imprint.liability.text": "The content on this website has been created with the greatest possible care. However, we cannot guarantee that it is accurate, complete or up to date. As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) ECG and general law. Under §§ 8 to 10 ECG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. However, liability in this respect is only possible from the time we become aware of a specific legal violation. If we become aware of any such legal violations, we will remove the content immediately.",
    "imprint.links.title": "Liability for links",
    "imprint.links.text": "Our website contains links to external third-party websites. We have no influence over their content and therefore cannot accept any liability for it. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking. However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.",
    "imprint.copyright.title": "Copyright",
    "imprint.copyright.text": "The content and works created by the site operators on these pages are subject to Austrian copyright law. Duplication, processing, distribution and any form of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any legal violations, we will remove such content immediately.",
    "imprint.updated": "Last updated: November 2026",

    /* privacy */
    "privacy.pageTitle": "Privacy · Andromeda",
    "privacy.title": "Privacy Policy",
    "privacy.description": "Privacy policy for the Andromeda JuniorCompany website.",
    "privacy.eyebrow": "Legal",
    "privacy.intro": "This website processes personal data only to the extent described below. No cookies are used for analytics or marketing purposes.",
    "privacy.controller.title": "Controller",
    "privacy.emailLabel": "Email",
    "privacy.phoneLabel": "Phone",
    "privacy.hosting.title": "Hosting",
    "privacy.hosting.p1": "This website is hosted via GitHub Pages. The provider is GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When the website is accessed, GitHub processes technical access data, in particular the IP address, date and time of access, the page accessed, browser type and operating system. This data is required for the secure and stable operation of the website.",
    "privacy.hosting.p2": "The legal basis is our legitimate interest in the secure provision of the website pursuant to Art. 6 (1) (f) GDPR. GitHub may transfer data to the USA. For more information, see the",
    "privacy.storage.title": "Local storage of the language setting",
    "privacy.storage.text": "The language you select is stored in your browser's localStorage. This information remains on your device and is not transmitted to us. You can delete it at any time via your browser settings. The legal basis is our legitimate interest in a user-friendly presentation pursuant to Art. 6 (1) (f) GDPR.",
    "privacy.cookies.title": "Cookies and tracking",
    "privacy.cookies.text": "This website does not use cookies or any analytics, advertising or tracking services. The fonts used are loaded from our own web server; no fonts are retrieved from Google servers.",
    "privacy.contact.title": "Contacting us",
    "privacy.contact.text": "If you contact us by email or telephone, we process the data you provide (name, email address, telephone number and the content of your request) in order to process your request. The legal basis is Art. 6 (1) (b) GDPR if the request is aimed at a contract or the initiation of a contract, and otherwise Art. 6 (1) (f) GDPR. Your contact data will not be passed on to third parties unless this is necessary to process your request or we are legally obliged to do so.",
    "privacy.contact.provision": "Providing this data is neither legally nor contractually required. Without your information, however, we cannot process your request.",
    "privacy.retention.title": "Retention period",
    "privacy.retention.text": "We store your request only for as long as is necessary to process it, or for as long as statutory retention obligations apply. After that, the data is deleted.",
    "privacy.rights.title": "Your rights",
    "privacy.rights.text": "You have the right to information about the data stored about you, as well as the right to rectification, erasure, restriction of processing, data portability and objection to processing. Where processing is based on consent, you can withdraw it at any time.",
    "privacy.rights.complaint": "You also have the right to lodge a complaint with the Austrian Data Protection Authority, Barichgasse 40–42, 1030 Vienna,",
    "privacy.automated.title": "No automated decision-making",
    "privacy.automated.text": "No automated decision-making, including profiling, takes place.",
    "privacy.changes.title": "Changes",
    "privacy.changes.text": "We reserve the right to adapt this privacy policy if the website or the legal requirements change. The version published on this page applies.",
    "privacy.updated": "Last updated: November 2026"
  };

  const textEls = Array.from(document.querySelectorAll("[data-i18n]"));
  const contentEls = Array.from(document.querySelectorAll("[data-i18n-content]"));
  const ariaEls = Array.from(document.querySelectorAll("[data-i18n-aria-label]"));

  const originalText = new Map(textEls.map((el) => [el, el.textContent]));
  const originalContent = new Map(contentEls.map((el) => [el, el.getAttribute("content") || ""]));
  const originalAria = new Map(ariaEls.map((el) => [el, el.getAttribute("aria-label") || ""]));

  const readLang = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "de";
    } catch {
      return "de";
    }
  };

  const apply = (next) => {
    const lang = next === "en" ? "en" : "de";
    document.documentElement.lang = lang;

    for (const el of textEls) {
      const key = el.dataset.i18n;
      el.textContent = lang === "en" ? (EN[key] ?? originalText.get(el)) : originalText.get(el);
    }
    for (const el of contentEls) {
      const key = el.dataset.i18nContent;
      el.setAttribute("content", lang === "en" ? (EN[key] ?? originalContent.get(el)) : originalContent.get(el));
    }
    for (const el of ariaEls) {
      const key = el.dataset.i18nAriaLabel;
      el.setAttribute("aria-label", lang === "en" ? (EN[key] ?? originalAria.get(el)) : originalAria.get(el));
    }

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage can be unavailable; the page still works for this visit */
    }

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  };

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  apply(readLang());
})();
