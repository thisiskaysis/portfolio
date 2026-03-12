import Reveal from "./Reveal";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="glass-card contact-shell">
            <div className="contact-glow" />

            <div className="contact-content">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Let’s build something meaningful.</h2>
              <p className="section-copy">
                Whether it’s a role, a collaboration, or a conversation about
                creating digital experiences with real personality, I’d love to
                connect.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginTop: "28px",
                }}
              >
                <a className="button-primary" href="mailto:kaysisdigital@gmail.com">
                  <Mail size={18} style={{ marginRight: 8 }} />
                  Email
                </a>

                <a
                  className="button-secondary"
                  href="https://github.com/thisiskaysis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} style={{ marginRight: 8 }} />
                  GitHub
                </a>

                <a
                  className="button-secondary"
                  href="https://www.linkedin.com/in/kaysisdigital/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} style={{ marginRight: 8 }} />
                  LinkedIn
                </a>

                <a
                  className="button-secondary"
                  href="https://www.instagram.com/thisiskaysis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={18} style={{ marginRight: 8 }} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;