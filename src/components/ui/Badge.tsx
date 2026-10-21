import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "risk";
  className?: string;
}

/**
 * Reusable pill badge for labels, risk profiles, and status markers with sky blue styling.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const variantStyles = {
    primary:
      "bg-sky-50 text-sky-700 border-sky-200",
    secondary:
      "bg-slate-100 text-slate-700 border-slate-200",
    outline:
      "bg-white text-slate-700 border-slate-300",
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning:
      "bg-amber-50 text-amber-800 border-amber-200",
    risk:
      "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
