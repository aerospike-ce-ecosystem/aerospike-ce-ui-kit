# aerospike-ce-ui-kit

Shared UI design system for projects in the **Aerospike CE Ecosystem**. Provides:

- **Design tokens** — CSS variables for color, surface, spacing, radius, shadow, motion, typography.
- **Tailwind preset** — drop-in preset mapping tokens to Tailwind's theme.
- **React components** — 25+ accessible components built on Radix UI primitives, styled with the kit's tokens.

The kit is brand-neutral by default. Each consumer (e.g., Aerospike Cluster Manager) overrides `--primary-50` (and font stack if desired) to set its own identity.

---

## Install

> No npm registry release yet — consume via `file:` or `git+ssh`.

### Option A — sibling directory (recommended for monorepo-ish layouts)

```jsonc
// your-app/package.json
{
  "dependencies": {
    "aerospike-ce-ui-kit": "file:../aerospike-ce-ui-kit"
  }
}
```

### Option B — git dependency

```jsonc
{
  "dependencies": {
    "aerospike-ce-ui-kit": "github:aerospike-ce-ecosystem/aerospike-ce-ui-kit#v0.1.0"
  }
}
```

Run `npm install` (or `pnpm`, `yarn`). The kit ships pre-built `dist/` only if you publish to npm; for `file:`/`git+ssh` consumption from source, also run `npm run build` inside `aerospike-ce-ui-kit/` once.

---

## Setup (4 steps)

Works with Tailwind **v3.4+ and v4**. Step 1 is identical on both; step 2 is
the only place the two versions differ.

### 1. Add the Tailwind preset

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss"
import acePreset from "aerospike-ce-ui-kit/tailwind"

export default {
  presets: [acePreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/aerospike-ce-ui-kit/dist/**/*.{js,mjs,cjs}",
  ],
} satisfies Config
```

Keep the `node_modules/aerospike-ce-ui-kit/dist` glob: a few components emit
Tailwind utilities rather than kit classes (for example the `Accordion` chevron
uses `transition-transform duration-fast group-data-[state=open]:rotate-180`),
so without it those utilities are never generated and the chevron does not
rotate. This applies to v4 too — v4 reads `content` from the config it loads
via `@config`, and its automatic source detection skips `node_modules`.

### 2. Import tokens + base styles in your global CSS

**Tailwind v4** — the preset is a legacy JS config, which v4 loads through
`@config`:

```css
/* globals.css */
@import "tailwindcss";
@import "aerospike-ce-ui-kit/tokens.css";
@import "aerospike-ce-ui-kit/styles.css";
@config "../../tailwind.config.ts";   /* path is relative to this CSS file */
```

**Tailwind v3**:

```css
/* globals.css */
@import "aerospike-ce-ui-kit/tokens.css";
@import "aerospike-ce-ui-kit/styles.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Mark your app shell

```tsx
// app/layout.tsx (Next.js example)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        data-app="ace"
        data-theme="light"
        // Optional: override the default blue primary with your brand color.
        style={{ "--primary-50": "#03C75A" } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}
```

The `data-app="ace"` attribute activates kit-specific surfaces and the
`.ace-*` utility classes used by the components. Without it, only raw
tokens are available.

### 4. Use components

```tsx
import { PageHead, Card, KPI, Button, Banner } from "aerospike-ce-ui-kit"

export default function Dashboard() {
  return (
    <main>
      <PageHead title="Clusters" sub="Connection profiles and managed clusters.">
        <Button variant="primary">Create Cluster</Button>
      </PageHead>

      <Banner tone="info" title="Welcome" desc="Get started by adding a connection." />

      <div className="grid grid-cols-4 gap-4">
        <KPI label="Total" value="12" />
        <KPI label="Running" value="9" delta={3} dir="up" />
        <KPI label="Failed" value="0" />
        <KPI label="Cost / day" value="$4.12" />
      </div>

      <Card title="Recent activity">…</Card>
    </main>
  )
}
```

---

## Server Components (Next.js App Router)

The main entry is published with a `"use client"` banner, because most of the
components are interactive. A Server Component may import from it — Next places
the import on the client boundary — but props crossing that boundary have to be
serializable, and the components render on the client.

For the purely presentational components there is a second entry that carries no
client directive, so they render on the server and ship no client JS:

```tsx
import { Card, PageHead, Table, Badge } from "aerospike-ce-ui-kit/server"
```

It exports `AppShell`, `StatusBar` (+ `HealthDots`), `PageHead`, `Card`, `Empty`,
`Table` (+ `CellStack`, `CellMeta`), `Badge`, `StatusDot` (+ `StatusLabel`),
`Avatar` (+ `AvatarStack`), `Meter`, `LineChart`, `BarChart`, `Donut`, `Icon`,
and `cn` — all of which are also exported from the main entry, so `./server`
adds an option and removes nothing. Anything interactive (`Button`, `Dialog`,
`Dropdown`, `Tabs`, form controls, …) comes from the main entry only.

---

## Component catalogue

**Shell**: `AppShell`, `Sidebar` (+ `SidebarBrand`), `TopBar`, `StatusBar`, `WorkspaceSwitcher`
**Page layout**: `PageHead`, `Card`, `Banner`, `KPI`, `Empty`, `Tabs`, `Breadcrumb`, `Table` (+ `CellStack`, `CellMeta`)
**Atoms**: `Button`, `IconButton`, `Badge`, `StatusDot`, `StatusLabel`, `Chip`, `Tag`, `Avatar`, `AvatarStack`, `Icon` (70+ paths)
**Forms**: `TextInput`, `Textarea`, `Select`, `Toggle`, `Checkbox`, `Radio`
**Overlays**: `Dialog`, `Drawer`, `Tooltip`, `Popover`, `Dropdown`
**Disclosure**: `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
**Visualization**: `Sparkline`, `Meter`, `LineChart`, `BarChart`, `Donut`

See `src/index.ts` for the full export surface and TypeScript types.

---

## Theming

Override CSS variables on `<body>` (or any ancestor) to re-brand:

```tsx
<body data-app="ace" style={{
  "--primary-50": "#C8202B",        // your brand primary
  "--font-sans": '"Inter", system-ui, sans-serif',
}}>
```

`--primary-50` is genuinely the only colour you have to set. Under
`[data-app="ace"]` the shades the components actually read are derived from it
with `color-mix(in oklch, …)`:

| step | derivation | `--primary-50: #C8202B` |
| --- | --- | --- |
| `--primary-40` (`:active`) | `var(--primary-50) 83%, black` | `#9C161F` |
| `--primary-45` (`:hover`) | `var(--primary-50) 92%, black` | `#B31B25` |
| `--primary-65` | `var(--primary-50) 50%, white` | `#ED9B94` |
| `--primary-95` (tints) | `var(--primary-50) 12%, white` | `#FDE7E5` |

`--primary-10/-30/-55/-80/-90` are still literals in `tokens.css`, but no
exported component or kit class reads them.

For deeper customization, fork the kit or `@import` your own CSS after `aerospike-ce-ui-kit/styles.css`.

---

## Local development

```bash
git clone git@github.com:aerospike-ce-ecosystem/aerospike-ce-ui-kit.git
cd aerospike-ce-ui-kit
npm install
npm run build       # produces dist/
npm run dev         # watch mode
npm run type-check  # tsc --noEmit
```

The `.npmrc` in this repo pins the registry to `registry.npmjs.org` to
avoid a developer's global config (which may point at an internal mirror)
contaminating any future lock file.

`package-lock.json` is intentionally **not committed** — see `.gitignore`.

---

## License

MIT. Free for commercial and personal use.

### Third-party

- Built on top of [Radix UI](https://www.radix-ui.com/) primitives (MIT).
- The token system and component shapes draw inspiration from common modern admin design languages; no third-party design assets are bundled.
- Recommended display font [Pretendard](https://github.com/orioncactus/pretendard) is SIL OFL 1.1 and not bundled — consumers load it themselves (CDN or self-host).
