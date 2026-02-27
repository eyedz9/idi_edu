/** Step 3: Education history and diploma/transcript file upload. */
"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { StepProps } from "./registration-types";
import {
  inputBase,
  labelBase,
  IN_PERSON_OPTIONS,
  ONLINE_OPTIONS,
  HYBRID_PREFERENCE_OPTIONS,
} from "./registration-constants";

const RequiredStar = () => <span className="text-pink-500 ml-0.5">*</span>;

export function StepEducation({ formData, updateFields }: StepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  function handleFileChange(file: File | null) {
    if (file && file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10 MB.");
      return;
    }
    updateFields({ diplomaFile: file });
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    handleFileChange(file);
  }

  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Education Information
        </legend>

        <div className="space-y-5">
          {/* High School */}
          <div>
            <label htmlFor="highSchool" className={labelBase}>
              High School Graduated From<RequiredStar />
            </label>
            <input
              id="highSchool"
              type="text"
              required
              value={formData.highSchool}
              onChange={(e) => updateFields({ highSchool: e.target.value })}
              className={inputBase}
            />
          </div>

          {/* File Upload */}
          <div>
            <label className={labelBase}>
              High School Diploma / Transcripts / GED
            </label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={cn(
                "relative rounded-xl border-2 border-dashed p-8 text-center transition-all",
                dragActive
                  ? "border-pink-500/60 bg-pink-500/5"
                  : "border-white/15 bg-plum-800/30 hover:border-white/25",
              )}
            >
              {formData.diplomaFile ? (
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="h-8 w-8 text-jade"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-parchment">
                      {formData.diplomaFile.name}
                    </p>
                    <p className="text-xs text-sandstone">
                      {(formData.diplomaFile.size / 1024).toFixed(0)} KB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      updateFields({ diplomaFile: null });
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="ml-2 rounded-lg p-1.5 text-sandstone/60 hover:bg-white/10 hover:text-parchment transition-colors"
                    aria-label="Remove file"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <svg
                    className="mx-auto h-10 w-10 text-sandstone/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <p className="mt-3 text-sm text-sandstone">
                    Drag and drop here or{" "}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="font-semibold text-pink-500 hover:text-pink-400 transition-colors"
                    >
                      Browse files
                    </button>
                  </p>
                  <p className="mt-1 text-xs text-sandstone/50">
                    Max file size: 10 MB
                  </p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={(e) =>
                  handleFileChange(e.target.files?.[0] ?? null)
                }
                className="hidden"
                aria-label="Upload diploma, transcripts, or GED"
              />
            </div>
          </div>

          {/* Graduation Date */}
          <div>
            <label htmlFor="graduationDate" className={labelBase}>
              Graduation Date<RequiredStar />
            </label>
            <input
              id="graduationDate"
              type="text"
              required
              value={formData.graduationDate}
              onChange={(e) =>
                updateFields({ graduationDate: e.target.value })
              }
              className={inputBase}
              placeholder="MM/YYYY — Enter High School or G.E.D. Graduation Date"
            />
          </div>

          {/* Colleges */}
          <div>
            <label htmlFor="collegesAttended" className={labelBase}>
              Colleges Attended
            </label>
            <input
              id="collegesAttended"
              type="text"
              value={formData.collegesAttended}
              onChange={(e) =>
                updateFields({ collegesAttended: e.target.value })
              }
              className={inputBase}
              placeholder="Enter all colleges separated by a comma"
            />
          </div>
        </div>
      </fieldset>

      {/* ── Course Preference ─────────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Certificate Course Preference<RequiredStar />
        </legend>
        <p className="text-sm text-sandstone mb-4">
          Would you prefer in-person or online?
        </p>

        <div className="flex flex-wrap gap-3">
          {(["in-person", "online", "hybrid"] as const).map((pref) => (
            <label
              key={pref}
              className={cn(
                "cursor-pointer rounded-lg border px-5 py-3 text-sm font-semibold transition-all",
                formData.coursePreference === pref
                  ? "border-pink-500/40 bg-pink-500/10 text-parchment"
                  : "border-white/10 bg-plum-800/40 text-sandstone hover:border-white/20",
              )}
            >
              <input
                type="radio"
                name="coursePreference"
                value={pref}
                checked={formData.coursePreference === pref}
                onChange={(e) =>
                  updateFields({
                    coursePreference: e.target
                      .value as typeof formData.coursePreference,
                    inPersonSchedule: [],
                    onlineSchedule: [],
                    hybridSchedule: [],
                  })
                }
                className="sr-only"
              />
              {pref === "in-person"
                ? "In-Person"
                : pref === "online"
                  ? "Online"
                  : "Hybrid"}
            </label>
          ))}
        </div>

        {/* Conditional schedule checkboxes */}
        {formData.coursePreference === "in-person" && (
          <div className="mt-5 space-y-2 animate-in fade-in">
            <p className={labelBase}>In-Person Schedule</p>
            {IN_PERSON_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
                  formData.inPersonSchedule.includes(opt.value)
                    ? "border-pink-500/40 bg-pink-500/5"
                    : "border-white/10 bg-plum-800/40 hover:border-white/20",
                )}
              >
                <input
                  type="radio"
                  name="inPersonSchedule"
                  value={opt.value}
                  checked={formData.inPersonSchedule.includes(opt.value)}
                  onChange={() =>
                    updateFields({ inPersonSchedule: [opt.value] })
                  }
                  className="h-4 w-4 accent-pink-500"
                />
                <span className="text-sm text-parchment">{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {formData.coursePreference === "online" && (
          <div className="mt-5 space-y-2 animate-in fade-in">
            <p className={labelBase}>Online Schedule</p>
            {ONLINE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
                  formData.onlineSchedule.includes(opt.value)
                    ? "border-pink-500/40 bg-pink-500/5"
                    : "border-white/10 bg-plum-800/40 hover:border-white/20",
                )}
              >
                <input
                  type="radio"
                  name="onlineSchedule"
                  value={opt.value}
                  checked={formData.onlineSchedule.includes(opt.value)}
                  onChange={() =>
                    updateFields({ onlineSchedule: [opt.value] })
                  }
                  className="h-4 w-4 accent-pink-500"
                />
                <span className="text-sm text-parchment">{opt.label}</span>
              </label>
            ))}
          </div>
        )}

        {formData.coursePreference === "hybrid" && (
          <div className="mt-5 space-y-2 animate-in fade-in">
            <p className={labelBase}>
              Select 1 Lecture &amp; 1 Studio
            </p>
            {HYBRID_PREFERENCE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
                  formData.hybridSchedule.includes(opt.value)
                    ? "border-pink-500/40 bg-pink-500/5"
                    : "border-white/10 bg-plum-800/40 hover:border-white/20",
                )}
              >
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={formData.hybridSchedule.includes(opt.value)}
                  onChange={(e) => {
                    const val = e.target.value;
                    const current = formData.hybridSchedule;
                    const next = current.includes(val)
                      ? current.filter((v) => v !== val)
                      : [...current, val].slice(-2);
                    updateFields({ hybridSchedule: next });
                  }}
                  className="h-4 w-4 accent-pink-500"
                />
                <span className="text-sm text-parchment">{opt.label}</span>
              </label>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  );
}
