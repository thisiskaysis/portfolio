import Reveal from "./Reveal";

function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
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
        </Reveal>

        <div className="grid-2" style={{ marginTop: "32px" }}>
          <Reveal delay={0.08}>
            <div className="glass-card info-card info-card-violet">
              <h3 className="info-title">How I build</h3>
              <p className="info-copy">
                I care about creating experiences that are clean, accessible,
                and genuinely enjoyable to use. I’m especially interested in
                the full journey of building a product — from the interface
                people see to the systems working behind the scenes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass-card info-card info-card-icy">
              <h3 className="info-title">Beyond code</h3>
              <p className="info-copy">
                Outside of development, I volunteer at my church running the
                live production desk, helping manage audio and technical
                elements for weekly services. It’s a role that blends
                creativity, technology, focus, and teamwork — all things I
                value deeply.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;