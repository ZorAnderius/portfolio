import styles from "./Skills.module.css";
import Section from "../../components/Section/Section";
import TechSkills from "../../components/TechSkills/TechSkills";

const Skills = () => {
  return (
    <Section>
      <div className={styles.skills__container}>
        <h2 className={styles.visually__hidden}>Skills</h2>
        <TechSkills type="first" />
        <TechSkills type="second" />
      </div>
    </Section>
  );
};

export default Skills;
