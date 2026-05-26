"use client";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface PageHeadProps {
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function PageHead({ title, sub, className, children }: PageHeadProps) {
  return (
    <div className={cn("ace-page-head", className)}>
      <div className="lead">
        <div>
          <h1>{title}</h1>
          {sub && <div className="sub">{sub}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}
