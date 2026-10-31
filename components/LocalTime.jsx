"use client";

import { useEffect, useState } from "react";

// Live local time in Western Indonesia Time (Tangerang).
export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Jakarta",
          }).format(new Date())
        );
      } catch (e) {
        setTime("");
      }
    };
    fmt();
    const id = setInterval(fmt, 30000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span className="local-time">
      <span className="pulse" aria-hidden="true" /> Tangerang · {time} WIB
    </span>
  );
}
