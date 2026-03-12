import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          style={{ padding: "32px" }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let’s connect.</h2>
          <p className="section-copy">
            Whether it’s a role, a collaboration, or just a conversation about
            building meaningful things, I’d love to hear from you.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "28px",
            }}
          >
            <a className="button-primary" href="mailto:youremail@example.com">
              <Mail size={18} style={{ marginRight: 8 }} />
              Email
            </a>

            <a className="button-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} style={{ marginRight: 8 }} />
              GitHub
            </a>

            <a className="button-secondary" href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} style={{ marginRight: 8 }} />
              LinkedIn
            </a>

            <a className="button-secondary" href="https://instagram.com/" target="_blank" rel="noreferrer">
              <Instagram size={18} style={{ marginRight: 8 }} />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;