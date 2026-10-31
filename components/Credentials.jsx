import { certifications, education } from "@/data/content";
import { Award } from "./Icons";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section className="section" id="credentials" aria-labelledby="credentials-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Credentials</span>
          <h2 className="section-title" id="credentials-title">
            Education &amp; certifications
          </h2>
        </Reveal>

        <div className="cred-layout">
          <Reveal className="card edu-card">
            <span className="project-org">Education</span>
            <h3>{education.school}</h3>
            <div className="edu-row">
              <span>{education.degree}</span>
              <span aria-hidden="true">·</span>
              <span>{education.period}</span>
              <span aria-hidden="true">·</span>
              <span>
                GPA <span className="gpa">{education.gpa}</span>
              </span>
            </div>
            <div className="thesis">
              <strong>Thesis · Grade {education.thesisGrade}</strong>
              {education.thesis}
            </div>
            <ul className="activity-list">
              {education.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>

          <ul className="cert-list">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} className="card cert" delay={i * 60}>
                <span className="cert-icon">
                  <Award size={20} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <div className="meta">{[c.issuer, c.area].filter(Boolean).join(" · ")}</div>
                </div>
                <a href={c.file} target="_blank" rel="noopener noreferrer" aria-label={`View credential: ${c.title}`}>
                  View credential
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
