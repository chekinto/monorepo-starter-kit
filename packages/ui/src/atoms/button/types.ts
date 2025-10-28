export type ButtonVariants = "primary" | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: ButtonVariants;
}
