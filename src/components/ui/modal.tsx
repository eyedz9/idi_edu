"use client";

import {
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Size map                                                                  */
/* -------------------------------------------------------------------------- */

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-5xl",
} as const;

type ModalSize = keyof typeof sizeStyles;

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: ReactNode;
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function Modal({
  open,
  onClose,
  size = "md",
  title,
  className,
  children,
  ...props
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  /* ----- Close on Escape -------------------------------------------------- */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  /* ----- Focus trap ------------------------------------------------------- */
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus the panel on open
    const timer = setTimeout(() => {
      panelRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(timer);
      previousFocusRef.current?.focus();
    };
  }, [open, handleKeyDown]);

  /* ----- Focus trap: keep focus within modal ------------------------------ */
  function handleTabTrap(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !panelRef.current) return;

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        onKeyDown={handleTabTrap}
        className={cn(
          "relative z-10 w-full rounded-2xl bg-white shadow-2xl outline-none",
          "animate-in zoom-in-95 fade-in duration-200",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {/* Header with close button */}
        <div className="flex items-start justify-between border-b border-warm-200 px-6 py-4">
          {title && (
            <h2 className="font-heading text-xl font-bold text-brand-900">
              {title}
            </h2>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto -mr-1 -mt-1 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-warm-100 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Close dialog"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
