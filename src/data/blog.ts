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

export const blogPosts: BlogPost[] = [
  {
    slug: "the-grain-of-time",
    title: "the grain of time",
    series: "timber views",
    index: "01",
    date: "2026-04-12",
    readingTime: "8 min",
    excerpt:
      "every plank we receive carries a record of weather. before we ever cut, we read it.",
    body: [
      "every european oak that arrives at our atelier carries within it a complete weather report. the spacing of its rings records dry years and wet ones, the prevailing wind on its hillside, the years it grew slowly in shade and the years it surged into the canopy.",
      "before any plank meets a saw, our master carpenter walks the stack with a ruler and a soft pencil. she marks where the grain is loud — the years of fast growth — and where it is quiet, dense, and dark. windows live for a century or more; they should be cut from the quiet wood.",
      "the loud wood is not waste. it becomes shutters, threshold inlays, the back panels of cabinets — places where movement is welcome, where the eye does not linger.",
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "from-forest-to-facade",
    title: "from forest to facade",
    series: "timber views",
    index: "02",
    date: "2026-03-28",
    readingTime: "11 min",
    excerpt:
      "the eight-month journey of a single oak board, from a slovenian hillside to a san francisco living room.",
    body: [
      "we follow a single board of slovenian oak across eight months and four thousand miles: from felling on a thirty-degree slope above the soča valley, through air-drying for sixty weeks under a slate roof in friuli, to kiln conditioning at our atelier, to the cnc bench, the assembly hall, and finally a san francisco living room.",
      "every step matters. the same board cut three months earlier, dried six weeks shorter, or finished in a high-humidity month would not behave the same way over a hundred years of seasonal cycles.",
    ],
    image:
      "https://images.unsplash.com/photo-1764566917581-2cfd7ba4edd8?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "vacuum-glass-and-the-15mm-sightline",
    title: "vacuum glass & the 15 mm sightline",
    series: "timber views",
    index: "03",
    date: "2026-03-04",
    readingTime: "9 min",
    excerpt:
      "how a 0.3 mm evacuated cavity between two panes redefines what a window edge can look like.",
    body: [
      "for fifty years the geometry of insulated glazing has been governed by an air gap. between two panes of glass, you trap a few millimetres of dry argon and call it triple glazing. as panes get thicker, edges grow.",
      "vacuum insulating glass replaces the gas with a near-vacuum. the cavity collapses to 0.3 mm. the total glass thickness drops from 44 mm to 12 mm. the frame can shrink with it. the encore UM vertical sightline is 15 mm. that is the diameter of a pencil.",
    ],
    image:
      "https://images.unsplash.com/photo-1744063897843-c2c7353f1bdb?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "patina-as-design",
    title: "patina as design",
    series: "timber views",
    index: "04",
    date: "2026-02-14",
    readingTime: "6 min",
    excerpt:
      "we don't sell wood. we sell a hundred-year curve of light and weather written into the grain.",
    body: [
      "we are often asked to send a sample of how the timber will look in five years, or in twenty. we send three samples instead: a piece freshly oiled, a piece weathered for a season, and a piece taken from a façade we built in 2014. the differences are sometimes startling.",
      "specifying timber is specifying time. the wood you receive on day one is the beginning of a curve that arcs across decades. our role is to shape that curve, not to deny it.",
    ],
    image:
      "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?auto=format&fit=crop&w=1800&q=80",
  },
];

export const blogBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
