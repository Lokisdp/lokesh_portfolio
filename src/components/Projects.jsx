import { Link } from "react-router-dom";

const projects = [
  {
    title: "Master’s Thesis: Ego-Motion Validation Using Synthetic Radar Data",
    tag: "Featured Research",
    projectType: "Individual",
    slug: "masters-thesis-radar-ego-motion",
    description:
      "Developed a Python-based validation framework to evaluate ego-motion algorithm performance using synthetic radar data, with focus on velocity, yaw-rate, and robustness analysis.",
    note: "GitHub resource/work files will be uploaded soon.",
    meta: ["Python", "Radar Data", "MATLAB Automotive Toolbox", "Validation"],
    featured: true,
    hasDetails: true,
  },
  {
    title: "Bachelor’s Thesis: Home Energy Management System",
    tag: "Bachelor Thesis",
    projectType: "Group Project",
    slug: "bachelors-thesis-home-energy-management",
    description:
      "Developed a MATLAB/Simulink model for a grid-connected PV system with battery management and control-oriented energy optimization.",
    meta: ["MATLAB", "Simulink", "Control Systems", "Energy Systems"],
    hasDetails: false,
  },
  {
    title: "AC Analysis Methods on STM32",
    tag: "Master Project",
    projectType: "Group Project",
    slug: "stm32-ac-analysis-methods",
    description:
      "Implemented Goertzel, DFT, and DTFT-based DSP methods on STM32 microcontrollers for time-series analysis and embedded validation.",
    meta: ["STM32", "DSP", "Goertzel", "DFT"],
    hasDetails: false,
  },
];

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-header">
        <p className="section-kicker">Projects & Research</p>
        <h2>Selected Work Across Validation, Embedded Systems, and Research</h2>
        <p className="projects-intro">
          A selection of thesis work and university projects that reflect my
          interests across embedded systems, validation, signal processing,
          control systems, and radar-oriented engineering.
        </p>
      </div>

      {featured && (
        <div className="project-featured-card">
          <div className="project-featured-content">
            <div className="project-top-meta">
              <span className="project-tag">{featured.tag}</span>
              <span className="project-type-tag">{featured.projectType}</span>
            </div>

            <h3>{featured.title}</h3>
            <p>{featured.description}</p>

            {featured.note && <p className="project-note">{featured.note}</p>}

            <div className="project-meta-tags">
              {featured.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {featured.hasDetails && (
              <div className="project-links">
                <Link to={`/projects/${featured.slug}`}>View Details</Link>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="projects-grid">
        {others.map((project) => (
          <div className="project-card" key={project.slug}>
            <div className="project-top-meta">
              <span className="project-tag">{project.tag}</span>
              <span className="project-type-tag">{project.projectType}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-meta-tags">
              {project.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {project.hasDetails && (
              <div className="project-links">
                <Link to={`/projects/${project.slug}`}>View Details</Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}