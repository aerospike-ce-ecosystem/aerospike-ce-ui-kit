"use client";
import * as RadixDialog from "@radix-ui/react-dialog";
import React, { type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
}

export const DialogTrigger = RadixDialog.Trigger;

export interface DialogContentProps {
  title?: ReactNode;
  description?: ReactNode;
  width?: number | string;
  showClose?: boolean;
  className?: string;
  children: ReactNode;
  onPointerDownOutside?: (event: Event) => void;
  onInteractOutside?: (event: Event) => void;
}

export function DialogContent({
  title,
  description,
  width = 480,
  showClose = true,
  className,
  children,
  onPointerDownOutside,
  onInteractOutside,
}: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="modal-backdrop" />
      <RadixDialog.Content
        className={cn("modal", className)}
        style={{ width: typeof width === "number" ? `${width}px` : width }}
        onPointerDownOutside={onPointerDownOutside}
        onInteractOutside={onInteractOutside}
      >
        {(title || description || showClose) && (
          <div className="modal-header" style={{ position: "relative" }}>
            {title && <RadixDialog.Title className="modal-title">{title}</RadixDialog.Title>}
            {description && (
              <RadixDialog.Description
                style={{ marginTop: 6, fontSize: 13, color: "var(--on-surface-muted)" }}
              >
                {description}
              </RadixDialog.Description>
            )}
            {showClose && (
              <RadixDialog.Close
                className="btn btn-icon btn-sm"
                style={{ position: "absolute", top: 12, right: 12 }}
                aria-label="close"
              >
                <Icon name="close" size={16} />
              </RadixDialog.Close>
            )}
          </div>
        )}
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

export function DialogBody({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("modal-body", className)}>{children}</div>;
}

export function DialogFooter({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("modal-footer", className)}>{children}</div>;
}

export const DialogClose = RadixDialog.Close;
