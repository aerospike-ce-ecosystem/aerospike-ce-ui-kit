"use client";
import React, { type ReactNode, Fragment } from "react";
import { cn } from "../utils/cn";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  current?: boolean;
  mono?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("breadcrumb", className)} aria-label="breadcrumb">
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        const current = it.current ?? isLast;
        const content = current ? (
          <span className={cn("current", it.mono && "mono")}>{it.label}</span>
        ) : it.href || it.onClick ? (
          <a
            href={it.href ?? "#"}
            onClick={(e) => {
              if (it.onClick) {
                e.preventDefault();
                it.onClick();
              }
            }}
            className={cn(it.mono && "mono")}
          >
            {it.label}
          </a>
        ) : (
          <span className={cn(it.mono && "mono")}>{it.label}</span>
        );
        return (
          <Fragment key={i}>
            {content}
            {!isLast && <span className="sep">/</span>}
          </Fragment>
        );
      })}
    </nav>
  );
}
