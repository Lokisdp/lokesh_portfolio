export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>

      <button
        className={language === "de" ? "active" : ""}
        onClick={() => setLanguage("de")}
      >
        DE
      </button>
    </div>
  );
}