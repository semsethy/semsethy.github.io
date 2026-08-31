import {useEffect, useState} from "react";
import {nav, profile} from "../data/site";
import Icon from "./Icon";

function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
  }, [dark]);
  return [dark, setDark];
}

export default function Nav() {
  const [dark, setDark] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5]}
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={
        scrolled
          ? {backgroundColor: "color-mix(in srgb, var(--page) 82%, transparent)", borderBottom: "1px solid var(--line)"}
          : {}
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-xl bg-brand-600 text-white shadow-sm transition-transform group-hover:-rotate-6">
            SS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === n.href.slice(1)
                  ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-200"
                  : "muted hover:text-brand-600 dark:hover:text-brand-300"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-full border transition-colors hover:bg-brand-50 dark:hover:bg-brand-950"
          >
            <Icon name={dark ? "sun" : "moon"} className="size-4" />
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t md:hidden" style={{backgroundColor: "var(--page)"}}>
          <nav className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm hover:bg-brand-50 dark:hover:bg-brand-950">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
