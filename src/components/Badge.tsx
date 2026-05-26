"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export type BadgeTone = "default" | "primary" | "success" | "warning" | "error" | "info";

export interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "default", dot, className, children }: BadgeProps) {
  return (
    <span className={cn("badge", `badge-${tone}`, dot && "badge-dot", className)}>
      {children}
    </span>
  );
}
