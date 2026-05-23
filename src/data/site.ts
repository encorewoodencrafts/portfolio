export const site = {
  name: "encore",
  fullName: "encore wood crafts llp",
  legalName: "ENCORE WOOD CRAFTS LLP",
  tagline: "wooden doors · glass doors · railings",
  description:
    "encore is an indian atelier crafting bespoke wooden doors, aluminium-framed glass sliding doors and architectural railings — engineered, finished and installed by a single in-house team.",
  url: "https://encorewoodcrafts.in",
  email: "studio@encorewoodcrafts.in",
  phone: "+91 91234 56780",
  whatsapp: "+919123456780",
  whatsappMessage:
    "hello encore — i'd like to discuss a door, glass slider or railing project. could the atelier reach out?",
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
    { value: "4", label: "product families" },
    { value: "22", label: "reference designs" },
    { value: "12+", label: "indian cities served" },
    { value: "2014", label: "atelier founded" },
  ],
} as const;

// Primary nav for the desktop header + mobile drawer. `children` turns an
// item into a dropdown on desktop and an expanded sub-list on mobile.
export type NavItem = {
  href: string;
  label: string;
  children?: ReadonlyArray<{ href: string; label: string }>;
};

export const navigation: ReadonlyArray<NavItem> = [
  {
    href: "/products",
    label: "products",
    children: [
      { href: "/products/wooden-doors", label: "wooden doors" },
      { href: "/products/glass-doors", label: "glass doors" },
      { href: "/products/aluminium-doors", label: "aluminium doors" },
      { href: "/products/railings", label: "railings" },
    ],
  },
  { href: "/projects", label: "reference works" },
  { href: "/architects", label: "architects info" },
  { href: "/about", label: "about us" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
] as const;
