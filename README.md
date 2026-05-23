# encore wood crafts

editorial-grade marketing site for **encore wood crafts** — a bespoke indian atelier crafting wooden doors, aluminium-framed glass sliding doors, hinged aluminium doors and architectural railings. the site mirrors the catalogue at [steel-doors-2.myshopify.com](https://steel-doors-2.myshopify.com) but pairs the existing Shopify storefront with a magazine-grade marketing layer.

> wooden, glass, aluminium doors & railings — beautifully made.

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
| `/` | hero + 11 home sections (news rail, families spotlight, product overview, customised collection feature, options grid, projects rail, architects CTA, partners map, blog teaser) |
| `/products` | four-family overview + 22-design customised collection gallery |
| `/products/[slug]` | family detail page (overview, sub-types, specifications, customised designs, gallery) — `slug` ∈ `wooden-doors` / `glass-doors` / `aluminium-doors` / `railings` |
| `/add-ons` | 9 customisation options that apply across all four families |
| `/projects` | masonry gallery of reference works |
| `/projects/[slug]` | full case study |
| `/architects` | spec sheets + gated CAD library form |
| `/partners` | global partner directory + interactive SVG map |
| `/about` | atelier story, sustainability, master-carpenter portraits |
| `/news` + `/news/[slug]` | dispatches from the atelier |
| `/blog` + `/blog/[slug]` | *atelier views* essay series |
| `/contact` | quote-request form + offices |
| `/login` | personal-area portal stub |
| `/api/quote` | POST → resend (or console log if no key) |
| `/api/cad-register` | POST → resend (or console log if no key) |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | seo |

## product lineup

four families, one atelier — every product is made-to-measure in our hyderabad workshop.

### wooden doors

| sub-type | description |
| --- | --- |
| veneer doors | premium real-wood veneer over a stable engineered core |
| laminated doors | high-pressure laminate over an engineered core |
| solid panel doors | traditional rail-and-stile timber construction |
| skin doors | moulded skin over a hollow or filled core |
| paint doors | primed and finished in any RAL or Asian-Paints colour |

### glass doors (aluminium-framed)

| sub-type | description |
| --- | --- |
| centre opening slide | two panels meeting in the middle, sliding into pockets either side |
| lift & slide | german-engineered hardware lifts before sliding — single panels up to 4 m wide |
| multi track slide | three- and four-track stacking systems for full-wall openings |
| corner slide | structural mitred glass-to-glass corners with no vertical mullion |
| slide & fold | bifold leaves stack flat into a single jamb |

### aluminium doors

| sub-type | description |
| --- | --- |
| aluminium entrance | single-leaf hinged entrance in a thermally-broken aluminium frame |
| aluminium casement | side-hung casement doors for terraces and balconies |
| aluminium pivot | large-format pivot doors with hydraulic italian hardware |
| aluminium french | double-leaf french door pairs with multipoint lock and astragal |

### railings

| sub-type | description |
| --- | --- |
| wood railings | solid teak or sal handrails over stainless or blackened-steel sub-frame |
| glass railings | frameless laminated glass set into a concealed u-channel |
| metal railings | stainless, blackened steel or patina-bronze balusters |

### customised collection

twenty-two reference designs (`ENCORE-D01` – `ENCORE-D23`) browsable from `/products` and inside each family page — every design is a starting point for a one-of-one commission.

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
