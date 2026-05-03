# encore wood crafts

editorial-grade marketing site for **encore wood crafts** — a bespoke manufacturer of minimalist timber windows and doors. mirrors the information architecture of [panoramah.com](https://www.panoramah.com) but pivots the visual language from cold aluminum-minimalism to warm, tactile, wood-forward luxury.

> the warmth of bespoke timber.

## stack

- **Next.js 16** (App Router, Turbopack) + TypeScript + React 19
- **Tailwind CSS v4** with `@theme` design tokens
- **Framer Motion** for choreographed scroll/page transitions
- **Lenis** smooth scroll
- **react-hook-form + zod** for the quote and CAD registration forms
- **Resend** (env-gated) for transactional emails
- **next/font** self-hosting Fraunces + Inter + JetBrains Mono
- statically generated for every product, project, news and blog page

## design tokens

| token | value (light) | value (dark) | usage |
| --- | --- | --- | --- |
| `--paper` | `#FAF7F2` | `#13110E` | default surface |
| `--ink` | `#1A1612` | `#EDE5D6` | text |
| `--walnut` | `#6B4423` | `#C89A6F` | primary accent |
| `--oak` | `#A87C4F` | `#B89070` | secondary accent |
| `--brass` | `#B08D57` | `#D6B079` | rare highlight |
| `--stone` | `#E8E2D7` | `#2B251D` | dividers / muted |

motion principles: slow (>500 ms), eased on `cubic-bezier(0.22, 1, 0.36, 1)`, respects `prefers-reduced-motion`.

## routes

| path | description |
| --- | --- |
| `/` | hero + 11 home sections (news rail, 5 product showcases, spotlights, add-ons grid, projects rail, architects CTAs, partners map, all-that-wood story, blog teaser) |
| `/products` | listing of all 5 systems |
| `/products/[slug]` | system detail (sightline diagram, specs, wood species selector, gallery, quote CTA) |
| `/add-ons` | 9 accessory cards with iso-line drawings |
| `/projects` | masonry gallery of reference works |
| `/projects/[slug]` | full case study |
| `/architects` | catalogues + gated CAD library form |
| `/partners` | global partner directory + interactive SVG map |
| `/about` | atelier story, sustainability, master-carpenter portraits |
| `/news` + `/news/[slug]` | dispatches from the atelier |
| `/blog` + `/blog/[slug]` | *timber views* essay series |
| `/contact` | quote-request form + offices |
| `/login` | personal-area portal stub |
| `/api/quote` | POST → resend (or console log if no key) |
| `/api/cad-register` | POST → resend (or console log if no key) |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | seo |

## product lineup

| code | system | positioning |
| --- | --- | --- |
| `SW` | encore SW *(solid wood)* | flagship — full timber frame |
| `NM` | encore NM *(noble materials)* | timber + bronze / steel / brass hybrid |
| `60` | encore 60 | passivhaus & RC4 cold-climate sliders |
| `38` | encore 38 | structural-glass sliding, max glass |
| `UM` | encore UM *(ultra-minimal)* | vacuum-glazed, 15 mm sightline |

## getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build
npm run start
```

## environment variables

| var | required | purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | optional | absolute base for sitemap & metadata (defaults to `https://encorewoodcrafts.com`) |
| `RESEND_API_KEY` | optional | enables real email delivery from the contact + cad forms |
| `ENCORE_FROM_EMAIL` | optional | from address (defaults to `studio@encorewoodcrafts.com`) |
| `ENCORE_QUOTES_EMAIL` | optional | inbox that receives quote leads |

without `RESEND_API_KEY`, form submissions are accepted and logged to the server console.

## structure

```
src/
  app/
    (marketing)/        marketing layout with header + footer
    (auth)/login/       portal stub
    api/                quote + cad-register routes
    sitemap.ts robots.ts opengraph-image.tsx layout.tsx not-found.tsx
  components/site/      header, footer, hero, product-overview, partner-map, …
  data/                 site, products, addons, projects, partners, news, blog
  lib/cn.ts             tailwind merge utility
```

## out of scope

- e-commerce / Stripe — not selected
- headless CMS — content lives in typed `src/data/*.ts` modules; can swap to Sanity / Contentful later without restructuring
- real CAD file hosting — the architects portal is a gated form stub
- real auth — `/login` is a styled placeholder

## license

© encore wood crafts.
