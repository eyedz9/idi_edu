/** Step 1: Program and schedule selection for certificate course registration. */
"use client";

import { cn } from "@/lib/cn";
import type { StepProps } from "./registration-types";
import {
  TERM_INFO,
  PROGRAM_TYPES,
  COMBINED_SCHEDULES,
  HYBRID_LECTURES,
  HYBRID_STUDIOS,
  SINGLE_OPTIONS,
  inputBase,
  labelBase,
  selectBase,
} from "./registration-constants";

const RequiredStar = () => <span className="text-pink-500 ml-0.5">*</span>;

export function StepProgram({ formData, updateFields }: StepProps) {
  return (
    <div className="space-y-8">
      {/* Term info banner */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/15">
            <svg
              className="h-5 w-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div>
            <p className="font-heading text-base font-bold text-parchment">
              {TERM_INFO.name}
            </p>
            <p className="text-sm text-sandstone">
              Term Dates: {TERM_INFO.displayDates}
            </p>
          </div>
        </div>
      </div>

      {/* Program type selection */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Choose Your Program Type
          <RequiredStar />
        </legend>

        <div className="space-y-3">
          {PROGRAM_TYPES.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all",
                formData.programType === opt.value
                  ? "border-pink-500/40 bg-pink-500/5"
                  : "border-white/10 bg-plum-800/40 hover:border-white/20",
              )}
            >
              <input
                type="radio"
                name="programType"
                value={opt.value}
                checked={formData.programType === opt.value}
                onChange={(e) => updateFields({ programType: e.target.value as typeof formData.programType })}
                className="mt-1 h-4 w-4 accent-pink-500"
              />
              <div>
                <span className="text-sm font-semibold text-parchment">
                  OPTION {PROGRAM_TYPES.indexOf(opt) + 1}: {opt.label}
                </span>
                <p className="text-xs text-sandstone mt-0.5">
                  {opt.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Conditional schedule selection */}
      {formData.programType === "combined" && (
        <fieldset className="animate-in fade-in">
          <legend className={labelBase}>
            Choose Your Schedule
            <RequiredStar />
          </legend>
          <p className="text-xs text-sandstone mb-3">
            Select ONE of the following class combinations:
          </p>
          <div className="space-y-2">
            {COMBINED_SCHEDULES.map((s) => (
              <label
                key={s.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
                  formData.combinedSchedule === s.value
                    ? "border-pink-500/40 bg-pink-500/5"
                    : "border-white/10 bg-plum-800/40 hover:border-white/20",
                )}
              >
                <input
                  type="radio"
                  name="combinedSchedule"
                  value={s.value}
                  checked={formData.combinedSchedule === s.value}
                  onChange={(e) =>
                    updateFields({ combinedSchedule: e.target.value })
                  }
                  className="h-4 w-4 accent-pink-500"
                />
                <div className="flex items-center gap-2">
                  <span className="rounded bg-plum-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sandstone">
                    {s.tag}
                  </span>
                  <span className="text-sm text-parchment">{s.label}</span>
                </div>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {formData.programType === "hybrid" && (
        <div className="space-y-6 animate-in fade-in">
          <fieldset>
            <legend className={labelBase}>
              Step A — Choose ONE Lecture Time
              <RequiredStar />
            </legend>
            <select
              name="hybridLecture"
              value={formData.hybridLecture}
              onChange={(e) =>
                updateFields({ hybridLecture: e.target.value })
              }
              className={selectBase}
            >
              <option value="">Select a lecture time...</option>
              {HYBRID_LECTURES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset>
            <legend className={labelBase}>
              Step B — Choose ONE Studio Time
              <RequiredStar />
            </legend>
            <select
              name="hybridStudio"
              value={formData.hybridStudio}
              onChange={(e) =>
                updateFields({ hybridStudio: e.target.value })
              }
              className={selectBase}
            >
              <option value="">Select a studio time...</option>
              {HYBRID_STUDIOS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
      )}

      {formData.programType === "single" && (
        <fieldset className="animate-in fade-in">
          <legend className={labelBase}>
            Choose ONE Lecture or ONE Studio
            <RequiredStar />
          </legend>
          <select
            name="singleClass"
            value={formData.singleClass}
            onChange={(e) =>
              updateFields({ singleClass: e.target.value })
            }
            className={selectBase}
          >
            <option value="">Select a class...</option>
            {SINGLE_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </fieldset>
      )}
    </div>
  );
}
