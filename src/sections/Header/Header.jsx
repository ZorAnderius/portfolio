import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import ThemeToggle from "../../components/ThemeTogle/ThemeToggle";
import styles from "./Header.module.css";

const Header = ({ toggleTheme}) => {
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <Logo />
          <div className={styles.header__right}>
            <ThemeToggle toggleTheme={toggleTheme} />
            <NavBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
