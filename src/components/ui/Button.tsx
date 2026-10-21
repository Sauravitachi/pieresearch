import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
}

/**
 * Reusable accessible button or link component with clean sky blue styling and consistent micro-animations.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow-md hover:shadow-sky-900/15",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200/80 shadow-sm",
    outline:
      "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow-sm",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-sm",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
