"use client";

import { useRef, useState } from "react";
import { skillGroups } from "@/data/content";
import Reveal from "./Reveal";

const notes = {
  dev: "Web-based monitoring systems: registers, monthly monitoring, filtering, and data workflows.",
  data: "Dashboards, data models, and KPIs that management reads every period.",
  auto: "Flows and scripts that remove manual copying, filing, and syncing.",
  ba: "Turning how people work into requirements a system can follow.",
  ai: "Applied in research on social media sentiment and price movement.",
  tools: "Everyday tools for building, versioning, and documenting work.",
};

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const tabRefs = useRef({});
  const group = skillGroups.find((g) => g.id === active);

  const onKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % skillGroups.length;
    if (e.key === "ArrowLeft") next = (index - 1 + skillGroups.length) % skillGroups.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = skillGroups.length - 1;
    if (next !== null) {
      e.preventDefault();
      const id = skillGroups[next].id;
      setActive(id);
      tabRefs.current[id] && tabRefs.current[id].focus();
    }
  };

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Skills</span>
          <h2 className="section-title" id="skills-title">
            Tools I use to build
          </h2>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Skill groups">
          {skillGroups.map((g, i) => (
            <button
              type="button"
              key={g.id}
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={active === g.id}
              aria-controls="skills-panel"
              tabIndex={active === g.id ? 0 : -1}
              className="filter-btn"
              ref={(el) => {
                tabRefs.current[g.id] = el;
              }}
              onClick={() => setActive(g.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="card skills-panel" role="tabpanel" id="skills-panel" aria-labelledby={`tab-${active}`}>
          <div className="skill-chips" key={active}>
            {group.items.map((s, i) => (
              <span className="chip" key={s} style={{ animationDelay: `${i * 40}ms` }}>
                {s}
              </span>
            ))}
          </div>
          <div className="skill-meta">
            <div className="big">{String(group.items.length).padStart(2, "0")}</div>
            <p>{notes[group.id]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
