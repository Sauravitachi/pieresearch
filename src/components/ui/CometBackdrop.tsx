import React from "react";

/**
 * Brand backdrop for the hero: a comet sweeping across the top of the section.
 * Drawn as inline SVG so the tail gradients stay crisp at any width, and kept
 * in the upper-right so it never sits behind the headline text.
 */

/** Fixed positions keep server and client markup identical. */
const STARS: { cx: number; cy: number; r: number; o: number }[] = [
  { cx: 180, cy: 70, r: 1.4, o: 0.35 },
  { cx: 320, cy: 140, r: 1, o: 0.25 },
  { cx: 410, cy: 48, r: 1.6, o: 0.3 },
  { cx: 560, cy: 108, r: 1, o: 0.22 },
  { cx: 690, cy: 56, r: 1.3, o: 0.3 },
  { cx: 815, cy: 132, r: 1, o: 0.2 },
  { cx: 940, cy: 44, r: 1.5, o: 0.32 },
  { cx: 1010, cy: 190, r: 1, o: 0.22 },
  { cx: 1120, cy: 236, r: 1.3, o: 0.26 },
  { cx: 1248, cy: 86, r: 1, o: 0.24 },
  { cx: 1330, cy: 196, r: 1.5, o: 0.3 },
  { cx: 1392, cy: 102, r: 1, o: 0.2 },
  { cx: 96, cy: 206, r: 1.2, o: 0.22 },
  { cx: 238, cy: 262, r: 1, o: 0.18 },
  { cx: 1196, cy: 32, r: 1.2, o: 0.26 },
];

export const CometBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* Tail brightest at the nucleus, dissolving along its length */}
        <linearGradient id="comet-ion" gradientUnits="userSpaceOnUse" x1="1150" y1="96" x2="-60" y2="48">
          <stop offset="0" stopColor="#0284c7" stopOpacity="0.5" />
          <stop offset="0.3" stopColor="#0ea5e9" stopOpacity="0.2" />
          <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="comet-dust" gradientUnits="userSpaceOnUse" x1="1148" y1="112" x2="40" y2="210">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.24" />
          <stop offset="0.45" stopColor="#67e8f9" stopOpacity="0.08" />
          <stop offset="1" stopColor="#a5f3fc" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="comet-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.25" stopColor="#7dd3fc" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#38bdf8" stopOpacity="0.18" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        {/* Wash that lifts the whole upper band without a hard edge */}
        <radialGradient id="comet-sky" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0284c7" stopOpacity="0.055" />
          <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>

        <filter id="comet-soft" filterUnits="userSpaceOnUse" x="-300" y="-300" width="2040" height="1400">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        <filter id="comet-wide" filterUnits="userSpaceOnUse" x="-300" y="-300" width="2040" height="1400">
          <feGaussianBlur stdDeviation="16" />
        </filter>

        {/* Everything fades out before it reaches the headline */}
        <linearGradient id="comet-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.72" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="comet-mask">
          <rect width="1440" height="800" fill="url(#comet-fade)" />
        </mask>
      </defs>

      <g mask="url(#comet-mask)">
        <ellipse cx="990" cy="20" rx="620" ry="250" fill="url(#comet-sky)" />

        {STARS.map((star, idx) => (
          <circle
            key={idx}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#0f172a"
            opacity={star.o}
          />
        ))}

        {/* Dust tail — broader, curving away below the ion tail */}
        <path
          d="M1148 112C980 150 640 196 40 212L24 164C600 150 950 118 1146 90Z"
          fill="url(#comet-dust)"
          filter="url(#comet-wide)"
        />

        {/* Ion tail — a narrow streak that widens with distance from the head */}
        <path
          d="M1150 92C880 86 440 68 -60 18L-70 66C430 110 880 104 1150 102Z"
          fill="url(#comet-ion)"
          filter="url(#comet-soft)"
        />

        {/* Bright core line down the ion tail — this is what reads as motion */}
        <path
          d="M1150 97C870 92 420 76 -60 38"
          stroke="url(#comet-ion)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#comet-soft)"
        />

        {/* Nucleus */}
        <circle cx="1150" cy="96" r="74" fill="url(#comet-halo)" />
        <circle cx="1150" cy="96" r="6" fill="#ffffff" />
        <circle cx="1150" cy="96" r="2.5" fill="#e0f2fe" />
      </g>
    </svg>
  </div>
);
