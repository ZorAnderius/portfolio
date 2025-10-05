import clsx from "clsx";
import styles from "./ResponsiveImage.module.css";

const ResponsiveImage = ({
  desktop,
  tablet,
  mobile,
  fallback,
  alt,
  className,
  thumb,
}) => {
  return (
    <picture className={thumb && styles[thumb]} aria-hidden="true">
      {desktop && (
        <source
          media="(min-width: 1200px)"
          srcSet={desktop}
          type="image/webp"
        />
      )}
      {tablet && (
        <source media="(min-width: 768px)" srcSet={tablet} type="image/webp" />
      )}
      {mobile && (
        <source media="(max-width: 767px)" srcSet={mobile} type="image/webp" />
      )}
      <img src={fallback} alt={alt} className={clsx(styles.img, className)} />
    </picture>
  );
};

export default ResponsiveImage;
