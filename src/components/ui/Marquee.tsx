"use client";

import React, { useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Animation class defined in globals.css. */
  trackClassName: string;
  /** Names this ticker in the control's accessible label. */
  label: string;
  className?: string;
  buttonClassName?: string;
}

/**
 * Auto-scrolling ticker with a pause control.
 *
 * WCAG 2.2.2 requires a way to stop motion that starts on its own and runs for
 * more than five seconds. Pausing on hover is not enough on its own, since it
 * leaves keyboard and touch users without any way to stop it.
 */
export const Marquee: React.FC<MarqueeProps> = ({
  children,
  trackClassName,
  label,
  className,
  buttonClassName,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div className={cn("overflow-hidden", className)}>
        <div className={cn(trackClassName, isPaused && "is-paused")}>{children}</div>
      </div>

      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-pressed={isPaused}
        className={cn(
          // 24px is the WCAG 2.5.8 minimum target size.
          "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors",
          buttonClassName
        )}
      >
        {isPaused ? (
          <Play className="h-3.5 w-3.5" aria-hidden />
        ) : (
          <Pause className="h-3.5 w-3.5" aria-hidden />
        )}
        <span className="sr-only">
          {isPaused ? `Resume ${label}` : `Pause ${label}`}
        </span>
      </button>
    </>
  );
};
