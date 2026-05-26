"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";
import React, { type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: any) => void;
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
  children,
}: AccordionProps) {
  if (type === "multiple") {
    return (
      <RadixAccordion.Root
        type="multiple"
        defaultValue={defaultValue as string[] | undefined}
        value={value as string[] | undefined}
        onValueChange={onValueChange}
        className={cn(className)}
      >
        {children}
      </RadixAccordion.Root>
    );
  }
  return (
    <RadixAccordion.Root
      type="single"
      defaultValue={defaultValue as string | undefined}
      value={value as string | undefined}
      onValueChange={onValueChange}
      collapsible={collapsible}
      className={cn(className)}
    >
      {children}
    </RadixAccordion.Root>
  );
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <RadixAccordion.Item value={value} className={cn(className)}>
      {children}
    </RadixAccordion.Item>
  );
}

export interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  return (
    <RadixAccordion.Header style={{ all: "unset", display: "block" }}>
      <RadixAccordion.Trigger
        className={cn("group", className)}
        style={{
          all: "unset",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        {children}
        <Icon
          name="chevronDown"
          size={16}
          className="transition-transform duration-fast group-data-[state=open]:rotate-180"
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

export interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  return (
    <RadixAccordion.Content className={cn(className)}>{children}</RadixAccordion.Content>
  );
}
