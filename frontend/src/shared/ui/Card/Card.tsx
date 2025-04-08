import React from "react";
import clsx from "clsx";

export interface ICardProps {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
  role?: string;
  ariaLabel?: string;
}

export const Card = ({
  title,
  children,
  variant = "default",
  className = "",
  role,
  ariaLabel,
}: ICardProps) => {
  const baseStyles = "p-4 rounded-lg shadow-md";
  const variantStyles =
    variant === "default"
      ? "bg-white border border-gray-200"
      : "bg-transparent border border-gray-300";

  return (
    <div
      className={clsx(baseStyles, variantStyles, className)}
      role={role}
      aria-label={ariaLabel}
    >
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};
