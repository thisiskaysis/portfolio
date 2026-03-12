import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section id="home">
      <div
        className="container"
        style={{
          display: "grid",
          gap: "28px",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: "860px" }}
        >
          <div className="pill">
            <Sparkles size={16} />
            Emerging full-stack developer
          </div>

          <h1
            style={{
              margin: "24px 0 20px",
              fontSize: "clamp(3rem, 7vw, 6.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
            }}
          >
            Not boring.
            <br />
            Not generic.
            <br />
            Just thoughtful, creative code.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: 0,
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            I’m Kaycee — a developer who loves building digital experiences that
            feel polished, intuitive, and alive. I care about the details,
            the user, and the spark that makes a product actually memorable.
          </p>

          <div className="button-row">
            <a className="button-primary" href="#projects">
              View Projects <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;