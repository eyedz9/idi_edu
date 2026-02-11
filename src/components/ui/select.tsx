"use client";

import {
  forwardRef,
  useState,
  type SelectHTMLAttributes,
  type FocusEvent,
} from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
  /** Include an empty first option with this text (default "Select...") */
  placeholder?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      options,
      error,
      hint,
      placeholder = "Select\u2026",
      className,
      id,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      Boolean(props.value || props.defaultValue),
    );

    const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const isFloating = isFocused || hasValue;

    function handleFocus(e: FocusEvent<HTMLSelectElement>) {
      setIsFocused(true);
      onFocus?.(e);
    }

    function handleBlur(e: FocusEvent<HTMLSelectElement>) {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      onBlur?.(e);
    }

    return (
      <div className={cn("relative", className)}>
        <select
          ref={ref}
          id={selectId}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error
              ? `${selectId}-error`
              : hint
                ? `${selectId}-hint`
                : undefined
          }
          className={cn(
            "peer w-full appearance-none rounded-lg border bg-white px-4 pb-2.5 pt-5 text-sm text-neutral-700 outline-none transition-colors duration-200",
            error
              ? "border-error focus:border-error focus:ring-1 focus:ring-error"
              : "border-warm-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500",
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Floating label */}
        <label
          htmlFor={selectId}
          className={cn(
            "pointer-events-none absolute left-4 transition-all duration-200 font-body",
            isFloating
              ? "top-1.5 text-[11px] font-medium"
              : "top-1/2 -translate-y-1/2 text-sm",
            error
              ? "text-error"
              : isFloating
                ? "text-accent-500"
                : "text-neutral-500",
          )}
        >
          {label}
        </label>

        {/* Chevron icon */}
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        {/* Error message */}
        {error && (
          <p
            id={`${selectId}-error`}
            role="alert"
            className="mt-1.5 text-xs text-error"
          >
            {error}
          </p>
        )}

        {/* Hint */}
        {!error && hint && (
          <p
            id={`${selectId}-hint`}
            className="mt-1.5 text-xs text-neutral-500"
          >
            {hint}
          </p>
        )}
      </div>
    );
  },
);

export default Select;
