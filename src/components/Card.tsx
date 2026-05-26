"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface CardProps {
  title?: ReactNode;
  meta?: ReactNode;
  action?: ReactNode;
  flush?: boolean;
  className?: string;
  children: ReactNode;
}

export function Card({ title, meta, action, flush, className, children }: CardProps) {
  const hasHead = Boolean(title || meta || action);
  return (
    <div className={cn("ace-card", className)}>
      {hasHead && (
        <div className="ace-card-head">
          <div>{title && <div className="title">{title}</div>}</div>
          <div className="flex items-center gap-2">
            {meta && <span className="meta">{meta}</span>}
            {action}
          </div>
        </div>
      )}
      <div className={cn("ace-card-body", flush && "flush")}>{children}</div>
    </div>
  );
}
