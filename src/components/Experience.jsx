const experiences = [
  {
    company: "Joynext GmbH",
    logo: "/logos/joynext.png",
    role: "Test Automation Engineer",
    type: "Working Student",
    period: "01/2026 – Present",
    location: "Dresden, Germany",
    summary:
      "Automation and system validation for smart Antenna testing.",
    highlights: [
      "Built Python libraries and Robot Framework keywords for SSH- and UART-based ECU testing.",
      "Designed automated validation workflows for RTCU lifecycle, low-power modes, and power management.",
      "Translated requirements into structured test cases, validation planning, and debugging workflows.",
    ],
    tags: ["Python", "Robot Framework", "CAN", "UDS", "DoIP", "Linux"],
  },
  {
    company: "Mbition GmbH",
    logo: "/logos/mbition.png",
    role: "Software Test Engineer",
    type: "Working Student",
    period: "12/2024 – 07/2025",
    location: "Berlin, Germany",
    summary:
      "System and integration testing in the Mercedes-Benz infotainment domain.",
    highlights: [
      "Worked on system, integration, and regression testing for infotainment domain controllers.",
      "Developed automated test scripts using Python and Robot Framework.",
      "Performed network-level testing, log-based debugging, and validation in Linux and QNX environments.",
    ],
    tags: [
      "Infotainment",
      "Python",
      "Robot Framework",
      "Ethernet",
      "TCP/IP",
      "QNX",
    ],
  },
  {
    company: "Continental ADC GmbH",
    logo: "/logos/continental.png",
    role: "System Integration & Test Engineering Intern",
    type: "Internship",
    period: "05/2024 – 10/2024",
    location: "Ulm, Germany",
    summary:
      "System integration and validation work focused on radar sensors and ECU setups.",
    highlights: [
      "Developed HIL-like test bench setups for ADAS radar sensors and ECUs.",
      "Automated flashing, logging, and test execution using Python-based workflows.",
      "Debugged system issues and helped reduce ECU CPU load significantly through root-cause analysis.",
    ],
    tags: [
      "Radar",
      "ADAS",
      "Python",
      "CAN",
      "Automotive Ethernet",
      "System Integration",
    ],
  },
  {
    company: "Tata Consultancy Services",
    logo: "/logos/tcs.png",
    role: "Assistant System Engineer",
    type: "Full-Time",
    period: "06/2021 – 08/2022",
    location: "Bengaluru, India",
    summary:
      "Infotainment system validation for Jaguar Land Rover in an Agile environment.",
    highlights: [
      "Performed infotainment validation using hardware test rigs and structured test workflows.",
      "Handled functional, acoustic, and non-functional testing including speech and Alexa-related features.",
      "Collaborated with engineering teams on defect tracking, issue analysis, and quality assurance.",
    ],
    tags: ["Infotainment", "Validation", "Hardware Rigs", "Jira", "Agile", "JLR"],
  },
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const copy = {
  en: {
    kicker: "Experience",
    title: "Where I Built My Engineering Practice",
    intro:
      "A concise view of the environments I have worked in — from embedded validation and automation to infotainment systems, radar integration, and test-bench development.",
  },
  de: {
    kicker: "Erfahrung",
    title: "Wo Ich Meine Engineering-Praxis Aufgebaut Habe",
    intro:
      "Ein kompakter Überblick über meine Arbeitsumgebungen – von Embedded-Validierung und Automatisierung bis zu Infotainment-Systemen, Radarintegration und Testbench-Entwicklung.",
  },
};

export default function Experience({ language = "en" }) {
  const t = copy[language] || copy.en;

  return (
    <section className="experience-section section">
      <div className="experience-section-header">
        <p className="section-kicker">{t.kicker}</p>
        <h2>{t.title}</h2>
        <p className="experience-section-intro">{t.intro}</p>
      </div>

      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.role}`}>
            <div className="experience-card-header">
              <div className="experience-logo-wrap">
                <img
                  src={assetPath(item.logo.replace(/^\//, ""))}
                  alt={`${item.company} logo`}
                  className="experience-logo"
                />
              </div>

              <span className="experience-type-badge">{item.type}</span>
            </div>

            <h3 className="experience-role">{item.role}</h3>
            <p className="experience-company">{item.company}</p>
            <p className="experience-meta">
              {item.period} · {item.location}
            </p>

            <p className="experience-summary">{item.summary}</p>

            <ul className="experience-highlights">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="experience-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
