/* Andromeda — background starfield, parallax, reveals, header state */
(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- starfield ---------------- */

  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  const nebulaWrap = document.getElementById("nebulaWrap");
  const TAU = Math.PI * 2;

  let W = 0, H = 0;
  let stars = [];
  let brights = [];

  const rand = (a, b) => a + Math.random() * (b - a);
  const mod = (v, m) => ((v % m) + m) % m;

  // three depth layers: farther = smaller, dimmer, slower drift, weaker parallax
  const LAYERS = [
    { density: 9000,  r: [0.35, 0.9], parallax: 0.05, speed: 0.0035, a: [0.30, 0.62] },
    { density: 15000, r: [0.70, 1.5], parallax: 0.12, speed: 0.0080, a: [0.45, 0.85] },
    { density: 26000, r: [1.10, 2.0], parallax: 0.22, speed: 0.0150, a: [0.55, 1.00] },
  ];

  function seed() {
    stars = [];
    brights = [];
    for (const L of LAYERS) {
      const n = Math.round((W * H) / L.density);
      for (let i = 0; i < n; i++) {
        stars.push({
          layer: L,
          x: Math.random() * W,
          y: Math.random() * H,
          r: rand(L.r[0], L.r[1]),
          a: rand(L.a[0], L.a[1]),
          tw: Math.random() < 0.6,           // only most stars twinkle
          ph: Math.random() * TAU,
          spd: rand(0.0005, 0.0016),         // rad per ms
          c: Math.random() < 0.1 ? "#ffe0bd" : "#dbe6ff",
        });
      }
    }
    const bn = Math.max(6, Math.min(14, Math.round((W * H) / 90000)));
    for (let i = 0; i < bn; i++) {
      brights.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: rand(1.4, 2.2),
        ph: rand(0, TAU),
        spd: rand(0.0003, 0.0007),
      });
    }
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
    if (reduced) drawFrame(performance.now(), 0);
  }

  let scrollCur = window.scrollY;
  let scrollTgt = scrollCur;
  window.addEventListener("scroll", () => { scrollTgt = window.scrollY; }, { passive: true });

  function drawFrame(t, off) {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const x = mod(s.x + t * s.layer.speed, W);
      const y = mod(s.y - off * s.layer.parallax, H);
      let a = s.a;
      if (s.tw) a *= 0.7 + 0.3 * Math.sin(t * s.spd + s.ph);
      ctx.globalAlpha = a;
      ctx.fillStyle = s.c;
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, TAU);
      ctx.fill();
    }

    const nearPar = LAYERS[LAYERS.length - 1].parallax;
    for (const b of brights) {
      const x = mod(b.x + t * 0.015, W);
      const y = mod(b.y - off * nearPar, H);
      const pulse = 0.72 + 0.28 * Math.sin(t * b.spd + b.ph);
      const halo = b.r * 7;
      const g = ctx.createRadialGradient(x, y, 0, x, y, halo);
      g.addColorStop(0, "rgba(214, 230, 255," + (0.5 * pulse).toFixed(3) + ")");
      g.addColorStop(1, "rgba(214, 230, 255,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, halo, 0, TAU);
      ctx.fill();
      ctx.fillStyle = "#f2f7ff";
      ctx.globalAlpha = 0.95 * pulse;
      ctx.beginPath();
      ctx.arc(x, y, b.r, 0, TAU);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    if (nebulaWrap) {
      nebulaWrap.style.transform = "translate3d(0," + (-off * 0.045).toFixed(2) + "px,0)";
    }
  }

  let raf = null;
  function loop(now) {
    scrollCur += (scrollTgt - scrollCur) * 0.12;
    drawFrame(now, scrollCur);
    raf = requestAnimationFrame(loop);
  }

  function startLoop() {
    if (!raf && !reduced) raf = requestAnimationFrame(loop);
  }
  function stopLoop() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopLoop();
    else startLoop();
  });

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  startLoop();

  /* ---------------- scroll reveal ---------------- */

  const revealEls = document.querySelectorAll(".reveal");
  const captureMode = new URLSearchParams(window.location.search).has("capture");
  if (reduced || captureMode || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------------- header state ---------------- */

  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
