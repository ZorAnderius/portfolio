import clsx from "clsx";
import Icon from "../Icon/Icon";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ toggleTheme, theme, isOpen }) => {
  const handleThemeToogle = () => {
    toggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={clsx(styles.theme__toggle, isOpen && styles.hide)}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.input__toggle}
        aria-hidden="true"
        checked={theme === "dark"}
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
