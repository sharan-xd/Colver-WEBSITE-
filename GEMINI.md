# Colver Project — ECC Architecture & Instructions

This repository is governed by the **ECC (Everything Claude Code / Everything Agent Harness)** development standards.

## Project Stack
- **Framework**: Next.js 16.4.3 (App Router)
- **UI / Styling**: React 18, Tailwind CSS, Lucide React, Framer Motion
- **Language**: TypeScript 5 (Strict Mode)
- **Backend / API**: Next.js Route Handlers (`app/api/*`)
- **Security**: Cloudflare security audited (0 vulnerabilities), strict CSP, rate limiting, honeypot defenses
- **SEO & GEO**: Full Schema.org JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `Service`, `ContactPage`), AI discovery (`llms.txt`, `llms-full.txt`), `security.txt`, dynamic `sitemap.ts` and `robots.ts`

## ECC Workflow Directives
Whenever building, modifying, or refactoring features in Colver:
1. **Plan First**: Formulate an implementation outline specifying affected routes, components, and contracts.
2. **Test First**: Write test cases or automated request scenarios establishing the expected output.
3. **Immutability**: Avoid mutating state or props. Return new objects and arrays.
4. **Boundary Validation**: Validate all request payloads in API routes (e.g. `app/api/contact/route.ts`).
5. **Component Granularity**:
   - Keep UI components focused and modular (<300 lines).
   - Maintain strict Server Component vs `'use client'` boundaries.
   - For client components requiring metadata, isolate the client interactivity into a child component (`*Client.tsx`) so the Server Component can export Next.js `Metadata`.
6. **Security Standard**:
   - Zero hardcoded secrets (use `.env.local`).
   - Scrub sensitive details from client-facing API responses.
7. **Delivery Gate**:
   - Run `npm run lint` (`tsc --noEmit`).
   - Run `npm run build`.
   - Never consider a change complete if build or type checks fail.
