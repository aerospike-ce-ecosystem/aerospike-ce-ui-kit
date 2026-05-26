"use client";
import React from "react";
import { cn } from "../utils/cn";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  color?: string;
  className?: string;
}

function initialsFor(name?: string): string {
  if (!name) return "?";
  return name
    .split(/\s+/)
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, src, size = "md", color, className }: AvatarProps) {
  const cls = cn("avatar", size !== "md" && `avatar-${size}`, className);
  if (src) {
    return (
      <span className={cls}>
        <img
          src={src}
          alt={name ?? ""}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </span>
    );
  }
  return (
    <span className={cls} style={color ? { background: color, color: "#fff" } : undefined}>
      {initialsFor(name)}
    </span>
  );
}

export interface AvatarStackUser {
  name: string;
  color?: string;
}

export interface AvatarStackProps {
  users: AvatarStackUser[];
  max?: number;
  className?: string;
}

export function AvatarStack({ users, max = 4, className }: AvatarStackProps) {
  const shown = users.slice(0, max);
  const rest = users.length - shown.length;
  return (
    <span className={cn("avatar-stack", className)}>
      {shown.map((u, i) => (
        <Avatar key={i} name={u.name} size="sm" color={u.color} />
      ))}
      {rest > 0 && (
        <span
          className="avatar avatar-sm"
          style={{ background: "var(--surface-container)", color: "var(--on-surface-variant)" }}
        >
          +{rest}
        </span>
      )}
    </span>
  );
}
