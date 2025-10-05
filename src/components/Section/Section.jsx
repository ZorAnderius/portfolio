import clsx from "clsx";
import styles from "./Section.module.css";

const Section = ({ name = "", children, ...props }) => {
  return (
    <section className={clsx(styles.section, name && styles[name])} {...props}>
      {children}
    </section>
  );
};

export default Section;
