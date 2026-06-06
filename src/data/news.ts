export interface NewsItem {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  excerpt: string;
  body: string[];
  image: string;
  category: "atelier" | "project" | "event" | "press";
  // Which product range this story belongs to. "both" shows under either
  // toggle so range-wide announcements always appear.
  brand: "wood" | "aluminium" | "both";
}

const SHOPIFY = "https://steel-doors-2.myshopify.com/cdn/shop";

export const news: NewsItem[] = [
  {
    slug: "three-families-launch",
    title: "Four product ranges, now in full production",
    kicker: "Studio · Product ranges",
    date: "2026-05-02",
    excerpt:
      "Our catalogue is now organised into four ranges: wooden doors, glass doors, aluminium doors, and railings — all made to measure.",
    body: [
      "today the atelier opens series production around four families. wooden doors covers veneer, laminated, solid panel, skin and paint finishes — each in burmese teak, indian sal, honne, european oak or american walnut. glass doors covers centre-opening, lift-and-slide, multi-track, corner and bifold sliders. aluminium doors covers hinged entrance, casement, pivot and french configurations in any RAL. railings covers wood, frameless glass and metal balustrades for staircases and balconies.",
      "every product is made-to-measure and ships with a ten-year warranty. clients can specify a single visual language across doors, sliders and railings — engineered, finished and installed by one in-house team.",
    ],
    image: `${SHOPIFY}/files/Fill_the_white_space_on_side_with_out_disturbing_t_delpmaspu.jpg`,
    category: "atelier",
    brand: "both",
  },
  {
    slug: "customised-collection-22",
    title: "Introducing our custom collection",
    kicker: "Studio · 22 designs",
    date: "2026-04-18",
    excerpt:
      "Twenty-two ready reference designs across all our ranges — each one a starting point for your own custom piece.",
    body: [
      "after eighteen months of cataloguing past commissions, the atelier has codified twenty-two reference designs into a single browsable customised collection. each design is presented as a starting point — clients pick a piece, then specify size, finish, hardware and material to produce a one-of-one quote within five working days.",
      "the collection is browsable inside each family page, with filters by sub-type and material. ten of the references sit inside wooden doors, eight inside glass doors and four inside railings.",
    ],
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.45PM.jpg`,
    category: "atelier",
    brand: "both",
  },
  {
    slug: "monsoon-class-glass-sliders",
    title: "Stronger glass sliders for Indian weather",
    kicker: "Engineering · Weather-rated",
    date: "2026-04-02",
    excerpt:
      "Every glass slider now comes weather-rated for wind and rain as standard — built for coastal and high-rise homes.",
    body: [
      "after a season of testing in chennai, mumbai and goa, our entire glass-door range has been upgraded to class C5 wind and class E1050 watertight ratings. upgraded gaskets, drainage and corner seals are now standard across centre-opening, lift-and-slide, multi-track, corner and bifold systems.",
      "the upgrade is invisible from the outside — sightlines and finishes remain unchanged — but it gives architects working on coastal towers and balcony-led residences the same engineering envelope they would expect from a european aluminium supplier.",
    ],
    image: `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
    category: "atelier",
    brand: "aluminium",
  },
  {
    slug: "courtyard-pivot-door",
    title: "A 3.6 m teak pivot door in Jayanagar",
    kicker: "Project · Teak pivot door",
    date: "2026-03-12",
    excerpt:
      "A single 1.6 × 3.6 m solid-teak pivot door becomes the main feature of a private home.",
    body: [
      "studio mira commissioned the atelier for one front door, large enough to be the building's only ornament. we delivered a 1.6 × 3.6 m monolithic teak pivot leaf, balanced on an italian hydraulic floor pivot that opens silently with a single touch. internal openings between the courtyard and the living wing are concealed-hinge swing doors from the same wooden door programme, finished in book-matched walnut to give the house a single timber language.",
    ],
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.46PM_1.jpg`,
    category: "project",
    brand: "wood",
  },
  {
    slug: "fsc-supply-chain",
    title: "100% certified timber by 2027",
    kicker: "Studio · Sustainability",
    date: "2026-02-28",
    excerpt:
      "We're moving to fully certified, responsibly sourced timber for every wooden door by 2027.",
    body: [
      "today we publish our forest-to-facade pledge: every plank entering our atelier will carry fsc, peFC or equivalent certification by 1 january 2027. we are also planting one tree for every door manufactured, in partnership with the indian reforestation initiative.",
    ],
    image: `${SHOPIFY}/files/generate_solid_wooden_202603181109.jpg`,
    category: "atelier",
    brand: "wood",
  },
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
