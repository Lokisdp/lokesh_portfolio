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

export default function Hero({ language }) {
  const t = content[language].hero;

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
            <span>Embedded</span>
          </div>
          <div className="hero-symbol-item">
            <FiActivity className="hero-symbol pulse-icon" />
            <span>Validation</span>
          </div>
          <div className="hero-symbol-item">
            <FiGitBranch className="hero-symbol signal-icon" />
            <span>Interfaces</span>
          </div>
          <div className="hero-symbol-item">
            <FiTool className="hero-symbol rotate-icon" />
            <span>Automation</span>
          </div>
          <div className="hero-symbol-item">
            <FiRadio className="hero-symbol floating-icon" />
            <span>Radar</span>
          </div>
          <div className="hero-symbol-item">
            <FiTrendingUp className="hero-symbol pulse-icon" />
            <span>Learning</span>
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
