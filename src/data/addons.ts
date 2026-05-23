export interface AddOn {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  icon: "screen" | "motor" | "lock" | "softclose" | "pivot" | "drain" | "silence" | "hurricane" | "feather";
}

// Customisation options that apply across all four product families
// (wooden doors, glass doors, aluminium doors, railings). Specified à la carte alongside
// any product line at quotation stage.
export const addOns: AddOn[] = [
  {
    slug: "smart-lock",
    name: "encore lock",
    subtitle: "biometric & multipoint locking",
    description:
      "fingerprint, rfid and ble-key access integrated flush with the door leaf, plus multipoint deadbolts tested to indian residential security standards.",
    icon: "lock",
  },
  {
    slug: "pivot",
    name: "encore pivot",
    subtitle: "italian floor pivots up to 350 kg",
    description:
      "hydraulic floor pivots with adjustable hold-open — turn any wooden door up to 1.6 × 3.6 m into a single-touch entrance.",
    icon: "pivot",
  },
  {
    slug: "soft-close",
    name: "encore soft close",
    subtitle: "panel braking system",
    description:
      "smooth, gentle braking for sliding glass doors up to 400 kg per panel — feels like a magnet meeting a magnet.",
    icon: "softclose",
  },
  {
    slug: "motorisation",
    name: "encore motor",
    subtitle: "app & scene-controlled glass sliders",
    description:
      "silent motorisation hidden inside the aluminium profile — operable by app, switch or facade automation system.",
    icon: "motor",
  },
  {
    slug: "insect-screen",
    name: "encore screen",
    subtitle: "concealed insect screens",
    description:
      "tailor-made retractable insect screens with low mounting depth — concealed in the door reveal for invisible protection.",
    icon: "screen",
  },
  {
    slug: "silence",
    name: "encore silence",
    subtitle: "acoustic glazing kit",
    description:
      "specialised acoustic gaskets and laminated glass options reaching Rw 47 dB without altering profile sightlines.",
    icon: "silence",
  },
  {
    slug: "drainage",
    name: "encore 2o",
    subtitle: "flush threshold drainage",
    description:
      "30 mm bronze drainage grate built into the sliding-door threshold — blends seamlessly into stone, tile or timber floors.",
    icon: "drain",
  },
  {
    slug: "monsoon",
    name: "encore monsoon",
    subtitle: "wind & water class C5 / E1050",
    description:
      "upgraded gaskets, drainage and corner seals for coastal and high-rise installations — rated to indian monsoon wind loads.",
    icon: "hurricane",
  },
  {
    slug: "ultra-light",
    name: "encore UL",
    subtitle: "ultra-light bearing system",
    description:
      "advanced sliding bearings reduce panel load to one finger of effort — silent, smooth and infinitely adjustable.",
    icon: "feather",
  },
];
