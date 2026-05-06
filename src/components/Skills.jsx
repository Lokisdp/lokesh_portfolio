import {
  FiCpu,
  FiActivity,
  FiGitBranch,
  FiTool,
  FiTrendingUp,
  FiMonitor,
} from "react-icons/fi";

export default function Skills() {
  return (
    <section className="skills-section section">
      <div className="skills-header">
        <p className="section-kicker">Core Capabilities</p>
        <h2>Skills That Travel Across Systems</h2>
        <p className="skills-intro">
          My strengths sit at the intersection of validation, communication-heavy
          systems, automation, and engineering adaptability across embedded and
          integration-focused environments.
        </p>
      </div>

      <div className="skills-focus-strip">
        <div className="skills-focus-icon-wrap">
          <FiCpu className="skills-focus-icon floating-icon" />
        </div>

        <div className="skills-focus-content">
          <h3>Engineering Focus</h3>
          <p>
            I work best in embedded, communication-driven, and validation-heavy
            environments where reliability, integration, and structured problem
            solving matter.
          </p>
        </div>

        <div className="skills-focus-tags">
          <span>Embedded</span>
          <span>Validation</span>
          <span>Integration</span>
        </div>
      </div>

      <div className="skills-cards-grid">
        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiActivity className="skills-card-icon pulse-icon" />
              <h3>Validation &amp; Testing</h3>
            </div>

            <div className="skills-card-level level-strong">
              <span>Strong</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            System-level testing, structured validation, debugging, and
            verification-oriented engineering workflows.
          </p>

          <div className="skills-tags">
            <span>System Validation</span>
            <span>V&amp;V</span>
            <span>Integration Testing</span>
            <span>Regression Testing</span>
            <span>Debugging</span>
            <span>Log Analysis</span>
          </div>
        </div>

        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiGitBranch className="skills-card-icon signal-icon" />
              <h3>Communication &amp; Interfaces</h3>
            </div>

            <div className="skills-card-level level-strong">
              <span>Strong</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            Working across protocol-driven systems where clean data flow and
            interface reliability are essential.
          </p>

          <div className="skills-tags">
            <span>CAN</span>
            <span>CAN-FD</span>
            <span>UDS</span>
            <span>DoIP</span>
            <span>TCP/IP</span>
            <span>REST</span>
            <span>UART</span>
            <span>Ethernet</span>
          </div>
        </div>

        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiTool className="skills-card-icon rotate-icon" />
              <h3>Automation &amp; Tooling</h3>
            </div>

            <div className="skills-card-level level-strong">
              <span>Strong</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            Building repeatable workflows using scripting, automation, and
            structured tooling to improve engineering efficiency.
          </p>

          <div className="skills-tags">
            <span>Python</span>
            <span>Robot Framework</span>
            <span>Linux</span>
            <span>DLT</span>
            <span>Git</span>
            <span>Jenkins</span>
            <span>Jira</span>
            <span>Confluence</span>
          </div>
        </div>

        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiCpu className="skills-card-icon floating-icon" />
              <h3>Systems &amp; Domains</h3>
            </div>

            <div className="skills-card-level level-growing">
              <span>Growing</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            A foundation shaped by embedded engineering, system integration,
            control systems, and growing radar-oriented problem solving.
          </p>

          <div className="skills-tags">
            <span>Embedded Systems</span>
            <span>System Integration</span>
            <span>Distributed Systems</span>
            <span>Control Systems</span>
            <span>Signal Processing</span>
            <span>Radar Fundamentals</span>
          </div>
        </div>

        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiMonitor className="skills-card-icon floating-icon" />
              <h3>Measurement &amp; Lab Tools</h3>
            </div>

            <div className="skills-card-level level-applied">
              <span>Applied</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            Hands-on work with hardware-oriented tools, prototyping platforms,
            and laboratory setups used for debugging, validation, and integration.
          </p>

          <div className="skills-tags">
            <span>Oscilloscope</span>
            <span>Battery Simulator</span>
            <span>Arduino</span>
            <span>Raspberry Pi</span>
            <span>STM32</span>
            <span>Test Bench Setup</span>
          </div>
        </div>

        <div className="skills-capability-card">
          <div className="skills-card-head">
            <div className="skills-card-top">
              <FiTrendingUp className="skills-card-icon pulse-icon" />
              <h3>Learning Agility</h3>
            </div>

            <div className="skills-card-level level-core">
              <span>Core</span>
              <div className="skills-level-bar">
                <i></i>
              </div>
            </div>
          </div>

          <p>
            In a fast-changing engineering world, what matters is not only what I
            know today, but how quickly I can learn, adapt, and contribute to what
            comes next.
          </p>

          <div className="skills-tags">
            <span>Adaptability</span>
            <span>Fast Learning</span>
            <span>Curiosity</span>
            <span>Growth Mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
}