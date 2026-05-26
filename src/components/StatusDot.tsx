"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export type Status =
  | "running"
  | "awaiting"
  | "queued"
  | "succeeded"
  | "failed"
  | "cancelled"
  | "healthy"
  | "degraded"
  | "unreach"
  | "info"
  | "critical"
  | "warning"
  | "error"
  | "neutral";

export interface StatusDotProps {
  status: Status;
  className?: string;
  "aria-label"?: string;
}

export function StatusDot({ status, className, ...rest }: StatusDotProps) {
  return (
    <span
      className={cn("status-dot", `is-${status}`, className)}
      aria-label={rest["aria-label"] ?? status}
    />
  );
}

export interface StatusLabelProps {
  status: Status;
  children?: ReactNode;
  muted?: boolean;
  className?: string;
}

export function StatusLabel({ status, children, muted, className }: StatusLabelProps) {
  return (
    <span className={cn("status-label", muted && "is-muted", className)}>
      <StatusDot status={status} />
      {children ?? status}
    </span>
  );
}
