import React from "react";

/**
 * Brand backdrop for the hero: a comet emerging from a pocket of deep space in
 * the top-right corner and sweeping left into the light. Drawn as inline SVG so
 * the tails stay crisp at any width, and faded out above the headline so it
 * never costs text contrast.
 */

const SKY = { cx: 1300, cy: -15, rx: 520, ry: 262 };

/** Deterministic PRNG so server and client render identical markup. */
function makeRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

interface Star {
  cx: number;
  cy: number;
  r: number;
  o: number;
}

/** Stars only exist where the sky is dark, so fade them with the same falloff. */
function buildStars(count: number): Star[] {
  const random = makeRandom(20261027);
  const stars: Star[] = [];

  while (stars.length < count) {
    const cx = random() * 1100 + 560;
    const cy = random() * 300 - 80;
    const dx = (cx - SKY.cx) / SKY.rx;
    const dy = (cy - SKY.cy) / SKY.ry;
    const falloff = 1 - Math.sqrt(dx * dx + dy * dy);

    if (falloff <= 0.08) continue;

    stars.push({
      cx: Math.round(cx * 10) / 10,
      cy: Math.round(cy * 10) / 10,
      r: Math.round((0.7 + random() * 1.5) * 100) / 100,
      o: Math.round(Math.min(1, falloff * 1.5 * (0.5 + random() * 0.8)) * 100) / 100,
    });
  }

  return stars;
}

const STARS = buildStars(85);

export const CometBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* The pocket of night sky the comet travels out of */}
        <radialGradient id="comet-night" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#040917" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#0a1f3a" stopOpacity="0.62" />
          <stop offset="0.8" stopColor="#10325c" stopOpacity="0.2" />
          <stop offset="1" stopColor="#0f2d52" stopOpacity="0" />
        </radialGradient>

        {/* Broad dust fan: bright at the nucleus, opening out behind it */}
        <linearGradient id="comet-dust" gradientUnits="userSpaceOnUse" x1="1250" y1="92" x2="-40" y2="30">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.72" />
          <stop offset="0.22" stopColor="#e0f2fe" stopOpacity="0.34" />
          <stop offset="0.62" stopColor="#bae6fd" stopOpacity="0.1" />
          <stop offset="1" stopColor="#bae6fd" stopOpacity="0" />
        </linearGradient>

        {/* Narrow ion tail, bluer and straighter than the dust */}
        <linearGradient id="comet-ion" gradientUnits="userSpaceOnUse" x1="1250" y1="100" x2="-60" y2="120">
          <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.85" />
          <stop offset="0.3" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="comet-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="0.18" stopColor="#f0f9ff" stopOpacity="0.9" />
          <stop offset="0.42" stopColor="#7dd3fc" stopOpacity="0.45" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        <filter id="comet-soft" filterUnits="userSpaceOnUse" x="-400" y="-400" width="2240" height="1600">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="comet-wide" filterUnits="userSpaceOnUse" x="-400" y="-400" width="2240" height="1600">
          <feGaussianBlur stdDeviation="18" />
        </filter>

        {/* Everything dissolves well above the headline */}
        <linearGradient id="comet-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.1" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="comet-mask">
          <rect width="1440" height="800" fill="url(#comet-fade)" />
        </mask>
      </defs>

      <g mask="url(#comet-mask)">
        {/*
          Narrow viewports crop to the middle of the artwork, which would drag
          the night sky across the headline, so the dark field and its stars are
          desktop-only, from the width where the nucleus itself stays on screen.
        */}
        <g className="hidden xl:block">
          <ellipse cx={SKY.cx} cy={SKY.cy} rx={SKY.rx} ry={SKY.ry} fill="url(#comet-night)" />

          {STARS.map((star, idx) => (
            <circle key={idx} cx={star.cx} cy={star.cy} r={star.r} fill="#ffffff" opacity={star.o} />
          ))}
        </g>

        {/* Dust fan */}
        <path
          d="M1252 86C1040 64 600 34 -40 -30L-60 92C560 116 1040 140 1250 120Z"
          fill="url(#comet-dust)"
          filter="url(#comet-wide)"
        />

        {/* Ion tail */}
        <path
          d="M1250 100C990 112 520 142 -60 186L-66 218C520 202 990 156 1252 126Z"
          fill="url(#comet-ion)"
          filter="url(#comet-soft)"
        />

        {/* Nucleus */}
        <circle cx="1250" cy="104" r="88" fill="url(#comet-halo)" />
        <circle cx="1250" cy="104" r="8" fill="#ffffff" />
      </g>
    </svg>
  </div>
);
