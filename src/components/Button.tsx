"use client";
import React, {
  type ButtonHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "gray" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Props are spelled out explicitly (rather than just extending
 * `ButtonHTMLAttributes<HTMLButtonElement>`) so consumers with their own
 * `@types/react` install — possibly resolved through a different module
 * graph than the kit's — see a stable surface that doesn't depend on
 * TS unifying two parallel React type trees.
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: IconName | string;
  rightIcon?: IconName | string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  title?: string;
  "aria-label"?: string;
}

export function Button({
  variant = "primary",
  size,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const iconSize = size === "sm" ? 14 : 16;
  return (
    <button
      className={cn("btn", `btn-${variant}`, size && size !== "md" && `btn-${size}`, className)}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} />}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName | string;
  size?: ButtonSize;
  tooltip?: string;
  children?: ReactNode;
}

export function IconButton({ icon, size = "md", tooltip, className, ...rest }: IconButtonProps) {
  const iconSize = size === "sm" ? 16 : size === "lg" ? 20 : 18;
  const btn = (
    <button
      className={cn("btn", "btn-icon", size !== "md" && `btn-${size}`, className)}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
  if (!tooltip) return btn;
  return (
    <span className="tooltip-wrap">
      {btn}
      <span className="tooltip">{tooltip}</span>
    </span>
  );
}
