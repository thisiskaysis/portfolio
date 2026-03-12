import Reveal from "./Reveal";

const exploringItems = [
  "Real-time features in collaborative applications",
  "Notification systems and richer user feedback loops",
  "Third-party integrations and more interactive experiences",
  "Building scalable APIs and stronger backend architecture",
];

function ExploringNext() {
  return (
    <section id="exploring-next" className="exploring-section">
      <div className="container">
        <Reveal>
          <span className="section-label">What I’m Exploring Next</span>
          <h2 className="section-title">Still building. Still evolving.</h2>
          <p className="section-copy">
            I’m excited by the next layer of full-stack development — the kinds
            of features and systems that make products feel more connected,
            responsive, and alive.
          </p>
        </Reveal>

        <div className="exploring-grid">
          {exploringItems.map((item, index) => (
            <Reveal key={item} delay={0.08 * index}>
              <article className="glass-card exploring-card">
                <span className="exploring-dot" />
                <p className="exploring-text">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploringNext;