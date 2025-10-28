import { button } from "./styles.css";
import type { ButtonProps } from "./types";

export const Button = ({
  children,
  rounded = false,
  size = "md",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={button({
        size: size,
        variant: variant,
        rounded: rounded,
      })}
    >
      {children}
    </button>
  );
};
