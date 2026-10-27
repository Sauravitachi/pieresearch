import type { NextConfig } from "next";

/**
 * `STATIC_EXPORT=true` builds a plain HTML bundle into `out/` for shared
 * hosting (Hostinger). That mode has no Node server, so Cache Components and
 * the live market feed are switched off and the ticker falls back to the
 * static snapshot in `@/data/ticker`.
 */
const isStaticExport =
  process.env.STATIC_EXPORT === "true" ||
  // Set by npm when invoked as `npm run build:static`, so the script stays
  // cross-platform without an env-var shim.
  process.env.npm_lifecycle_event === "build:static";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        // Apache serves /path/ as /path/index.html, so emit folder-style URLs.
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    ...(isStaticExport
      ? { resolveAlias: { "@/lib/market": "./src/lib/market.static.ts" } }
      : {}),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
