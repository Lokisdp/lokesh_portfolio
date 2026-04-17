import { content } from "../data/content";
import profilePhoto from "../assets/profile/profile-photo.jpg";

export default function Hero({ language }) {
  const t = content[language].hero;

  return (
    <section className="hero section">
      <div className="hero-text">
        <p className="hero-name">{t.name}</p>
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
        <p className="hero-description">{t.description}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            {t.ctaPrimary}
          </a>

          <a
            href="https://www.linkedin.com/in/lokeshsdp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            {t.ctaSecondary}
          </a>

          <a
            href="https://github.com/Lokisdp"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            {t.ctaGithub}
          </a>
        </div>
      </div>

      <div className="hero-image-card">
        <img
          src={profilePhoto}
          alt="Lokesh Reddy Sodanapalli"
          className="hero-image"
        />
      </div>
    </section>
  );
}