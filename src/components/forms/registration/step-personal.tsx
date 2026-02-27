/** Step 2: Personal information collection (name, contact, SSN, demographics). */
"use client";

import { useState } from "react";
import type { StepProps } from "./registration-types";
import { inputBase, labelBase, selectBase } from "./registration-constants";

const RequiredStar = () => <span className="text-pink-500 ml-0.5">*</span>;

/* -------------------------------------------------------------------------- */
/*  SSN formatting helpers                                                    */
/* -------------------------------------------------------------------------- */

function formatSSN(raw: string, masked: boolean): string {
  const digits = raw.replace(/\D/g, "").slice(0, 9);
  if (digits.length === 0) return "";

  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 5),
    digits.slice(5, 9),
  ].filter(Boolean);

  if (masked && digits.length > 5) {
    return `***-**-${parts[2]}`;
  }
  if (masked && digits.length > 3) {
    return `***-${parts[1].replace(/./g, "*")}`;
  }
  if (masked) {
    return parts[0].replace(/./g, "*");
  }

  return parts.join("-");
}

function stripSSN(formatted: string): string {
  return formatted.replace(/\D/g, "").slice(0, 9);
}

/* -------------------------------------------------------------------------- */
/*  Phone formatting                                                          */
/* -------------------------------------------------------------------------- */

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function StepPersonal({ formData, updateFields }: StepProps) {
  const [showSSN, setShowSSN] = useState(false);

  const showCaAddress =
    formData.internationalStudent === "yes" ||
    (formData.usResident === "yes" && formData.caResident === "no");

  return (
    <div className="space-y-8">
      {/* ── Name ──────────────────────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Personal Information
        </legend>

        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelBase}>
                First Name<RequiredStar />
              </label>
              <input
                id="firstName"
                type="text"
                required
                autoComplete="given-name"
                value={formData.firstName}
                onChange={(e) => updateFields({ firstName: e.target.value })}
                className={inputBase}
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelBase}>
                Last Name<RequiredStar />
              </label>
              <input
                id="lastName"
                type="text"
                required
                autoComplete="family-name"
                value={formData.lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })}
                className={inputBase}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="preferredFirstName" className={labelBase}>
                Preferred First Name
              </label>
              <input
                id="preferredFirstName"
                type="text"
                value={formData.preferredFirstName}
                onChange={(e) =>
                  updateFields({ preferredFirstName: e.target.value })
                }
                className={inputBase}
                placeholder="If different from legal name"
              />
            </div>
            <div>
              <label htmlFor="preferredLastName" className={labelBase}>
                Preferred Last Name
              </label>
              <input
                id="preferredLastName"
                type="text"
                value={formData.preferredLastName}
                onChange={(e) =>
                  updateFields({ preferredLastName: e.target.value })
                }
                className={inputBase}
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className={labelBase}>
              Gender
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) =>
                updateFields({
                  gender: e.target.value as typeof formData.gender,
                })
              }
              className={selectBase}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* ── Residency & Address ───────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Address
        </legend>

        <div className="space-y-5">
          <div>
            <label htmlFor="usResident" className={labelBase}>
              Do you live in the United States?<RequiredStar />
            </label>
            <select
              id="usResident"
              value={formData.usResident}
              onChange={(e) =>
                updateFields({
                  usResident: e.target.value as typeof formData.usResident,
                })
              }
              className={selectBase}
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="address1" className={labelBase}>
              Address Line 1<RequiredStar />
            </label>
            <input
              id="address1"
              type="text"
              required
              autoComplete="address-line1"
              value={formData.address1}
              onChange={(e) => updateFields({ address1: e.target.value })}
              className={inputBase}
              placeholder="Street address"
            />
          </div>

          <div>
            <label htmlFor="address2" className={labelBase}>
              Address Line 2
            </label>
            <input
              id="address2"
              type="text"
              autoComplete="address-line2"
              value={formData.address2}
              onChange={(e) => updateFields({ address2: e.target.value })}
              className={inputBase}
              placeholder="Apt, suite, unit, etc."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="city" className={labelBase}>
                City<RequiredStar />
              </label>
              <input
                id="city"
                type="text"
                required
                autoComplete="address-level2"
                value={formData.city}
                onChange={(e) => updateFields({ city: e.target.value })}
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="state" className={labelBase}>
                State<RequiredStar />
              </label>
              <input
                id="state"
                type="text"
                required
                autoComplete="address-level1"
                value={formData.state}
                onChange={(e) => updateFields({ state: e.target.value })}
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="zip" className={labelBase}>
                ZIP Code<RequiredStar />
              </label>
              <input
                id="zip"
                type="text"
                required
                autoComplete="postal-code"
                value={formData.zip}
                onChange={(e) => updateFields({ zip: e.target.value })}
                className={inputBase}
                placeholder="92660"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="caResident" className={labelBase}>
                California Resident?<RequiredStar />
              </label>
              <select
                id="caResident"
                value={formData.caResident}
                onChange={(e) =>
                  updateFields({
                    caResident: e.target.value as typeof formData.caResident,
                  })
                }
                className={selectBase}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="internationalStudent" className={labelBase}>
                International Student?
              </label>
              <select
                id="internationalStudent"
                value={formData.internationalStudent}
                onChange={(e) =>
                  updateFields({
                    internationalStudent: e.target
                      .value as typeof formData.internationalStudent,
                  })
                }
                className={selectBase}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Conditional California Address */}
          {showCaAddress && (
            <div className="space-y-5 rounded-xl border border-violet/20 bg-violet/5 p-5 animate-in fade-in">
              <p className="text-sm font-semibold text-parchment">
                California Address
              </p>
              <div>
                <label htmlFor="caAddress1" className={labelBase}>
                  Address Line 1
                </label>
                <input
                  id="caAddress1"
                  type="text"
                  value={formData.caAddress1}
                  onChange={(e) =>
                    updateFields({ caAddress1: e.target.value })
                  }
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="caAddress2" className={labelBase}>
                  Address Line 2
                </label>
                <input
                  id="caAddress2"
                  type="text"
                  value={formData.caAddress2}
                  onChange={(e) =>
                    updateFields({ caAddress2: e.target.value })
                  }
                  className={inputBase}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label htmlFor="caCity" className={labelBase}>
                    City
                  </label>
                  <input
                    id="caCity"
                    type="text"
                    value={formData.caCity}
                    onChange={(e) =>
                      updateFields({ caCity: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="caState" className={labelBase}>
                    State
                  </label>
                  <input
                    id="caState"
                    type="text"
                    value={formData.caState}
                    onChange={(e) =>
                      updateFields({ caState: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="caZip" className={labelBase}>
                    ZIP Code
                  </label>
                  <input
                    id="caZip"
                    type="text"
                    value={formData.caZip}
                    onChange={(e) =>
                      updateFields({ caZip: e.target.value })
                    }
                    className={inputBase}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </fieldset>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Contact Information
        </legend>

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className={labelBase}>
              Email<RequiredStar />
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateFields({ email: e.target.value })}
              className={inputBase}
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="homePhone" className={labelBase}>
                Home Phone<RequiredStar />
              </label>
              <input
                id="homePhone"
                type="tel"
                required
                autoComplete="tel"
                value={formData.homePhone}
                onChange={(e) =>
                  updateFields({ homePhone: formatPhone(e.target.value) })
                }
                className={inputBase}
                placeholder="(949) 555-1234"
              />
            </div>
            <div>
              <label htmlFor="cellPhone" className={labelBase}>
                Cell Phone
              </label>
              <input
                id="cellPhone"
                type="tel"
                autoComplete="tel"
                value={formData.cellPhone}
                onChange={(e) =>
                  updateFields({ cellPhone: formatPhone(e.target.value) })
                }
                className={inputBase}
                placeholder="(949) 555-1234"
              />
            </div>
            <div>
              <label htmlFor="workPhone" className={labelBase}>
                Work Phone
              </label>
              <input
                id="workPhone"
                type="tel"
                value={formData.workPhone}
                onChange={(e) =>
                  updateFields({ workPhone: formatPhone(e.target.value) })
                }
                className={inputBase}
                placeholder="(949) 555-1234"
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* ── SSN, DOB, Emergency ───────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Additional Details
        </legend>

        <div className="space-y-5">
          {/* SSN */}
          <div>
            <label htmlFor="ssn" className={labelBase}>
              Social Security Number<RequiredStar />
            </label>
            <div className="relative">
              <input
                id="ssn"
                type="text"
                inputMode="numeric"
                required
                value={formatSSN(formData.ssn, !showSSN)}
                onChange={(e) => {
                  const raw = stripSSN(e.target.value);
                  /* When masked, user may type new digits — append to stored value */
                  if (!showSSN) {
                    const existing = formData.ssn;
                    const newDigit = e.target.value.replace(/\D/g, "").slice(-1);
                    if (
                      e.target.value.length > formatSSN(existing, true).length &&
                      newDigit
                    ) {
                      updateFields({ ssn: (existing + newDigit).slice(0, 9) });
                      return;
                    }
                    if (e.target.value.length < formatSSN(existing, true).length) {
                      updateFields({ ssn: existing.slice(0, -1) });
                      return;
                    }
                  }
                  updateFields({ ssn: raw });
                }}
                className={`${inputBase} pr-10`}
                placeholder="XXX-XX-XXXX"
                maxLength={11}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowSSN(!showSSN)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sandstone/60 hover:text-parchment transition-colors"
                aria-label={showSSN ? "Hide SSN" : "Show SSN"}
              >
                {showSSN ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-sandstone/60">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              128-Bit SSL Data Encryption — your information is safe
            </p>
          </div>

          {/* Birth Date */}
          <div>
            <label htmlFor="birthDate" className={labelBase}>
              Date of Birth<RequiredStar />
            </label>
            <input
              id="birthDate"
              type="date"
              required
              value={formData.birthDate}
              onChange={(e) => updateFields({ birthDate: e.target.value })}
              className={inputBase}
              style={{ colorScheme: "dark" }}
            />
          </div>

          {/* Known Illnesses */}
          <div>
            <label htmlFor="knownIllnesses" className={labelBase}>
              Known Illnesses
            </label>
            <input
              id="knownIllnesses"
              type="text"
              value={formData.knownIllnesses}
              onChange={(e) =>
                updateFields({ knownIllnesses: e.target.value })
              }
              className={inputBase}
              placeholder="List any illness of which the Institute should be aware"
            />
          </div>

          {/* Emergency Contact */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="emergencyContact" className={labelBase}>
                Emergency Contact<RequiredStar />
              </label>
              <input
                id="emergencyContact"
                type="text"
                required
                value={formData.emergencyContact}
                onChange={(e) =>
                  updateFields({ emergencyContact: e.target.value })
                }
                className={inputBase}
                placeholder="In case of emergency notify"
              />
            </div>
            <div>
              <label htmlFor="emergencyPhone" className={labelBase}>
                Contact Phone<RequiredStar />
              </label>
              <input
                id="emergencyPhone"
                type="tel"
                required
                value={formData.emergencyPhone}
                onChange={(e) =>
                  updateFields({
                    emergencyPhone: formatPhone(e.target.value),
                  })
                }
                className={inputBase}
                placeholder="(949) 555-1234"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
