"use client";

import { useEffect, useState } from "react";

// Floating "back to top" button whose ring fills as you scroll.
export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setShow(y > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 20;
  const c = 2 * Math.PI * r;

  return (
    <a href="#top" className={`to-top ${show ? "is-shown" : ""}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={r} className="to-top-track" />
        <circle
          cx="24"
          cy="24"
          r={r}
          className="to-top-ring"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
        <path d="M24 31V17M18 23l6-6 6 6" className="to-top-arrow" />
      </svg>
    </a>
  );
}
