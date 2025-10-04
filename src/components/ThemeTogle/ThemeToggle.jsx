import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const handleThemeToogle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };
  return (
    <div className={styles.theme__toggle}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.input__toggle}
        aria-hidden="true"
        onChange={handleThemeToogle}
      />
      <label htmlFor="theme-toggle" className={styles.label}>
        <Icon name="sun" size="16" className="sun" />
        <Icon name="moon" size="16" className="moon" />
      </label>
    </div>
  );
};

export default ThemeToggle;
