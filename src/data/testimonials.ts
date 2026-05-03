export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  studio: string;
  city: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "encore delivered a single 7-metre teak slider for our jubilee hills villa with a 32 mm sightline — and the install crew finished in two days. nobody else in india was even willing to quote.",
    author: "rohan menon",
    role: "principal architect",
    studio: "studio mātrā",
    city: "hyderabad",
  },
  {
    quote:
      "the team's understanding of monsoon-stability and tropical climate is unique. ten months on, the doors swing exactly as they did on day one. truly finely tuned millwork.",
    author: "priya nair",
    role: "founder",
    studio: "kutumb design",
    city: "bengaluru",
  },
  {
    quote:
      "we specified encore NM with hand-patinated bronze for a heritage bungalow restoration. the metalwork came out of their atelier closer to museum-grade than mass-market.",
    author: "arjun bhasin",
    role: "design director",
    studio: "frame studio",
    city: "mumbai",
  },
  {
    quote:
      "for a passivhaus retrofit in shimla, encore 60 was the only system that worked at altitude with timber on the inside face. their thermal data was rigorous.",
    author: "kavya rao",
    role: "passivhaus consultant",
    studio: "atelier zero",
    city: "delhi ncr",
  },
  {
    quote:
      "rare to find an indian craftsman who treats glass as a structural material. our 14 m frameless seafront elevation in goa would have been impossible without their team.",
    author: "isabela d'souza",
    role: "founder",
    studio: "casa azul",
    city: "panjim",
  },
];
