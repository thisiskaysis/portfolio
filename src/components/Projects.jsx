import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Collaborative Bucket List App",
    type: "Full Stack",
    description:
      "A full-stack collaborative app centered around meaningful experiences, polished UX, list sharing, permissions, and thoughtful interaction design.",
    liveUrl: "/",
    githubUrl: "/",
  },
  {
    title: "Creative Front-End Build",
    type: "Front End",
    description:
      "An interface-led project focused on visual personality, layout, motion, and making a product feel expressive without losing clarity.",
    liveUrl: "/",
    githubUrl: "/",
  },
  {
    title: "API-Connected Project",
    type: "Integration",
    description:
      "A project that turns structured data into a clean, intuitive experience through practical API integration and user-focused design.",
    liveUrl: "/",
    githubUrl: "/",
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
          <h2 className="section-title">Work that reflects how I build.</h2>
          <p className="section-copy">
            Projects that bring together interface design, logic, structure, and
            user experience.
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
              <div className="project-glow" />

              <div className="project-content">
                <span className="project-type">{project.type}</span>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-copy">{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="project-link project-link-primary"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="project-link project-link-secondary"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;