"use client";
import React, { type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface TopBarProps {
  searchPlaceholder?: string;
  onSearchClick?: () => void;
  searchKbd?: ReactNode;
  showSearch?: boolean;
  className?: string;
  children?: ReactNode;
}

export function TopBar({
  searchPlaceholder = "검색하거나 명령 실행",
  onSearchClick,
  searchKbd = "⌘K",
  showSearch = true,
  className,
  children,
}: TopBarProps) {
  return (
    <header className={cn("topbar", className)}>
      {showSearch && (
        <div className="topbar-search">
          <Icon name="search" size={15} />
          <input placeholder={searchPlaceholder} onClick={onSearchClick} readOnly />
          {searchKbd && <kbd>{searchKbd}</kbd>}
        </div>
      )}
      <span style={{ flex: 1 }} />
      {children}
    </header>
  );
}

export interface CostPillProps {
  label?: ReactNode;
  value: ReactNode;
  className?: string;
}

export function CostPill({ label = "오늘 비용", value, className }: CostPillProps) {
  return (
    <span className={cn("cost-pill", className)}>
      <span className="lbl">{label}</span>
      <span className="val">{value}</span>
    </span>
  );
}
