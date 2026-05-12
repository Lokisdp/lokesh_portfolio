import {
  FiCpu,
  FiActivity,
  FiGitBranch,
  FiTool,
  FiTrendingUp,
  FiMonitor,
} from "react-icons/fi";

const icons = [FiActivity, FiGitBranch, FiTool, FiCpu, FiMonitor, FiTrendingUp];

const copy = {
  en: {
    kicker: "Core Capabilities",
    title: "Skills That Travel Across Systems",
    intro:
      "My strengths sit at the intersection of validation, communication-heavy systems, automation, and engineering adaptability across embedded and integration-focused environments.",
    focusTitle: "Engineering Focus",
    focus:
      "I work best in embedded, communication-driven, and validation-heavy environments where reliability, integration, and structured problem solving matter.",
    focusTags: ["Embedded", "Validation", "Integration"],
    levels: ["Strong", "Strong", "Strong", "Growing", "Applied", "Core"],
    cards: [
      {
        title: "Validation & Testing",
        text: "System-level testing, structured validation, debugging, and verification-oriented engineering workflows.",
        tags: ["System Validation", "V&V", "Integration Testing", "Regression Testing", "Debugging", "Log Analysis"],
      },
      {
        title: "Communication & Interfaces",
        text: "Working across protocol-driven systems where clean data flow and interface reliability are essential.",
        tags: ["CAN", "CAN-FD", "UDS", "DoIP", "TCP/IP", "REST", "UART", "Ethernet"],
      },
      {
        title: "Automation & Tooling",
        text: "Building repeatable workflows using scripting, automation, and structured tooling to improve engineering efficiency.",
        tags: ["Python", "Robot Framework", "Linux", "DLT", "Git", "Jenkins", "Jira", "Confluence"],
      },
      {
        title: "Systems & Domains",
        text: "A foundation shaped by embedded engineering, system integration, control systems, and growing radar-oriented problem solving.",
        tags: ["Embedded Systems", "System Integration", "Distributed Systems", "Control Systems", "Signal Processing", "Radar Fundamentals"],
      },
      {
        title: "Measurement & Lab Tools",
        text: "Hands-on work with hardware-oriented tools, prototyping platforms, and laboratory setups used for debugging, validation, and integration.",
        tags: ["Oscilloscope", "Battery Simulator", "Arduino", "Raspberry Pi", "STM32", "Test Bench Setup"],
      },
      {
        title: "Learning Agility",
        text: "In a fast-changing engineering world, what matters is not only what I know today, but how quickly I can learn, adapt, and contribute to what comes next.",
        tags: ["Adaptability", "Fast Learning", "Curiosity", "Growth Mindset"],
      },
    ],
  },
  de: {
    kicker: "Kernkompetenzen",
    title: "Kompetenzen Für Unterschiedliche Systeme",
    intro:
      "Meine Stärken liegen an der Schnittstelle von Validierung, kommunikationsintensiven Systemen, Automatisierung und technischer Anpassungsfähigkeit.",
    focusTitle: "Technischer Fokus",
    focus:
      "Ich arbeite besonders gern in eingebetteten, schnittstellengetriebenen und validierungsintensiven Umgebungen, in denen Zuverlässigkeit, Integration und strukturiertes Problemlösen wichtig sind.",
    focusTags: ["Embedded", "Validierung", "Integration"],
    levels: ["Stark", "Stark", "Stark", "Wachsend", "Angewandt", "Kern"],
    cards: [
      {
        title: "Validierung & Testing",
        text: "Systemtests, strukturierte Validierung, Debugging und verifikationsorientierte Engineering-Workflows.",
        tags: ["Systemvalidierung", "V&V", "Integrationstests", "Regressionstests", "Debugging", "Log-Analyse"],
      },
      {
        title: "Kommunikation & Schnittstellen",
        text: "Arbeit mit protokollgetriebenen Systemen, bei denen Datenfluss und Schnittstellenzuverlässigkeit entscheidend sind.",
        tags: ["CAN", "CAN-FD", "UDS", "DoIP", "TCP/IP", "REST", "UART", "Ethernet"],
      },
      {
        title: "Automatisierung & Tools",
        text: "Aufbau wiederholbarer Abläufe mit Skripting, Automatisierung und strukturiertem Tooling.",
        tags: ["Python", "Robot Framework", "Linux", "DLT", "Git", "Jenkins", "Jira", "Confluence"],
      },
      {
        title: "Systeme & Domänen",
        text: "Grundlage aus Embedded Engineering, Systemintegration, Regelungstechnik und wachsender radarorientierter Erfahrung.",
        tags: ["Embedded Systems", "Systemintegration", "Verteilte Systeme", "Regelungstechnik", "Signalverarbeitung", "Radar-Grundlagen"],
      },
      {
        title: "Mess- & Labortools",
        text: "Praktische Arbeit mit hardwareorientierten Tools, Prototyping-Plattformen und Laboraufbauten.",
        tags: ["Oszilloskop", "Batteriesimulator", "Arduino", "Raspberry Pi", "STM32", "Testbench"],
      },
      {
        title: "Lernfähigkeit",
        text: "In einer schnellen technischen Welt zählt nicht nur, was ich heute weiß, sondern wie schnell ich lernen, mich anpassen und beitragen kann.",
        tags: ["Anpassungsfähigkeit", "Schnelles Lernen", "Neugier", "Growth Mindset"],
      },
    ],
  },
};

export default function Skills({ language = "en" }) {
  const t = copy[language] || copy.en;

  return (
    <section className="skills-section section">
      <div className="skills-header">
        <p className="section-kicker">{t.kicker}</p>
        <h2>{t.title}</h2>
        <p className="skills-intro">{t.intro}</p>
      </div>

      <div className="skills-focus-strip">
        <div className="skills-focus-icon-wrap">
          <FiCpu className="skills-focus-icon floating-icon" />
        </div>

        <div className="skills-focus-content">
          <h3>{t.focusTitle}</h3>
          <p>{t.focus}</p>
        </div>

        <div className="skills-focus-tags">
          {t.focusTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="skills-cards-grid">
        {t.cards.map((card, index) => {
          const Icon = icons[index];
          const levelClass = index === 3 ? "level-growing" : index === 4 ? "level-applied" : index === 5 ? "level-core" : "level-strong";

          return (
            <div className="skills-capability-card" key={card.title}>
              <div className="skills-card-head">
                <div className="skills-card-top">
                  <Icon className="skills-card-icon pulse-icon" />
                  <h3>{card.title}</h3>
                </div>
                <div className={`skills-card-level ${levelClass}`}>
                  <span>{t.levels[index]}</span>
                  <div className="skills-level-bar"><i></i></div>
                </div>
              </div>
              <p>{card.text}</p>
              <div className="skills-tags">
                {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
