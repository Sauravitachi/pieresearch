import React from "react";

/**
 * Brand backdrop for the hero: the section sits in deep space, with the night
 * held in the left and right margins so the centred text column stays on clean
 * white. Four comets cross it, the two leads bright at the top and two faint
 * ones trailing below. Drawn as inline SVG so the tails stay crisp at any width.
 */

interface Sky {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

/**
 * Tall fields pinned outside the text column. The hero's content is capped at
 * max-w-4xl, so at the 1440-wide viewBox it spans x 272–1168; both fields have
 * faded to nothing well before that.
 */
const SKY_LEFT: Sky = { cx: -40, cy: 300, rx: 370, ry: 620 };
const SKY_RIGHT: Sky = { cx: 1480, cy: 250, rx: 390, ry: 640 };

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
    const cy = random() * 860 - 40;
    const dx = (cx - sky.cx) / sky.rx;
    const dy = (cy - sky.cy) / sky.ry;
    const falloff = 1 - Math.sqrt(dx * dx + dy * dy);

    if (falloff <= 0.1) continue;

    stars.push({
      cx: Math.round(cx * 10) / 10,
      cy: Math.round(cy * 10) / 10,
      r: Math.round((0.7 + random() * 1.4) * 100) / 100,
      o: Math.round(Math.min(1, falloff * 1.6 * (0.45 + random() * 0.8)) * 100) / 100,
    });
  }

  return stars;
}

const STARS_LEFT = buildStars(SKY_LEFT, 80, 7714203, -160, 420);
const STARS_RIGHT = buildStars(SKY_RIGHT, 90, 20261027, 1010, 1660);

export const CometBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        {/* The night the section sits in */}
        <radialGradient id="comet-night" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#040917" stopOpacity="0.92" />
          <stop offset="0.42" stopColor="#0a1f3a" stopOpacity="0.6" />
          <stop offset="0.74" stopColor="#10325c" stopOpacity="0.16" />
          <stop offset="1" stopColor="#0f2d52" stopOpacity="0" />
        </radialGradient>

        {/* Lead comet: broad dust fan, bright at the nucleus */}
        <linearGradient id="comet-dust" gradientUnits="userSpaceOnUse" x1="1250" y1="92" x2="-40" y2="30">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.72" />
          <stop offset="0.22" stopColor="#e0f2fe" stopOpacity="0.34" />
          <stop offset="0.62" stopColor="#bae6fd" stopOpacity="0.1" />
          <stop offset="1" stopColor="#bae6fd" stopOpacity="0" />
        </linearGradient>

        {/* Lead comet: narrow ion tail, bluer and straighter than the dust */}
        <linearGradient id="comet-ion" gradientUnits="userSpaceOnUse" x1="1250" y1="100" x2="-60" y2="120">
          <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.85" />
          <stop offset="0.3" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>

        {/* The same pair for the second comet, over its shorter run */}
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

        {/* Pale streaks for the two trailing comets lower in the section */}
        <linearGradient id="comet-ion-low-l" gradientUnits="userSpaceOnUse" x1="330" y1="556" x2="-280" y2="604">
          <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.6" />
          <stop offset="0.35" stopColor="#38bdf8" stopOpacity="0.26" />
          <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="comet-ion-low-r" gradientUnits="userSpaceOnUse" x1="1376" y1="486" x2="820" y2="546">
          <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.62" />
          <stop offset="0.4" stopColor="#38bdf8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#7dd3fc" stopOpacity="0" />
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

        {/* Only the last slice fades, so the section blends into the ticker below */}
        <linearGradient id="comet-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.86" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="comet-mask">
          <rect width="1440" height="800" fill="url(#comet-fade)" />
        </mask>
      </defs>

      <g mask="url(#comet-mask)">
        {/*
          Narrow viewports crop to the middle of the artwork, which would drag
          the night across the headline, so the dark fields, their stars and the
          comets that need dark ground are desktop-only. The lead comet's tails
          and nucleus still render at every width.
        */}
        <g className="hidden xl:block">
          <ellipse {...SKY_LEFT} fill="url(#comet-night)" />
          <ellipse {...SKY_RIGHT} fill="url(#comet-night)" />

          {[...STARS_LEFT, ...STARS_RIGHT].map((star, idx) => (
            <circle key={idx} cx={star.cx} cy={star.cy} r={star.r} fill="#ffffff" opacity={star.o} />
          ))}

          {/* Second comet — smaller and fainter, so it reads as further away */}
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

          {/* Two distant comets low in the margins, carrying the motif down */}
          <g opacity="0.8">
            <path
              d="M332 556C240 566 90 584 -280 614L-283 638C90 626 240 596 334 572Z"
              fill="url(#comet-ion-low-l)"
              filter="url(#comet-soft)"
            />
            <circle cx="334" cy="562" r="40" fill="url(#comet-halo)" opacity="0.6" />
            <circle cx="334" cy="562" r="3.5" fill="#e0f2fe" />
          </g>

          <g opacity="0.8">
            <path
              d="M1378 486C1280 500 1100 528 820 566L822 588C1104 560 1282 520 1380 502Z"
              fill="url(#comet-ion-low-r)"
              filter="url(#comet-soft)"
            />
            <circle cx="1380" cy="492" r="44" fill="url(#comet-halo)" opacity="0.6" />
            <circle cx="1380" cy="492" r="4" fill="#e0f2fe" />
          </g>
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
