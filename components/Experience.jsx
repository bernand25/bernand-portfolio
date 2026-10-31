"use client";

import { useState } from "react";
import { experience, leadership } from "@/data/content";
import { ChevronDown } from "./Icons";
import Reveal from "./Reveal";

export default function Experience() {
  const [open, setOpen] = useState(() => new Set([0]));

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Experience</span>
          <h2 className="section-title" id="experience-title">
            Where I have worked
          </h2>
        </Reveal>

        <div className="exp-layout">
          <ol className="timeline">
            {experience.map((job, i) => {
              const isOpen = open.has(i);
              const panelId = `exp-panel-${i}`;
              return (
                <Reveal as="li" key={job.company} className={`tl-item ${job.current ? "is-current" : ""}`} delay={i * 80}>
                  <span className="tl-dot" aria-hidden="true" />
                  <div className="card tl-card">
                    <button
                      type="button"
                      className="tl-toggle"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                    >
                      <span>
                        <span className="tl-role">
                          {job.role}
                          {job.current && (
                            <span className="badge now-badge">Now</span>
                          )}
                        </span>
                        <span className="tl-company" style={{ display: "block" }}>
                          {job.company}
                        </span>
                        <span className="tl-period" style={{ display: "block" }}>
                          {job.period}
                        </span>
                      </span>
                      <span className="tl-chevron">
                        <ChevronDown />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="tl-body" id={panelId}>
                        <ul>
                          {job.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <Reveal as="aside" aria-labelledby="leadership-title">
            <h3 className="side-title" id="leadership-title">
              Leadership &amp; research
            </h3>
            <div className="lead-list">
              {leadership.map((l) => (
                <div className="card lead-item" key={l.title + l.period}>
                  <span className="tl-period">{l.period}</span>
                  <h3 style={{ marginTop: 6 }}>{l.title}</h3>
                  <div className="org">{l.org}</div>
                  <p>{l.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
