import React from "react";

// components
import Header from "./Components/HeaderComponents/Header.js";
import Intro from "./Pages/Intro.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Skills from "./Pages/Skills.js";
import Resumes from "./Pages/Resumes.js";
import Contact from "./Pages/Contact.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Resumes />
      <Contact />
    </div>
  );
}

export default App;
