const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const questionBank = {
  start: [
    "What roles fit Lokesh?",
    "What are Lokesh's strongest skills?",
    "Tell me about his work experience",
    "Which project should I open first?",
  ],
  menu: [
    "What roles fit Lokesh?",
    "What industries interest Lokesh?",
    "What are Lokesh's strongest skills?",
    "Tell me about his work experience",
    "Is Lokesh a good person to work with?",
    "Is Lokesh only focused on radar?",
    "Which project should I open first?",
    "What are Lokesh's hobbies?",
    "How can I contact Lokesh?",
  ],
  skills: [
    "What tools does Lokesh use?",
    "Does Lokesh know automotive protocols?",
    "What is his testing background?",
    "Which experience proves these skills?",
  ],
  experience: [
    "What did he do at Joynext?",
    "What did he do at Mbition?",
    "What did he do at Continental?",
    "What did he do at TCS?",
  ],
  projects: [
    "Explain the radar thesis",
    "Tell me about the STM32 project",
    "Tell me about the energy project",
    "Which skills do these projects show?",
  ],
  contact: [
    "How can I contact Lokesh?",
    "Where is his LinkedIn?",
    "Where is his GitHub?",
    "Where can I download the CV?",
  ],
};

export const initialLokiMessages = [
  {
    from: "bot",
    text: "Hi, I am Loki. Ask me about Lokesh's skills, experience, projects, CV, or contact details. You can also pick one of the questions below.",
  },
];

export const quickActions = [
  {
    label: "Email",
    href: "mailto:sdp.lokeshreddy@gmail.com",
  },
  {
    label: "CV",
    href: assetPath("cv/Lokesh_CV.pdf"),
    download: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lokeshsdp",
  },
  {
    label: "GitHub",
    href: "https://github.com/Lokisdp",
  },
];

export const knowledgeBase = [
  {
    id: "roles",
    priority: 9,
    keywords: [
      "role",
      "roles",
      "fit",
      "job",
      "position",
      "hire",
      "candidate",
      "suitable",
      "looking",
      "itest",
      "test engineer",
      "validation engineer",
      "verification engineer",
      "system integration",
      "embedded test",
      "automation",
    ],
    answer:
      "Lokesh is primarily looking for full-time roles in validation, verification, testing, system integration, embedded systems, and test automation. Strong matches include Validation Engineer, Verification Engineer, Test Engineer, System Integration Engineer, Embedded Test Engineer, Test Automation Engineer, Systems Engineer, and System Validation Engineer. In the long term, he is interested in growing toward Technical Architect or Test Architect responsibilities, especially around system validation, integration strategy, and test architecture.",
    more:
      "The best-fit environments are technical teams where requirements, interfaces, test strategy, debugging, automation, and system reliability all matter. He is especially comfortable around embedded and communication-heavy systems.",
    suggestions: ["What industries interest Lokesh?", "What are Lokesh's strongest skills?", "Is he open to full-time roles?"],
  },
  {
    id: "industries",
    priority: 10,
    keywords: [
      "industry",
      "industries",
      "automotive",
      "autonomous",
      "adas",
      "robotics",
      "robot",
      "aviation",
      "aerospace",
      "defense",
      "defence",
      "drone",
      "drones",
      "sensor",
      "sensors",
      "mobility",
      "control",
    ],
    answer:
      "Lokesh is interested in complex engineering systems where hardware, software, interfaces, communication, and validation come together. His target industries include automotive, autonomous vehicles, ADAS, robotics, aviation, defense, drones, embedded systems, sensor-based systems, intelligent mobility, and control-oriented systems.",
    more:
      "The common thread is not one industry label. It is system-level engineering: understanding behavior, validating reliability, debugging interfaces, and helping teams build confidence in complex technical products.",
    suggestions: ["What roles fit Lokesh?", "Is Lokesh only focused on radar?", "What makes his profile strong?"],
  },
  {
    id: "question-menu",
    priority: 20,
    keywords: [
      "what questions",
      "which questions",
      "questions can",
      "can i ask",
      "can you answer",
      "what can i ask",
      "what can you answer",
      "menu",
      "options",
      "topics",
      "help",
    ],
    answer:
      "You can ask me about Lokesh's role fit, target industries, skills, work experience, projects, master's thesis, radar interest, tools, protocols, contact details, CV, LinkedIn, GitHub, location, hobbies, relocation, and full-time availability. Pick one of the questions below or type your own.",
    suggestions: questionBank.menu,
  },
  {
    id: "about",
    priority: 5,
    keywords: ["about", "lokesh", "profile", "summary", "introduction", "intro", "tell", "who"],
    answer:
      "Lokesh is an embedded systems and validation-focused engineer with experience in testing, verification, automation, system integration, and communication-heavy technical environments. His profile combines embedded systems knowledge, test automation, communication protocols, debugging, and structured validation experience. He is curious, adaptable, and interested in technically challenging systems across multiple industries.",
    more:
      "A short recruiter version: Lokesh brings practical validation experience, automation ability, protocol awareness, and a fast-learning mindset for embedded and system-level engineering environments.",
    suggestions: ["What roles fit Lokesh?", "What are Lokesh's strongest skills?", "How can I contact Lokesh?"],
  },
  {
    id: "skills",
    priority: 8,
    keywords: ["skill", "skills", "strong", "strength", "tech", "technology", "stack", "python", "robot framework", "linux", "automation"],
    answer:
      "Lokesh's strengths include system testing, integration testing, regression testing, verification and validation, test automation, test case creation, requirement-based validation, debugging, root cause analysis, and log analysis. On the technical side, he works with Python, Robot Framework, C, C++, Linux, Git, MATLAB, and Simulink.",
    more:
      "His practical value is the combination: he can understand requirements, translate them into test cases, automate checks, analyze logs, debug failures, and communicate findings in an engineering workflow.",
    suggestions: questionBank.skills,
  },
  {
    id: "tools",
    priority: 8,
    keywords: ["tool", "tools", "canoe", "candb", "dlt", "jira", "confluence", "jenkins", "gitlab", "odis", "polarion", "oscilloscope", "arduino", "raspberry", "stm32", "battery", "bench"],
    answer:
      "Lokesh has experience or exposure with CANoe, CANdb++, DLT tools, Jira, Confluence, Jenkins, GitLab CI, ODIS, Polarion, oscilloscopes, Arduino, Raspberry Pi, STM32, battery simulators, and test bench hardware.",
    suggestions: ["Does Lokesh know automotive protocols?", "What is his testing background?", "What roles fit Lokesh?"],
  },
  {
    id: "protocols",
    priority: 9,
    keywords: ["protocol", "protocols", "can", "can-fd", "uds", "doip", "tcp", "ip", "uart", "serial", "ethernet", "interface", "interfaces", "communication", "rest"],
    answer:
      "Yes. Lokesh has worked with communication-heavy embedded and automotive systems involving CAN, CAN-FD, UDS, DoIP, Automotive Ethernet, TCP/IP, UART/Serial, and REST. His experience is validation and integration focused, so he uses these interfaces to test behavior, debug failures, automate checks, and connect systems reliably.",
    suggestions: ["What are Lokesh's strongest skills?", "What did he do at Joynext?", "What did he do at Continental?"],
  },
  {
    id: "experience",
    priority: 8,
    keywords: ["experience", "work", "worked", "company", "companies", "career", "background", "history"],
    answer:
      "Lokesh has worked in embedded and automotive environments involving ECU and system validation, infotainment testing, Python-based test automation, Robot Framework, communication protocol testing, log analysis, debugging, system integration, test bench development, and requirement-to-test translation.",
    more:
      "His experience spans Joynext, Mbition, Continental ADC, and Tata Consultancy Services, with work across smart antenna testing, infotainment validation, ADAS radar integration, test benches, and automated validation workflows.",
    suggestions: questionBank.experience,
  },
  {
    id: "joynext",
    priority: 10,
    keywords: ["joynext", "antenna", "rtcu", "ssh", "low-power", "power", "present"],
    answer:
      "At Joynext GmbH, Lokesh works as a Test Automation Engineer working student. He builds Python libraries and Robot Framework keywords for SSH and UART based ECU testing, and validates RTCU lifecycle behavior, low-power modes, and power management workflows.",
    suggestions: ["What tools does Lokesh use?", "Does Lokesh know automotive protocols?", "What roles fit Lokesh?"],
  },
  {
    id: "mbition",
    priority: 10,
    keywords: ["mbition", "mercedes", "benz", "infotainment", "qnx", "regression"],
    answer:
      "At Mbition GmbH, Lokesh worked on system, integration, and regression testing in the Mercedes-Benz infotainment domain. He developed Python and Robot Framework test scripts, performed network-level testing, analyzed logs, and worked in Linux and QNX environments.",
    suggestions: ["What is his testing background?", "What tools does Lokesh use?", "Which project should I open first?"],
  },
  {
    id: "continental",
    priority: 10,
    keywords: ["continental", "adas", "radar", "sensor", "hil", "ecu", "flashing"],
    answer:
      "At Continental ADC GmbH, Lokesh worked on system integration and validation for ADAS radar sensors and ECU setups. He developed HIL-like test bench setups, automated flashing, logging, and execution flows with Python, and supported debugging and root-cause analysis.",
    suggestions: ["Explain the radar thesis", "Does Lokesh know automotive protocols?", "What roles fit Lokesh?"],
  },
  {
    id: "tcs",
    priority: 10,
    keywords: ["tcs", "tata", "jlr", "jaguar", "land rover", "alexa", "speech"],
    answer:
      "At Tata Consultancy Services, Lokesh worked as an Assistant System Engineer on infotainment validation for Jaguar Land Rover. He used hardware test rigs, handled functional and non-functional testing, worked on speech and Alexa-related features, and collaborated on issue analysis in Agile workflows.",
    suggestions: ["Tell me about his work experience", "What is his testing background?", "How can I contact Lokesh?"],
  },
  {
    id: "projects",
    priority: 8,
    keywords: ["project", "projects", "portfolio", "thesis", "research", "work", "showcase"],
    answer:
      "The best project to open first is the master's thesis on ego-motion validation using synthetic radar data. It shows Python, radar data handling, validation thinking, robustness analysis, and structured engineering. He also has projects on MATLAB/Simulink home energy management and STM32 DSP analysis methods.",
    suggestions: questionBank.projects,
  },
  {
    id: "radar-focus",
    priority: 12,
    keywords: ["only radar", "focused on radar", "radar only", "radar focus", "only focused"],
    answer:
      "No. Radar is one of Lokesh's technical interests and a growing skill area, but it is not his only domain focus. His broader profile includes embedded validation, integration, automation, communication interfaces, and system testing across multiple domains.",
    suggestions: ["What industries interest Lokesh?", "What roles fit Lokesh?", "What makes his profile strong?"],
  },
  {
    id: "radar-thesis",
    priority: 9,
    keywords: ["radar", "ego", "motion", "synthetic", "velocity", "yaw", "yaw-rate", "matlab"],
    answer:
      "The radar thesis is a Python-based validation framework for ego-motion algorithm performance using synthetic radar data. The focus is on velocity, yaw-rate, and robustness analysis. It shows radar-oriented validation and sensor-related interest, but radar should be treated as one growing skill area within Lokesh's broader embedded validation and system integration profile.",
    suggestions: ["Which skills do these projects show?", "What did he do at Continental?", "What roles fit Lokesh?"],
  },
  {
    id: "stm32",
    priority: 9,
    keywords: ["stm32", "dsp", "goertzel", "dft", "dtft", "signal"],
    answer:
      "The STM32 project involved implementing Goertzel, DFT, and DTFT based signal analysis methods on STM32 microcontrollers. It shows embedded implementation, DSP fundamentals, and validation-oriented thinking on constrained hardware.",
    suggestions: ["Tell me about the energy project", "What are Lokesh's strongest skills?", "Which project should I open first?"],
  },
  {
    id: "energy",
    priority: 9,
    keywords: ["energy", "pv", "battery", "simulink", "matlab", "control", "grid"],
    answer:
      "The home energy management project used MATLAB/Simulink to model a grid-connected PV system with battery management and control-oriented energy optimization. It shows control systems, modeling, and system-level thinking.",
    suggestions: ["Tell me about the STM32 project", "Which skills do these projects show?", "How can I contact Lokesh?"],
  },
  {
    id: "contact",
    priority: 9,
    keywords: ["contact", "email", "mail", "linkedin", "github", "reach", "cv", "resume", "download", "location", "interview", "schedule"],
    answer:
      "You can contact Lokesh at sdp.lokeshreddy@gmail.com. His LinkedIn is linkedin.com/in/lokeshsdp, his GitHub is github.com/Lokisdp, and the CV is available from the hero section. Reach out to him for more information, role-fit discussion, or to schedule an interview appointment. He is based in Chemnitz, Germany.",
    suggestions: questionBank.contact,
  },
  {
    id: "profile-strength",
    priority: 9,
    keywords: ["strong", "strength", "profile strong", "why hire", "hire", "good candidate", "makes his profile", "why lokesh"],
    answer:
      "Lokesh combines hands-on validation experience with automation, embedded systems understanding, communication protocols, debugging, and system-level thinking. He is a fast learner, adaptable across domains and tools, comfortable in cross-functional engineering teams, and focused on reliability, structure, and process improvement.",
    suggestions: ["What roles fit Lokesh?", "What industries interest Lokesh?", "How can I contact Lokesh?"],
  },
  {
    id: "personality",
    priority: 11,
    keywords: ["good guy", "bad guy", "good person", "bad person", "nice", "kind", "friendly", "attitude", "personality", "team player", "work with him", "working with him", "trust", "reliable"],
    answer:
      "Good guy? You may struggle to find a better one. Lokesh is reliable, curious, helpful, and serious about growing without making the room heavy. He learns quickly, supports people around him, and brings a steady problem-solving attitude to teams. Speaking as Loki, I am also personally grateful to him. He helped me grow from a tiny portfolio button into a proper chatbot, so yes, I am biased, but I stand by it.",
    suggestions: ["What makes his profile strong?", "What are Lokesh's hobbies?", "How can I contact Lokesh?"],
  },
  {
    id: "weakness",
    priority: 9,
    keywords: ["weakness", "weaknesses", "improve", "improvement", "bad at", "lacking", "challenge", "challenges"],
    answer:
      "Lokesh is still growing, especially as he expands into broader industries and deeper system-level responsibility. The useful part is that he is honest about learning, picks up tools quickly, and keeps improving through structured practice. That makes his growth curve one of his strengths rather than a warning sign.",
    suggestions: ["What roles fit Lokesh?", "What makes his profile strong?", "Is he open to full-time roles?"],
  },
  {
    id: "availability",
    priority: 10,
    keywords: ["full-time", "full time", "available", "availability", "relocation", "relocate", "open to", "opportunity"],
    answer:
      "Yes. Lokesh is currently focused on full-time opportunities. He is open to relocation depending on the role and opportunity, especially for technically challenging environments in validation, verification, testing, embedded systems, automation, and system integration.",
    suggestions: ["What roles fit Lokesh?", "What industries interest Lokesh?", "How can I contact Lokesh?"],
  },
  {
    id: "hobbies",
    priority: 10,
    keywords: ["hobby", "hobbies", "interest", "interests", "free time", "guitar", "anime", "books", "reading", "cricket", "personal", "fun", "fun fact", "outside work", "after work"],
    answer:
      "Outside engineering, Lokesh enjoys playing guitar, watching anime, reading books, and cricket. These interests give a more personal side to him: creative, curious, patient, and comfortable learning through practice.",
    more:
      "It also makes him easier to talk to than a pure checklist of tools. There is engineering discipline here, but also music, stories, sport, and curiosity.",
    suggestions: ["Tell me about Lokesh", "What roles fit Lokesh?", "How can I contact Lokesh?"],
  },
];

const typoMap = {
  aboutr: "about",
  answrs: "answers",
  availablity: "availability",
  experince: "experience",
  hobbys: "hobbies",
  interedt: "interested",
  loki: "loki",
  lokeshh: "lokesh",
  questin: "question",
  questins: "questions",
  rcognise: "recognise",
  reloaction: "relocation",
  skils: "skills",
  verfication: "verification",
  verfifcation: "verification",
};

export function normalizeLokiInput(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9+#.\-\s]/g, " ")
    .split(/\s+/)
    .map((word) => typoMap[word] || word)
    .join(" ")
    .trim();
}

export function tokenizeLokiInput(input) {
  return normalizeLokiInput(input)
    .split(/\s+/)
    .filter((word) => word.length > 1);
}

export function findLokiAnswer(input) {
  const normalized = normalizeLokiInput(input);
  const words = tokenizeLokiInput(input);

  if (["hi", "hello", "hey", "hii"].some((word) => words.includes(word))) {
    return {
      understood: false,
      answer:
        "Hey, I am Loki. I can help you quickly understand Lokesh's profile. Pick a question below, or ask about his experience, skills, projects, CV, or contact details.",
      suggestions: questionBank.start,
    };
  }

  const ranked = knowledgeBase
    .map((item) => {
      const phraseScore = item.keywords.reduce((total, keyword) => {
        if (normalized === keyword) {
          return total + 12;
        }

        if (normalized.includes(keyword)) {
          return total + (keyword.includes(" ") ? 8 : 4);
        }

        return total;
      }, 0);

      const wordScore = item.keywords.reduce((total, keyword) => {
        if (keyword.includes(" ")) {
          return total;
        }

        return words.includes(keyword) ? total + 2 : total;
      }, 0);

      return {
        ...item,
        score: phraseScore + wordScore + (item.priority || 0) / 10,
      };
    })
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.score >= 2) {
    return {
      ...ranked[0],
      understood: true,
    };
  }

  return {
    understood: false,
    answer:
      "I could not confidently understand that question yet. Did you mean roles, skills, experience, projects, contact, hobbies, or availability?",
    suggestions: questionBank.menu,
  };
}

const germanAnswers = {
  roles:
    "Lokesh sucht vor allem Vollzeitrollen in Validierung, Verifikation, Testing, Systemintegration, Embedded Systems und Testautomatisierung. Passende Rollen sind Validation Engineer, Verification Engineer, Test Engineer, System Integration Engineer, Embedded Test Engineer, Test Automation Engineer, Systems Engineer und System Validation Engineer.",
  industries:
    "Lokesh interessiert sich für komplexe technische Systeme, in denen Hardware, Software, Schnittstellen, Kommunikation und Validierung zusammenkommen. Dazu gehören Automotive, autonome Fahrzeuge, ADAS, Robotik, Luftfahrt, Verteidigung, Drohnen, Embedded Systems, Sensorsysteme und intelligente Mobilität.",
  about:
    "Lokesh ist ein Embedded-Systems- und Validierungsingenieur mit Erfahrung in Testing, Verifikation, Automatisierung, Systemintegration und kommunikationsintensiven technischen Umgebungen. Sein Profil verbindet Embedded-Know-how, Testautomatisierung, Kommunikationsprotokolle, Debugging und strukturierte Validierung.",
  skills:
    "Lokeshs Stärken liegen in Systemtests, Integrationstests, Regressionstests, Verifikation und Validierung, Testautomatisierung, Testfallerstellung, anforderungsbasierter Validierung, Debugging, Root-Cause-Analyse und Log-Analyse. Technisch arbeitet er mit Python, Robot Framework, C, C++, Linux, Git, MATLAB und Simulink.",
  experience:
    "Lokesh hat in Embedded- und Automotive-Umgebungen gearbeitet, unter anderem in ECU- und Systemvalidierung, Infotainment-Testing, Python-basierter Testautomatisierung, Robot Framework, Protokolltests, Log-Analyse, Debugging, Systemintegration, Testbench-Entwicklung und Requirement-to-Test-Übersetzung.",
  contact:
    "Sie erreichen Lokesh unter sdp.lokeshreddy@gmail.com. Sein LinkedIn ist linkedin.com/in/lokeshsdp, sein GitHub ist github.com/Lokisdp, und der CV ist im Profil verfügbar.",
  hobbies:
    "Außerhalb der Technik spielt Lokesh Gitarre, schaut Anime, liest Bücher und interessiert sich für Cricket. Das zeigt auch eine persönliche Seite: kreativ, neugierig, geduldig und lernbereit.",
  availability:
    "Ja. Lokesh konzentriert sich aktuell auf Vollzeitmöglichkeiten. Je nach Rolle und Gelegenheit ist er auch offen für einen Umzug.",
  "question-menu":
    "Sie können mich nach Lokeshs Rollen, Branchen, Fähigkeiten, Erfahrung, Projekten, Masterarbeit, Radarinteresse, Tools, Protokollen, Kontakt, CV, LinkedIn, GitHub, Standort, Hobbys, Umzug und Verfügbarkeit fragen.",
};

export function localizeLokiResult(result, language) {
  if (language !== "de") {
    return result;
  }

  return {
    ...result,
    answer: germanAnswers[result.id] || result.answer,
    more: undefined,
  };
}
