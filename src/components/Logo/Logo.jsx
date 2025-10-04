import clsx from "clsx";
import styles from "./Logo.module.css";

const Logo = ({isMobileOpen}) => {
  return (
      <h2 className={clsx(styles.logo, isMobileOpen && styles.mobile)} aria-label="logo">
      _IVAN<span>OSTROVKA_</span>
    </h2>
  );
};

export default Logo;
