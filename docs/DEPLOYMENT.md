# Deployment Guide

The project is designed for deployment on **Vercel**, the platform built by the creators of Next.js. This guide covers setup, configuration, and post-deployment verification.

---

## Vercel Deployment Setup

### 1. Connect Repository

1. Log in to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import the Git repository containing this project
4. Vercel auto-detects it as a Next.js project

### 2. Build Settings

Vercel auto-configures these, but verify:

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `next build` (default) |
| Output Directory | `.next` (default) |
| Install Command | `npm install` (default) |
| Node.js Version | 20.x (LTS) |

### 3. Root Directory

If the project is in a monorepo or subdirectory, set the **Root Directory** to the folder containing `package.json`.

---

## Environment Variables Configuration

All environment variables must be set in Vercel's project settings under **Settings > Environment Variables**.

### Required Variables

| Variable | Where to Get It | Notes |
|---|---|---|
| `ZAPIER_CONTACT_WEBHOOK_URL` | Zapier dashboard | Contact form webhook |
| `ZAPIER_APPLY_WEBHOOK_URL` | Zapier dashboard | Application form webhook |
| `ZAPIER_REGISTER_WEBHOOK_URL` | Zapier dashboard | Registration form webhook |
| `ZAPIER_TOUR_WEBHOOK_URL` | Zapier dashboard | Tour booking form webhook |
| `NEXT_PUBLIC_CLOVER_PAKMS_KEY` | Clover developer dashboard | Public key for client-side tokenization |
| `CLOVER_API_TOKEN` | Clover developer dashboard | Private API token for server-side charges |
| `CLOVER_MERCHANT_ID` | Clover developer dashboard | Merchant identifier |

### Auto-Configured Variables

| Variable | Notes |
|---|---|
| `BLOB_READ_WRITE_TOKEN` | Automatically set when a Vercel Blob store is linked to the project |

### Linking Vercel Blob Storage

1. Go to project **Settings > Storage**
2. Click "Connect Store" and choose "Blob"
3. Create a new Blob store or connect an existing one
4. The `BLOB_READ_WRITE_TOKEN` environment variable is automatically injected

### Environment Scoping

Vercel lets you scope variables to specific environments:

| Scope | Use Case |
|---|---|
| **Production** | Live site at idi.edu |
| **Preview** | Pull request and branch preview deployments |
| **Development** | Local development via `vercel env pull` |

**Recommendation:** Set Clover sandbox credentials for Preview, and production Clover credentials for Production only.

---

## Production vs. Staging Considerations

### Clover Payment Processing

The Clover SDK and API endpoints differ between sandbox and production:

| Environment | SDK Host | API Host |
|---|---|---|
| Sandbox | `checkout.sandbox.dev.clover.com` | `scl.clover.com` |
| Production | `checkout.clover.com` | `api.clover.com` |

**Current state:** The codebase currently uses:
- SDK host: Configurable via `NEXT_PUBLIC_CLOVER_SDK_HOST` (defaults to sandbox)
- API endpoint: Hardcoded to `scl.clover.com` (sandbox) in `src/app/api/register/route.ts`

**Before production launch:**
1. Set `NEXT_PUBLIC_CLOVER_SDK_HOST=checkout.clover.com` in production environment variables
2. Update the charge endpoint in `src/app/api/register/route.ts` from `scl.clover.com` to `api.clover.com` (marked with a `TODO` comment in the code)
3. Use production Clover API credentials

### Content Security Policy

The CSP in `next.config.ts` currently allows both sandbox and production Clover domains. Before production launch, remove the sandbox domains:
- Remove `https://checkout.sandbox.dev.clover.com` from `script-src`, `frame-src`, and `connect-src`
- Keep only `https://checkout.clover.com` and `https://scl.clover.com` (or replace `scl` with the production API host)

This is marked with a `TODO` comment in `next.config.ts`.

### Image Domains

The `next.config.ts` `images.remotePatterns` configuration allows:
- `images.unsplash.com` -- Stock photos used during development
- `plus.unsplash.com` -- Premium Unsplash photos
- `idi.edu` / `www.idi.edu` -- Production image assets

When IDI's own photography replaces Unsplash images, the Unsplash domains can optionally be removed.

---

## DNS / Domain Setup

### Domain Configuration

1. In Vercel project **Settings > Domains**, add:
   - `idi.edu` (primary)
   - `www.idi.edu` (redirects to `idi.edu`)
2. Follow Vercel's instructions to update DNS records:
   - For apex domain (`idi.edu`): Add an `A` record pointing to Vercel's IP, or use a `CNAME` if your DNS provider supports CNAME flattening
   - For `www.idi.edu`: Add a `CNAME` record pointing to `cname.vercel-dns.com`
3. Vercel automatically provisions and renews SSL certificates

### Vercel DNS Nameservers

Alternatively, delegate the entire domain to Vercel's nameservers for simplest management:
1. In Vercel Domains, add `idi.edu`
2. Update the domain registrar's nameservers to those provided by Vercel
3. All DNS management then happens in the Vercel dashboard

### Canonical URL

The site's `metadataBase` is set to `https://idi.edu` in `src/app/layout.tsx`. All canonical URLs, OG images, and sitemap URLs use this base.

---

## Post-Deployment Checklist

### Functionality

- [ ] Homepage loads with all sections visible and animations working
- [ ] Navigation mega menus open and close correctly
- [ ] Mobile navigation drawer works on small screens
- [ ] All program pages render at `/programs/certificate`, `/programs/associate-of-arts`, `/programs/bachelor-of-arts`, `/programs/master-interior-architecture`
- [ ] Program comparison page at `/programs/compare` renders correctly
- [ ] Contact form submits successfully and appears in Zapier
- [ ] Application form submits successfully and appears in Zapier
- [ ] Tour booking form submits successfully and appears in Zapier
- [ ] Registration form processes payment via Clover and forwards to Zapier
- [ ] File upload works for diploma documents (PDF, JPG, PNG, DOC, DOCX under 10 MB)
- [ ] All disclosure document links at `/disclosures` point to valid PDFs

### SEO

- [ ] `https://idi.edu/sitemap.xml` returns valid XML with all pages
- [ ] `https://idi.edu/robots.txt` returns correct rules
- [ ] JSON-LD structured data is present in page source (check with Google Rich Results Test)
- [ ] OG tags render correctly (test with Facebook Sharing Debugger, Twitter Card Validator)
- [ ] Canonical URLs are correct on every page
- [ ] Page titles follow the `%s | Interior Designers Institute` template

### Security

- [ ] All pages are served over HTTPS
- [ ] Security headers are present (check with securityheaders.com):
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` is set
- [ ] API routes return `403` for cross-origin requests from unknown domains
- [ ] API routes return `429` after 5 rapid requests from the same IP
- [ ] SSN fields are not visible in server logs

### Redirects

- [ ] Legacy WordPress URLs redirect with 301:
  - `/associate-of-arts-in-interior-design` -> `/programs/associate-of-arts`
  - `/programs-of-study` -> `/programs`
  - `/about-the-college` -> `/about`
  - `/financial-aid` -> `/admissions/financial-aid`
  - `/contact-us` -> `/contact`
  - `/catalog-and-disclosures` -> `/disclosures`
  - `/request-information` -> `/contact`

### Performance

- [ ] Lighthouse performance score is 90+ on mobile
- [ ] Images are optimized via Next.js Image component
- [ ] Fonts load with `display: swap` (no FOIT)
- [ ] No layout shift from animations (CLS < 0.1)

### Accessibility

- [ ] Skip-to-content link works on keyboard navigation
- [ ] All interactive elements have visible focus indicators
- [ ] Minimum touch target size of 44x44px on mobile
- [ ] `prefers-reduced-motion` disables all GSAP animations
- [ ] All images have meaningful alt text
- [ ] ARIA attributes are correct on mega menus, mobile nav, and modals

---

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in the project dashboard for:
- Core Web Vitals tracking (LCP, FID, CLS)
- Page load performance
- Geographic distribution

### Error Tracking

Server-side errors are logged via `console.error` with prefixed route identifiers (e.g., `[contact]`, `[apply]`, `[register]`, `[upload]`, `[tour]`). These are visible in Vercel's function logs.

For production, consider adding a dedicated error tracking service (e.g., Sentry) to capture and alert on errors.

### Zapier Webhook Monitoring

Each Zapier zap should have error notifications enabled. If a webhook fails, the form API will return a `502` to the user with a fallback phone number.

---

## Rollback

Vercel maintains deployment history for every commit. To roll back:

1. Go to project **Deployments** tab
2. Find the previous working deployment
3. Click the three-dot menu and select "Promote to Production"

This instantly routes production traffic to the previous deployment with zero downtime.
