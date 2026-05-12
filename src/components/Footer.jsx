import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

const copy = {
  en: {
    kicker: "Contact",
    title: "Let's Connect",
    intro:
      "If you think my background fits your team, role, or project, I'd be glad to connect. I'm especially interested in engineering environments involving embedded systems, robotics, communication interfaces, validation, integration, and radar-related domains.",
    email: "Email",
    location: "Location",
  },
  de: {
    kicker: "Kontakt",
    title: "Lassen Sie uns vernetzen",
    intro:
      "Wenn mein Hintergrund zu Ihrem Team, Ihrer Rolle oder Ihrem Projekt passt, freue ich mich über eine Kontaktaufnahme. Besonders interessieren mich Engineering-Umgebungen mit Embedded Systems, Robotik, Kommunikationsschnittstellen, Validierung und Integration.",
    email: "E-Mail",
    location: "Standort",
  },
};

export default function Footer({ language = "en" }) {
  const t = copy[language] || copy.en;

  return (
    <footer className="footer">
      <div className="contact-card">
        <div className="contact-header">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="contact-intro">{t.intro}</p>
        </div>

        <div className="contact-grid">
          <a className="contact-item" href="mailto:sdp.lokeshreddy@gmail.com">
            <span className="contact-icon">
              <FiMail />
            </span>
            <div>
              <h3>{t.email}</h3>
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
              <h3>{t.location}</h3>
              <p>Chemnitz, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
