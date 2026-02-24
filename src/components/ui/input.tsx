"use client";

import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  type FocusEvent,
} from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  error?: string;
  /** Optional helper text below the input */
  hint?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, className, id, onFocus, onBlur, ...props },
  ref,
) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean(props.value || props.defaultValue),
  );

  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const isFloating = isFocused || hasValue;

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(e);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
    onBlur?.(e);
  }

  return (
    <div className={cn("relative", className)}>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${inputId}-error`
            : hint
              ? `${inputId}-hint`
              : undefined
        }
        className={cn(
          "peer w-full rounded-lg border bg-white px-4 pb-2.5 pt-5 text-sm text-neutral-700 outline-none transition-colors duration-200",
          "placeholder-transparent",
          error
            ? "border-error focus:border-error focus:ring-1 focus:ring-error"
            : "border-warm-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500",
        )}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          setHasValue(e.target.value.length > 0);
          props.onChange?.(e);
        }}
        {...props}
      />

      {/* Floating label */}
      <label
        htmlFor={inputId}
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

      {/* Error message */}
      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-1.5 text-xs text-error"
        >
          {error}
        </p>
      )}

      {/* Hint */}
      {!error && hint && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
});

export default Input;
