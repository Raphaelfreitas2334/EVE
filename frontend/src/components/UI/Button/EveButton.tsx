import "./EveButton.css";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface EveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
}

const EveButton = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}: EveButtonProps) => {
  return (
    <button
      className={`eve-button eve-button-${variant} ${className}`}
      {...rest}
    >
      <span>{children}</span>

    {variant === "primary" && (
        <span className="button-arrow">
            →
        </span>
    )}
    </button>
  );
};

export default EveButton;