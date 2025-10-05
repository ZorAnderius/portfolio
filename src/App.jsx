import { useEffect, useState } from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";

const themeFromLocal = localStorage.getItem("theme") || "light";
function App() {
  const [theme, setTheme] = useState(themeFromLocal);

  useEffect(() => {
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    console.log(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header toggleTheme={setTheme} theme={theme} />
      <main className="main">
        <Hero />
      </main>
    </>
  );
}

export default App;
