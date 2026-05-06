export interface BlogPost {
  slug: string;
  title: string;
  series: string;
  index: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  image: string;
}

const SHOPIFY = "https://steel-doors-2.myshopify.com/cdn/shop";

export const blogPosts: BlogPost[] = [
  {
    slug: "the-grain-of-time",
    title: "the grain of time",
    series: "atelier views",
    index: "01",
    date: "2026-04-12",
    readingTime: "8 min",
    excerpt:
      "every plank we cut into a door carries a record of weather. before we ever cut, we read it.",
    body: [
      "every burmese teak that arrives at our atelier carries within it a complete weather report. the spacing of its rings records dry years and wet ones, the prevailing wind on its hillside, the years it grew slowly in shade and the years it surged into the canopy.",
      "before any plank meets a saw, our master carpenter walks the stack with a ruler and a soft pencil. she marks where the grain is loud — the years of fast growth — and where it is quiet, dense, and dark. doors live for half a century or more; they should be cut from the quiet wood.",
      "the loud wood is not waste. it becomes balcony handrails, threshold inlays, the back panels of cabinets — places where movement is welcome, where the eye does not linger.",
    ],
    image: `${SHOPIFY}/files/generate_solid_wooden_202603181109.jpg`,
  },
  {
    slug: "five-finishes-five-doors",
    title: "five finishes, five different doors",
    series: "atelier views",
    index: "02",
    date: "2026-03-28",
    readingTime: "11 min",
    excerpt:
      "the same teak slab finishes five different ways — veneer, laminated, solid panel, skin and paint — and reads as five different objects.",
    body: [
      "we sometimes show clients a single core of indian teak with five finishes applied — veneer book-matched on the face, high-pressure laminate, solid panel construction, moulded skin and a deep painted finish. they are the same wood and the same dimension, but they read as five different objects.",
      "the choice is rarely about the wood. it is about how much grain you want in the room, how much wear you expect at the threshold, and how often you plan to refinish. paint can be repainted; veneer cannot. solid-panel construction repairs; skin pressings replace.",
    ],
    image: `${SHOPIFY}/files/create_veener_door_202603181113.jpg`,
  },
  {
    slug: "anatomy-of-a-glass-slider",
    title: "anatomy of a glass slider",
    series: "atelier views",
    index: "03",
    date: "2026-03-04",
    readingTime: "9 min",
    excerpt:
      "what actually happens when a 4 m glass panel slides into a wall pocket — and why the hardware costs more than the glass.",
    body: [
      "an aluminium-framed glass slider is, structurally, a moving wall. the panel is 200 kg of laminated glass and aluminium extrusion that travels two or three metres on hardware that must work twenty thousand times without ceremony.",
      "in our lift-and-slide system, the panel rises three millimetres before it moves — long enough to disengage the seal, short enough to feel weightless. the gear is german, the wheels are stainless, and the sealing brushes are replaced as a service kit at year five.",
    ],
    image: `${SHOPIFY}/files/the_wheels_sliding_202603190052.jpg`,
  },
  {
    slug: "frameless-glass-railings",
    title: "frameless, but never weightless",
    series: "atelier views",
    index: "04",
    date: "2026-02-14",
    readingTime: "6 min",
    excerpt:
      "frameless glass railings look effortless. the engineering that makes them effortless is anything but.",
    body: [
      "a frameless glass railing reads as the absence of a railing — a single sheet of weather between guest and the view below. but inside the floor, a stainless u-channel cast into the slab carries the entire load, and 12 mm laminated heat-soaked glass distributes it.",
      "we engineer every railing to indian residential and commercial code. the maths is mostly invisible from the balcony, but it is what allows the glass to be invisible.",
    ],
    image: `${SHOPIFY}/files/WhatsAppImage2026-03-18at3.43.50PM_3.jpg`,
  },
];

export const blogBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
