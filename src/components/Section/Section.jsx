import clsx from "clsx";
import styles from "./Section.module.css";

const Section = ({ name = "", children }) => {
  return (
    <section className={clsx(styles.section, name && styles[name])}>
      {children}
    </section>
  );
};

export default Section;
