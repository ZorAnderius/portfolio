import clsx from "clsx";
import styles from "./NavBar.module.css";

const NavBar = ({ isMobile }) => {
  return (
    <nav className={clsx(styles.navigation, isMobile && styles.mobile)}>
      <ul
        className={clsx(styles.nav__list, isMobile && styles.mobile)}
        aria-label="navigation"
      >
        <li>
          <a href="#" className={styles.link__btn}>
            About me
          </a>
        </li>
        <li>
          <a href="#" className={styles.link__btn}>
            Project
          </a>
        </li>
        <li>
          <a href="#" className={styles.link__btn}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
