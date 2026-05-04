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

export type ProductFamily = "timber-window" | "wood-door" | "aluminium";

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
  highlights: string[];
  sightline: string;
  maxPanel: string;
  features: { title: string; body: string }[];
  specs: ProductSpecGroup[];
  // Optional: aluminium-only systems intentionally omit a wood-species palette.
  species?: ProductWoodSpecies[];
  imageA: string;
  imageB: string;
}

const heroImages = {
  sw: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
  nm: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2400&q=80",
  s60: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80",
  s38: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80",
  um: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
};

const detailHeros = {
  sw: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=2400&q=80",
  nm: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",
  s60: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=80",
  s38: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80",
  um: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2400&q=80",
};

const baseSpecies: ProductWoodSpecies[] = [
  {
    name: "european oak",
    latin: "quercus robur",
    origin: "france / germany",
    hue: "#a87c4f",
    description:
      "open grain, golden hue, exceptional dimensional stability — the encore default.",
  },
  {
    name: "american walnut",
    latin: "juglans nigra",
    origin: "appalachian forests, usa",
    hue: "#5a3a24",
    description:
      "deep chocolate tones, fine straight grain, finishes to a satin lustre.",
  },
  {
    name: "european ash",
    latin: "fraxinus excelsior",
    origin: "scandinavia",
    hue: "#cdb692",
    description:
      "pale, luminous grain with high tensile strength — ideal for slim sections.",
  },
  {
    name: "accoya",
    latin: "modified pinus radiata",
    origin: "new zealand",
    hue: "#d8c5a0",
    description:
      "non-toxic acetylated pine, class-1 durability, dimensional drift below 0.5%.",
  },
  {
    name: "burmese teak",
    latin: "tectona grandis",
    origin: "south-east asia (fsc)",
    hue: "#8a6a3f",
    description:
      "naturally weather-resistant, golden-honey patina, superior in marine climates.",
  },
];

export const products: Product[] = [
  {
    slug: "encore-sw",
    code: "SW",
    name: "encore SW",
    family: "timber-window",
    tagline: "solid wood, full timber frame",
    excerpt:
      "the flagship — a fully timber-framed minimalist sliding system with the same engineering core as encore 38 and 60, dressed in solid wood.",
    description:
      "encore SW (solid wood) is our flagship system. an aluminium structural core is wrapped in solid timber, marrying the precision of metal with the warmth of wood. it preserves the slim sightlines of the encore family while presenting an entirely natural face to the interior and exterior.",
    hero: heroImages.sw,
    detailHero: detailHeros.sw,
    sightline: "32 mm",
    maxPanel: "12 m² · 5.4 m height",
    highlights: [
      "fully clad solid timber frame",
      "12 m² panel with single-handed operation",
      "passivhaus-compatible",
    ],
    features: [
      {
        title: "structural timber cladding",
        body: "20 mm laminated solid wood bonded to an aluminium core — never veneer.",
      },
      {
        title: "concealed hardware",
        body: "silent multipoint locking and motorisation hidden beneath flush timber profiles.",
      },
      {
        title: "five wood species",
        body: "specify oak, walnut, ash, accoya or fsc-certified teak per project.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "0.86 W/m²K" },
          { label: "air-tightness", value: "class 4" },
          { label: "watertight", value: "class E1200" },
          { label: "wind resistance", value: "class C5" },
          { label: "acoustic", value: "Rw 44 dB" },
          { label: "burglar resistance", value: "RC2 / WK2" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "32 mm" },
          { label: "max panel", value: "12 m² · 5.4 m height" },
          { label: "glass thickness", value: "up to 56 mm triple" },
          { label: "panel weight", value: "up to 700 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-nm",
    code: "NM",
    name: "encore NM",
    family: "timber-window",
    tagline: "noble materials — timber + bronze + steel",
    excerpt:
      "encore NM pairs solid timber with architectural bronze, blackened steel or stainless — a hybrid system for projects with material ambition.",
    description:
      "encore NM (noble materials) is our hybrid programme: a timber frame paired with hand-finished metal — architectural bronze, blackened steel, brushed stainless or burnished brass. each metal is sourced from european foundries and finished by hand in our atelier.",
    hero: heroImages.nm,
    detailHero: detailHeros.nm,
    sightline: "38 mm",
    maxPanel: "10 m²",
    highlights: [
      "wood + bronze / steel / brass hybrid",
      "hand-finished metal sections",
      "bespoke patina options",
    ],
    features: [
      {
        title: "metal partner programme",
        body: "live samples of bronze, steel, brass and stainless prepared in-atelier per project.",
      },
      {
        title: "dual-tone profiles",
        body: "specify metal interior with timber exterior, or invert for a chiaroscuro effect.",
      },
      {
        title: "patina control",
        body: "choose from seven bronze patinas, from raw mill to deep verdigris.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "0.92 W/m²K" },
          { label: "acoustic", value: "Rw 42 dB" },
          { label: "burglar resistance", value: "up to RC4" },
          { label: "fire", value: "EI30 option" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "38 mm" },
          { label: "max panel", value: "10 m²" },
          { label: "glass thickness", value: "up to 52 mm" },
          { label: "panel weight", value: "up to 600 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1505692794403-34cb1ed8f7bf?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-60",
    code: "60",
    name: "encore 60",
    family: "timber-window",
    tagline: "thermal-class for cold climates",
    excerpt:
      "a high-performance exterior timber system reaching passivhaus and minergie-p, with intrusion resistance up to RC4.",
    description:
      "encore 60 is our cold-climate flagship. triple-glazed up to 56 mm with a thermally-broken aluminium spine clad in solid timber, it reaches passivhaus and minergie-p. burglar-resistance up to RC4 is available without compromising sightlines.",
    hero: heroImages.s60,
    detailHero: detailHeros.s60,
    sightline: "60 mm",
    maxPanel: "9 m²",
    highlights: [
      "passivhaus & minergie-p certified",
      "RC4 / WK4 burglar resistance",
      "ideal for nordic + alpine climates",
    ],
    features: [
      {
        title: "triple-glazed core",
        body: "up to 56 mm sealed unit with warm-edge spacers and argon/krypton fill.",
      },
      {
        title: "passivhaus certified",
        body: "u-value down to 0.68 W/m²K with 0.6 ach airtightness.",
      },
      {
        title: "RC4 security",
        body: "concealed reinforcement, multipoint hooks, laminated security glazing.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "0.68 W/m²K" },
          { label: "air-tightness", value: "class 4 / 0.6 ach" },
          { label: "burglar resistance", value: "RC4 / WK4" },
          { label: "acoustic", value: "Rw 47 dB" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "60 mm" },
          { label: "max panel", value: "9 m²" },
          { label: "glass thickness", value: "44–56 mm triple" },
          { label: "panel weight", value: "up to 800 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-38",
    code: "38",
    name: "encore 38",
    family: "timber-window",
    tagline: "slim sliding, max glass",
    excerpt:
      "exploits the structural properties of glass with vertical timber profiles reduced to 38 mm — vast openings without visual compromise.",
    description:
      "encore 38 is a structural-glass sliding casement that uses laminated glass as a load-bearing element, reducing vertical timber sightlines to a slender 38 mm. it produces uninterrupted views with panels up to 18 m² and is the lightest in the family.",
    hero: heroImages.s38,
    detailHero: detailHeros.s38,
    sightline: "38 mm",
    maxPanel: "18 m²",
    highlights: [
      "structural-glass system",
      "vertical sightline 38 mm",
      "panels up to 18 m²",
    ],
    features: [
      {
        title: "structural laminated glass",
        body: "ionoplast-laminated panes act as a beam, eliminating mid-rail mullions.",
      },
      {
        title: "slim 38 mm profile",
        body: "vertical timber reduced to 38 mm without sacrificing thermal performance.",
      },
      {
        title: "ultra-light operation",
        body: "panels up to 700 kg slide on the encore UL bearing system.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.10 W/m²K" },
          { label: "acoustic", value: "Rw 40 dB" },
          { label: "wind resistance", value: "class C4" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "38 mm" },
          { label: "max panel", value: "18 m² · 6 m height" },
          { label: "glass thickness", value: "up to 44 mm" },
          { label: "panel weight", value: "up to 700 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-um",
    code: "UM",
    name: "encore UM",
    family: "timber-window",
    tagline: "ultra-minimal · vacuum-glazed",
    excerpt:
      "vacuum insulating glass at 12 mm total thickness allows triple-glazed performance with vertical sightlines reduced to 15 mm.",
    description:
      "encore UM (ultra-minimal) deploys vacuum insulating glass — a sealed evacuated cavity between two panes — to achieve triple-glazed thermal performance at 12 mm total glass thickness. vertical timber sightlines collapse to 15 mm.",
    hero: heroImages.um,
    detailHero: detailHeros.um,
    sightline: "15 mm",
    maxPanel: "8 m²",
    highlights: [
      "vacuum insulating glass",
      "vertical sightline 15 mm",
      "12 mm total glass thickness",
    ],
    features: [
      {
        title: "vacuum insulating glass",
        body: "0.3 mm evacuated cavity yields u_g = 0.4 W/m²K at 12 mm total glass.",
      },
      {
        title: "ultra-minimal sightline",
        body: "vertical timber reduced to 15 mm — the slimmest in the encore family.",
      },
      {
        title: "heritage retrofit",
        body: "thin-glass solution for listed buildings without altering reveals.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "0.78 W/m²K" },
          { label: "u-value (glass)", value: "0.40 W/m²K" },
          { label: "acoustic", value: "Rw 38 dB" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "15 mm" },
          { label: "max panel", value: "8 m²" },
          { label: "glass thickness", value: "12 mm vacuum" },
          { label: "panel weight", value: "up to 350 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-pd",
    code: "PD",
    name: "encore PD",
    family: "wood-door",
    tagline: "solid wood entrance · pivot & hinged doors",
    excerpt:
      "monolithic solid-timber entrance doors — oversized pivots, concealed-hinge swing doors and double-leaf entries, hand-built in the atelier as front, side and internal openings.",
    description:
      "encore PD (pivot doors) is our solid-wood entrance programme. each leaf is a multi-ply mortised core wrapped in book-matched solid timber, balanced on a precision floor pivot or concealed european hinges. it accepts the same locking, biometric and motorisation systems as our window family, and ships pre-finished and pre-hung as a single architectural element.",
    hero: "https://images.unsplash.com/photo-1746172851688-7d3948f7febb?auto=format&fit=crop&w=2400&q=80",
    detailHero: "https://images.unsplash.com/photo-1768666821325-dc4c35fb1629?auto=format&fit=crop&w=2400&q=80",
    sightline: "70 mm",
    maxPanel: "1.6 × 3.6 m pivot",
    highlights: [
      "oversized pivot up to 1.6 × 3.6 m",
      "concealed european hinges + multipoint lock",
      "biometric + smart-lock options",
    ],
    features: [
      {
        title: "monolithic timber leaf",
        body: "70 mm mortised core, 12 mm book-matched solid wood face — never veneer, never hollow.",
      },
      {
        title: "precision floor pivot",
        body: "italian-engineered hydraulic pivot rated for 350 kg leaves with adjustable hold-open.",
      },
      {
        title: "smart access ready",
        body: "optional fingerprint, rfid and ble-key access integrated flush with the leaf face.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.10 W/m²K" },
          { label: "acoustic", value: "Rw 41 dB" },
          { label: "burglar resistance", value: "RC3 standard · RC4 option" },
          { label: "fire", value: "EI30 / EI60 option" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "leaf thickness", value: "70 mm" },
          { label: "max pivot leaf", value: "1.6 × 3.6 m" },
          { label: "max hinged leaf", value: "1.2 × 2.8 m" },
          { label: "leaf weight", value: "up to 350 kg" },
        ],
      },
    ],
    species: baseSpecies,
    imageA: "https://images.unsplash.com/photo-1776632001065-ad9efe3ee60e?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1755488657807-098fc8643230?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-aw",
    code: "AW",
    name: "encore AW",
    family: "aluminium",
    tagline: "aluminium · slim-profile windows",
    excerpt:
      "thermally-broken aluminium windows in the slimmest profiles we make — fixed, casement, and tilt-and-turn — for projects that prefer a crisp metallic line over a timber face.",
    description:
      "encore AW (aluminium windows) is our metal counterpart to the encore timber family. extruded aluminium with a polyamide thermal break, factory-finished in any ral or anodised tone, glazed with the same warm-edge double or triple units we use across the atelier. configurations include fixed, top-hung, side-hung casement, tilt-and-turn and corner-less mitred junctions.",
    hero: "https://images.unsplash.com/photo-1768674254513-635be3276d6f?auto=format&fit=crop&w=2400&q=80",
    detailHero: "https://images.unsplash.com/photo-1744063905635-a45c7c15c35d?auto=format&fit=crop&w=2400&q=80",
    sightline: "21 mm",
    maxPanel: "3.5 m² fixed",
    highlights: [
      "21 mm vertical sightline",
      "fixed · casement · tilt-and-turn",
      "any ral · anodised · bronze finish",
    ],
    features: [
      {
        title: "thermally-broken extrusion",
        body: "polyamide thermal break with foam-filled chambers — uw down to 1.0 W/m²K.",
      },
      {
        title: "any ral or anodised",
        body: "polyester powder-coat in any ral, plus mill, champagne, bronze and black anodised options.",
      },
      {
        title: "corner-less mitre",
        body: "structural mitred glass-to-glass corners with no vertical mullion — picture-frame views.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.0 W/m²K" },
          { label: "air-tightness", value: "class 4" },
          { label: "watertight", value: "class E1050" },
          { label: "wind resistance", value: "class C5" },
          { label: "acoustic", value: "Rw 42 dB" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "21 mm" },
          { label: "max fixed pane", value: "3.5 m²" },
          { label: "max casement", value: "1.4 × 2.4 m" },
          { label: "glass thickness", value: "up to 52 mm triple" },
        ],
      },
    ],
    imageA: "https://images.unsplash.com/photo-1764080400291-94c14583fdea?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1601736600187-310bc28b5fda?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "encore-ad",
    code: "AD",
    name: "encore AD",
    family: "aluminium",
    tagline: "aluminium · sliding & bifolding doors",
    excerpt:
      "lift-and-slide and bifold aluminium doors with thermal-break technology — single panels up to 4 m wide, optional motorisation, ready for the largest indoor-outdoor thresholds.",
    description:
      "encore AD (aluminium doors) is our metal-framed sliding and bifolding programme. lift-and-slide hardware carries panels up to 4 m wide on a flush threshold, while the bifold variant stacks up to seven leaves into a single jamb. both share the encore AW thermal-break extrusion, finishes and hardware family, so aluminium windows and doors specify as one suite.",
    hero: "https://images.unsplash.com/photo-1652400095202-4569b8489d00?auto=format&fit=crop&w=2400&q=80",
    detailHero: "https://images.unsplash.com/photo-1700308232171-aa0d87ee1a88?auto=format&fit=crop&w=2400&q=80",
    sightline: "27 mm",
    maxPanel: "4.0 × 3.2 m",
    highlights: [
      "lift-and-slide · bifold variants",
      "single panel up to 4 m wide",
      "flush threshold · motorisation ready",
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
        title: "shared aluminium suite",
        body: "matches encore AW windows in profile, finish and hardware for a single visual language.",
      },
    ],
    specs: [
      {
        title: "performance",
        rows: [
          { label: "u-value (whole)", value: "1.2 W/m²K" },
          { label: "air-tightness", value: "class 4" },
          { label: "watertight", value: "class E900" },
          { label: "acoustic", value: "Rw 40 dB" },
          { label: "burglar resistance", value: "RC2 standard · RC3 option" },
        ],
      },
      {
        title: "dimensions",
        rows: [
          { label: "vertical sightline", value: "27 mm" },
          { label: "max panel (slide)", value: "4.0 × 3.2 m" },
          { label: "max bifold leaves", value: "7 per jamb" },
          { label: "panel weight", value: "up to 400 kg" },
        ],
      },
    ],
    imageA: "https://images.unsplash.com/photo-1623601717592-8772e90968a4?auto=format&fit=crop&w=1800&q=80",
    imageB: "https://images.unsplash.com/photo-1742731842297-6b7586f0c736?auto=format&fit=crop&w=1800&q=80",
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productsByFamily = (family: ProductFamily): Product[] =>
  products.filter((p) => p.family === family);
