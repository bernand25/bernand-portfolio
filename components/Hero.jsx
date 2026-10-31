"use client";

import { useEffect, useState } from "react";
import { profile, scope } from "@/data/content";
import { ArrowDown, Download, GitHub, LinkedIn, Mail } from "./Icons";

function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function Metric({ value, label, max, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="metric">
      <div className="metric-value">{n}</div>
      <div>
        <div className="metric-label">{label}</div>
        <div className="metric-bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${start ? value / max : 0})` }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const max = Math.max(...scope.metrics.map((m) => m.value));

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 250);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let id;
    if (!reduce) {
      id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length), 2600);
    }
    return () => {
      clearTimeout(t);
      if (id) clearInterval(id);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="pulse" aria-hidden="true" />
            Currently at {profile.company}
          </span>
          <p className="hero-eyebrow">{profile.eyebrow}</p>
          <h1 className="hero-title" id="hero-title">
            I build systems that help <span className="accent">risk &amp; compliance</span> teams act faster.
          </h1>
          <p className="hero-intro">
            Hi, I&apos;m <strong>{profile.name}</strong>. {profile.intro}
          </p>
          <p className="role-rotator" aria-live="polite">
            <span>Working as a</span>
            <span className="role" key={roleIndex}>
              {profile.rotatingRoles[roleIndex]}
            </span>
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              View projects <ArrowDown size={16} />
            </a>
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noopener noreferrer">
              <Download size={16} /> Download CV
            </a>
          </div>
          <div className="hero-socials">
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
              <Mail />
            </a>
          </div>
        </div>

        <div className="card console" aria-label={`${scope.title}: ${scope.subtitle}`} role="group">
          <div className="console-head">
            <div>
              <div className="console-title">{scope.title}</div>
              <div className="console-sub">{scope.subtitle}</div>
            </div>
            <span className="live">
              <span className="pulse" aria-hidden="true" /> monitoring
            </span>
          </div>
          <div className="metric-list">
            {scope.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} max={max} start={started} />
            ))}
          </div>
          <div className="console-tags">
            {scope.tags.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
