"use client";

import { useState } from "react";
import { about, profile } from "@/data/content";
import Reveal from "./Reveal";

function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="avatar">
      {!failed && (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} loading="lazy" />
      )}
      {failed && (
        <div className="avatar-fallback" role="img" aria-label={profile.name}>
          {profile.initials}
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">About</span>
          <h2 className="section-title" id="about-title">
            Software, process, and data in one person.
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-aside">
            <Avatar />
            <dl className="facts">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <dt className="fact-label">{f.label}</dt>
                  <dd className="fact-value" style={{ margin: 0 }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80}>
                {p}
              </Reveal>
            ))}
            <div className="approach">
              {about.approach.map((a, i) => (
                <Reveal key={a.step} className="card approach-item" delay={i * 100}>
                  <span className="approach-step">{a.step}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
