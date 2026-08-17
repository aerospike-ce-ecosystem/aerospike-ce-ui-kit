/**
 * Asserts the client-boundary invariants of the build. Wired as `postbuild`,
 * so `npm run build` fails loudly rather than shipping a broken boundary.
 *
 * Both invariants rest on esbuild behaviour that nothing else pins:
 *
 *   - The main entry needs a `"use client"` directive on line 1. Every
 *     src/components/*.tsx declares one, but esbuild DROPS directives when it
 *     bundles, so the directive exists only because tsup.config.ts adds it back
 *     as a banner. Lose the banner and a Next.js App Router consumer cannot
 *     import any component from a Server Component — and the failure surfaces
 *     in their build, not ours.
 *
 *   - ./server and the Tailwind preset must contain NO directive. src/server.ts
 *     re-exports modules that each declare `"use client"` on line 1; the server
 *     bundle is RSC-safe purely because esbuild strips those while bundling. If
 *     a tsup/esbuild bump starts preserving or hoisting them, ./server silently
 *     becomes client-only and the preset gets a directive Node has no use for.
 *
 * Matches a directive STATEMENT on its own line, so prose mentions of the
 * string inside comments (src/server.ts has several) are not false positives.
 */
import { readFileSync } from "node:fs";

const DIRECTIVE = /^[ \t]*["']use client["'][ \t]*;?[ \t]*$/;

const MUST_HAVE = ["dist/index.js", "dist/index.cjs"];
const MUST_NOT_HAVE = [
  "dist/server.js",
  "dist/server.cjs",
  "dist/tailwind/preset.js",
  "dist/tailwind/preset.cjs",
];

const errors = [];

for (const file of MUST_HAVE) {
  const first = readFileSync(file, "utf8").replace(/^﻿/, "").split("\n", 1)[0];
  if (!DIRECTIVE.test(first)) {
    errors.push(
      `${file}: line 1 must be the "use client" directive, found ${JSON.stringify(first.slice(0, 60))}.\n` +
        `    Check the \`banner\` on the main entry in tsup.config.ts.`
    );
  }
}

for (const file of MUST_NOT_HAVE) {
  const hits = readFileSync(file, "utf8")
    .split("\n")
    .map((line, i) => (DIRECTIVE.test(line) ? i + 1 : 0))
    .filter(Boolean);
  if (hits.length > 0) {
    errors.push(
      `${file}: must contain no "use client" directive, found one at line ${hits.join(", ")}.\n` +
        `    This entry has to stay server-renderable / Node-loadable.`
    );
  }
}

if (errors.length > 0) {
  console.error("\n✗ client-boundary assertions failed:\n");
  for (const e of errors) console.error(`  - ${e}\n`);
  process.exit(1);
}

console.log(
  `✓ client boundary: directive on line 1 of ${MUST_HAVE.join(", ")}; absent from ${MUST_NOT_HAVE.join(", ")}`
);
