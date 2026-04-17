import LanguageToggle from "./LanguageToggle";
import { content } from "../data/content";

export default function Navbar({ language, setLanguage }) {
  const t = content[language];

  return (
    <header className="navbar">
      <div className="navbar-brand">Lokesh</div>

      <nav className="navbar-links">
        <a href="#about">{t.nav.about}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#thesis">{t.nav.thesis}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <LanguageToggle language={language} setLanguage={setLanguage} />
    </header>
  );
}