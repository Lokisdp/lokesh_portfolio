import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home({ language, setLanguage }) {
  return (
    <div>
      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}