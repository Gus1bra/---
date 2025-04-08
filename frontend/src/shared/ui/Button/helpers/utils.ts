import clsx from "clsx";

interface GetButtonClassNamesParams {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  fullWidth: boolean;
  isDisabled: boolean;
  className?: string;
}

export const getButtonClassNames = ({
  variant,
  size,
  fullWidth,
  isDisabled,
  className,
}: GetButtonClassNamesParams) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded transition-all duration-200";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": isDisabled,
    },
    className
  );
};
