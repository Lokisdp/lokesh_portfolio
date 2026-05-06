export default function WhyHireMe() {
  return (
    <section className="why-hire section">
      <div className="why-hire-grid">
        <div className="why-hire-left">
          <p className="section-kicker">Recruiter View</p>
          <h2>Why should you hire me?</h2>

          <p className="why-hire-intro">
            I bring a mix of system-level thinking, protocol-oriented engineering,
            and automation mindset that fits complex technical environments. My
            work is centered around understanding how components interact, how
            communication flows behave, and how validation can be made reliable,
            scalable, and efficient.
          </p>

          <div className="why-hire-cards">
            <div className="why-card">
              <h3>Systems Thinking</h3>
              <p>
                I approach engineering problems at system level, not just as isolated tasks.
              </p>
            </div>

            <div className="why-card">
              <h3>Communication & Integration</h3>
              <p>
                I work comfortably with interfaces, protocols, and interconnected embedded environments.
              </p>
            </div>

            <div className="why-card">
              <h3>Automation Mindset</h3>
              <p>
                I look for repeatable, efficient workflows using Python and structured validation approaches.
              </p>
            </div>
          </div>
        </div>

        <div className="why-hire-right">
          <div className="why-visual-card">
            <div className="why-visual-badge">Animation / visual here later</div>
            <div className="why-visual-emoji">🧠⚙️📡</div>
            <p>
              This area can later hold an illustration, animated character, or a stronger
              visual metaphor for engineering mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}