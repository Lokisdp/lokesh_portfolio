const copy = {
  en: {
    label: "Quick Note",
    text1:
      "Thanks for checking out my profile. If you're a recruiter, I hope my background aligns with what you're looking for.",
    text2:
      "And if you're just passing by, feel free to share my profile with someone who might find it relevant.",
  },
  de: {
    label: "Kurzer Hinweis",
    text1:
      "Danke, dass Sie sich mein Profil ansehen. Wenn Sie aus dem Recruiting kommen, hoffe ich, dass mein Hintergrund zu Ihrer Suche passt.",
    text2:
      "Wenn Sie nur vorbeischauen, teilen Sie mein Profil gern mit jemandem, für den es relevant sein könnte.",
  },
};

export default function IntroMessage({ language = "en" }) {
  const t = copy[language] || copy.en;

  return (
    <section className="intro-message section">
      <div className="sticky-note-wrap">
        <div className="sticky-pin"></div>

        <div className="sticky-note">
          <p className="sticky-note-label">{t.label}</p>
          <p className="sticky-note-text">{t.text1}</p>
          <p className="sticky-note-text">{t.text2}</p>
        </div>
      </div>
    </section>
  );
}
