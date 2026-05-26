"use client";
import React, { type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export type KPIAccent = "amber" | "primary" | "danger";

export interface KPIProps {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  delta?: number;
  dir?: "up" | "down";
  hint?: ReactNode;
  accent?: KPIAccent;
  onClick?: () => void;
  className?: string;
}

export function KPI({ label, value, unit, delta, dir, hint, accent, onClick, className }: KPIProps) {
  const isLink = typeof onClick === "function";
  const Wrap: any = isLink ? "a" : "div";
  const linkProps = isLink
    ? {
        href: "#",
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          onClick?.();
        },
        style: { cursor: "pointer", textDecoration: "none" },
      }
    : {};
  return (
    <Wrap className={cn("ace-kpi", accent && `is-${accent}`, className)} {...linkProps}>
      <div className="label">
        {label}
        {accent === "amber" && (
          <span style={{ color: "var(--accent-amber-500, #C99A3F)" }}>
            <Icon name="alert" size={12} />
          </span>
        )}
      </div>
      <div className="value">
        {value}
        {unit && <span className="u">{unit}</span>}
      </div>
      {delta != null && (
        <div className={cn("delta", dir === "up" ? "up" : "down")}>
          <Icon name={dir === "up" ? "arrowUp" : "arrowDown"} size={10} />
          {Math.abs(delta)}
          {Number.isInteger(delta) ? "%" : "pp"}
          <span className="vs">vs yesterday</span>
        </div>
      )}
      {hint && <div className="hint">{hint}</div>}
    </Wrap>
  );
}
