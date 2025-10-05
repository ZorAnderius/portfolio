import heroDesktop from "../../assets/images/hero/portfolio hero_deskt_result.webp";
import heroTablet from "../../assets/images/hero/portfolio hero_tablet_result.webp";
import heroMobile from "../../assets/images/hero/portfolio hero_mob_result.webp";
import heroFallback from "../../assets/images/hero/portfolio hero_mob.png";

import Container from "../../components/Container/Container";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage";
import Section from "../../components/Section/Section";
import styles from "./Hero.module.css";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";

const Hero = () => {
  return (
    <Section name="hero">
      <Container>
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              <span>Hello, I am</span>
              <span> Fullstack developer</span>
            </h1>
            <SocialMediaList />
          </div>
          <ResponsiveImage
            desktop={heroDesktop}
            tablet={heroTablet}
            mobile={heroMobile}
            fallback={heroFallback}
            alt="3D avatar of developer who looks at the front of the screen"
            className={styles.hero__image}
            thumb={"hero"}
          />
          <Button className={styles.hero__btn}>
            <Icon name="long-arrow" size="28" className="long-arrow" />
            <p>Contat with me</p>
          </Button>
        </div>
        <div className={styles.hero__subtitle}></div>
      </Container>
    </Section>
  );
};

export default Hero;
