"use client";
import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function Table({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="table-wrap">
      <table className={cn("table", className)} {...rest}>
        {children}
      </table>
    </div>
  );
}

export interface CellStackProps {
  className?: string;
  children: ReactNode;
}

export function CellStack({ className, children }: CellStackProps) {
  return <div className={cn("cell-stack", className)}>{children}</div>;
}

export interface CellMetaProps {
  name: ReactNode;
  sub?: ReactNode;
  className?: string;
}

export function CellMeta({ name, sub, className }: CellMetaProps) {
  return (
    <div className={cn("cell-meta", className)}>
      <span className="name">{name}</span>
      {sub && <span className="sub">{sub}</span>}
    </div>
  );
}
