# API Routes Reference

All API routes are located under `src/app/api/` and use the Next.js App Router route handler pattern. Every route applies the same security middleware stack before processing business logic.

---

## Common Security Middleware

Every API route applies these checks in order:

### 1. Origin Check (CSRF Protection)

**File:** `src/lib/origin-check.ts`

Validates the `Origin` header against an allowlist:
- `https://idi.edu`
- `https://www.idi.edu`
- Any `localhost` origin (development)
- Vercel preview URLs matching `https://idi-edu(-[a-z0-9-]+)?.vercel.app`

If the `Origin` header is absent (same-origin navigation or server-to-server), the request is allowed.

**Failure response:**
```json
{ "error": "Forbidden" }
```
Status: `403`

### 2. Rate Limiting

**File:** `src/lib/rate-limit.ts`

In-memory sliding-window rate limiter keyed by `{route}:{ip}`.

| Parameter | Value |
|---|---|
| Limit | 5 requests |
| Window | 60 seconds |
| Key | Route name + client IP (from `x-forwarded-for` header) |

Resets on serverless cold start.

**Failure response:**
```json
{ "error": "Too many requests. Please wait a minute and try again." }
```
Status: `429`

### 3. Zod Validation

Request bodies are validated against schemas defined in `src/lib/schemas.ts`. On validation failure, the first error message is returned.

**Failure response:**
```json
{ "error": "<first validation error message>" }
```
Status: `400`

---

## POST /api/contact

**File:** `src/app/api/contact/route.ts`
**Purpose:** Validates and forwards contact form submissions to Zapier.

### Request

```
POST /api/contact
Content-Type: application/json
```

**Body (contactSchema):**

| Field | Type | Required | Description |
|---|---|---|---|
| `howFound` | `string` | Yes | How the user found IDI |
| `firstName` | `string` | Yes | First name |
| `lastName` | `string` | Yes | Last name |
| `contactMethod` | `string` | Yes | Preferred contact method (Email / Phone / Either) |
| `email` | `string` | Yes | Valid email address |
| `phone` | `string` | Yes | Phone number |
| `address` | `string` | Yes | Street address |
| `message` | `string` | No | Optional question or comment |

### Responses

| Status | Body | Condition |
|---|---|---|
| `200` | `{ "success": true }` | Submission forwarded to Zapier successfully |
| `400` | `{ "error": "<message>" }` | Zod validation failure |
| `403` | `{ "error": "Forbidden" }` | Origin check failure |
| `429` | `{ "error": "Too many requests..." }` | Rate limited |
| `502` | `{ "error": "Submission failed..." }` | Zapier webhook returned non-2xx |
| `503` | `{ "error": "Contact form is temporarily unavailable..." }` | `ZAPIER_CONTACT_WEBHOOK_URL` not configured |
| `500` | `{ "error": "An unexpected error occurred..." }` | Unhandled server error |

### Zapier Payload

The validated form data plus:
- `submittedAt` -- ISO 8601 timestamp
- `source` -- `"idi.edu-contact-form"`

---

## POST /api/apply

**File:** `src/app/api/apply/route.ts`
**Purpose:** Validates and forwards application form submissions to Zapier. No payment processing.

### Request

```
POST /api/apply
Content-Type: application/json
```

**Body (applicationSchema):**

| Field | Type | Required | Description |
|---|---|---|---|
| `programType` | `"combined" \| "hybrid" \| "single"` | Yes | Program enrollment type |
| `firstName` | `string` | Yes | Legal first name |
| `lastName` | `string` | Yes | Legal last name |
| `preferredFirstName` | `string` | No | Preferred first name |
| `preferredLastName` | `string` | No | Preferred last name |
| `gender` | `string` | No | Gender |
| `internationalStudent` | `string` | No | International student status |
| `email` | `string` | Yes | Valid email |
| `phone` | `string` | Yes | Primary phone |
| `phone2` | `string` | No | Secondary phone |
| `ssn` | `string` | Yes | 9-digit SSN (dashes stripped server-side) |
| `birthDate` | `string` | Yes | Date of birth |
| `knownIllnesses` | `string` | No | Medical conditions |
| `address1` | `string` | Yes | Street address |
| `address2` | `string` | No | Apt/suite |
| `city` | `string` | Yes | City |
| `state` | `string` | Yes | State |
| `zip` | `string` | Yes | ZIP code |
| `caResident` | `string` | No | California residency |
| `highSchool` | `string` | Yes | High school attended |
| `graduationDate` | `string` | Yes | Graduation date |
| `collegesAttended` | `string` | No | Other colleges |
| `coursePreference` | `string` | No | In-person / online / hybrid |
| `inPersonSchedule` | `string \| string[]` | No | Selected in-person schedules |
| `onlineSchedule` | `string \| string[]` | No | Selected online schedules |
| `hybridSchedule` | `string \| string[]` | No | Selected hybrid schedules |
| `emergencyContact` | `string` | Yes | Emergency contact name |
| `emergencyPhone` | `string` | Yes | Emergency contact phone |
| `paymentTier` | `string` | No | Payment tier (not charged here) |
| `additionalInfo` | `string` | No | Extra info |
| `termsAccepted` | `boolean \| "on"` | Yes | Terms agreement |
| `howFound` | `string` | Yes | How they found IDI |
| `diplomaFileUrl` | `string` | No | URL to uploaded diploma |

### Responses

| Status | Body | Condition |
|---|---|---|
| `200` | `{ "success": true }` | Application forwarded to Zapier |
| `400` | `{ "error": "<message>" }` | Validation failure |
| `403` | `{ "error": "Forbidden" }` | Origin check failure |
| `429` | `{ "error": "Too many requests..." }` | Rate limited |
| `502` | `{ "error": "Submission failed..." }` | Zapier webhook failed |
| `503` | `{ "error": "Application form is temporarily unavailable..." }` | Webhook URL not configured |
| `500` | `{ "error": "An unexpected error occurred..." }` | Server error |

### Security Notes

- SSN formatting (dashes) is stripped before validation
- SSN is never logged server-side
- SSN is included in the HTTPS webhook payload for CRM processing

---

## POST /api/register

**File:** `src/app/api/register/route.ts`
**Purpose:** Validates registration form, charges card via Clover, then forwards to Zapier.

### Request

```
POST /api/register
Content-Type: application/json
```

**Body (registrationSchema):**

All fields from `applicationSchema` plus:

| Field | Type | Required | Description |
|---|---|---|---|
| `programType` | `"combined" \| "hybrid" \| "single"` | Yes | Program type |
| `combinedSchedule` | `string` | Conditional | Schedule if combined |
| `hybridLecture` | `string` | Conditional | Lecture time if hybrid |
| `hybridStudio` | `string` | Conditional | Studio time if hybrid |
| `singleClass` | `string` | Conditional | Class if single |
| `usResident` | `"yes" \| "no"` | Yes | US residency |
| `caResident` | `"yes" \| "no"` | Yes | California residency |
| `homePhone` | `string` | Yes | Home phone |
| `cellPhone` | `string` | No | Cell phone |
| `workPhone` | `string` | No | Work phone |
| `paymentTier` | `"95" \| "1195" \| "2795"` | Yes | Payment amount tier |
| `cloverToken` | `string` | Yes | Tokenized card data from Clover SDK |
| `termsAccepted` | `true` | Yes | Must be boolean `true` |

### Payment Amounts

| Tier | Amount (cents) | Description |
|---|---|---|
| `"95"` | 9,500 | Registration fee only |
| `"1195"` | 119,500 | Partial payment |
| `"2795"` | 279,500 | Full payment |

### Processing Flow

1. Origin check + rate limit
2. Strip SSN formatting
3. Zod validation
4. Look up payment amount from tier
5. Charge card via Clover REST API (`POST https://scl.clover.com/v1/charges`)
6. If charge fails -> return error (no webhook call)
7. If charge succeeds -> forward to Zapier with `chargeId`, `amountCharged`, `cardLast4`
8. If Zapier fails -> log warning but return success (charge already processed)

### Responses

| Status | Body | Condition |
|---|---|---|
| `200` | `{ "success": true, "chargeId": "...", "amount": 95 }` | Card charged and webhook sent |
| `400` | `{ "error": "<message>" }` | Validation failure or invalid payment tier |
| `402` | `{ "error": "<Clover error message>" }` | Card charge failed |
| `403` | `{ "error": "Forbidden" }` | Origin check failure |
| `429` | `{ "error": "Too many requests..." }` | Rate limited |
| `503` | `{ "error": "Payment processing is temporarily unavailable..." }` | `CLOVER_API_TOKEN` not configured |
| `500` | `{ "error": "An unexpected error occurred..." }` | Server error |

### Zapier Payload

Validated form data (excluding `cloverToken`) plus:
- `ssn` -- For CRM entry (HTTPS)
- `chargeId` -- Clover charge identifier
- `amountCharged` -- Dollar amount charged
- `cardLast4` -- Last 4 digits of charged card
- `submittedAt` -- ISO 8601 timestamp
- `source` -- `"idi.edu-registration"`

---

## POST /api/upload

**File:** `src/app/api/upload/route.ts`
**Purpose:** Uploads files to Vercel Blob storage (used for diploma documents).

### Request

```
POST /api/upload
Content-Type: multipart/form-data
```

**Body:** Form data with a single `file` field.

### Validation

| Check | Constraint |
|---|---|
| File presence | Must have a `file` field |
| File type | Must be one of: `application/pdf`, `image/jpeg`, `image/png`, `application/msword`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| File size | Maximum 10 MB |

### File Naming

The original filename is discarded for security. Files are stored as `diplomas/{timestamp}{extension}` (e.g., `diplomas/1709123456789.pdf`).

### Responses

| Status | Body | Condition |
|---|---|---|
| `200` | `{ "url": "https://...vercel-storage.com/diplomas/..." }` | File uploaded successfully |
| `400` | `{ "error": "No file provided." }` | Missing file |
| `400` | `{ "error": "File type not allowed..." }` | Invalid MIME type |
| `400` | `{ "error": "File too large..." }` | Exceeds 10 MB |
| `403` | `{ "error": "Forbidden" }` | Origin check failure |
| `429` | `{ "error": "Too many requests..." }` | Rate limited |
| `500` | `{ "error": "Upload failed..." }` | Server error |

---

## POST /api/tour

**File:** `src/app/api/tour/route.ts`
**Purpose:** Validates and forwards campus tour booking requests to Zapier.

### Request

```
POST /api/tour
Content-Type: application/json
```

**Body (tourSchema):**

| Field | Type | Required | Description |
|---|---|---|---|
| `firstName` | `string` | Yes | First name |
| `lastName` | `string` | Yes | Last name |
| `email` | `string` | Yes | Valid email address |
| `phone` | `string` | Yes | Phone number |
| `preferredDate` | `string` | Yes | Preferred visit date |
| `preferredTime` | `string` | Yes | Preferred time slot |
| `groupSize` | `string` | Yes | Number of visitors |
| `programInterest` | `string` | No | Program of interest |
| `comments` | `string` | No | Additional questions or notes |

### Responses

| Status | Body | Condition |
|---|---|---|
| `200` | `{ "success": true }` | Tour request forwarded to Zapier |
| `400` | `{ "error": "<message>" }` | Validation failure |
| `403` | `{ "error": "Forbidden" }` | Origin check failure |
| `429` | `{ "error": "Too many requests..." }` | Rate limited |
| `502` | `{ "error": "Submission failed..." }` | Zapier webhook failed |
| `503` | `{ "error": "Tour booking is temporarily unavailable..." }` | Webhook URL not configured |
| `500` | `{ "error": "An unexpected error occurred..." }` | Server error |

### Zapier Payload

Validated form data plus:
- `submittedAt` -- ISO 8601 timestamp
- `source` -- `"idi.edu-tour-form"`

---

## Error Response Format

All API routes return errors in a consistent format:

```json
{
  "error": "Human-readable error message"
}
```

Error messages are designed to be displayed directly to users and include fallback contact information (phone number and email) when a service is unavailable.
