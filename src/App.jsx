import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Thesis from "./pages/Thesis";
import BackToTop from "./components/BackToTop";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/projects/:slug"
          element={<ProjectDetail language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/thesis"
          element={<Thesis language={language} setLanguage={setLanguage} />}
        />
      </Routes>
      <BackToTop language={language} />
    </>
  );
}

export default App;
