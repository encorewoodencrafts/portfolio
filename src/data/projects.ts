export interface Project {
  slug: string;
  title: string;
  architect: string;
  location: string;
  year: string;
  system: string;
  photographer: string;
  excerpt: string;
  body: string[];
  hero: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "cabin-on-the-ridge",
    title: "cabin on the ridge",
    architect: "atelier nord",
    location: "telluride, colorado",
    year: "2024",
    system: "encore SW + encore 60",
    photographer: "© marina lutz",
    excerpt:
      "a single-storey timber retreat at 3,200 m, framed entirely in encore SW with encore 60 thermal corners.",
    body: [
      "the brief asked for a cabin that disappeared into the spruce forest. the architects worked in two materials only — local douglas fir cladding outside, european oak inside. encore SW was specified across all openings to maintain a single visual language.",
      "the corner of the living room is an encore 60 structural-glass mitre. the timber spine continues through the joint, expressed only as a 60 mm vertical line at the eye level of a seated guest.",
    ],
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    slug: "house-by-the-bay",
    title: "house by the bay",
    architect: "fieldhouse studio",
    location: "cadboro bay, canada",
    year: "2023",
    system: "encore 38",
    photographer: "© james brittain",
    excerpt:
      "floor-to-ceiling encore 38 sliders open the living pavilion to the pacific without a single visible mullion.",
    body: [
      "fieldhouse specified encore 38 for the seafront pavilion: six 4.6 m panels of structural laminated glass framed only at the edges in slim oak. the system disappears into the slate threshold via the encore 2o drainage grate.",
      "in winter storms the building is sealed to wind class C5; in summer the entire south wall opens in 12 seconds via concealed encore motor units.",
    ],
    hero: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    slug: "atelier-on-the-quay",
    title: "atelier on the quay",
    architect: "studio okja",
    location: "porto, portugal",
    year: "2024",
    system: "encore NM",
    photographer: "© ricardo loureiro",
    excerpt:
      "a working artist's studio with encore NM hybrid timber-bronze frames patinated to mirror the douro tideline.",
    body: [
      "the bronze profiles were left to weather for six months on the riverbank before installation. encore NM's timber lining is european walnut, oiled to a satin finish that catches the late afternoon sun.",
      "a single encore pivot door, 1.4 m wide and 3.2 m tall, opens the studio to the dockside in summer.",
    ],
    hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1505692794403-34cb1ed8f7bf?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    slug: "alpine-belvedere",
    title: "alpine belvedere",
    architect: "burnier + kämpf",
    location: "verbier, switzerland",
    year: "2025",
    system: "encore 60 + encore UM",
    photographer: "© studio recall",
    excerpt:
      "passivhaus-certified chalet with encore 60 sliders and encore UM heritage windows in the historic stone wing.",
    body: [
      "the new build wing is glazed entirely in encore 60 to passivhaus standard with vertical 60 mm timber sightlines. the historic stone tower received encore UM thin-glass casements to comply with cantonal heritage rules — without altering the stone reveals.",
    ],
    hero: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    slug: "casa-na-areia",
    title: "casa na areia",
    architect: "ARX architects",
    location: "comporta, portugal",
    year: "2023",
    system: "encore SW",
    photographer: "© nelson garrido",
    excerpt:
      "a beach house buried in dunes — encore SW frames the only horizon: sand, sea, sky.",
    body: [
      "the entire seaward elevation is a single 14 m run of encore SW sliders, broken only by the structural columns of the pine roof. the timber is salt-cured accoya that will weather to silver over twenty seasons.",
    ],
    hero: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    slug: "courtyard-house",
    title: "courtyard house",
    architect: "shean architects",
    location: "ottawa, canada",
    year: "2024",
    system: "encore 60",
    photographer: "© james brittain",
    excerpt:
      "a low timber pavilion wrapped around an interior garden — encore 60 sliders on all four sides.",
    body: [
      "the inner courtyard is glazed continuously in encore 60. on summer evenings every panel slides into wall pockets, dissolving the boundary between architecture and garden.",
    ],
    hero: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=80",
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
