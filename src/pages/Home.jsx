import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroMessage from "../components/IntroMessage";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import RevealSection from "../components/RevealSection";
import ChatBubble from "../components/ChatBubble";

export default function Home({ language, setLanguage }) {
  return (
    <div className="page-shell">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="snap-page">
        <RevealSection id="top" className="hero-screen">
          <Hero language={language} />
        </RevealSection>

        <RevealSection id="about" className="intro-screen">
          <IntroMessage />
        </RevealSection>

        <RevealSection id="skills" className="skills-screen">
          <Skills />
        </RevealSection>

        <RevealSection id="experience" className="experience-screen">
          <Experience />
        </RevealSection>

        <RevealSection id="projects" className="projects-screen">
          <Projects />
        </RevealSection>

        <RevealSection id="contact" className="contact-screen">
          <Footer />
        </RevealSection>
      </main>

      <ChatBubble />
    </div>
  );
}
