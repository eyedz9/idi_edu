/** Step 4: Payment via Clover tokenized card fields with terms acceptance. */
"use client";

import { cn } from "@/lib/cn";
import type { StepProps } from "./registration-types";
import {
  PAYMENT_TIERS,
  HOW_FOUND_OPTIONS,
  labelBase,
  selectBase,
  inputBase,
} from "./registration-constants";
import {
  CloverPaymentFields,
  type CloverPaymentRef,
} from "@/components/forms/clover-payment-fields";

const RequiredStar = () => <span className="text-pink-500 ml-0.5">*</span>;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export interface StepPaymentProps extends StepProps {
  cloverRef: React.RefObject<CloverPaymentRef | null>;
}

export function StepPayment({ formData, updateFields, cloverRef }: StepPaymentProps) {
  return (
    <div className="space-y-8">
      {/* ── Payment Tier ──────────────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-2">
          Payment Choice — Combined Certificate Course<RequiredStar />
        </legend>
        <p className="text-sm text-sandstone mb-4">
          Full or partial tuition payment includes books, supplies &amp;
          mandatory non-refundable state fee.
        </p>

        <div className="space-y-3">
          {PAYMENT_TIERS.map((tier) => (
            <label
              key={tier.value}
              className={cn(
                "flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all",
                formData.paymentTier === tier.value
                  ? "border-pink-500/40 bg-pink-500/5"
                  : "border-white/10 bg-plum-800/40 hover:border-white/20",
              )}
            >
              <input
                type="radio"
                name="paymentTier"
                value={tier.value}
                checked={formData.paymentTier === tier.value}
                onChange={(e) =>
                  updateFields({
                    paymentTier: e.target
                      .value as typeof formData.paymentTier,
                  })
                }
                className="mt-1 h-4 w-4 accent-pink-500"
              />
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-2xl font-bold text-pink-500">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold text-parchment">
                    {tier.label}
                  </span>
                </div>
                <p className="mt-1 text-xs text-sandstone leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Additional Information ────────────────────────────────────── */}
      <div>
        <label htmlFor="additionalInfo" className={labelBase}>
          Additional Information / Special Requests
        </label>
        <textarea
          id="additionalInfo"
          rows={3}
          value={formData.additionalInfo}
          onChange={(e) => updateFields({ additionalInfo: e.target.value })}
          className={cn(inputBase, "resize-y")}
          placeholder="Anything else you'd like us to know?"
        />
      </div>

      {/* ── Credit Card (Clover Secure Iframes) ──────────────────────── */}
      <fieldset className="rounded-xl border border-white/10 bg-plum-800/30 p-5 sm:p-6">
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Credit Card<RequiredStar />
        </legend>
        <CloverPaymentFields ref={cloverRef} />
      </fieldset>

      {/* ── Terms & Conditions ────────────────────────────────────────── */}
      <div className="rounded-xl border border-white/10 bg-plum-800/40 p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) =>
              updateFields({ termsAccepted: e.target.checked })
            }
            className="mt-1 h-4 w-4 accent-pink-500"
          />
          <span className="text-sm text-sandstone leading-relaxed">
            I authorize the above charge for Registration to my credit card
            as shown. I further certify that all information is true and
            accurate and agree to provide the school documentation of high
            school graduation or a G.E.D. by the first date of attendance.
            <RequiredStar />
          </span>
        </label>

        {/* Title IX Notice */}
        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-sandstone/70 mb-2">
            Title IX Notice of Nondiscrimination
          </p>
          <p className="text-xs text-sandstone/60 leading-relaxed">
            Interior Designers Institute does not discriminate on the basis
            of sex in the education programs or activities it operates and
            is required by Title IX not to discriminate in such a manner.
            Questions regarding Title IX should contact the college&apos;s
            Title IX Coordinator at: Interior Designers Institute, Attn:
            Title IX Coordinator, 1061 Camelback Street, Newport Beach, CA
            92660. Phone: (949) 675-4451 Email:{" "}
            <a
              href="mailto:TitleIXCoordinator@idi.edu"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              TitleIXCoordinator@idi.edu
            </a>
          </p>
        </div>
      </div>

      {/* ── How Found ─────────────────────────────────────────────────── */}
      <div>
        <label htmlFor="howFound" className={labelBase}>
          How did you find out about IDI?<RequiredStar />
        </label>
        <select
          id="howFound"
          value={formData.howFound}
          onChange={(e) => updateFields({ howFound: e.target.value })}
          className={selectBase}
        >
          <option value="">Select...</option>
          {HOW_FOUND_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
