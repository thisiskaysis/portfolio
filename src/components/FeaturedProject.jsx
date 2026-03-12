import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

function FeaturedProject({
  eyebrow = "Featured Project",
  title,
  subtitle,
  description,
  features = [],
  stack = [],
  liveUrl = "#",
  githubUrl = "#",
  image = "",
  imageAlt = "",
  reverse = false,
  accent = "violet",
}) {
  return (
    <section className={`featured-project ${reverse ? "reverse" : ""}`}>
      <div className="container">
        <motion.div
          className={`featured-shell featured-${accent}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="featured-grid">
            <div className="featured-visual-wrap">
              <div className="featured-visual-glow" />
              <div className="featured-floating-card glass-card">
                {image ? (
                  <img
                    src={image}
                    alt={imageAlt || `${title} preview`}
                    className="featured-image"
                  />
                ) : (
                  <div className="featured-placeholder">
                    <span className="featured-placeholder-badge">
                      Project Preview
                    </span>

                    <div className="featured-placeholder-window">
                      <div className="featured-placeholder-topbar">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="featured-placeholder-content">
                        <div className="featured-placeholder-sidebar" />
                        <div className="featured-placeholder-main">
                          <div className="featured-line featured-line-lg" />
                          <div className="featured-line featured-line-md" />
                          <div className="featured-card-row">
                            <div className="featured-mini-panel" />
                            <div className="featured-mini-panel" />
                          </div>
                          <div className="featured-line featured-line-full" />
                          <div className="featured-line featured-line-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="featured-content">
              <span className="featured-eyebrow">{eyebrow}</span>

              <h2 className="featured-title">{title}</h2>

              {subtitle && <p className="featured-subtitle">{subtitle}</p>}

              <p className="featured-description">{description}</p>

              {features.length > 0 && (
                <div className="featured-block">
                  <h3 className="featured-block-title">Highlights</h3>
                  <ul className="featured-feature-list">
                    {features.map((feature) => (
                      <li key={feature} className="featured-feature-item">
                        <ArrowRight size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {stack.length > 0 && (
                <div className="featured-block">
                  <h3 className="featured-block-title">Built with</h3>
                  <div className="featured-stack">
                    {stack.map((item) => (
                      <span key={item} className="featured-stack-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="featured-actions">
                <a
                  className="button-primary"
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <ExternalLink size={16} style={{ marginLeft: 8 }} />
                </a>

                <a
                  className="button-secondary"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Github size={16} style={{ marginLeft: 8 }} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProject;