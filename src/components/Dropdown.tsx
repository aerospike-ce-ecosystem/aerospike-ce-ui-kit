"use client";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface DropdownProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Dropdown({ open, onOpenChange, children }: DropdownProps) {
  return (
    <RadixDropdown.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDropdown.Root>
  );
}

export const DropdownTrigger = RadixDropdown.Trigger;

export interface DropdownContentProps {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  children: ReactNode;
}

export function DropdownContent({
  side = "bottom",
  align = "start",
  className,
  children,
}: DropdownContentProps) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        side={side}
        align={align}
        sideOffset={6}
        className={cn("menu", className)}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

export interface DropdownItemProps {
  onSelect?: (e: Event) => void;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export function DropdownItem({
  onSelect,
  danger,
  disabled,
  className,
  children,
}: DropdownItemProps) {
  return (
    <RadixDropdown.Item
      onSelect={onSelect}
      disabled={disabled}
      className={cn("menu-item", danger && "is-danger", className)}
    >
      {children}
    </RadixDropdown.Item>
  );
}

export function DropdownLabel({ children }: { children: ReactNode }) {
  return <RadixDropdown.Label className="menu-label">{children}</RadixDropdown.Label>;
}

export function DropdownSeparator() {
  return <RadixDropdown.Separator className="menu-divider" />;
}
