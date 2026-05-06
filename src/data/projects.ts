export interface Project {
  slug: string;
  title: string;
  architect: string;
  location: string;
  year: string;
  system: string;
  photographer: string;
  excerpt: string;
  body: string[];
  hero: string;
  gallery: string[];
}

const SHOPIFY = "https://steel-doors-2.myshopify.com/cdn/shop";

export const projects: Project[] = [
  {
    slug: "courtyard-pivot-residence",
    title: "courtyard pivot residence",
    architect: "studio mira",
    location: "bengaluru, india",
    year: "2026",
    system: "encore wooden doors",
    photographer: "© ananya gupta",
    excerpt:
      "a 1.6 × 3.6 m solid-teak pivot door becomes the single architectural gesture of a private residence in jayanagar.",
    body: [
      "the brief was uncomplicated: one front door, large enough to be the building's only ornament. encore delivered a 1.6 × 3.6 m monolithic teak pivot leaf, balanced on an italian hydraulic floor pivot that opens silently with a single touch.",
      "internal openings between the courtyard and the living wing are concealed-hinge swing doors from the same wooden door programme, finished in book-matched walnut to give the house a single timber language.",
    ],
    hero: `${SHOPIFY}/files/Fill_the_white_space_on_side_with_out_disturbing_t_delpmaspu.jpg`,
    gallery: [
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.45PM.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_1.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_2.jpg`,
    ],
  },
  {
    slug: "skyline-glass-loft",
    title: "skyline glass loft",
    architect: "atelier verde",
    location: "mumbai, india",
    year: "2025",
    system: "encore glass doors · multi-track + corner slide",
    photographer: "© rahul bhattacharya",
    excerpt:
      "a 22nd-floor loft fully glazed in encore multi-track sliders and a structural corner-slide that erases the column.",
    body: [
      "the south and west elevations are continuous walls of encore glass doors: aluminium-framed multi-track sliders in black anodised, with a structural corner mitre that lets the city skyline read as a single uninterrupted picture frame.",
      "the terrace threshold is an encore lift-and-slide system, three panels each 2.4 m wide, on a flush stone sill that erases the line between living room and balcony.",
    ],
    hero: `${SHOPIFY}/files/Fill_the_white_space_in_the_image_with_out_stretch_delpmaspu.jpg`,
    gallery: [
      `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
      `${SHOPIFY}/files/horizontal_sliding_doors_202603190126.jpg`,
      `${SHOPIFY}/files/Slide_n_fold.jpg`,
    ],
  },
  {
    slug: "balcony-belvedere",
    title: "balcony belvedere",
    architect: "burnier + kämpf",
    location: "panchgani, india",
    year: "2025",
    system: "encore railings · frameless glass",
    photographer: "© studio recall",
    excerpt:
      "frameless glass railings wrap the new wing of an alpine hill-station belvedere, leaving the valley view uninterrupted.",
    body: [
      "the architects specified frameless glass railings on every balcony of the new wing — 12 mm laminated heat-soaked glass set into concealed stainless u-channels. the result reads as no railing at all from inside, a single sheet of weather between guest and valley.",
      "the staircase rails are a contrast — solid teak handrails over blackened-steel balusters, repairable and warmed by the same hand-finished oil used on the building's wooden doors.",
    ],
    hero: `${SHOPIFY}/collections/Screenshot2026-03-12170628.png`,
    gallery: [
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_3.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.51PM_1.jpg`,
    ],
  },
  {
    slug: "veneer-residence",
    title: "veneer residence",
    architect: "fieldhouse studio",
    location: "hyderabad, india",
    year: "2024",
    system: "encore wooden doors · veneer programme",
    photographer: "© james brittain",
    excerpt:
      "thirty-two veneer doors specified across a single jubilee hills residence — book-matched grain on every leaf.",
    body: [
      "fieldhouse specified our wooden door programme across the entire residence: thirty-two leaves in book-matched american walnut veneer over an engineered core, all from a single flitch of timber so the grain reads continuously across rooms.",
      "the entrance is a 1.4 × 2.8 m hinged double-leaf in solid teak with concealed european hinges and a flush multipoint deadbolt — the only interruption in an otherwise uniform timber skin.",
    ],
    hero: `${SHOPIFY}/files/create_veener_door_202603181113.jpg`,
    gallery: [
      `${SHOPIFY}/files/CONVERT_TO_9_16_202603181109.jpg`,
      `${SHOPIFY}/files/Generate_skin_style_202603181106.jpg`,
      `${SHOPIFY}/files/generate_solid_wooden_202603181109.jpg`,
    ],
  },
  {
    slug: "courtyard-bifold",
    title: "courtyard bifold",
    architect: "shean architects",
    location: "ottawa, canada",
    year: "2024",
    system: "encore glass doors · slide & fold",
    photographer: "© james brittain",
    excerpt:
      "a low timber pavilion wrapped around an interior garden — encore slide-and-fold sliders on all four sides.",
    body: [
      "the inner courtyard is glazed continuously in encore slide-and-fold systems. on summer evenings every panel folds flat into a single jamb, dissolving the boundary between architecture and garden.",
    ],
    hero: `${SHOPIFY}/files/Slide_n_fold.jpg`,
    gallery: [
      `${SHOPIFY}/files/horizontal_sliding_doors_202603190126.jpg`,
      `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
      `${SHOPIFY}/files/corner_sliding_door_202603190055.jpg`,
    ],
  },
  {
    slug: "atelier-on-the-quay",
    title: "atelier on the quay",
    architect: "studio okja",
    location: "porto, portugal",
    year: "2024",
    system: "encore wooden doors · paint programme",
    photographer: "© ricardo loureiro",
    excerpt:
      "a working artist's studio with a single 1.4 × 3.2 m painted entrance door and three internal skin doors.",
    body: [
      "the entrance is a 1.4 × 3.2 m solid-panel teak leaf finished in deep oxblood paint — primed in our atelier and finished in seven coats of uv-cured polyurethane.",
      "the three internal doors are skin-pressed with a vertical-grooved pattern, painted to match — repeatable, repairable and resistant to studio life.",
    ],
    hero: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_2.jpg`,
    gallery: [
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.47PM_1_db161bff-2860-4830-9e44-c6af4791eccf.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.47PM_3.jpg`,
      `${SHOPIFY}/files/WhatsApp_Image_2026-03-18_at_3.43.47_PM_2_20f2b054-8f4c-408b-a8b3-969eeb7f4c07.jpg`,
    ],
  },
  {
    slug: "staircase-of-bronze",
    title: "staircase of bronze",
    architect: "ARX architects",
    location: "comporta, portugal",
    year: "2023",
    system: "encore railings · metal programme",
    photographer: "© nelson garrido",
    excerpt:
      "a beach house with hand-patinated bronze balusters running the full height of the central staircase.",
    body: [
      "the central staircase is the building's spine — a single run from courtyard to roof, wrapped in hand-patinated bronze balusters and a solid-teak handrail oiled to silver. the bronze was left to weather for six months on the dunes before installation.",
    ],
    hero: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.51PM_1.jpg`,
    gallery: [
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_2.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_3.jpg`,
      `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM.jpg`,
    ],
  },
  {
    slug: "courtyard-house",
    title: "courtyard house",
    architect: "shean architects",
    location: "ottawa, canada",
    year: "2024",
    system: "encore glass doors · centre-opening",
    photographer: "© james brittain",
    excerpt:
      "a low timber pavilion wrapped around an interior garden — encore centre-opening sliders on all four sides.",
    body: [
      "the inner courtyard is glazed continuously in encore centre-opening sliders. on summer evenings every panel slides into wall pockets, dissolving the boundary between architecture and garden.",
    ],
    hero: `${SHOPIFY}/files/horizontal_sliding_doors_202603190126.jpg`,
    gallery: [
      `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
      `${SHOPIFY}/files/corner_sliding_door_202603190055.jpg`,
      `${SHOPIFY}/files/Slide_n_fold.jpg`,
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
