"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { navLinks, profile, projects } from "@/data/content";

// Navigasi cepat: tekan Ctrl+K / Cmd+K (atau tombol "Quick jump" di navbar).
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef(null);
  const returnFocus = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1800);
  };

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const commands = useMemo(
    () => [
      ...navLinks.map((l) => ({ id: `nav-${l.id}`, label: `Go to ${l.label}`, hint: "Section", run: () => go(l.id) })),
      ...projects.map((p) => ({ id: `proj-${p.id}`, label: p.title, hint: "Project", run: () => {
          go("projects");
          window.dispatchEvent(new CustomEvent("open-project", { detail: p.id }));
        },
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        hint: "Action",
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            showToast("Email copied");
          } catch (e) {
            showToast(profile.email);
          }
        },
      },
      {
        id: "theme",
        label: "Toggle light / dark mode",
        hint: "Action",
        run: () => {
          const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
          document.documentElement.setAttribute("data-theme", next);
          try {
            localStorage.setItem("theme", next);
          } catch (e) {}
          window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
        },
      },
      { id: "cv", label: "Open CV (PDF)", hint: "Link", href: profile.cv },
      { id: "linkedin", label: "Open LinkedIn", hint: "Link", href: profile.linkedin },
      { id: "github", label: "Open GitHub", hint: "Link", href: profile.github },
    ],
    []
  );

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      returnFocus.current = document.activeElement;
      setQuery("");
      setIndex(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 10);
    } else if (returnFocus.current && returnFocus.current.focus) {
      returnFocus.current.focus();
    }
  }, [open]);

  const runCommand = (c) => {
    setOpen(false);
    if (c.href) {
      const a = document.createElement("a");
      a.href = c.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
      return;
    }
    setTimeout(() => c.run(), 30);
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter" && results[index]) {
      e.preventDefault();
      runCommand(results[index]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div className="palette-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="card palette" role="dialog" aria-modal="true" aria-label="Quick navigation">
            <label htmlFor="palette-input" className="sr-only">
              Search sections, projects, and actions
            </label>
            <input
              id="palette-input"
              ref={inputRef}
              className="palette-input"
              placeholder="Search sections, projects, actions…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIndex(0);
              }}
              onKeyDown={onInputKey}
              autoComplete="off"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-list"
              aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
            />
            <ul className="palette-list" id="palette-list" role="listbox">
              {results.length === 0 && <li className="palette-empty">No results for “{query}”</li>}
              {results.map((c, i) => (
                <li key={c.id} role="option" id={`cmd-${c.id}`} aria-selected={i === index}>
                  <button
                    type="button"
                    tabIndex={-1}
                    className={`palette-item ${i === index ? "is-active" : ""}`}
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => runCommand(c)}
                  >
                    <span>{c.label}</span>
                    <span className="hint">{c.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="palette-foot" aria-hidden="true">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> move
              </span>
              <span>
                <kbd>Enter</kbd> open
              </span>
              <span>
                <kbd>Esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  );
}
