import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isHoverable?: boolean;
}

/**
 * Standard fintech card container with rounded-2xl corners, soft borders, and light shadow.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  isHoverable = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300",
        isHoverable &&
          "hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200/60 hover:border-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
