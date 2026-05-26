"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export type AppShellTheme = "light" | "dark";
export type AppShellDensity = "compact" | "comfortable" | "spacious";

export interface AppShellProps {
  theme?: AppShellTheme;
  density?: AppShellDensity;
  sidebar?: "expanded" | "collapsed";
  primaryColor?: string;
  className?: string;
  children: ReactNode;
}

/**
 * AppShell — root wrapper that establishes the design system context.
 *
 * Layouts a CSS grid:
 *   ┌─ sidebar ─┬─ topbar ─┐
 *   │           ├─ main ───┤
 *   │           └─ statusbar (optional) ─┘
 *
 * Apply data-app="ace" + theme/density attributes. Children should be:
 * <Sidebar/>, <TopBar/>, <main className="main">…</main>, optional <StatusBar/>
 */
export function AppShell({
  theme = "light",
  density = "comfortable",
  sidebar = "expanded",
  primaryColor,
  className,
  children,
}: AppShellProps) {
  return (
    <div
      className={cn("app", className)}
      data-app="ace"
      data-theme={theme}
      data-density={density}
      data-sidebar={sidebar}
      style={primaryColor ? ({ ["--primary-50" as string]: primaryColor } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
