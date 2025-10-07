import { useEffect, useState } from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import ContactMe from "./sections/ContactMe/ContactMe";

const themeFromLocal = localStorage.getItem("theme") || "light";
function App() {
  const [theme, setTheme] = useState(themeFromLocal);

  useEffect(() => {
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header toggleTheme={setTheme} theme={theme} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
