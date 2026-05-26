"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export type MeterTone = "is-warn" | "is-danger" | "is-teal" | "";

export interface MeterProps {
  label: ReactNode;
  current: number;
  cap: number;
  format?: (n: number) => string;
  tone?: MeterTone;
  unit?: string;
  className?: string;
}

export function Meter({
  label,
  current,
  cap,
  format = (v) => String(v),
  tone,
  unit,
  className,
}: MeterProps) {
  const pct = Math.min(100, Math.round((current / cap) * 100));
  const t = tone ?? (pct > 90 ? "is-danger" : pct > 70 ? "is-warn" : "");
  return (
    <div className={cn("ace-meter", t, className)}>
      <div className="row">
        <span className="lbl">{label}</span>
        <span className="val">
          {format(current)}
          {unit && <span style={{ color: "var(--on-surface-muted)" }}>{unit}</span>}{" "}
          <span style={{ color: "var(--on-surface-muted)" }}>
            / {format(cap)}
            {unit ?? ""}
          </span>
        </span>
      </div>
      <div className="bar">
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
