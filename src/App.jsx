import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#home" className="brand-mark">
            Kaycee Lawrence
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#tech-stack">Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;