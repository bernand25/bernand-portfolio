import { skillGroups } from "@/data/content";

// Endless strip of the tools I work with. Pauses on hover; static when motion is reduced.
export default function TechMarquee() {
  const items = Array.from(new Set(skillGroups.filter((g) => g.id !== "ba").flatMap((g) => g.items)));
  return (
    <section className="marquee" aria-label="Tools I work with">
      <ul className="sr-only">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="marquee-row" key={copy}>
            {items.map((t) => (
              <span className="marquee-item" key={`${copy}-${t}`}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
