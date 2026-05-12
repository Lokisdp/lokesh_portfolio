const navLabels = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  de: {
    about: "Über mich",
    skills: "Kenntnisse",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt",
  },
};

export default function Navbar({ language, setLanguage }) {
  const labels = navLabels[language] || navLabels.en;
  const navItems = [
    { label: labels.about, href: "#top" },
    { label: labels.skills, href: "#skills" },
    { label: labels.experience, href: "#experience" },
    { label: labels.projects, href: "#projects" },
    { label: labels.contact, href: "#contact" },
  ];

  const scrollToSection = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    const navbar = document.querySelector(".navbar");

    if (!target) {
      return;
    }

    const offset = (navbar?.offsetHeight || 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <a
        href="#top"
        className="navbar-brand"
        onClick={(event) => scrollToSection(event, "#top")}
      >
        Lokesh
      </a>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => scrollToSection(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="language-toggle">
        <button
          type="button"
          className={language === "en" ? "active" : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <button
          type="button"
          className={language === "de" ? "active" : ""}
          onClick={() => setLanguage("de")}
        >
          DE
        </button>
      </div>
    </header>
  );
}
