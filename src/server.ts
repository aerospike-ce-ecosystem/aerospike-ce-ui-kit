/**
 * RSC-safe entry point — `aerospike-ce-ui-kit/server`.
 *
 * The main entry (`.`) is published with a `"use client"` banner, because most
 * of the 30 components are interactive. The components re-exported here are
 * purely presentational: no hooks, no event handlers, no Radix primitives, and
 * no function-typed props. They can therefore render inside a Next.js Server
 * Component, which the client-only main entry cannot do.
 *
 * Every name here is ALSO exported from `.`, so this entry adds an option and
 * removes nothing. Import from `.` unless you specifically need to render from
 * a Server Component.
 *
 * Modules are imported directly rather than through `./index`, so that nothing
 * client-only is pulled into this bundle. The source files still carry their
 * own `"use client"` directive for the benefit of the `.` bundle; esbuild
 * strips directives when bundling, so they do not leak into this one — see the
 * per-entry `banner` in `tsup.config.ts`.
 */

// Utilities
export { cn } from "./utils/cn";

// Icons
export { Icon } from "./icons/Icon";
export type { IconProps, IconName } from "./icons/Icon";

// Shell
export { AppShell } from "./components/AppShell";
export type { AppShellProps, AppShellTheme, AppShellDensity } from "./components/AppShell";
export { StatusBar, HealthDots } from "./components/StatusBar";
export type { StatusBarProps, HealthDotsProps, HealthService } from "./components/StatusBar";

// Layout
export { PageHead } from "./components/PageHead";
export type { PageHeadProps } from "./components/PageHead";
export { Card } from "./components/Card";
export type { CardProps } from "./components/Card";
export { Empty } from "./components/Empty";
export type { EmptyProps } from "./components/Empty";
export { Table, CellStack, CellMeta } from "./components/Table";
export type { CellStackProps, CellMetaProps } from "./components/Table";

// Atoms
export { Badge } from "./components/Badge";
export type { BadgeProps, BadgeTone } from "./components/Badge";
export { StatusDot, StatusLabel } from "./components/StatusDot";
export type { StatusDotProps, StatusLabelProps, Status } from "./components/StatusDot";
export { Avatar, AvatarStack } from "./components/Avatar";
export type {
  AvatarProps,
  AvatarSize,
  AvatarStackProps,
  AvatarStackUser,
} from "./components/Avatar";

// Visualization
export { Meter } from "./components/Meter";
export type { MeterProps, MeterTone } from "./components/Meter";
export { LineChart, BarChart, Donut } from "./components/Charts";
export type {
  LineChartProps,
  LineSeries,
  BarChartProps,
  DonutProps,
  DonutSegment,
} from "./components/Charts";
