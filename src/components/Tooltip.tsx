"use client";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  delayDuration?: number;
  className?: string;
  triggerAsChild?: boolean;
}

export function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 200,
  className,
  triggerAsChild = true,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild={triggerAsChild}>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={6}
            className={cn(className)}
            style={{
              background: "var(--neutral-12)",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 500,
              maxWidth: 260,
              zIndex: 100,
              animation: "var(--duration-fast, 100ms) var(--easing-enter, ease) tooltipShow",
            }}
          >
            {content}
            <RadixTooltip.Arrow style={{ fill: "var(--neutral-12)" }} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
