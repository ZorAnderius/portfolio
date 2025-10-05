import { useState } from "react";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import NavBar from "../../components/NavBar/NavBar";
import ThemeToggle from "../../components/ThemeTogle/ThemeToggle";
import styles from "./Header.module.css";

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <Logo isMobileOpen={isOpen} />
          <div className={styles.header__right}>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} isOpen={isOpen} />
            <NavBar />
            <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
