/** Clover-hosted iframe payment fields for secure card tokenization. */
"use client";

import {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import Script from "next/script";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface CloverPaymentRef {
  createToken: () => Promise<{ token: string } | { errors: string[] }>;
}

interface CloverPaymentFieldsProps {
  onReady?: () => void;
  onError?: (msg: string) => void;
}

/* -------------------------------------------------------------------------- */
/*  Clover SDK global types                                                   */
/* -------------------------------------------------------------------------- */

declare global {
  interface Window {
    Clover?: new (pakmsKey: string) => CloverInstance;
  }
}

interface CloverInstance {
  elements: () => CloverElements;
  createToken: () => Promise<{ token?: string; errors?: Array<{ message: string }> }>;
}

interface CloverElements {
  create: (
    type: "CARD_NUMBER" | "CARD_DATE" | "CARD_CVV" | "CARD_POSTAL_CODE",
    styles?: Record<string, unknown>,
  ) => CloverElement;
}

interface CloverElement {
  mount: (selector: string) => void;
}

/* -------------------------------------------------------------------------- */
/*  Shared iframe styles (Plum Luxe theme)                                    */
/* -------------------------------------------------------------------------- */

const iframeStyles = {
  body: {
    fontFamily: "inherit",
    fontSize: "14px",
    color: "#f5f0e8",
    backgroundColor: "transparent",
  },
  input: {
    fontSize: "14px",
    color: "#f5f0e8",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    padding: "0",
    margin: "0",
  },
  "input::placeholder": {
    color: "rgba(194,178,160,0.4)",
  },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export const CloverPaymentFields = forwardRef<
  CloverPaymentRef,
  CloverPaymentFieldsProps
>(function CloverPaymentFields({ onReady, onError }, ref) {
  const cloverRef = useRef<CloverInstance | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const mountedRef = useRef(false);

  // Mount Clover elements once SDK is loaded
  useEffect(() => {
    if (!sdkLoaded || mountedRef.current) return;

    const pakmsKey = process.env.NEXT_PUBLIC_CLOVER_PAKMS_KEY;
    if (!pakmsKey || !window.Clover) {
      onError?.("Payment system unavailable. Please call (949) 675-4451.");
      return;
    }

    try {
      const clover = new window.Clover(pakmsKey);
      cloverRef.current = clover;
      const elements = clover.elements();

      elements.create("CARD_NUMBER", iframeStyles).mount("#clover-card-number");
      elements.create("CARD_DATE", iframeStyles).mount("#clover-card-date");
      elements.create("CARD_CVV", iframeStyles).mount("#clover-card-cvv");
      elements.create("CARD_POSTAL_CODE", iframeStyles).mount("#clover-card-postal-code");

      mountedRef.current = true;
      onReady?.();
    } catch {
      onError?.("Failed to initialize payment fields.");
    }
  }, [sdkLoaded, onReady, onError]);

  // Expose createToken to parent via ref
  useImperativeHandle(ref, () => ({
    async createToken() {
      if (!cloverRef.current) {
        return { errors: ["Payment system not initialized."] };
      }

      try {
        const result = await cloverRef.current.createToken();
        if (result.token) {
          return { token: result.token };
        }
        const errors =
          result.errors?.map((e) => e.message) ?? ["Tokenization failed."];
        return { errors };
      } catch {
        return { errors: ["Payment processing error. Please try again."] };
      }
    },
  }));

  const fieldClass =
    "h-12 rounded-lg border border-white/10 bg-plum-800/60 px-3 transition-colors focus-within:border-pink-500/50 focus-within:ring-2 focus-within:ring-pink-500/20";

  return (
    <>
      <Script
        // Sandbox: checkout.sandbox.dev.clover.com | Production: checkout.clover.com
        src={`https://${process.env.NEXT_PUBLIC_CLOVER_SDK_HOST || "checkout.sandbox.dev.clover.com"}/sdk.js`}
        strategy="lazyOnload"
        onLoad={() => setSdkLoaded(true)}
      />

      <div className="space-y-5">
        {/* Card Number */}
        <div>
          <label className="block text-sm font-semibold text-parchment mb-1.5">
            Card Number
          </label>
          <div id="clover-card-number" className={fieldClass} />
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-semibold text-parchment mb-1.5">
              Expiration Date
            </label>
            <div id="clover-card-date" className={fieldClass} />
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-semibold text-parchment mb-1.5">
              CVV
            </label>
            <div id="clover-card-cvv" className={fieldClass} />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-semibold text-parchment mb-1.5">
              Billing ZIP
            </label>
            <div id="clover-card-postal-code" className={fieldClass} />
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-sandstone/60">
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Secured by Clover — card data never touches our servers. IDI accepts
          Discover, Mastercard, and Visa.
        </p>
      </div>
    </>
  );
});
