"use client";
import React, { type InputHTMLAttributes, type ReactNode } from "react";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

export function Toggle({ checked, onChange, ...rest }: ToggleProps) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        {...rest}
      />
      <span className="slider" />
    </label>
  );
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: ReactNode;
}

export function Checkbox({ checked, onChange, label, ...rest }: CheckboxProps) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        {...rest}
      />
      <span className="box" />
      {label && <span>{label}</span>}
    </label>
  );
}

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  value: string;
  label?: ReactNode;
}

export function Radio({ checked, onChange, name, value, label }: RadioProps) {
  return (
    <label className="radio">
      <input
        type="radio"
        checked={checked}
        onChange={() => onChange?.(value)}
        name={name}
        value={value}
      />
      <span className="box" />
      {label && <span>{label}</span>}
    </label>
  );
}
