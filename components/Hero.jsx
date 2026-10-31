"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { profile, scope } from "@/data/content";
import { ArrowDown, Download, GitHub, LinkedIn, Mail } from "./Icons";
import { canHover, prefersReducedMotion, trackPointer, useCountUp, useMagnetic } from "./fx";

function Metric({ value, label, max, start, delay }) {
  const n = useCountUp(value, start);
  return (
    <div className="metric" style={{ animationDelay: `${delay}ms` }}>
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

// Headline split into words so each can rise in with a small stagger.
function Words({ text, offset = 0, className }) {
  return text.split(" ").map((w, i) => (
    <Fragment key={i}>
      <span className={`word ${className || ""}`} style={{ animationDelay: `${(offset + i) * 70 + 150}ms` }}>
        {w}
      </span>{" "}
    </Fragment>
  ));
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const consoleRef = useRef(null);
  const ctaRef = useRef(null);
  const max = Math.max(...scope.metrics.map((m) => m.value));

  useMagnetic(ctaRef, 0.22);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 700);
    let id;
    if (!prefersReducedMotion()) {
      id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length), 2600);
    }
    return () => {
      clearTimeout(t);
      if (id) clearInterval(id);
    };
  }, []);

  // Gentle 3D tilt on the console card (desktop pointer only).
  const onTilt = (e) => {
    const el = consoleRef.current;
    if (!el || !canHover() || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
    trackPointer(e);
  };
  const resetTilt = () => {
    if (consoleRef.current) consoleRef.current.style.transform = "";
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title" onPointerMove={trackPointer}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill intro" style={{ animationDelay: "0ms" }}>
            <span className="pulse" aria-hidden="true" />
            Currently at {profile.company}
          </span>
          <p className="hero-eyebrow intro" style={{ animationDelay: "80ms" }}>
            {profile.eyebrow}
          </p>
          <h1 className="hero-title" id="hero-title">
            <Words text="I build systems that help" />
            <Words text="risk & compliance" offset={5} className="accent" />
            <Words text="teams act faster." offset={8} />
          </h1>
          <p className="hero-intro intro" style={{ animationDelay: "850ms" }}>
            Hi, I&apos;m <strong>{profile.name}</strong>. {profile.intro}
          </p>
          <p className="role-rotator intro" aria-live="polite" style={{ animationDelay: "950ms" }}>
            <span>Working as a</span>
            <span className="role" key={roleIndex}>
              {profile.rotatingRoles[roleIndex]}
            </span>
          </p>
          <div className="hero-ctas intro" style={{ animationDelay: "1050ms" }}>
            <a className="btn btn-primary magnetic" href="#projects" ref={ctaRef}>
              View projects <ArrowDown size={16} />
            </a>
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noopener noreferrer">
              <Download size={16} /> Download CV
            </a>
          </div>
          <div className="hero-socials intro" style={{ animationDelay: "1150ms" }}>
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

        <div className="console-wrap intro" style={{ animationDelay: "400ms" }}>
          <div
            className="card console glow-card"
            ref={consoleRef}
            onPointerMove={onTilt}
            onPointerLeave={resetTilt}
            aria-label={`${scope.title}: ${scope.subtitle}`}
            role="group"
          >
            <div className="console-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <em className="mono">erm-monitoring</em>
            </div>
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
              {scope.metrics.map((m, i) => (
                <Metric key={m.label} value={m.value} label={m.label} max={max} start={started} delay={600 + i * 120} />
              ))}
            </div>
            <div className="console-tags">
              {scope.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="scanline" aria-hidden="true" />
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue intro" style={{ animationDelay: "1400ms" }} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
