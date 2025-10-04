import { useEffect, useState } from "react";
import "./App.css";
import Header from "./sections/Header/Header";

const themeFromLocal = localStorage.getItem("theme") || "light";
function App() {
  const [theme, setTheme] = useState(themeFromLocal);

  useEffect(() => {
    theme === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    console.log(theme)
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header toggleTheme={setTheme} />
      <h1>Portfolio</h1>
      <p> myPortfolio</p>
    </>
  );
}

export default App;
