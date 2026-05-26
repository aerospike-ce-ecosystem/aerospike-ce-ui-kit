"use client";
import React, { type ReactNode } from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface NavItem {
  id: string;
  label: ReactNode;
  icon?: IconName | string;
  href?: string;
  active?: boolean;
  badge?: ReactNode;
  badgeWarn?: boolean;
  onClick?: () => void;
}

export interface NavGroup {
  title?: ReactNode;
  rightAdornment?: ReactNode;
  items: NavItem[];
}

export interface SidebarProps {
  brand?: ReactNode;
  workspaceSwitcher?: ReactNode;
  groups: NavGroup[];
  foot?: ReactNode;
  className?: string;
}

export function Sidebar({ brand, workspaceSwitcher, groups, foot, className }: SidebarProps) {
  return (
    <aside className={cn("sidebar", className)}>
      {brand && <div className="sidebar-brand">{brand}</div>}
      {workspaceSwitcher}
      <nav className="sidebar-nav">
        {groups.map((g, gi) => (
          <React.Fragment key={gi}>
            {g.title && (
              <div className="nav-section">
                {g.title}
                {g.rightAdornment}
              </div>
            )}
            {g.items.map((it) => (
              <a
                key={it.id}
                href={it.href ?? "#"}
                className={cn("nav-item", it.active && "is-active")}
                onClick={(e) => {
                  if (it.onClick) {
                    e.preventDefault();
                    it.onClick();
                  }
                }}
              >
                {it.icon && <Icon name={it.icon} size={16} />}
                <span className="lbl">{it.label}</span>
                {it.badge != null && (
                  <span className={cn("count", it.badgeWarn && "is-warn")}>{it.badge}</span>
                )}
              </a>
            ))}
          </React.Fragment>
        ))}
      </nav>
      {foot && <div className="sidebar-foot">{foot}</div>}
    </aside>
  );
}

export interface SidebarBrandProps {
  mark?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function SidebarBrand({ mark, title, subtitle }: SidebarBrandProps) {
  return (
    <>
      {mark && <span className="mark">{mark}</span>}
      <div className="wm">
        {title}
        {subtitle && <small>{subtitle}</small>}
      </div>
    </>
  );
}
