import About from "./About";
import CommandPalette from "./CommandPalette";
import Contact from "./Contact";
import Credentials from "./Credentials";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

// Seluruh halaman. Dipakai oleh app/page.jsx.
export default function Site() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
