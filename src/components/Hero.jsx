import { content } from "../data/content";
import {
  FiCpu,
  FiActivity,
  FiGitBranch,
  FiTool,
  FiRadio,
  FiTrendingUp,
} from "react-icons/fi";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const labels = {
  en: ["Embedded", "Validation", "Interfaces", "Automation", "Radar", "Learning"],
  de: ["Embedded", "Validierung", "Schnittstellen", "Automatisierung", "Radar", "Lernen"],
};

export default function Hero({ language }) {
  const t = content[language].hero;
  const heroLabels = labels[language] || labels.en;

  return (
    <section className="hero section">
      <div className="hero-left">
        <p className="hero-greeting">{t.greeting}</p>
        <h1 className="hero-name-large">{t.name}</h1>
        <h2 className="hero-role">{t.title}</h2>

        <p className="hero-summary">{t.summary}</p>

        <div className="hero-symbol-row">
          <div className="hero-symbol-item">
            <FiCpu className="hero-symbol floating-icon" />
            <span>{heroLabels[0]}</span>
          </div>
          <div className="hero-symbol-item">
            <FiActivity className="hero-symbol pulse-icon" />
            <span>{heroLabels[1]}</span>
          </div>
          <div className="hero-symbol-item">
            <FiGitBranch className="hero-symbol signal-icon" />
            <span>{heroLabels[2]}</span>
          </div>
          <div className="hero-symbol-item">
            <FiTool className="hero-symbol rotate-icon" />
            <span>{heroLabels[3]}</span>
          </div>
          <div className="hero-symbol-item">
            <FiRadio className="hero-symbol floating-icon" />
            <span>{heroLabels[4]}</span>
          </div>
          <div className="hero-symbol-item">
            <FiTrendingUp className="hero-symbol pulse-icon" />
            <span>{heroLabels[5]}</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            {t.ctaPrimary}
          </a>

          <a
            href={assetPath("cv/Lokesh_CV.pdf")}
            download
            className="btn btn-secondary"
          >
            {t.ctaDownloadCv}
          </a>

          <a
            href="https://github.com/Lokisdp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            {t.ctaGithub}
          </a>

          <a
            href="https://www.linkedin.com/in/lokeshsdp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            {t.ctaLinkedIn}
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual-panel">
          <div className="hero-visual-glow"></div>

          <div className="hero-float-badge badge-one">Python</div>
          <div className="hero-float-badge badge-two">Robot Framework</div>
          <div className="hero-float-badge badge-three">Embedded Systems</div>
          <div className="hero-float-badge badge-four">Automation</div>
          <div className="hero-float-badge badge-five">Validation</div>

          <img
            src={assetPath("illustrations/hero-figure.png")}
            alt="Engineering illustration"
            className="hero-illustration"
          />
        </div>
      </div>
    </section>
  );
}
