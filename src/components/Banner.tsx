"use client";
import React, { type ReactNode, useState } from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export type BannerTone = "info" | "warning" | "success";

export interface BannerProps {
  tone?: BannerTone;
  icon?: IconName | string;
  title?: ReactNode;
  desc?: ReactNode;
  actionLabel?: ReactNode;
  onAction?: () => void;
  onDismiss?: () => void;
  dismissable?: boolean;
  className?: string;
}

const DEFAULT_ICON: Record<BannerTone, IconName> = {
  info: "sparkle",
  warning: "alert",
  success: "checkCircle",
};

export function Banner({
  tone = "info",
  icon,
  title,
  desc,
  actionLabel,
  onAction,
  onDismiss,
  dismissable = true,
  className,
}: BannerProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className={cn("ace-announce", `tone-${tone}`, className)} role="status">
      <span className="ico">
        <Icon name={icon ?? DEFAULT_ICON[tone]} size={16} />
      </span>
      <div className="body">
        {title && <div className="title">{title}</div>}
        {desc && <div className="desc">{desc}</div>}
      </div>
      <div className="actions">
        {actionLabel && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onAction?.();
            }}
          >
            {actionLabel}
          </a>
        )}
        {dismissable && (
          <button
            type="button"
            className="btn btn-icon btn-sm"
            onClick={() => {
              setOpen(false);
              onDismiss?.();
            }}
            aria-label="dismiss"
          >
            <Icon name="close" size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
