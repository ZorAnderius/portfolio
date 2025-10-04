import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MobileMenu.module.css";
import Button from "../Button/Button";
import clsx from "clsx";
import NavBar from "../NavBar/NavBar";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const overlayRef = useRef(null);

  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }

    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsAnimated(true);
      }, 20);
    } else {
      setIsAnimated(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  const closeMenu = useCallback(() => {
    setIsAnimated(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === "Esc" || e.key === "Enter") {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    isOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    overlayRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [closeMenu]);

  return (
    <>
      <div className={styles.mobile__menu}>
        <Button
          type="button"
          className="mobile-btn"
          onClick={handleToggle}
          arial-label="Toggle mobile menu button"
          arial-expanded={isOpen ? "true" : "false"}
        >
          <span
            className={clsx(styles.hamburger, isOpen && styles.hamburger__open)}
          >
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
          </span>
        </Button>
      </div>

      {isOpen && (
        <div
          ref={overlayRef}
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          className={clsx(styles.overlay__menu)}
        >
          <div
            className={clsx(
              styles.mobile__nav,
              isAnimated && styles.menu__open
            )}
          >
            <NavBar isMobile={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
