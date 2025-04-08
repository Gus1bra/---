import React from "react";
import { getButtonClassNames } from "./helpers/utils";
import { ButtonContent } from "./UI/ButtonContent";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loadingIndicator?: React.ReactNode;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  isLoading = false,
  className,
  size = "md",
  fullWidth = false,
  icon,
  iconRight,
  loadingIndicator,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const styles = getButtonClassNames({
    variant,
    size,
    fullWidth,
    isDisabled,
    className,
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      <ButtonContent
        isLoading={isLoading}
        loadingIndicator={loadingIndicator}
        icon={icon}
        iconRight={iconRight}
      >
        {children}
      </ButtonContent>
    </button>
  );
};
