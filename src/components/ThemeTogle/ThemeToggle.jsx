import Icon from "../Icon/Icon";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ toggleTheme}) => {
  const handleThemeToogle = () => {
    toggleTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
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
