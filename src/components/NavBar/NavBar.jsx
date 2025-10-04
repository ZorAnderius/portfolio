import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.nav__list} aria-label="navigation">
        <li>
          <a href="#" className={styles.link__btn}>About me</a>
        </li>
        <li>
          <a href="#" className={styles.link__btn}>Project</a>
        </li>
        <li>
          <a href="#" className={styles.link__btn}>Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
