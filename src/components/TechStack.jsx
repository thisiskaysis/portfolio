import { motion } from "framer-motion";

const stack = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Django",
  "REST APIs",
  "Git",
  "GitHub",
  "Netlify",
  "Responsive Design",
  "Accessibility",
];

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
          <h2 className="section-title">The tools behind the ideas.</h2>
          <p className="section-copy">
            These are the technologies and practices I currently use to design,
            build, and connect full-stack web experiences.
          </p>
        </motion.div>

        <div className="tag-list">
          {stack.map((item, index) => (
            <motion.span
              key={item}
              className="tag"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;