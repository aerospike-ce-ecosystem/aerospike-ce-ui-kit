"use client";
import React, { type ReactNode, type MouseEventHandler } from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface ChipProps {
  active?: boolean;
  leftIcon?: IconName | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
}

export function Chip({ active, leftIcon, onClick, className, children }: ChipProps) {
  return (
    <button
      type="button"
      className={cn("chip", active && "is-active", className)}
      onClick={onClick}
    >
      {leftIcon && <Icon name={leftIcon} size={14} />}
      {children}
    </button>
  );
}

export interface TagProps {
  removable?: boolean;
  onRemove?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
  children: ReactNode;
}

export function Tag({ removable, onRemove, className, children }: TagProps) {
  return (
    <span className={cn("tag", removable && "tag-removable", className)}>
      {children}
      {removable && (
        <span className="x" onClick={onRemove}>
          <Icon name="close" size={12} />
        </span>
      )}
    </span>
  );
}
