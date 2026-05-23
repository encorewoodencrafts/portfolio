export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  title: string;
  rows: ProductSpec[];
}

export interface ProductWoodSpecies {
  name: string;
  latin: string;
  origin: string;
  hue: string;
  description: string;
}

// The four real product families ENCORE manufactures and ships from its
// Hyderabad atelier. The first three map 1:1 to the top-level Shopify
// navigation (Wooden Doors / Glass Doors / Railings); Aluminium Doors is
// the newest line — aluminium-framed entrance, casement and pivot doors
// engineered in the same atelier.
export type ProductFamily =
  | "wooden-doors"
  | "glass-doors"
  | "aluminium-doors"
  | "railings";

// Each family is broken into a small number of sub-types — the same
// breakdown the Shopify nav exposes (Veneer / Laminated / etc. for wooden
// doors, Centre-Opening / Lift-and-Slide / etc. for glass doors).
export interface ProductSubType {
  slug: string;
  name: string;
  description: string;
  image: string;
}

// One of the 22 customised design variants in the Shopify "Customized
// Collection". These are not separate SKUs — they are reference designs the
// atelier can build in any of the four families. We tag each one with the
// family it most often belongs to (wood, glass or railing) so the category
// pages can each show a relevant subset.
export interface CustomDesign {
  code: string;
  slug: string;
  name: string;
  family: ProductFamily;
  image: string;
  caption: string;
}

export interface Product {
  slug: string;
  code: string;
  name: string;
  family: ProductFamily;
  tagline: string;
  excerpt: string;
  description: string;
  hero: string;
  detailHero: string;
  // Three short call-out lines used on listing pages.
  highlights: string[];
  // Re-purposed from the legacy "vertical sightline" field — kept for
  // component compatibility, now shown as a top-line metric (e.g. "5 finishes").
  sightline: string;
  // Re-purposed from the legacy "max panel" field — top-line metric.
  maxPanel: string;
  features: { title: string; body: string }[];
  specs: ProductSpecGroup[];
  // Optional. Only the wooden-doors family carries a wood-species palette;
  // glass doors and railings omit it and the species selector is hidden.
  species?: ProductWoodSpecies[];
  // Two large in-situ photographs shown in the gallery section of the
  // detail page.
  imageA: string;
  imageB: string;
  // Sub-types inside this family, listed on the family page.
  subTypes: ProductSubType[];
}

const SHOPIFY = "https://steel-doors-2.myshopify.com/cdn/shop";

const woodHero = `${SHOPIFY}/files/Fill_the_white_space_on_side_with_out_disturbing_t_delpmaspu.jpg`;
const glassHero = `${SHOPIFY}/files/Fill_the_white_space_in_the_image_with_out_stretch_delpmaspu.jpg`;
const railingsHero = `${SHOPIFY}/collections/Screenshot2026-03-12170628.png`;
// Aluminium doors imagery sourced from the same Shopify storefront — the
// "image-to-tell-..." asset is the atelier's positioning shot for the
// aluminium / aluminium-glass programme; the Screenshot_2026-03-17 series
// are individual aluminium-door product photos.
const aluminiumHero = `${SHOPIFY}/files/image-to-tell-that-we-are-experts-in-customizing-wooden-doors-and-aluminum-glass-doors-as-per-your-needs.png`;
const aluminiumA = `${SHOPIFY}/files/Screenshot_2026-03-17_013539.png`;
const aluminiumB = `${SHOPIFY}/files/Screenshot_2026-03-17_013934.png`;
const aluminiumC = `${SHOPIFY}/files/Screenshot_2026-03-17_014041.png`;
const aluminiumD = `${SHOPIFY}/files/Screenshot_2026-03-17_050855.png`;

const indianWoodSpecies: ProductWoodSpecies[] = [
  {
    name: "burmese teak",
    latin: "tectona grandis",
    origin: "south-east asia (fsc)",
    hue: "#8a6a3f",
    description:
      "naturally weather-resistant, golden-honey patina — the most-specified wood in our atelier and the default for entrance doors.",
  },
  {
    name: "indian sal",
    latin: "shorea robusta",
    origin: "central india",
    hue: "#7a4f2e",
    description:
      "dense, long-fibred hardwood with rich red-brown heart — favoured by builders for its rot-resistance in monsoon climates.",
  },
  {
    name: "honne · indian rosewood",
    latin: "dalbergia latifolia",
    origin: "western ghats",
    hue: "#4d2f1f",
    description:
      "deep chocolate tones flecked with darker streaks — finishes to a satin lustre, used for our premium heritage panels.",
  },
  {
    name: "european oak",
    latin: "quercus robur",
    origin: "france / germany",
    hue: "#a87c4f",
    description:
      "open grain, golden hue, exceptional dimensional stability — chosen when a lighter, more contemporary face is required.",
  },
  {
    name: "american walnut",
    latin: "juglans nigra",
    origin: "appalachian forests, usa",
    hue: "#5a3a24",
    description:
      "deep chocolate tones, fine straight grain, finishes to a satin lustre — for projects with material ambition.",
  },
];

export const products: Product[] = [
  {
    slug: "wooden-doors",
    code: "WD",
    name: "wooden doors",
    family: "wooden-doors",
    tagline: "five finishes · solid wood entrances",
    excerpt:
      "solid-wood and engineered-core entrance, internal and pivot doors — built in five finish families and any indian or imported hardwood, hand-finished in the atelier.",
    description:
      "our wooden door programme spans five finish families — veneer, laminated, solid panel, skin and paint — built around a multi-ply mortised core in burmese teak, indian sal, mahogany or honne. each leaf is balanced for a precision floor pivot or concealed european hinges, and ships pre-finished and pre-hung as a single architectural element. customisation is the rule, not the exception: any size, any joinery, any of the 22 reference designs in our customised collection.",
    hero: woodHero,
    detailHero: woodHero,
    sightline: "5 finishes",
    maxPanel: "any custom size",
    highlights: [
      "veneer · laminated · solid panel · skin · paint",
      "teak, sal, honne, oak & walnut",
      "concealed hinges + multipoint lock standard",
    ],
    features: [
      {
        title: "monolithic timber leaf",
        body: "70 mm mortised core wrapped in book-matched solid wood or premium veneer — never hollow.",
      },
      {
        title: "five finish families",
        body: "veneer, laminated, solid panel, skin and paint — each available in any of our hardwoods.",
      },
      {
        title: "custom in every dimension",
        body: "any size, any colour, any of 22 reference designs — quoted from your drawings within five working days.",
      },
    ],
    specs: [
      {
        title: "construction",
        rows: [
          { label: "core", value: "multi-ply mortised, 70 mm" },
          { label: "face", value: "12 mm solid wood / premium veneer" },
          { label: "edge banding", value: "matched solid wood lipping" },
          { label: "factory finish", value: "uv-cured polyurethane or natural oil" },
        ],
      },
      {
        title: "hardware",
        rows: [
          { label: "pivot leaf", value: "italian hydraulic floor pivot, 350 kg" },
          { label: "hinged leaf", value: "concealed european 3D hinge, 200 kg" },
          { label: "locking", value: "multipoint deadbolt + smart-lock option" },
          { label: "max leaf", value: "1.6 × 3.6 m pivot · 1.2 × 2.8 m hinged" },
        ],
      },
    ],
    species: indianWoodSpecies,
    imageA: `${SHOPIFY}/files/create_veener_door_202603181113.jpg`,
    imageB: `${SHOPIFY}/files/Generate_skin_style_202603181106.jpg`,
    subTypes: [
      {
        slug: "veneer-doors",
        name: "veneer doors",
        description:
          "premium real-wood veneer over a stable engineered core — book-matched grain at architect-friendly cost.",
        image: `${SHOPIFY}/files/create_veener_door_202603181113.jpg`,
      },
      {
        slug: "laminated-doors",
        name: "laminated doors",
        description:
          "high-pressure laminate over an engineered core — colour-fast, scratch-resistant and ideal for high-traffic openings.",
        image: `${SHOPIFY}/files/CONVERT_TO_9_16_202603181109.jpg`,
      },
      {
        slug: "solid-panel-doors",
        name: "solid panel doors",
        description:
          "traditional rail-and-stile timber construction in teak, sal or honne — the heritage indian door, refined for modern joinery.",
        image: `${SHOPIFY}/files/generate_solid_wooden_202603181109.jpg`,
      },
      {
        slug: "skin-doors",
        name: "skin doors",
        description:
          "moulded skin over a hollow or filled core — light-weight, cost-effective, available in dozens of pressed patterns.",
        image: `${SHOPIFY}/files/Generate_skin_style_202603181106.jpg`,
      },
      {
        slug: "paint-doors",
        name: "paint doors",
        description:
          "primed and finished in any ral or asian-paints colour — the cleanest face for white-on-white or accent palettes.",
        image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_2.jpg`,
      },
    ],
  },
  {
    slug: "glass-doors",
    code: "GD",
    name: "glass doors",
    family: "glass-doors",
    tagline: "five sliding systems · aluminium-framed",
    excerpt:
      "aluminium-framed sliding glass door systems — centre-opening, lift-and-slide, multi-track, corner and bifold — for openings that need to disappear.",
    description:
      "our glass door programme is a complete suite of aluminium-framed sliding systems. centre-opening sliders for everyday balconies, lift-and-slide hardware for panels up to 4 metres wide, multi-track stacking for full-wall openings, structural corner mitres that erase the column, and bifolds that fold flat into a single jamb. all five share the same thermally-broken extrusion, finishes and hardware family — so your specification reads as one suite.",
    hero: glassHero,
    detailHero: glassHero,
    sightline: "5 systems",
    maxPanel: "4 m × 3.2 m panel",
    highlights: [
      "centre · lift · multi-track · corner · bifold",
      "thermally-broken aluminium extrusion",
      "single panels up to 4 m wide",
    ],
    features: [
      {
        title: "lift-and-slide hardware",
        body: "german-engineered carriages rated to 400 kg per panel with single-handed operation.",
      },
      {
        title: "flush threshold",
        body: "level interior-to-exterior threshold with concealed drainage — wheelchair compliant.",
      },
      {
        title: "any ral or anodised",
        body: "polyester powder-coat in any ral, plus mill, champagne, bronze and black anodised options.",
      },
    ],
    specs: [
      {
        title: "construction",
        rows: [
          { label: "frame", value: "thermally-broken aluminium extrusion" },
          { label: "thermal break", value: "polyamide, foam-filled chambers" },
          { label: "glass", value: "double or triple insulated, up to 52 mm" },
          { label: "finish", value: "any ral powder-coat or anodised" },
        ],
      },
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.2 W/m²K" },
          { label: "watertight", value: "class E900" },
          { label: "wind resistance", value: "class C5" },
          { label: "acoustic", value: "Rw 40 dB" },
          { label: "max panel (slide)", value: "4.0 × 3.2 m" },
        ],
      },
    ],
    imageA: `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
    imageB: `${SHOPIFY}/files/horizontal_sliding_doors_202603190126.jpg`,
    subTypes: [
      {
        slug: "centre-opening-slide",
        name: "centre opening slide",
        description:
          "two panels meeting in the middle, sliding into pockets either side — the classic balcony opening.",
        image: `${SHOPIFY}/files/horizontal_sliding_doors_202603190126.jpg`,
      },
      {
        slug: "lift-slide",
        name: "lift & slide",
        description:
          "german-engineered hardware lifts the panel before it slides — single panels up to 4 m wide, single-handed.",
        image: `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
      },
      {
        slug: "multi-track-slide",
        name: "multi track slide",
        description:
          "three- and four-track stacking systems for full-wall openings that pocket completely into the jamb.",
        image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.48PM_2.jpg`,
      },
      {
        slug: "corner-slide",
        name: "corner slide",
        description:
          "structural mitred glass-to-glass corners with no vertical mullion — picture-frame views around the corner.",
        image: `${SHOPIFY}/files/corner_sliding_door_202603190055.jpg`,
      },
      {
        slug: "slide-fold",
        name: "slide & fold",
        description:
          "bifold leaves stack flat into a single jamb — up to seven panels for the largest indoor-outdoor thresholds.",
        image: `${SHOPIFY}/files/Slide_n_fold.jpg`,
      },
    ],
  },
  {
    slug: "aluminium-doors",
    code: "AL",
    name: "aluminium doors",
    family: "aluminium-doors",
    tagline: "four systems · framed in aluminium",
    excerpt:
      "aluminium-framed entrance, casement, pivot and french doors — thermally-broken extrusions in any RAL or anodised finish, paired with glass, solid panels or composite infills.",
    description:
      "our aluminium door programme covers everything our glass-slider suite doesn't: hinged entrance leaves, side-hung casement doors, large-format pivots and french door pairs — all built around the same thermally-broken extrusion family as our glass sliders, so finishes, hardware and sightlines read as one suite across the project. choose any RAL powder-coat, anodised mill, champagne, bronze or black; pair with a panel infill in solid wood, opaque composite or insulated glass.",
    hero: aluminiumHero,
    detailHero: aluminiumA,
    sightline: "4 systems",
    maxPanel: "1.4 × 3.0 m leaf",
    highlights: [
      "casement · pivot · french · entrance",
      "thermally-broken aluminium extrusion",
      "any RAL or anodised finish",
    ],
    features: [
      {
        title: "thermally-broken frame",
        body: "polyamide thermal break with foam-filled chambers — the same extrusion as our glass-slider suite.",
      },
      {
        title: "any panel infill",
        body: "insulated glass, solid wood, opaque composite or laminated metal — mixed and matched per opening.",
      },
      {
        title: "matched hardware",
        body: "concealed european 3D hinges or hydraulic floor pivots; multipoint locks; smart-lock ready.",
      },
    ],
    specs: [
      {
        title: "construction",
        rows: [
          { label: "frame", value: "thermally-broken aluminium extrusion" },
          { label: "thermal break", value: "polyamide, foam-filled chambers" },
          { label: "infill", value: "insulated glass / solid wood / composite" },
          { label: "finish", value: "any RAL powder-coat or anodised" },
        ],
      },
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.3 W/m²K" },
          { label: "watertight", value: "class E900" },
          { label: "wind resistance", value: "class C4" },
          { label: "acoustic", value: "Rw 38 dB" },
          { label: "max leaf", value: "1.4 × 3.0 m casement · 1.6 × 3.6 m pivot" },
        ],
      },
    ],
    imageA: aluminiumA,
    imageB: aluminiumB,
    subTypes: [
      {
        slug: "aluminium-entrance",
        name: "aluminium entrance",
        description:
          "single-leaf hinged entrance doors in a thermally-broken aluminium frame — solid panel, glass insert or composite infill.",
        image: aluminiumA,
      },
      {
        slug: "aluminium-casement",
        name: "aluminium casement",
        description:
          "side-hung casement doors for terraces and balconies — same extrusion as our sliders, with insulated glass or composite panels.",
        image: aluminiumB,
      },
      {
        slug: "aluminium-pivot",
        name: "aluminium pivot",
        description:
          "large-format pivot doors with hydraulic italian hardware — leaves up to 1.6 m wide × 3.6 m tall, aluminium-framed in any RAL.",
        image: aluminiumC,
      },
      {
        slug: "aluminium-french",
        name: "aluminium french",
        description:
          "double-leaf french door pairs with multipoint lock and astragal — slim aluminium sightlines, full-height glazing optional.",
        image: aluminiumD,
      },
    ],
  },
  {
    slug: "railings",
    code: "RL",
    name: "railings",
    family: "railings",
    tagline: "wood, glass & metal · staircases & balconies",
    excerpt:
      "balcony, staircase and terrace railings in solid wood, frameless glass and patina-bronze — engineered to indian building code, customised to your drawing.",
    description:
      "we build the same atelier-grade railings you would expect from a window manufacturer: solid-wood handrails over stainless or blackened-steel balusters, frameless glass with concealed channel fixings, and patina-bronze for heritage projects. every railing is engineered to the indian standard for residential and commercial balustrades and customised to your stair pitch, balcony length and finish palette.",
    hero: railingsHero,
    detailHero: railingsHero,
    sightline: "3 systems",
    maxPanel: "site-bespoke",
    highlights: [
      "wood, frameless glass & metal options",
      "engineered to indian residential code",
      "concealed channel + base-plate fixings",
    ],
    features: [
      {
        title: "engineered to code",
        body: "rated for residential, commercial and assembly loads per indian standard 3194 and is 14897.",
      },
      {
        title: "concealed fixings",
        body: "stainless u-channel for frameless glass; counter-bored stainless studs for wood and metal balusters.",
      },
      {
        title: "atelier-finished",
        body: "wood handrails are sanded, oiled and polished in-house; metal posts are powder-coated or hand-patinated.",
      },
    ],
    specs: [
      {
        title: "construction",
        rows: [
          { label: "handrail", value: "solid teak / stainless / brass / bronze" },
          { label: "balusters", value: "stainless 316 / blackened steel / glass" },
          { label: "glass", value: "12 mm laminated heat-soaked, frameless" },
          { label: "fixing", value: "concealed u-channel or base-plate" },
        ],
      },
      {
        title: "performance",
        rows: [
          { label: "rail height", value: "900–1100 mm to indian code" },
          { label: "load rating", value: "0.74 kN/m residential · 1.5 kN/m commercial" },
          { label: "panel infill", value: "≤ 100 mm sphere clearance" },
          { label: "finish", value: "oil · powder-coat · hand patina" },
        ],
      },
    ],
    imageA: railingsHero,
    imageB: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_2.jpg`,
    subTypes: [
      {
        slug: "wood-railings",
        name: "wood railings",
        description:
          "solid teak or sal handrails over a stainless or blackened-steel sub-frame — warm, lasting, repairable.",
        image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.51PM_1.jpg`,
      },
      {
        slug: "glass-railings",
        name: "glass railings",
        description:
          "frameless laminated glass set into a concealed u-channel — clear sight-lines, full code compliance.",
        image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_3.jpg`,
      },
      {
        slug: "metal-railings",
        name: "metal railings",
        description:
          "stainless, blackened steel or patina-bronze balusters with custom infill patterns — staircases and balconies.",
        image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM.jpg`,
      },
    ],
  },
];

// 22 customised reference designs from the Shopify "Customized Collection" —
// these are not separate SKUs but design exemplars the atelier can build in
// any of the four families. The `family` tag is a hint used to filter the
// gallery on a category page; clients can still request any design in any
// family.
export const customDesigns: CustomDesign[] = [
  {
    code: "ENCORE-D01",
    slug: "encore-d01",
    name: "ENCORE-D01",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.45PM.jpg`,
    caption: "solid-panel teak entrance door",
  },
  {
    code: "ENCORE-D02",
    slug: "encore-d02",
    name: "ENCORE-D02",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_1.jpg`,
    caption: "veneer entrance with brushed-metal inlay",
  },
  {
    code: "ENCORE-D03",
    slug: "encore-d03",
    name: "ENCORE-D03",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_2.jpg`,
    caption: "horizontal-grooved veneer panel",
  },
  {
    code: "ENCORE-D04",
    slug: "encore-d04",
    name: "ENCORE-D04",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsApp_Image_2026-03-18_at_3.43.46_PM.jpg`,
    caption: "laminated white-oak panel",
  },
  {
    code: "ENCORE-D05",
    slug: "encore-d05",
    name: "ENCORE-D05",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.47PM_1_db161bff-2860-4830-9e44-c6af4791eccf.jpg`,
    caption: "skin-pressed paneled door",
  },
  {
    code: "ENCORE-D06",
    slug: "encore-d06",
    name: "ENCORE-D06",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsApp_Image_2026-03-18_at_3.43.47_PM_2_20f2b054-8f4c-408b-a8b3-969eeb7f4c07.jpg`,
    caption: "modern 3-panel skin door",
  },
  {
    code: "ENCORE-D07",
    slug: "encore-d07",
    name: "ENCORE-D07",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.47PM_3.jpg`,
    caption: "vertical-grooved entry leaf",
  },
  {
    code: "ENCORE-D08",
    slug: "encore-d08",
    name: "ENCORE-D08",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.47PM.jpg`,
    caption: "mixed-finish double leaf",
  },
  {
    code: "ENCORE-D09",
    slug: "encore-d09",
    name: "ENCORE-D09",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.48PM_1_0ce3f4fb-38fa-4ead-9fc9-c3189849a584.jpg`,
    caption: "honne single-leaf entrance",
  },
  {
    code: "ENCORE-D10",
    slug: "encore-d10",
    name: "ENCORE-D10",
    family: "wooden-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.48PM.jpg`,
    caption: "painted modern panel door",
  },
  {
    code: "ENCORE-D11",
    slug: "encore-d11",
    name: "ENCORE-D11",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.48PM_2.jpg`,
    caption: "multi-track sliding glass facade",
  },
  {
    code: "ENCORE-D12",
    slug: "encore-d12",
    name: "ENCORE-D12",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.48PM_3.jpg`,
    caption: "aluminium-framed centre slider",
  },
  {
    code: "ENCORE-D13",
    slug: "encore-d13",
    name: "ENCORE-D13",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsApp_Image_2026-03-18_at_3.43.49_PM_1.jpg`,
    caption: "lift-and-slide single panel",
  },
  {
    code: "ENCORE-D14",
    slug: "encore-d14",
    name: "ENCORE-D14",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.49PM_2.jpg`,
    caption: "corner mitred glass slider",
  },
  {
    code: "ENCORE-D15",
    slug: "encore-d15",
    name: "ENCORE-D15",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.49PM_3.jpg`,
    caption: "bifold five-leaf system",
  },
  {
    code: "ENCORE-D16",
    slug: "encore-d16",
    name: "ENCORE-D16",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.49PM_4.jpg`,
    caption: "black-anodised slim sightline slider",
  },
  {
    code: "ENCORE-D17",
    slug: "encore-d17",
    name: "ENCORE-D17",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.49PM.jpg`,
    caption: "champagne anodised pocket slider",
  },
  {
    code: "ENCORE-D18",
    slug: "encore-d18",
    name: "ENCORE-D18",
    family: "glass-doors",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_1.jpg`,
    caption: "frameless terrace slider",
  },
  {
    code: "ENCORE-D19",
    slug: "encore-d19",
    name: "ENCORE-D19",
    family: "railings",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_2.jpg`,
    caption: "frameless glass balcony rail",
  },
  {
    code: "ENCORE-D20",
    slug: "encore-d20",
    name: "ENCORE-D20",
    family: "railings",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_3.jpg`,
    caption: "stainless + glass staircase rail",
  },
  {
    code: "ENCORE-D21",
    slug: "encore-d21",
    name: "ENCORE-D21",
    family: "railings",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM.jpg`,
    caption: "blackened-steel balcony rail",
  },
  {
    code: "ENCORE-D22",
    slug: "encore-d22",
    name: "ENCORE-D22",
    family: "railings",
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.51PM_1.jpg`,
    caption: "solid teak handrail with bronze posts",
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productsByFamily = (family: ProductFamily): Product[] =>
  products.filter((p) => p.family === family);

export const customDesignsByFamily = (
  family: ProductFamily,
): CustomDesign[] => customDesigns.filter((d) => d.family === family);

export const customDesignBySlug = (
  slug: string,
): CustomDesign | undefined => customDesigns.find((d) => d.slug === slug);
