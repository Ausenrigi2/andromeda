/* Andromeda — DE/EN translations. German is the source text in the HTML. */
(() => {
  "use strict";

  const STORAGE_KEY = "andromeda-lang";

  const EN = {
    /* shared */
    "nav.label": "Main",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.pricing": "Packages",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "skip.link": "Skip to content",
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
    "hero.sub": "We build custom websites and software for businesses that have outgrown templates. One team from first sketch to launch, and still around when something needs fixing.",
    "hero.secondary": "See website packages",
    "services.title": "What we build",
    "services.lede": "Companies usually come to us with one of three needs. It always starts with a conversation about the problem, not the solution.",
    "services.websites.title": "Websites",
    "services.websites.text": "Company sites, product pages, shops. Built around how your customers actually move through the site. Fast, easy to read, and you can host it wherever you like.",
    "services.apps.title": "Web applications",
    "services.apps.text": "Portals, dashboards, customer areas. The data is yours, and your team manages everything in the admin area without having to ask us.",
    "services.standalone.title": "Standalone programs",
    "services.standalone.text": "Automations, internal tools, small utilities. If your team does the same task by hand every week, a program is often worth it. If it isn't, we'll say so.",
    "process.title": "How a build runs",
    "process.lede": "Five steps. You always know where we stand, and there's no surprise on the last day.",
    "process.scope.title": "Scope",
    "process.scope.text": "A short call about what's broken or missing. Within five working days you get a fixed quote: one number, not a range with asterisks.",
    "process.design.title": "Design",
    "process.design.text": "You see a clickable prototype before we write the final code. Changes are cheap now and expensive later, so we take our time here.",
    "process.build.title": "Build",
    "process.build.text": "We show you the current state every week while we work. You watch the project grow instead of waiting for a final presentation.",
    "process.launch.title": "Launch",
    "process.launch.text": "We ship, monitor, and stay on the line for two weeks. No \"good luck, it's Friday\" deploys.",
    "process.support.title": "Support",
    "process.support.text": "Monthly care or on request, however you prefer. It stays the team that built it, so nothing gets lost in a handover.",
    "pricing.title": "Website packages",
    "pricing.lede": "Three starting points, from a static page to an application with its own backend. First we talk, then you get a fixed quote, and only then do we start.",
    "price.from": "from",
    "tier.landing.name": "Landing",
    "tier.landing.desc": "A static site in clean HTML and CSS. You're visible online and have nothing to run.",
    "tier.landing.delivery": "delivery 1–2 weeks",
    "tier.landing.f1": "Up to four pages, hand-written markup",
    "tier.landing.f2": "Works on small phones too",
    "tier.landing.f3": "Fast out of the box, Lighthouse score of 95+ as the target",
    "tier.landing.f4": "On-page SEO basics and meta setup",
    "tier.landing.f5": "One revision round included",
    "tier.landing.f6": "Files handed over, host it anywhere",
    "tier.orbit.name": "Orbit",
    "tier.orbit.desc": "A dynamic site you can maintain and extend yourself after launch.",
    "tier.orbit.delivery": "delivery 3–5 weeks",
    "tier.orbit.f1": "Everything in Landing, plus content management",
    "tier.orbit.f2": "Add or edit pages without touching code",
    "tier.orbit.f3": "Blog, categories, and search",
    "tier.orbit.f4": "Multilingual ready",
    "tier.orbit.f5": "Forms wired to your inbox or CRM",
    "tier.orbit.f6": "Analytics with privacy-friendly tracking",
    "tier.deep.name": "Deep Field",
    "tier.deep.desc": "A web application with its own backend, for when the website is only the entry point.",
    "tier.deep.delivery": "delivery 6–10 weeks",
    "tier.deep.f1": "Custom backend, database, auth and roles",
    "tier.deep.f2": "Integrations: APIs, payments, internal systems",
    "tier.deep.f3": "Admin area your team runs day to day",
    "tier.deep.f4": "Deployed on your cloud or ours",
    "tier.deep.f5": "Docs and a training session included",
    "tier.deep.f6": "14 days of post-launch support",
    "pricing.note": "With every package, the source code, documentation and all rights are yours.",
    "pricing.contactLink": "Questions about the packages? Get in touch",
    "postlaunch.title": "After launch",
    "postlaunch.text": "Changes after that: price on request.",
    "custom.title": "Beyond the browser",
    "custom.lede": "Not every project needs a website. If a process costs your team hours every week, send it over. We'll tell you honestly whether it needs building, and if it does, we'll build it properly.",
    "contact.title": "Contact",
    "contact.lede": "Send us the problem instead of a spec: a process that drags, a pipeline that breaks, a tool your team has wanted for a long time. A short call, a straight answer, and a number if it's worth doing.",

    /* imprint */
    "imprint.pageTitle": "Imprint · Andromeda",
    "imprint.title": "Imprint",
    "imprint.description": "Imprint and legal information for Andromeda JuniorCompany.",
    "imprint.eyebrow": "Legal",
    "imprint.intro": "Information according to § 5 of the Austrian E-Commerce Act (ECG).",
    "imprint.owner.title": "Media owner and operator",
    "imprint.legalFormLabel": "Legal form:",
    "imprint.contact.title": "Contact",
    "imprint.subject.title": "Business purpose",
    "imprint.subject.text": "Services in automatic data processing and information technology",
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
