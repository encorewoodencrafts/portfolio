export interface FaqItem {
  q: string;
  a: string;
  category: "lead-time" | "materials" | "warranty" | "pricing" | "install" | "service";
}

export const faqItems: FaqItem[] = [
  {
    category: "lead-time",
    q: "what is your typical lead time for an indian project?",
    a: "from first signed shop drawing, sixteen to eighteen weeks for a full residential commission (twenty to twenty-five panels). large or technically demanding projects can run twenty-two weeks. expedited builds are possible for one or two panels.",
  },
  {
    category: "lead-time",
    q: "do you ship to other indian cities and abroad?",
    a: "yes. we deliver and install across every state in india with our travelling crew. for the gulf, southeast asia and beyond we work with certified partner installers and dispatch our own foreman to oversee the first day.",
  },
  {
    category: "materials",
    q: "which timber species do you offer?",
    a: "burmese teak, indian sal, mahogany, and accoya as standard. european oak and walnut by request. all timber is fsc-certified and kiln-dried in three controlled stages over twelve weeks before machining.",
  },
  {
    category: "materials",
    q: "how do you handle india's monsoon humidity?",
    a: "every encore profile is built around a structural aluminium spine. timber sits as a non-structural cladding, which decouples movement from the seal. moisture content is kept at 9–12% and the timber-to-aluminium bond is x-rayed before the section leaves the joinery hall.",
  },
  {
    category: "materials",
    q: "what glass do you specify?",
    a: "double or triple insulated glazing as standard, with low-iron, solar-control or acoustic laminations available. we partner with saint-gobain, asahi and guardian for indian projects. structural glass up to 6 m × 3 m can be specified for our HSL line.",
  },
  {
    category: "warranty",
    q: "what does the warranty cover?",
    a: "ten years on the timber, aluminium spine and structural seal; lifetime on the structural integrity of the panel. hardware (handles, hinges, gear) carries a five-year warranty. we follow up at six months, two years and ten years to inspect and re-oil.",
  },
  {
    category: "warranty",
    q: "are encore systems passivhaus-compatible?",
    a: "the encore 60 thermal line achieves uw-values down to 0.78 w/m²k with triple glazing, which sits below the 0.80 passivhaus comfort threshold. we have supplied projects in shimla, manali and the ladakh valley.",
  },
  {
    category: "pricing",
    q: "how is a project priced?",
    a: "by linear metre of frame plus panel area and hardware schedule. typical indian residential projects run ₹25 lakh to ₹1 crore. we issue a detailed line-by-line quote before any commitment.",
  },
  {
    category: "pricing",
    q: "is there a minimum order value?",
    a: "for full installation packages within india, ₹15 lakh. for atelier-supply only (architect-led install) we will consider single-panel commissions for restoration work.",
  },
  {
    category: "install",
    q: "can our own team install encore panels?",
    a: "we strongly recommend our travelling crew or a certified partner. site supervision by our team is included in every full-service contract; supply-only contracts include a half-day briefing with the architect's contractor.",
  },
  {
    category: "install",
    q: "what site readiness do you require?",
    a: "rough openings squared to ±5 mm, finished floor levels, lintels in place, and a power point within 8 m of the install point. we issue a site readiness checklist eight weeks before delivery.",
  },
  {
    category: "service",
    q: "what aftercare do you provide?",
    a: "complimentary visits at six months, two years and ten years (within india). we re-oil the timber, recalibrate gear, and replace seals at no charge during the warranty period. a dedicated whatsapp line is available to every architect-of-record.",
  },
];
