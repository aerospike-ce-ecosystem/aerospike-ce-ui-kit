"use client";
import React, { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";
import { Icon, type IconName } from "../icons/Icon";
import { cn } from "../utils/cn";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  leftIcon?: IconName | string;
}

export function TextInput({ label, hint, error, leftIcon, className, ...rest }: TextInputProps) {
  const input = leftIcon ? (
    <span className="input-with-icon">
      <Icon name={leftIcon} size={16} />
      <input className={cn("input", error && "is-error", className)} {...rest} />
    </span>
  ) : (
    <input className={cn("input", error && "is-error", className)} {...rest} />
  );
  return (
    <div className="input-group">
      {label && <label className="label">{label}</label>}
      {input}
      {(hint || error) && (
        <span className={cn("helper", error && "is-error")}>{error || hint}</span>
      )}
    </div>
  );
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export function Textarea({ label, hint, error, className, ...rest }: TextareaProps) {
  return (
    <div className="input-group">
      {label && <label className="label">{label}</label>}
      <textarea className={cn("textarea", error && "is-error", className)} {...rest} />
      {(hint || error) && (
        <span className={cn("helper", error && "is-error")}>{error || hint}</span>
      )}
    </div>
  );
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  options: Array<SelectOption | string>;
}

export function Select({ label, hint, error, options, className, ...rest }: SelectProps) {
  return (
    <div className="input-group">
      {label && <label className="label">{label}</label>}
      <select className={cn("select", className)} {...rest}>
        {options.map((o) =>
          typeof o === "string" ? (
            <option key={o} value={o}>
              {o}
            </option>
          ) : (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          )
        )}
      </select>
      {(hint || error) && (
        <span className={cn("helper", error && "is-error")}>{error || hint}</span>
      )}
    </div>
  );
}
