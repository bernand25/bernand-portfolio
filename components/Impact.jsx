"use client";

import { useRef } from "react";
import { impact } from "@/data/content";
import { useCountUp, useInView } from "./fx";

function Stat({ value, label, start, index }) {
  const n = useCountUp(value, start, { duration: 1200 + index * 150 });
  return (
    <div className="stat">
      <div className="stat-value">{n}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.4 });
  return (
    <section className="impact" aria-label="By the numbers" ref={ref}>
      <div className="container impact-grid">
        {impact.map((item, i) => (
          <Stat key={item.label} {...item} start={inView} index={i} />
        ))}
      </div>
    </section>
  );
}
