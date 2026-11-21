// Small progressive enhancements. The page works fully without this file.

const root = document.documentElement;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Faint cursor light on the header grid (desktop only).
if (finePointer && !reducedMotion) {
  const backdrop = document.querySelector<HTMLElement>(".backdrop");
  let frame = 0;
  let last: PointerEvent | null = null;

  const update = () => {
    frame = 0;
    if (!last || !backdrop) return;
    const rect = backdrop.getBoundingClientRect();
    const inside = last.clientY < rect.bottom;
    root.classList.toggle("pointer-active", inside);
    if (inside) {
      backdrop.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      backdrop.style.setProperty("--my", `${last.clientY - rect.top}px`);
    }
  };

  addEventListener(
    "pointermove",
    (e) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  addEventListener(
    "scroll",
    () => {
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  document.addEventListener("pointerleave", () => root.classList.remove("pointer-active"));
}

// 2. Highlight the nav link of the section in view.
const navLinks = new Map(
  [...document.querySelectorAll<HTMLAnchorElement>("[data-nav]")].map((a) => [a.dataset.nav!, a]),
);
const setCurrent = (id: string) =>
  navLinks.forEach((a, key) => (key === id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const target = entry.target as HTMLElement;
      setCurrent(target.dataset.navGroup ?? target.id);
    }
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

// 3. Copy email button.
document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
  // Labels come from the page's dictionary (data-label-* attributes).
  const label = btn.querySelector<HTMLElement>("[data-copy-label]");
  const { labelCopy = "", labelCopied = "", labelFallback = "" } = btn.dataset;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy!);
      if (label) label.textContent = labelCopied;
    } catch {
      if (label) label.textContent = labelFallback;
    }
    setTimeout(() => label && (label.textContent = labelCopy), 2000);
  });
});
