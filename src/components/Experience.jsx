export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-list">
        <div className="experience-card">
          <div className="experience-header">
            <h3>System Automation Engineer – Joynext GmbH</h3>
            <span>01/2026 – Present | Dresden, Germany</span>
          </div>
          <p>
            Python-based automation, protocol validation, system-level testing,
            and debugging for embedded communication systems.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h3>Software Test Working Student – Mbition GmbH</h3>
            <span>12/2024 – 07/2025 | Berlin, Germany</span>
          </div>
          <p>
            System, integration, and regression testing with Python, Robot Framework,
            Linux-based environments, and network-oriented validation workflows.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h3>System Integration and Test Engineering Intern – Continental ADC GmbH</h3>
            <span>05/2024 – 10/2024 | Ulm, Germany</span>
          </div>
          <p>
            Test bench development, ADAS sensor and ECU validation, flashing and logging
            automation, and embedded system debugging.
          </p>
        </div>
      </div>
    </section>
  );
}