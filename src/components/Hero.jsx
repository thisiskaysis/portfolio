import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, AudioLines, Code2, Layers3, Sparkles } from "lucide-react";

function Hero() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setSpotlight({ x, y });
  }

  function handleTilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  function resetTilt(event) {
    event.currentTarget.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <section
      id="home"
      className="hero-section"
      onMouseMove={handleMouseMove}
      style={{
        "--spotlight-x": `${spotlight.x}%`,
        "--spotlight-y": `${spotlight.y}%`,
      }}
    >
      <div className="hero-mesh" aria-hidden="true">
        <span className="mesh-blob mesh-blob-1" />
        <span className="mesh-blob mesh-blob-2" />
        <span className="mesh-blob mesh-blob-3" />
        <span className="mesh-blob mesh-blob-4" />
      </div>
      <motion.div
        className="orb orb-1"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="orb orb-2"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="orb orb-3"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}
      />

      <div className="hero-spotlight" />

      <div className="container">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="pill">
              <Sparkles size={16} />
              Emerging full-stack developer
            </div>

            <h1 className="hero-title">
              Building digital
              <br />
              experiences that
              <br />
              feel alive.
            </h1>

            <p className="hero-copy">
              I’m Kaycee - a full-stack developer drawn to the
              intersection of creativity, structure, and user experience.
              <br></br> I love building products that feel polished, expressive,
              and genuinely enjoyable to use. For me, development is about more
              than writing code - it’s about shaping thoughtful digital
              experiences from idea to implementation.
            </p>

            <div className="button-row">
              <a className="button-primary" href="#featured-projects">
                View Projects <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </a>
              <a className="button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card-grid"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            <article
              className="glass-card hero-mini-card tilt-card"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="hero-mini-icon">
                <Code2 size={22} />
              </div>
              <h3 className="hero-mini-title">Full-stack thinking</h3>
              <p className="hero-mini-copy">
                I enjoy building across the whole product - from the interface
                users see to the systems and logic underneath.
              </p>
            </article>

            <article
              className="glass-card hero-mini-card tilt-card"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="hero-mini-icon">
                <Layers3 size={22} />
              </div>
              <h3 className="hero-mini-title">Polished UX focus</h3>
              <p className="hero-mini-copy">
                Accessibility, clarity, and visual flow matter deeply in the way
                I design and build web experiences.
              </p>
            </article>

            <article
              className="glass-card hero-mini-card tilt-card"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="hero-mini-icon">
                <AudioLines size={22} />
              </div>
              <h3 className="hero-mini-title">Creative energy</h3>
              <p className="hero-mini-copy">
                Outside of coding, I volunteer on the live production desk at
                church, blending technical focus, timing, and creativity each
                week.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
