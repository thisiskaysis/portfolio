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
            creativity, structure, and problem solving. I love the process of
            taking an idea and shaping it into something real - something people
            can interact with, explore, and genuinely enjoy using. What excites
            me most about development is the combination of technical thinking
            and human experience. I love building products
            that feel polished, expressive, and intuitive from the very first
            interaction.
          </p>
        </Reveal>

        <div className="grid-2" style={{ marginTop: "32px" }}>
          <Reveal delay={0.08}>
            <div className="glass-card info-card info-card-violet">
              <h3 className="info-title">My approach</h3>
              <p className="info-copy">
                I care about creating experiences that are clean, accessible,
                and genuinely enjoyable to use. I’m especially interested in the
                full journey of building a product - from the interface people
                see to the systems working behind the scenes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="glass-card info-card info-card-icy">
              <h3 className="info-title">Beyond the editor</h3>
              <p className="info-copy">
                Outside of development, I volunteer on the live production desk
                at my church, helping manage audio and technical elements for
                weekly services.<br></br> It’s a role that requires focus, timing,
                collaboration, and calm problem-solving - qualities that carry
                naturally into the way I approach building software.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
