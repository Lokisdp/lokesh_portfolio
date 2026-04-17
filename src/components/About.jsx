import { content } from "../data/content";

export default function About({ language }) {
  const t = content[language];

  return (
    <section id="about" className="section">
      <h2>About</h2>

      <p className="about-text">
        I am an Embedded Systems Test & Integration Engineer with experience in 
        validating and debugging complex distributed systems. My work focuses on 
        system-level verification, communication interfaces, and automation across 
        embedded environments.
      </p>

      <p className="about-text">
        I have hands-on experience working with communication protocols such as 
        CAN, UDS, DoIP, and TCP/IP, along with building Python-based automation 
        tools for system validation and testing workflows.
      </p>

      <p className="about-text">
        My interests lie in system integration, communication networks, and 
        validation of complex engineering systems, making my skills applicable 
        across domains such as automotive, defense, aviation, and industrial systems.
      </p>
    </section>
  );
}