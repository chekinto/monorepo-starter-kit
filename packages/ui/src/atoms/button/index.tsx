import type { ButtonProps } from "./types";
import { buttonStyles } from "./styles.css";

export const Button = ({ children, size, variant }: ButtonProps) => {
  return (
    <button
      className={buttonStyles({
        size: size,
        variant: variant,
      })}
    >
      {children}
    </button>
  );
};
