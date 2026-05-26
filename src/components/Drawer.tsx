"use client";
import * as RadixDialog from "@radix-ui/react-dialog";
import React, { type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export type DrawerSide = "right" | "left";

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
}

export const DrawerTrigger = RadixDialog.Trigger;

export interface DrawerContentProps {
  side?: DrawerSide;
  width?: number | string;
  title?: ReactNode;
  showClose?: boolean;
  className?: string;
  children: ReactNode;
}

export function DrawerContent({
  side = "right",
  width = 420,
  title,
  showClose = true,
  className,
  children,
}: DrawerContentProps) {
  const w = typeof width === "number" ? `${width}px` : width;
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="modal-backdrop" />
      <RadixDialog.Content
        className={cn(className)}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          [side]: 0,
          width: w,
          maxWidth: "100vw",
          background: "var(--surface)",
          borderLeft: side === "right" ? "1px solid var(--border-subtle)" : undefined,
          borderRight: side === "left" ? "1px solid var(--border-subtle)" : undefined,
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          flexDirection: "column",
          animation: `drawerSlide${side === "right" ? "Right" : "Left"} 200ms var(--easing-enter)`,
          zIndex: 201,
        }}
      >
        {(title || showClose) && (
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexShrink: 0,
            }}
          >
            {title && (
              <RadixDialog.Title
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--on-surface)",
                  margin: 0,
                }}
              >
                {title}
              </RadixDialog.Title>
            )}
            {showClose && (
              <RadixDialog.Close className="btn btn-icon btn-sm" aria-label="close">
                <Icon name="close" size={16} />
              </RadixDialog.Close>
            )}
          </div>
        )}
        <div style={{ flex: 1, overflow: "auto", padding: 20 }}>{children}</div>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

export const DrawerClose = RadixDialog.Close;
