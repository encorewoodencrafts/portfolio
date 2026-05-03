export interface NewsItem {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  excerpt: string;
  body: string[];
  image: string;
  category: "atelier" | "project" | "event" | "press";
}

export const news: NewsItem[] = [
  {
    slug: "encore-um-launch",
    title: "introducing encore UM",
    kicker: "ultra-minimal · vacuum-glazed",
    date: "2026-04-18",
    excerpt:
      "the slimmest timber sightline in the encore family is now in series production: 15 mm vertical, vacuum-glazed.",
    body: [
      "after three years of joint development with our glass partner in saint-gobain, encore UM is now in series production. the system pairs vacuum insulating glass — a sealed evacuated cavity between two panes — with our slimmest-ever timber profile.",
      "encore UM debuts in private commission this autumn and will be available globally from january 2027. specification samples are available on request to studio@encorewoodcrafts.com.",
    ],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80",
    category: "atelier",
  },
  {
    slug: "monograph-launch",
    title: "monograph: ten years of encore",
    kicker: "book launch · may 22 at the atelier",
    date: "2026-04-02",
    excerpt:
      "256 pages of large-format architectural photography curated by erieta attali, with essays by kengo kuma and dieter dietz.",
    body: [
      "to mark ten years of encore, we have published a monograph documenting fifty projects across twenty-three countries. the book is bound in solid oak and walnut covers manufactured in our cabinet shop.",
      "the launch event will take place at our atelier on 22 may at 18:30. registration is open to architects, journalists and clients.",
    ],
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1800&q=80",
    category: "event",
  },
  {
    slug: "casa-na-areia",
    title: "casa na areia",
    kicker: "transparency & integration",
    date: "2026-03-12",
    excerpt:
      "a beach house buried in dunes — encore SW frames the only horizon: sand, sea, sky.",
    body: [
      "ARX architects have completed a private retreat on the comporta peninsula. the entire seaward elevation is a single 14 m run of encore SW sliders, broken only by the structural columns of the pine roof.",
    ],
    image: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1800&q=80",
    category: "project",
  },
  {
    slug: "fsc-supply-chain",
    title: "100% fsc by 2027",
    kicker: "atelier · sustainability commitment",
    date: "2026-02-28",
    excerpt:
      "we are committing to 100% fsc-certified or equivalent timber across all five product lines by january 2027.",
    body: [
      "today we publish our forest-to-facade pledge: every plank entering our atelier will carry fsc, peFC or equivalent certification by 1 january 2027. we are also planting one tree for every panel manufactured, in partnership with the european reforestation initiative.",
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
    category: "atelier",
  },
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
