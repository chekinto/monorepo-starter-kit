type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  children: React.ReactNode;
  size: ButtonSize;
  variant: ButtonVariant;
}
