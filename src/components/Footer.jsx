import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="contact-card">
        <div className="contact-header">
          <p className="section-kicker">Contact</p>
          <h2>Let’s Connect</h2>
          <p className="contact-intro">
            If you think my background fits your team, role, or project, I’d be
            glad to connect. I’m especially interested in engineering
            environments involving embedded systems, communication interfaces,
            validation, integration, and radar-related domains.
          </p>
        </div>

        <div className="contact-grid">
          <a className="contact-item" href="mailto:sdp.lokeshreddy@gmail.com">
            <span className="contact-icon">
              <FiMail />
            </span>
            <div>
              <h3>Email</h3>
              <p>sdp.lokeshreddy@gmail.com</p>
            </div>
          </a>

          <a
            className="contact-item"
            href="https://www.linkedin.com/in/lokeshsdp"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <FiLinkedin />
            </span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/lokeshsdp</p>
            </div>
          </a>

          <a
            className="contact-item"
            href="https://github.com/Lokisdp"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <FiGithub />
            </span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/Lokisdp</p>
            </div>
          </a>

          <div className="contact-item contact-static">
            <span className="contact-icon">
              <FiMapPin />
            </span>
            <div>
              <h3>Location</h3>
              <p>Chemnitz, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}