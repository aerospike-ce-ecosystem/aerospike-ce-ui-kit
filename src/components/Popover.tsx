"use client";
import * as RadixPopover from "@radix-ui/react-popover";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface PopoverProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Popover({ open, onOpenChange, children }: PopoverProps) {
  return (
    <RadixPopover.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixPopover.Root>
  );
}

export const PopoverTrigger = RadixPopover.Trigger;

export interface PopoverContentProps {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  children: ReactNode;
}

export function PopoverContent({
  side = "bottom",
  align = "start",
  className,
  children,
}: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        align={align}
        sideOffset={6}
        className={cn("menu", className)}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
}
