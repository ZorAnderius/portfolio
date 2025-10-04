import styles from "./Icon.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

const Icon = ({ name, size = "20", className = "" }) => {
  return (
    <svg
      className={clsx(styles.icon, className && styles[className])}
      height={size}
      width={size}
    >
      <use href={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
