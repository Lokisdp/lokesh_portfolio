export default function Navbar({ language, setLanguage }) {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#top" className="navbar-brand">
        Lokesh
      </a>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
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