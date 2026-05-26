"use client";
import React, { type ReactNode } from "react";
import { StatusDot, type Status } from "./StatusDot";
import { cn } from "../utils/cn";

export interface HealthService {
  name: string;
  status: Status;
}

export interface StatusBarProps {
  connected?: boolean;
  connectedLabel?: ReactNode;
  disconnectedLabel?: ReactNode;
  queueDepth?: number;
  services?: HealthService[];
  version?: ReactNode;
  docsHref?: string;
  className?: string;
  children?: ReactNode;
}

export function StatusBar({
  connected = true,
  connectedLabel = "connected",
  disconnectedLabel = "disconnected",
  queueDepth,
  services,
  version,
  docsHref,
  className,
  children,
}: StatusBarProps) {
  return (
    <div className={cn("statusbar", className)}>
      <span className="seg">
        <StatusDot status={connected ? "succeeded" : "failed"} />
        <span>{connected ? connectedLabel : disconnectedLabel}</span>
      </span>
      {queueDepth != null && (
        <span className="seg">
          queue <b>{queueDepth}</b>
        </span>
      )}
      {services && <HealthDots services={services} />}
      {children}
      <span style={{ flex: 1 }} />
      {version && <span className="seg">{version}</span>}
      {docsHref && (
        <a className="seg" href={docsHref}>
          ↗ docs
        </a>
      )}
    </div>
  );
}

export interface HealthDotsProps {
  services: HealthService[];
  className?: string;
}

export function HealthDots({ services, className }: HealthDotsProps) {
  return (
    <span className={cn("seg", className)}>
      {services.map((s) => (
        <span
          key={s.name}
          className="tooltip-wrap"
          style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
        >
          <StatusDot status={s.status} />
          <span
            style={{
              fontSize: 10,
              color: s.status === "healthy" ? "var(--on-surface-variant)" : "var(--error-55)",
            }}
          >
            {s.name}
          </span>
        </span>
      ))}
    </span>
  );
}
