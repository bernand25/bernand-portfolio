"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";
import { Menu, Close, Moon, Sun, Search, Download } from "./Icons";

function readTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(readTheme());

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }

    const onTheme = (e) => setTheme(e.detail);
    window.addEventListener("theme-change", onTheme);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("theme-change", onTheme);
      if (io) io.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
  };

  const openPalette = () => window.dispatchEvent(new Event("open-palette"));

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label={`${profile.name}, back to top`}>
            <img src={profile.logo} alt="" width="36" height="36" className="brand-logo" />
            <span>{profile.shortName}</span>
          </a>

          <nav aria-label="Main">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} aria-current={active === l.id ? "true" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button type="button" className="kbd-btn" onClick={openPalette} aria-label="Open quick navigation">
              <Search size={16} />
              <span className="kbd-label">Quick jump</span>
              <kbd className="kbd-label">Ctrl K</kbd>
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <a className="btn btn-primary nav-cv" href={profile.cv} target="_blank" rel="noopener noreferrer">
              <Download size={16} /> CV
            </a>
            <button
              type="button"
              className="icon-btn menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
