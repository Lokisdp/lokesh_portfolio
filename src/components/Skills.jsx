export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Core Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Systems & Validation</h3>
          <ul>
            <li>System Integration</li>
            <li>Verification & Validation (V-Model)</li>
            <li>Debugging & Log Analysis</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Communication & Networks</h3>
          <ul>
            <li>CAN, UDS, DoIP</li>
            <li>TCP/IP, REST, HTTP</li>
            <li>UART / Serial Communication</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Automation & Tools</h3>
          <ul>
            <li>Python (Automation & Scripting)</li>
            <li>Robot Framework</li>
            <li>Linux (DLT, System Logs)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Platforms & Domains</h3>
          <ul>
            <li>Embedded Systems</li>
            <li>Distributed Systems</li>
            <li>Real-time Environments</li>
          </ul>
        </div>

      </div>
    </section>
  );
}