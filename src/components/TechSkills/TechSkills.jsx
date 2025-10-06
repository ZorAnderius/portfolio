import clsx from "clsx";
import styles from "./TechSkills.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Python",
  "PHP",
  "Java",
  "C#",
  "JQuery",
  "Bootstrap",
  "Docker",
  "AWS",
  "Terraform",
  "Linux",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Jira",
  "Trello",
  "Scrum",
];
const TechSkills = ({ type }) => {
  return (
      <div className={clsx(styles.marque, styles[type])}>
        <div className={clsx(styles.marque__inner, styles[type])}>
          {/* {[1, 2].map((item, index) => {
          return ( */}
          <ul className={clsx(styles.marque__line, styles[type])}>
            {skills.map((skill, idx) => (
              <li key={skill + idx}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
          {/* );
        })} */}
        </div>
      </div>
  );
};

export default TechSkills;
