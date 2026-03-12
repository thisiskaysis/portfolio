import { motion } from "framer-motion";

const projects = [
  {
    title: "Collaborative Bucket List App",
    description:
      "A full-stack application designed around shared experiences, polished interaction, and thoughtful usability. Built to support collaboration, list creation, permissions, and a smooth user experience.",
  },
  {
    title: "Creative Front-End Build",
    description:
      "A project focused on visual personality, layout, and interaction design — exploring how interfaces can feel expressive without losing clarity or usability.",
  },
  {
    title: "API-Connected Project",
    description:
      "A build that demonstrates turning structured data into a useful, intuitive user experience through thoughtful front-end implementation and clean integration.",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work.</h2>
          <p className="section-copy">
            A few projects that reflect how I think, design, and build.
          </p>
        </motion.div>

        <div className="grid-3" style={{ marginTop: "32px" }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-copy">{project.description}</p>

              <div className="project-links">
                <a href="/">Live Demo</a>
                <a href="/">GitHub</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;