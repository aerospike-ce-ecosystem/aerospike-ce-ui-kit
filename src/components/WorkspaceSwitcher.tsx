"use client";
import React, { type ReactNode, useState, useRef, useEffect } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface WorkspaceOption {
  id: string;
  name: string;
  badgeChar?: string;
  badgeColor?: string;
  subtitle?: ReactNode;
}

export interface WorkspaceSwitcherProps {
  current: WorkspaceOption;
  options: WorkspaceOption[];
  onSelect?: (id: string) => void;
  onManage?: () => void;
  onCreate?: () => void;
  menuLabel?: ReactNode;
  className?: string;
}

export function WorkspaceSwitcher({
  current,
  options,
  onSelect,
  onManage,
  onCreate,
  menuLabel = "전환할 Workspace",
  className,
}: WorkspaceSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={ref} className={cn("ace-ws", className)}>
      <button
        type="button"
        className="ace-ws-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="ace-ws-badge" style={{ background: current.badgeColor }}>
          {current.badgeChar ?? current.name[0]}
        </span>
        <span className="ace-ws-meta">
          <span className="ace-ws-name">{current.name}</span>
          {current.subtitle && <span className="ace-ws-sub">{current.subtitle}</span>}
        </span>
        <Icon
          name="chevronsUpDown"
          size={14}
          style={{ color: "var(--on-surface-muted)", marginLeft: "auto" }}
        />
      </button>
      {open && (
        <div className="ace-ws-menu">
          <div className="ace-ws-menu-label">{menuLabel}</div>
          {options.map((w) => (
            <button
              key={w.id}
              type="button"
              className={cn("ace-ws-item", w.id === current.id && "is-current")}
              onClick={() => {
                onSelect?.(w.id);
                setOpen(false);
              }}
            >
              <span className="ace-ws-badge" style={{ background: w.badgeColor }}>
                {w.badgeChar ?? w.name[0]}
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minWidth: 0,
                  gap: 1,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 13, color: "var(--on-surface)" }}>
                  {w.name}
                </span>
                {w.subtitle && (
                  <span style={{ fontSize: 11.5, color: "var(--on-surface-muted)" }}>
                    {w.subtitle}
                  </span>
                )}
              </span>
              {w.id === current.id && (
                <Icon name="check" size={14} style={{ color: "var(--primary-50)" }} />
              )}
            </button>
          ))}
          {(onManage || onCreate) && <div className="ace-ws-menu-divider" />}
          {onManage && (
            <button
              type="button"
              className="ace-ws-item"
              onClick={() => {
                onManage();
                setOpen(false);
              }}
            >
              <span
                className="ace-ws-badge"
                style={{
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface-variant)",
                }}
              >
                <Icon name="settings" size={13} />
              </span>
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  color: "var(--on-surface-variant)",
                  fontWeight: 500,
                }}
              >
                Workspace 관리
              </span>
            </button>
          )}
          {onCreate && (
            <button
              type="button"
              className="ace-ws-item"
              onClick={() => {
                onCreate();
                setOpen(false);
              }}
            >
              <span
                className="ace-ws-badge"
                style={{
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface-variant)",
                }}
              >
                <Icon name="plus" size={13} />
              </span>
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  color: "var(--on-surface-variant)",
                  fontWeight: 500,
                }}
              >
                새 Workspace 만들기
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
