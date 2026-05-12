const copy = {
  en: {
    kicker: "About",
    title: "Validation, Integration, And Systems Thinking",
    paragraphs: [
      "I am an Embedded Systems Test and Integration Engineer with experience validating and debugging complex distributed systems. My work focuses on system-level verification, communication interfaces, and automation across embedded environments.",
      "I have hands-on experience with communication protocols such as CAN, UDS, DoIP, TCP/IP, and UART, along with building Python-based automation workflows for system validation and testing.",
      "My interests sit across system integration, communication networks, validation, and complex engineering systems, making my skills relevant across automotive, robotics, aviation, defense, sensor systems, and industrial domains.",
    ],
  },
  de: {
    kicker: "Über mich",
    title: "Validierung, Integration Und Systemdenken",
    paragraphs: [
      "Ich bin Embedded-Systems-Test- und Integrationsingenieur mit Erfahrung in der Validierung und Fehlersuche komplexer verteilter Systeme. Mein Fokus liegt auf Systemverifikation, Kommunikationsschnittstellen und Automatisierung in Embedded-Umgebungen.",
      "Ich habe praktische Erfahrung mit Kommunikationsprotokollen wie CAN, UDS, DoIP, TCP/IP und UART sowie mit Python-basierten Automatisierungsabläufen für Systemvalidierung und Testing.",
      "Meine Interessen liegen in Systemintegration, Kommunikationsnetzwerken, Validierung und komplexen Engineering-Systemen. Dadurch sind meine Fähigkeiten für Automotive, Robotik, Luftfahrt, Verteidigung, Sensorsysteme und industrielle Domänen relevant.",
    ],
  },
};

export default function About({ language = "en" }) {
  const t = copy[language] || copy.en;

  return (
    <section className="about-section section">
      <div className="about-card">
        <p className="section-kicker">{t.kicker}</p>
        <h2>{t.title}</h2>
        {t.paragraphs.map((paragraph) => (
          <p className="about-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
