"use client";

import { useEffect, useRef, useState } from "react";
import { projectFilters, projects } from "@/data/content";
import { ArrowRight, Check, Close } from "./Icons";
import Reveal from "./Reveal";

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll("a[href], button:not([disabled])");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="card modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
        <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close project details" ref={closeRef}>
          <Close />
        </button>
        <span className="project-org">{project.org}</span>
        <h2 id="modal-title">{project.title}</h2>
        <p style={{ color: "var(--muted)", fontSize: 17 }}>{project.summary}</p>

        {project.problem && (
          <div className="modal-section">
            <h3>{project.category === "research" ? "Research question" : "The problem"}</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {project.flow && (
          <div className="modal-section">
            <h3>How it works</h3>
            <div className="flow">
              {project.flow.map((step, i) => (
                <span key={step} style={{ display: "contents" }}>
                  <span className="flow-step">{step}</span>
                  {i < project.flow.length - 1 && (
                    <span className="flow-arrow">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.built && (
          <div className="modal-section">
            <h3>What I built</h3>
            <ul className="check-list">
              {project.built.map((b) => (
                <li key={b}>
                  <Check size={16} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.lesson && (
          <div className="modal-section">
            <h3>What I learned</h3>
            <p className="lesson">{project.lesson}</p>
          </div>
        )}

        <div className="modal-section">
          <h3>Stack</h3>
          <div className="card-stack" style={{ paddingTop: 0 }}>
            {project.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const lastTrigger = useRef(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const openProject = projects.find((p) => p.id === openId);

  const count = (id) => (id === "all" ? projects.length : projects.filter((p) => p.category === id).length);

  useEffect(() => {
    const onOpenProject = (e) => {
      setFilter("all");
      lastTrigger.current = null;
      setTimeout(() => setOpenId(e.detail), 350);
    };
    window.addEventListener("open-project", onOpenProject);
    return () => window.removeEventListener("open-project", onOpenProject);
  }, []);

  const close = () => {
    setOpenId(null);
    if (lastTrigger.current) lastTrigger.current.focus();
  };

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Projects</span>
          <h2 className="section-title" id="projects-title">
            Systems I have built
          </h2>
          <p className="section-lead">
            Four systems built for Enterprise Risk Management at Citilink, plus research and web projects. Open a card to see the
            problem, how it works, and what I learned.
          </p>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              type="button"
              key={f.id}
              className="filter-btn"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label} <span className="filter-count">{count(f.id)}</span>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((p, i) => (
            <button
              type="button"
              key={`${filter}-${p.id}`}
              className="card project-card"
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpenId(p.id);
              }}
              aria-haspopup="dialog"
            >
              <span className="card-top">
                <span className="project-org">{p.org}</span>
                {p.featured && <span className="badge">Citilink</span>}
              </span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="card-stack">
                {p.stack.slice(0, 4).map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
                {p.stack.length > 4 && <span className="chip">+{p.stack.length - 4}</span>}
              </span>
              <span className="card-more">
                See details <ArrowRight size={16} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {openProject && <ProjectModal project={openProject} onClose={close} />}
    </section>
  );
}
