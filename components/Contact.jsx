"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import { GitHub, LinkedIn, Mail, MapPin, Phone } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  const items = [
    { icon: <Mail />, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
    { icon: <LinkedIn />, label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\//, ""), href: profile.linkedin },
    { icon: <GitHub />, label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), href: profile.github },
    { icon: <Phone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
    { icon: <MapPin />, label: "Location", value: profile.location },
  ];

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="card contact-card">
          <div>
            <span className="kicker">Contact</span>
            <h2 id="contact-title" style={{ marginTop: 12 }}>
              Have a process that still runs on spreadsheets?
            </h2>
            <p className="section-lead">
              I am happy to talk about system development, business analysis, and data roles, or to exchange ideas with people
              digitizing risk and compliance work.
            </p>
            <div className="open-to" aria-label="Open to">
              {profile.openTo.map((o) => (
                <span className="chip" key={o}>
                  {o}
                </span>
              ))}
            </div>
          </div>

          <ul className="contact-list">
            {items.map((it) => (
              <li className="contact-item" key={it.label}>
                <span className="cert-icon">{it.icon}</span>
                <span>
                  <span className="label" style={{ display: "block" }}>
                    {it.label}
                  </span>
                  <span className="value">
                    {it.href ? (
                      <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {it.value}
                      </a>
                    ) : (
                      it.value
                    )}
                  </span>
                </span>
                {it.copy && (
                  <button type="button" className={`copy-btn ${copied ? "is-done" : ""}`} onClick={copyEmail}>
                    <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
