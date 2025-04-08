import React from "react";

interface ButtonContentProps {
  children: React.ReactNode;
  isLoading: boolean;
  loadingIndicator?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const ButtonContent = ({
  children,
  isLoading,
  loadingIndicator,
  icon,
  iconRight,
}: ButtonContentProps) => {
  if (isLoading) {
    return loadingIndicator || "Loading...";
  }

  return (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  );
};
