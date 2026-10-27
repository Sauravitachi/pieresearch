import React from "react";

/**
 * Brand backdrop for the hero: two comets crossing a pocket of deep space in
 * the upper corners and sweeping left into the light. Drawn as inline SVG so
 * the tails stay crisp at any width, and faded out above the headline so it
 * never costs text contrast.
 */

interface Sky {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

/** The lead comet sits in the right pocket; a smaller, further one trails left. */
const SKY_RIGHT: Sky = { cx: 1300, cy: 5, rx: 520, ry: 298 };
const SKY_LEFT: Sky = { cx: 90, cy: -12, rx: 440, ry: 258 };

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
function buildStars(sky: Sky, count: number, seed: number, xMin: number, xMax: number): Star[] {
  const random = makeRandom(seed);
  const stars: Star[] = [];

  while (stars.length < count) {
    const cx = xMin + random() * (xMax - xMin);
    const cy = random() * 300 - 80;
    const dx = (cx - sky.cx) / sky.rx;
    const dy = (cy - sky.cy) / sky.ry;
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

const STARS_RIGHT = buildStars(SKY_RIGHT, 85, 20261027, 560, 1660);
const STARS_LEFT = buildStars(SKY_LEFT, 55, 7714203, -140, 560);

export const CometBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* The pocket of night sky the comets travel through */}
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

        {/* The same two tails for the trailing comet, over its shorter run */}
        <linearGradient id="comet-dust-far" gradientUnits="userSpaceOnUse" x1="352" y1="56" x2="-260" y2="20">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="0.25" stopColor="#e0f2fe" stopOpacity="0.26" />
          <stop offset="1" stopColor="#bae6fd" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="comet-ion-far" gradientUnits="userSpaceOnUse" x1="352" y1="64" x2="-260" y2="96">
          <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.7" />
          <stop offset="0.32" stopColor="#38bdf8" stopOpacity="0.3" />
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

        {/* A pale streak for the far comet, which crosses light ground */}
        <linearGradient id="comet-ion-pale" gradientUnits="userSpaceOnUse" x1="430" y1="516" x2="-240" y2="556">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="0.35" stopColor="#38bdf8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>

        {/*
          Carries the artwork down through the section rather than stopping in a
          band at the top, while still thinning out before the stat cards.
        */}
        <linearGradient id="comet-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.34" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.82" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="comet-mask">
          <rect width="1440" height="800" fill="url(#comet-fade)" />
        </mask>
      </defs>

      <g mask="url(#comet-mask)">
        {/*
          Narrow viewports crop to the middle of the artwork, which would drag
          the night sky under the headline, so the dark fields and their stars
          are desktop-only, from the width where the nuclei stay on screen. The
          lead comet keeps its tails and nucleus at every width.
        */}
        <g className="hidden xl:block">
          <ellipse {...SKY_RIGHT} fill="url(#comet-night)" />
          <ellipse {...SKY_LEFT} fill="url(#comet-night)" opacity="0.82" />

          {[...STARS_RIGHT, ...STARS_LEFT].map((star, idx) => (
            <circle key={idx} cx={star.cx} cy={star.cy} r={star.r} fill="#ffffff" opacity={star.o} />
          ))}

          {/* Trailing comet — smaller and fainter, so it reads as further away */}
          <g opacity="0.85">
            <path
              d="M354 44C250 30 60 12 -260 -22L-270 62C40 78 250 88 352 76Z"
              fill="url(#comet-dust-far)"
              filter="url(#comet-wide)"
            />
            <path
              d="M352 64C244 72 80 88 -260 114L-264 138C80 128 244 100 354 82Z"
              fill="url(#comet-ion-far)"
              filter="url(#comet-soft)"
            />
            <circle cx="352" cy="62" r="52" fill="url(#comet-halo)" />
            <circle cx="352" cy="62" r="5" fill="#ffffff" />
          </g>
        </g>

        {/*
          A third comet far down the left margin, clear of the centred text
          column. No dark field here, so it is only a pale streak and a dim
          nucleus — enough to carry the motif into the lower half.
        */}
        <g opacity="0.75">
          <path
            d="M430 516C330 524 150 540 -240 566L-243 590C150 582 330 552 432 532Z"
            fill="url(#comet-ion-pale)"
            filter="url(#comet-soft)"
          />
          <circle cx="432" cy="522" r="44" fill="url(#comet-halo)" opacity="0.55" />
          <circle cx="432" cy="522" r="3.5" fill="#bae6fd" />
        </g>

        {/* Lead comet */}
        <path
          d="M1252 86C1040 64 600 34 -40 -30L-60 92C560 116 1040 140 1250 120Z"
          fill="url(#comet-dust)"
          filter="url(#comet-wide)"
        />
        <path
          d="M1250 100C990 112 520 142 -60 186L-66 218C520 202 990 156 1252 126Z"
          fill="url(#comet-ion)"
          filter="url(#comet-soft)"
        />
        <circle cx="1250" cy="104" r="88" fill="url(#comet-halo)" />
        <circle cx="1250" cy="104" r="8" fill="#ffffff" />
      </g>
    </svg>
  </div>
);
