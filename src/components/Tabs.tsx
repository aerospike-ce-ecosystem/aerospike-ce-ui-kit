"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface TabItem {
  value: string;
  label: ReactNode;
  count?: number | string;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange?: (next: string) => void;
  pill?: boolean;
  className?: string;
}

export function Tabs({ tabs, value, onChange, pill, className }: TabsProps) {
  return (
    <div className={cn(pill ? "tabs-pill" : "tabs", className)}>
      {tabs.map((t) => (
        <button
          key={t.value}
          type="button"
          className={cn("tab", value === t.value && "is-active")}
          onClick={() => onChange?.(t.value)}
        >
          {t.label}
          {t.count != null && (
            <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.7 }}>{t.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
