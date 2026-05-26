"use client";
import React, { type ReactNode } from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface EmptyProps {
  icon?: IconName | string;
  title: ReactNode;
  sub?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function Empty({ icon = "folder", title, sub, action, className }: EmptyProps) {
  return (
    <div className={cn("empty", className)}>
      <span className="ico">
        <Icon name={icon} size={24} />
      </span>
      <div className="ttl">{title}</div>
      {sub && <div className="sub">{sub}</div>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}
