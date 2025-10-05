import desktop from "../../assets/images/about/deskt_result.webp";
import tablet from "../../assets/images/about/tablet_result.webp";
import mobile from "../../assets/images/about/mob_result.webp";
import fallback from "../../assets/images/about/mob.png";

import Container from "../../components/Container/Container";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage";
import Section from "../../components/Section/Section";
import styles from "./About.module.css";

const About = () => {
  return (
    <Section id="about-me">
      <Container>
        <div>
          <h2 className={styles.about__title + " title"}>
            About <span>me</span>
          </h2>
          <div className={styles.about}>
            <ResponsiveImage
              desktop={desktop}
              tablet={tablet}
              mobile={mobile}
              fallback={fallback}
              alt="Avatar of developer who has an idea"
              className={styles.about__image}
              thumb={"about"}
            />
            <div className={styles.about__content}>
              <h3 className={styles.about__title + " subtitle"}>BIO</h3>
              <p>
                I&apos;m Ivan Ostrovka and I&apos;m currently pursuing an MSc in
                Software Engineering, where I&apos;m building a solid foundation
                in modern web and software development. My studies and projects
                revolve around Python, JavaScript, React, Redux, and Node.js.
                With a background in power engineering, I think in terms of
                structure and logic — that mindset helps me write clean,
                reliable code and design systems that make sense. I also enjoy
                exploring databases, APIs, and testing tools, and recently
                started diving into DevOps and cloud technologies like AWS CLI,
                Terraform, and Jenkins.
              </p>
              <p>
                I&apos;m genuinely passionate about what I do and always curious
                to learn more. I like figuring out how things work and turning
                ideas into something real and functional. I take pride in doing
                things carefully and well, but I also appreciate collaboration —
                sharing knowledge, solving problems together, and learning from
                others. I&apos;m still early in my journey, but I approach every
                project with focus, adaptability, and a real desire to grow into
                a confident full-stack developer.
              </p>
            </div>
            <div className={styles.about__education}>
              <h3 className={styles.about__title + " subtitle"}>Education</h3>
              <ul className={styles.about__education__list}>
                <li className={styles.about__education_item}>
                  <p>
                    2023 - 2026 / Master of Science in Software Engineering,
                    Neoversity,University of Malta (WOOLF)
                  </p>
                </li>
                <li className={styles.about__education_item}>
                  <p>
                    2024 - 2025 /Codecademy Fullstack engineering course.
                    ITCareerSwitch.
                  </p>
                </li>
                <li className={styles.about__education_item}>
                  <p>
                    2009 -2017 / Master of Science in Power Engineering,
                    National University Lviv Polytechnic
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
