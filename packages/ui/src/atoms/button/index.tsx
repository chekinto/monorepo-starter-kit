import { button } from "./styles.css";
import type { ButtonProps } from "./types";

export const Button = ({ children }: ButtonProps) => {
  return <button className={button}>{children}</button>;
};
