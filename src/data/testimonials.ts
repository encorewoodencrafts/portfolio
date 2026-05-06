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
      "encore delivered a 1.6 × 3.6 m solid-teak pivot door for our jubilee hills villa with a hydraulic floor pivot, and the install crew finished in two days. nobody else in india was even willing to quote.",
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
      "we specified hand-patinated bronze balusters for a heritage bungalow restoration. the metalwork came out of their atelier closer to museum-grade than mass-market.",
    author: "arjun bhasin",
    role: "design director",
    studio: "frame studio",
    city: "mumbai",
  },
  {
    quote:
      "their lift-and-slide hardware on a 4 m glass panel feels weightless. one finger of effort to slide a 200 kg leaf — and the threshold is wheelchair-flush. our client cried at first demo.",
    author: "kavya rao",
    role: "principal",
    studio: "atelier zero",
    city: "delhi ncr",
  },
  {
    quote:
      "rare to find an indian craftsman who treats frameless glass as a structural material. our 14 m balcony rail in goa would have been impossible without their concealed u-channel detail.",
    author: "isabela d'souza",
    role: "founder",
    studio: "casa azul",
    city: "panjim",
  },
];
