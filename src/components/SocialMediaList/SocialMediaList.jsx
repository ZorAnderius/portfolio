import clsx from "clsx";
import styles from "./SocialMediaList.module.css";

const SocialMediaList = ({ className }) => {
  return (
    <ul className={clsx(styles.social__list, className)}>
      <li>
        <a
          href="https://www.linkedin.com/in/ivan-ostrovka"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social__link}
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/447916970966"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social__link}
        >
          WhatsApp
        </a>
      </li>
      <li>
        <a
          href="https://t.me/447916970966"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social__link}
        >
          Telegram
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ZorAnderius"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social__link}
        >
          GitHub
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaList;
