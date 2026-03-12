import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">
            A developer becoming exactly who she was meant to be.
          </h2>
          <p className="section-copy">
            I’m drawn to software development because it brings together
            creativity, structure, problem solving, and vision. I love the
            process of taking an idea and shaping it into something real —
            something people can interact with, connect with, and remember.
          </p>
        </motion.div>

        <div className="grid-2" style={{ marginTop: "32px" }}>
          <motion.div
            className="glass-card info-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h3 className="info-title">How I build</h3>
            <p className="info-copy">
              I care about creating experiences that are clean, accessible, and
              genuinely enjoyable to use. I’m especially interested in the full
              journey of building a product — from the interface people see to
              the systems working behind the scenes.
            </p>
          </motion.div>

          <motion.div
            className="glass-card info-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="info-title">Beyond code</h3>
            <p className="info-copy">
              Outside of development, I volunteer at my church running the live
              production desk, helping manage audio and technical elements for
              weekly services. It’s a role that blends creativity, technology,
              focus, and teamwork — all things I value deeply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;