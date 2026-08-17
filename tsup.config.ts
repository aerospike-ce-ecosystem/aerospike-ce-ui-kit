import { defineConfig, type Options } from "tsup";

const shared: Options = {
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  // `clean` is deliberately off on both configs: tsup builds an array of
  // configs concurrently, so a `clean: true` on either one can race the
  // other's writes. `npm run build` runs `npm run clean` first instead.
  clean: false,
  external: ["react", "react-dom", "tailwindcss"],
};

export default defineConfig([
  {
    ...shared,
    entry: { index: "src/index.ts" },
    // Every src/components/*.tsx starts with "use client", but esbuild drops
    // directives when it bundles, so the shipped file has to re-declare it or
    // a Next.js App Router consumer cannot import any component from a Server
    // Component. This marks the whole bundle client-only; the presentational
    // subset is additionally published without the directive via ./server.
    banner: { js: '"use client";' },
  },
  {
    ...shared,
    // No "use client" banner here. `server` must stay renderable from a Server
    // Component, and `tailwind/preset` is loaded by Node/Tailwind's config
    // loader, where the directive is meaningless.
    entry: {
      server: "src/server.ts",
      "tailwind/preset": "src/tailwind/preset.ts",
    },
  },
]);
