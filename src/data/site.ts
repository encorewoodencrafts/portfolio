export const site = {
  name: "encore",
  fullName: "encore woodcrafts llp",
  legalName: "ENCORE WOODCRAFTS LLP",
  tagline: "the warmth of bespoke timber",
  description:
    "encore woodcrafts is a bespoke indian atelier crafting minimalist timber windows, doors and architectural carpentry — engineered in-house in teak, sal, mahogany, accoya and oak.",
  url: "https://encorewoodcrafts.in",
  email: "studio@encorewoodcrafts.in",
  phone: "+91 91234 56780",
  whatsapp: "+919123456780",
  whatsappMessage:
    "hello encore — i'd like to discuss a project. could the atelier reach out?",
  address: {
    line1: "atelier encore woodcrafts",
    line2: "no. 9, timberyard lane, jubilee hills",
    city: "hyderabad",
    region: "telangana",
    postal: "500033",
    country: "india",
  },
  llpin: "AAA-XXXX",
  gstin: "36ABCDE0000F1Z9",
  social: {
    instagram: "https://instagram.com/encorewoodcrafts",
    pinterest: "https://pinterest.com/encorewoodcrafts",
    linkedin: "https://linkedin.com/company/encorewoodcrafts",
    youtube: "https://youtube.com/@encorewoodcrafts",
    vimeo: "https://vimeo.com/encorewoodcrafts",
  },
  locales: [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "te", label: "TE" },
    { code: "ta", label: "TA" },
  ],
  stats: [
    { value: "12+", label: "indian cities served" },
    { value: "9 m", label: "max single panel" },
    { value: "2014", label: "atelier founded" },
    { value: "98%", label: "fsc-certified timber" },
  ],
} as const;

export const navigation = [
  { href: "/products", label: "products" },
  { href: "/add-ons", label: "add-ons" },
  { href: "/projects", label: "reference works" },
  { href: "/architects", label: "architects info" },
  { href: "/partners", label: "around the world" },
  { href: "/about", label: "about us" },
  { href: "/faq", label: "faq" },
  { href: "/blog", label: "blog" },
  { href: "/news", label: "news" },
  { href: "/contact", label: "contact" },
] as const;
