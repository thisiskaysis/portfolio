import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiDjango,
  SiNetlify,
  SiInsomnia,
  SiCanva,
  SiVite,
} from "react-icons/si";

const topRow = [
  { name: "React", icon: FaReact, glow: "glow-react" },
  { name: "JavaScript", icon: FaJs, glow: "glow-js" },
  { name: "HTML", icon: FaHtml5, glow: "glow-html" },
  { name: "CSS", icon: FaCss3Alt, glow: "glow-css" },
  { name: "Vite", icon: SiVite, glow: "glow-vite" },
  { name: "Git", icon: FaGitAlt, glow: "glow-git" },
];

const bottomRow = [
  { name: "Python", icon: FaPython, glow: "glow-python" },
  { name: "Django", icon: SiDjango, glow: "glow-django" },
  { name: "GitHub", icon: FaGithub, glow: "glow-github" },
  { name: "Netlify", icon: SiNetlify, glow: "glow-netlify" },
  { name: "Insomnia", icon: SiInsomnia, glow: "glow-insomnia" },
  { name: "Figma", icon: FaFigma, glow: "glow-figma" },
  { name: "Canva", icon: SiCanva, glow: "glow-canva" },
];

function TechItem({ name, icon: Icon, glow }) {
  return (
    <div className={`tech-pill ${glow}`}>
      <Icon className="tech-icon" aria-hidden="true" />
      <span>{name}</span>
    </div>
  );
}

function TechRow({ items, direction = "left", speed = "normal" }) {
  return (
    <div className="tech-row-mask">
      <div className={`tech-row-track ${direction} ${speed}`}>
        {[...items, ...items].map((item, index) => (
          <TechItem key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">The tools behind the vision.</h2>
          <p className="section-copy">
            A growing toolkit I use to build responsive, connected, polished,
            and user-focused web experiences.
          </p>
        </motion.div>

        <div className="tech-stack-wrap">
          <TechRow items={topRow} direction="left" speed="normal" />
          <TechRow items={bottomRow} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
}

export default TechStack;