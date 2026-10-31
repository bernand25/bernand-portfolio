import { profile } from "@/data/content";
import LocalTime from "./LocalTime";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <span>
          {profile.role} · {profile.unit} · {profile.company}
        </span>
        <LocalTime />
      </div>
    </footer>
  );
}
