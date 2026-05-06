export interface FaqItem {
  q: string;
  a: string;
  category: "lead-time" | "materials" | "warranty" | "pricing" | "install" | "service";
}

export const faqItems: FaqItem[] = [
  {
    category: "lead-time",
    q: "what is your typical lead time?",
    a: "from first signed shop drawing, eight to twelve weeks for a single wooden door, ten to fourteen weeks for a glass-door system, and six to eight weeks for a railing. large or technically demanding projects can run up to eighteen weeks. expedited builds are possible for one or two pieces.",
  },
  {
    category: "lead-time",
    q: "do you ship to other indian cities and abroad?",
    a: "yes. we deliver and install across every state in india with our travelling crew. for the gulf, southeast asia and beyond we work with certified partner installers and dispatch our own foreman to oversee the first day.",
  },
  {
    category: "materials",
    q: "which timber species do you offer for wooden doors?",
    a: "burmese teak, indian sal, honne (indian rosewood), european oak and american walnut as standard, with mahogany and accoya by request. all timber is fsc-certified and kiln-dried in three controlled stages over twelve weeks before machining.",
  },
  {
    category: "materials",
    q: "what aluminium frame finishes are available for glass doors?",
    a: "any RAL polyester powder-coat plus mill, champagne, bronze and black anodised options. the same finish palette is available across all five sliding hardware variants, so a single project can specify centre-opening, lift-and-slide and corner sliders in one consistent finish.",
  },
  {
    category: "materials",
    q: "what glass do you use in the sliders and railings?",
    a: "double or triple insulated glazing for sliding doors, and 12 mm laminated heat-soaked glass for frameless railings. low-iron, solar-control and acoustic laminations are all specifiable. we partner with saint-gobain, asahi and guardian for indian projects.",
  },
  {
    category: "warranty",
    q: "what does the warranty cover?",
    a: "ten years on the timber, aluminium frame and structural seal; lifetime on the structural integrity of the panel. hardware (handles, hinges, gear) carries a five-year warranty. we follow up at six months, two years and ten years to inspect and re-oil.",
  },
  {
    category: "warranty",
    q: "are the glass-door systems rated for monsoons and high-rises?",
    a: "yes. every aluminium-framed glass slider in our catalogue ships with class C5 wind resistance and class E1050 watertight rating as standard — engineered for indian coastal and high-rise installations.",
  },
  {
    category: "pricing",
    q: "how is a project priced?",
    a: "wooden doors are priced per leaf with options for finish, hardware and species. glass sliders are priced per linear metre of frame plus panel area and hardware schedule. railings are priced per running metre. typical indian residential projects run ₹2 lakh to ₹1 crore depending on scope.",
  },
  {
    category: "pricing",
    q: "is there a minimum order value?",
    a: "for full installation packages within india, ₹2 lakh. for atelier-supply only (architect-led install) we will consider single-leaf commissions for restoration work.",
  },
  {
    category: "install",
    q: "can our own team install encore products?",
    a: "we strongly recommend our travelling crew or a certified partner. site supervision by our team is included in every full-service contract; supply-only contracts include a half-day briefing with the architect's contractor.",
  },
  {
    category: "install",
    q: "what site readiness do you require?",
    a: "rough openings squared to ±5 mm, finished floor levels, lintels in place, and a power point within 8 m of the install point. for railings, finished floor and parapet levels with cast-in plates or u-channels per our drawings. we issue a site readiness checklist eight weeks before delivery.",
  },
  {
    category: "service",
    q: "what aftercare do you provide?",
    a: "complimentary visits at six months, two years and ten years (within india). we re-oil the timber, recalibrate gear, and replace seals at no charge during the warranty period. a dedicated whatsapp line is available to every architect-of-record.",
  },
];
