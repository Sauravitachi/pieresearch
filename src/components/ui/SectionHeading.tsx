import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Standard section heading with eyebrow badge, bold title, and descriptive text.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badgeText && (
        <div className={cn("mb-3.5", isCenter && "flex justify-center")}>
          <Badge variant="primary">{badgeText}</Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
        {title}{" "}
        {titleHighlight && (
          <span className="text-sky-600 font-extrabold">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
