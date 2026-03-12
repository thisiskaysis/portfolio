import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import FeaturedProject from "./components/FeaturedProject";
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
            <a href="#featured-projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <TechStack />

        <section id="featured-projects" className="featured-projects-intro">
          <div className="container">
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title">The builds I want you to remember.</h2>
            <p className="section-copy">
              Two very different full-stack projects that showcase how I think
              about product design, structure, interaction, and real user
              experience.
            </p>
          </div>
        </section>

        <FeaturedProject
          eyebrow="Featured Project 01"
          title="Collaborative Bucket List App"
          subtitle="A full-stack collaborative experience built around planning meaningful moments together."
          description="This project was designed to bring people together around shared goals and experiences. It combines thoughtful interface design with more complex collaboration features, balancing polish, usability, permissions, and interaction across the full stack."
          features={[
            "Collaborative public and private bucket lists",
            "Voting interactions with real-time visual feedback",
            "Role-based permissions for owners, editors, and viewers",
            "Accessibility-focused interface decisions",
            "Polished front-end patterns with clear UX flow",
          ]}
          stack={[
            "React",
            "JavaScript",
            "Django",
            "REST API",
            "Authentication",
            "Accessibility",
          ]}
          liveUrl="#"
          githubUrl="https://github.com/SheCodesAus/Owl-gorithms-frontend"
          image="/bucketlist-preview.png"
          imageAlt="Collaborative Bucket List App preview"
          accent="violet"
        />

        <FeaturedProject
          eyebrow="Featured Project 02"
          title="Crowdfunding Platform"
          subtitle="A structured web platform built to support campaigns, funding journeys, and real application logic."
          description="This project highlights a different side of my development work — building a more system-driven product with stronger backend structure and practical application logic. It demonstrates my interest in creating products that are not only visually engaging, but also functional and grounded in real-world use."
          features={[
            "Campaign creation and contribution flows",
            "Clear separation of user-facing views and system logic",
            "Structured data relationships across the application",
            "Full-stack integration between front end and backend",
            "A product direction shaped around real user action",
          ]}
          stack={[
            "React",
            "Python",
            "Django",
            "REST API",
            "PostgreSQL",
            "Full Stack",
          ]}
          liveUrl="https://dreamjar.netlify.app/"
          githubUrl="https://github.com/thisiskaysis/dreamjar-frontend"
          image="/crowdfunding-preview.gif"
          imageAlt="Crowdfunding platform preview"
          reverse
          accent="icy"
        />

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;