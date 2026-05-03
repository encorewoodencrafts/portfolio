export interface AddOn {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  icon: "screen" | "motor" | "lock" | "softclose" | "pivot" | "drain" | "silence" | "hurricane" | "feather";
}

export const addOns: AddOn[] = [
  {
    slug: "insect-screen",
    name: "encore screen",
    subtitle: "integrated, lasting protection",
    description:
      "tailor-made insect screen with low mounting depth — concealed in the timber reveal for invisible protection.",
    icon: "screen",
  },
  {
    slug: "motorisation",
    name: "encore motor",
    subtitle: "full integration, low interference",
    description:
      "silent motorisation hidden inside the timber profile. operable by app, scene or facade automation system.",
    icon: "motor",
  },
  {
    slug: "security",
    name: "encore lock",
    subtitle: "handles & locking devices",
    description:
      "automatic and manual security accessories tested to RC4 / WK4 with concealed handles in matching wood or bronze.",
    icon: "lock",
  },
  {
    slug: "soft-close",
    name: "encore soft close",
    subtitle: "comfort & speed control",
    description:
      "smooth, gentle braking that prevents backlash on panels up to 800 kg — feels like a magnet meeting a magnet.",
    icon: "softclose",
  },
  {
    slug: "pivot",
    name: "encore pivot",
    subtitle: "integrated minimalist pivot door",
    description:
      "available in very large sizes while preserving the slim sightlines and timber face of the encore family.",
    icon: "pivot",
  },
  {
    slug: "drainage",
    name: "encore 2o",
    subtitle: "integrated drainage system",
    description:
      "30 mm bronze grate connects to encore 38 and 60 profiles, blending seamlessly into stone or timber thresholds.",
    icon: "drain",
  },
  {
    slug: "silence",
    name: "encore silence",
    subtitle: "sound reduction kit",
    description:
      "specialised acoustic gaskets and laminated glass options reaching Rw 47 dB without altering sightlines.",
    icon: "silence",
  },
  {
    slug: "hurricane",
    name: "encore hurricane",
    subtitle: "largest minimalist storm panel",
    description:
      "HVHZ-certified storm panels with the minimal aesthetics of the encore system — tested to miami-dade tas-201.",
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
