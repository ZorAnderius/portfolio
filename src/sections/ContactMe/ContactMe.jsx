import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import styles from "./ConatctMe.module.css";

const ContactMe = () => {
  return (
    <Section>
      <Container>
        <h2 className={"title " + styles.contact__title}>Contact <span>me</span></h2>
        <div></div>
      </Container>
    </Section>
  );
};

export default ContactMe;
