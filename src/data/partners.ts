export interface Partner {
  country: string;
  city: string;
  company: string;
  email: string;
  phone: string;
}

export interface Continent {
  name: string;
  partners: Partner[];
}

export const continents: Continent[] = [
  {
    name: "india",
    partners: [
      { country: "telangana", city: "hyderabad (hq)", company: "encore wood crafts llp", email: "studio@encorewoodcrafts.in", phone: "+91 91234 56780" },
      { country: "karnataka", city: "bengaluru", company: "encore karnataka", email: "bengaluru@encorewoodcrafts.in", phone: "+91 91234 56781" },
      { country: "tamil nadu", city: "chennai", company: "encore tamil nadu", email: "chennai@encorewoodcrafts.in", phone: "+91 91234 56782" },
      { country: "maharashtra", city: "mumbai", company: "encore maharashtra", email: "mumbai@encorewoodcrafts.in", phone: "+91 91234 56783" },
      { country: "maharashtra", city: "pune", company: "encore maharashtra", email: "pune@encorewoodcrafts.in", phone: "+91 91234 56784" },
      { country: "delhi ncr", city: "new delhi", company: "encore north", email: "delhi@encorewoodcrafts.in", phone: "+91 91234 56785" },
      { country: "delhi ncr", city: "gurugram", company: "encore north", email: "gurugram@encorewoodcrafts.in", phone: "+91 91234 56786" },
      { country: "west bengal", city: "kolkata", company: "encore east", email: "kolkata@encorewoodcrafts.in", phone: "+91 91234 56787" },
      { country: "kerala", city: "kochi", company: "encore kerala", email: "kochi@encorewoodcrafts.in", phone: "+91 91234 56788" },
      { country: "goa", city: "panjim", company: "encore goa", email: "goa@encorewoodcrafts.in", phone: "+91 91234 56789" },
      { country: "rajasthan", city: "jaipur", company: "encore rajasthan", email: "jaipur@encorewoodcrafts.in", phone: "+91 91234 56790" },
      { country: "gujarat", city: "ahmedabad", company: "encore gujarat", email: "ahmedabad@encorewoodcrafts.in", phone: "+91 91234 56791" },
    ],
  },
  {
    name: "middle east",
    partners: [
      { country: "uae", city: "dubai", company: "encore gulf fz-llc", email: "dubai@encorewoodcrafts.in", phone: "+971 4 555 0344" },
      { country: "uae", city: "abu dhabi", company: "encore gulf fz-llc", email: "abudhabi@encorewoodcrafts.in", phone: "+971 2 555 0355" },
      { country: "qatar", city: "doha", company: "encore qatar wll", email: "doha@encorewoodcrafts.in", phone: "+974 4444 0123" },
      { country: "saudi arabia", city: "riyadh", company: "encore ksa", email: "riyadh@encorewoodcrafts.in", phone: "+966 11 555 0144" },
      { country: "oman", city: "muscat", company: "encore oman llc", email: "muscat@encorewoodcrafts.in", phone: "+968 2 444 0234" },
      { country: "bahrain", city: "manama", company: "encore bahrain", email: "manama@encorewoodcrafts.in", phone: "+973 1 777 0245" },
    ],
  },
  {
    name: "south & southeast asia",
    partners: [
      { country: "singapore", city: "singapore", company: "encore asia pte", email: "sg@encorewoodcrafts.in", phone: "+65 6555 0333" },
      { country: "sri lanka", city: "colombo", company: "encore lanka pvt", email: "colombo@encorewoodcrafts.in", phone: "+94 11 555 0301" },
      { country: "maldives", city: "malé", company: "encore atolls", email: "male@encorewoodcrafts.in", phone: "+960 333 0024" },
      { country: "nepal", city: "kathmandu", company: "encore nepal", email: "ktm@encorewoodcrafts.in", phone: "+977 1 555 0312" },
      { country: "bhutan", city: "thimphu", company: "encore bhutan", email: "thimphu@encorewoodcrafts.in", phone: "+975 2 555 0323" },
      { country: "thailand", city: "bangkok", company: "encore siam co. ltd", email: "bkk@encorewoodcrafts.in", phone: "+66 2 555 0334" },
      { country: "indonesia", city: "bali", company: "encore nusantara", email: "bali@encorewoodcrafts.in", phone: "+62 361 555 0345" },
    ],
  },
  {
    name: "europe",
    partners: [
      { country: "united kingdom", city: "london", company: "encore (uk) ltd.", email: "london@encorewoodcrafts.in", phone: "+44 20 7555 0044" },
      { country: "switzerland", city: "geneva", company: "encore atelier sa", email: "geneva@encorewoodcrafts.in", phone: "+41 22 555 0900" },
      { country: "italy", city: "milano", company: "encore italia srl", email: "milano@encorewoodcrafts.in", phone: "+39 02 5555 0070" },
      { country: "portugal", city: "porto", company: "encore lusitânia", email: "porto@encorewoodcrafts.in", phone: "+351 22 555 0034" },
    ],
  },
  {
    name: "north america",
    partners: [
      { country: "usa", city: "san francisco", company: "encore pacific", email: "sf@encorewoodcrafts.in", phone: "+1 415 555 0123" },
      { country: "usa", city: "new york", company: "encore east", email: "ny@encorewoodcrafts.in", phone: "+1 212 555 0166" },
      { country: "canada", city: "vancouver", company: "encore canada inc.", email: "vancouver@encorewoodcrafts.in", phone: "+1 604 555 0202" },
    ],
  },
  {
    name: "oceania",
    partners: [
      { country: "australia", city: "melbourne", company: "encore aus pty", email: "melbourne@encorewoodcrafts.in", phone: "+61 3 5555 0410" },
      { country: "australia", city: "sydney", company: "encore aus pty", email: "sydney@encorewoodcrafts.in", phone: "+61 2 5555 0421" },
      { country: "new zealand", city: "auckland", company: "encore aotearoa", email: "akl@encorewoodcrafts.in", phone: "+64 9 555 0432" },
    ],
  },
];

export interface MapDot {
  cx: number;
  cy: number;
  city: string;
  country: string;
  highlight?: boolean;
}

export const mapDots: MapDot[] = [
  { cx: 612, cy: 178, city: "hyderabad (hq)", country: "india", highlight: true },
  { cx: 614, cy: 188, city: "bengaluru", country: "india" },
  { cx: 622, cy: 198, city: "chennai", country: "india" },
  { cx: 600, cy: 174, city: "mumbai", country: "india" },
  { cx: 603, cy: 174, city: "pune", country: "india" },
  { cx: 616, cy: 154, city: "delhi", country: "india" },
  { cx: 620, cy: 156, city: "gurugram", country: "india" },
  { cx: 632, cy: 168, city: "kolkata", country: "india" },
  { cx: 608, cy: 200, city: "kochi", country: "india" },
  { cx: 596, cy: 180, city: "panjim", country: "india" },
  { cx: 596, cy: 158, city: "jaipur", country: "india" },
  { cx: 590, cy: 168, city: "ahmedabad", country: "india" },
  { cx: 552, cy: 162, city: "dubai", country: "uae" },
  { cx: 555, cy: 166, city: "abu dhabi", country: "uae" },
  { cx: 558, cy: 168, city: "doha", country: "qatar" },
  { cx: 545, cy: 170, city: "riyadh", country: "saudi arabia" },
  { cx: 562, cy: 174, city: "muscat", country: "oman" },
  { cx: 555, cy: 165, city: "manama", country: "bahrain" },
  { cx: 678, cy: 200, city: "singapore", country: "singapore" },
  { cx: 626, cy: 204, city: "colombo", country: "sri lanka" },
  { cx: 622, cy: 195, city: "malé", country: "maldives" },
  { cx: 632, cy: 152, city: "kathmandu", country: "nepal" },
  { cx: 638, cy: 154, city: "thimphu", country: "bhutan" },
  { cx: 666, cy: 188, city: "bangkok", country: "thailand" },
  { cx: 690, cy: 218, city: "bali", country: "indonesia" },
  { cx: 412, cy: 132, city: "london", country: "uk" },
  { cx: 446, cy: 140, city: "geneva", country: "switzerland" },
  { cx: 458, cy: 152, city: "milano", country: "italy" },
  { cx: 432, cy: 158, city: "porto", country: "portugal" },
  { cx: 178, cy: 138, city: "san francisco", country: "usa" },
  { cx: 240, cy: 138, city: "new york", country: "usa" },
  { cx: 152, cy: 122, city: "vancouver", country: "canada" },
  { cx: 740, cy: 252, city: "melbourne", country: "australia" },
  { cx: 752, cy: 240, city: "sydney", country: "australia" },
  { cx: 770, cy: 245, city: "auckland", country: "new zealand" },
];
