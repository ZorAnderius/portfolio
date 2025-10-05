import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({
  type,
  className,
  variant = "",
  size = "",
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
