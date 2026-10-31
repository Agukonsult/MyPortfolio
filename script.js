/* PROJECT DATA — edit this file to add your real content.
   To add images, put files in /images and list them below, e.g.
   images:{ hero:"images/hillside-house/hero.jpg",
            sketches:["images/hillside-house/sketch1.jpg","images/hillside-house/sketch2.jpg"],
            views3d:[...], plans:[...], construction:[...], completion:[...] }
   Anything left empty shows a placeholder. */
const SECTORS = {
  residential: {
    name: "Residential",
    blurb:
      "Homes designed around everyday living, privacy, comfort and their surrounding environment.",
  },
  commercial: {
    name: "Commercial",
    blurb:
      "Commercial spaces designed to support business, hospitality, entertainment and learning.",
  },
  cultural: {
    name: "Cultural & Religious",
    blurb: "Community and religious spaces designed to bring people together.",
  },
  academic: {
    name: "Academic",
    blurb:
      "Learning spaces designed to support teaching, collaboration and discovery.",
  },
};
const FEATURED = "market-offices";
const DEFAULT_WRITEUP = [
  /* "Describe the site and the client\u2019s wishes: where the building stands, what the brief asked for, and how the design responds to the landscape or the street.",
  "Explain the layout and the materials: how people move through the building, the main spaces, and the finishes that were chosen and why.",
  "Finish with what makes the project special: a detail, a challenge you solved, or how it feels to be inside.",*/
];
const LOREM =
  "Short introduction to this design goes here. Describe the site, the client's brief, the main design idea and the materials used. Two or three sentences is enough.";
const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
const PROJECTS = [
  {
    id: "hillside-house",
    name: "5 Bedroom Duplex  ",
    subtitle: "Resdential House",
    type: "residential",
    location: "Ezinifite , Anambra, Nigeria",
    year: "2026",
    intro: LOREM,
    images: {
      hero: "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON2.mp4",
      sketches: [
        "Images/Residential_Images/5bedroom_duplex/Sketches/5BEDSKE1.jpg",
      ],
      views3d: [
        "Images/Residential_Images/5bedroom_duplex/3D/5BED3D1.jpg",
        "Images/Residential_Images/5bedroom_duplex/3D/5BED3D2.jpg",
        "Images/Residential_Images/5bedroom_duplex/3D/5BED3D3.jpg",
      ],
      plans: [
        "Images/Residential_Images/5bedroom_duplex/Floor_Plan/5BEDFLOOR1.png",
      ],
      construction: [
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON1.jpg",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON2.mp4",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON3.mp4",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON4.jpg",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON5.mp4",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON6.jpeg",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON7.jpeg",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON8.mp4",
        "Images/Residential_Images/5bedroom_duplex/Construction_Phase/5BEDCON9.mp4",
      ],
      completion: [],
    },
  },
  {
    id: "courtyard-residence",
    name: "5 Bedroom Duplex and BQ",
    subtitle: "Residential House",
    type: "residential",
    location: "Awka , Anambra , Nigeria",
    year: "2022",
    intro:"Inspired by the client’s deep appreciation for traditional architecture and cultural heritage, this design blends timeless traditional craftsmanship with modern materials and contemporary expression. Traditional motifs are thoughtfully integrated into key elements, particularly the entrance pillars, creating a building that celebrates cultural identity while embracing modern design.",
    images: {
      hero: "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D1.jpg",
      sketches: [
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Sketches/BQSKE1.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Sketches/BQSKE2.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Sketches/BQSKE3.jpg",
      ],
      views3d: [],
      plans: [],
      construction: [
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON1.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON2.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON3.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON4.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON5.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON6.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Construction_Phase/BQCON7.jpg",
      ],
      completion: [
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Completion_Phase/BQCOM1.jpg",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Completion_Phase/BQCOM2.mp4",
        "Images/Residential_Images/5bedroom_duplex_and_BQ/Completion_Phase/BQCOM3.mp4",
      ],
    },
  },
  {
    id: "lake-cabin",
    name: "4 Bedroom Bungalow",
    subtitle: "Residential House ",
    type: "residential",
    location: "Awka , Anambra , Nigeria",
    year: "2025",
    intro: LOREM,
    images: {
      hero: "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D1.jpg",
      sketches: [
        "Images/Residential_Images/4bedroom_bungalow/Sketches/BUGSKE1.jpg",
        "Images/Residential_Images/4bedroom_bungalow/Sketches/BUGSKE2.jpg",
      ],
      views3d: [
        "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D1.jpg",
        "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D2.jpg",
        "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D3.jpg",
        "Images/Residential_Images/4bedroom_bungalow/3D/BUG3D4.jpg",
      ],
      plans: [],
      construction: [],
      completion: [],
    },
  },
  {
    id: "family-bungalow",
    name: "4 Bedroom Duplex",
    subtitle: "Residential House",
    type: "residential",
    location: "Ontisha , Anambra, Nigeria",
    year: "2023",
    intro: LOREM,
    images: {
      hero: "Images/Residential_Images/4bedroom_duplex/3D/DUP3D1.jpg",
      sketches: [
        "Images/Residential_Images/4bedroom_duplex/Sketches/DUPSKE1.jpg",
      ],
      views3d: [
        "Images/Residential_Images/4bedroom_duplex/3D/DUP3D1.jpg",
        "Images/Residential_Images/4bedroom_duplex/3D/DUP3D2.jpg",
        "Images/Residential_Images/4bedroom_duplex/3D/DUP3D3.jpg",
        "Images/Residential_Images/4bedroom_duplex/3D/DUP3D4.jpg",
        "Images/Residential_Images/4bedroom_duplex/3D/DUP3D5.jpg",
      ],
      plans: [
        "Images/Residential_Images/4bedroom_duplex/Floor_Plan/DUPFLOOR1.png",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "three-bedroom-bungalow",
    name: "6 Bedroom Duplex",
    subtitle: "Residential House",
    type: "residential",
    location: "Enugu, Nigeria",
    year: "2023",
    intro: LOREM,
    images: {
      hero: "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D1.jpg",
      sketches: [
        "Images/Residential_Images/6_bedroom_duplex/Sketches/6DUPSKE1.jpg",
        "Images/Residential_Images/6_bedroom_duplex/Sketches/6DUPSKE2.jpg",
        "Images/Residential_Images/6_bedroom_duplex/Sketches/6DUPSKE3.jpg",
      ],
      views3d: [
        "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D1.jpg",
        "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D2.jpg",
        "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D3.jpg",
        "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D4.jpg",
        "Images/Residential_Images/6_bedroom_duplex/3D/6DUP3D5.jpg",
      ],
      plans: [],
      construction: [],
      completion: [],
    },
  },
  {
    id: "modern-residential-house",
    name: "Residential Apartments and Shop Outlets ",
    subtitle: "Residential House",
    type: "residential",
    location: "Awka , Anambra, Nigeria",
    year: "2022",
    intro: "The project was designed on a 314 sqm site, this mixed-use development thoughtfully combines comfortable residential living—with self-contained and three-bedroom apartments—with a functional commercial outlet on the ground floor. Every part of the site was carefully maximized to create a balanced environment, providing essential services including parking for three cars, an overhead water tank, and a septic system.",
    images: {
      hero: "",
      sketches: [
        "Images/Residential_Images/Residential_apartments_and_shop_outlets/Sketches/OUTSKE1.jpg",
      ],
      views3d: [],
      plans: [
        "Images/Residential_Images/Residential_apartments_and_shop_outlets/Floor_Plan/OUTFLOOR1.jpg",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "market-offices",
    name: "United Plaza",
    subtitle: "Plaza",
    type: "commercial",
    location: "Awka, Anambra, Nigeria",
    year: "2025",
    intro: LOREM,
    images: {
      hero: "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON10.mp4",
      sketches: [
        "Images/Commercial_Images/United_plaza/Sketches/PLASKE1.jpg",
        "Images/Commercial_Images/United_plaza/Sketches/PLASKE2.jpg",
      ],
      views3d: [],
      plans: [],
      construction: [
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON1.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON2.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON3.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON4.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON5.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON6.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON7.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON8.jpg",
        "Images/Commercial_Images/United_plaza/Construction_Phase/PLACON9.mp4",
      ],
      completion: [],
    },
  },
  {
    id: "restaurant-design",
    name: "Respoint",
    subtitle: "Restaurant Design",
    type: "commercial",
    location: "Anambra, Nigeria",
    year: "2023",
    intro:
      "A contemporary restaurant concept designed to create a welcoming dining experience, with a clear flow between the entrance, dining areas and service spaces.",
    images: {
      hero: "Images/Commercial_Images/Restaurant_design/3D/3DVIEW1.jpeg",
      sketches: [
        "Images/Commercial_Images/Restaurant_design/Sketches/RESTSKE1.jpeg",
        "Images/Commercial_Images/Restaurant_design/Sketches/RESTSKE2.jpeg",
        "Images/Commercial_Images/Restaurant_design/Sketches/RESTSKE3.jpeg",
        "Images/Commercial_Images/Restaurant_design/Sketches/RESTSKE4.jpeg",
      ],
      views3d: [
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW1.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW2.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW3.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW4.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW5.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW6.jpeg",
        "Images/Commercial_Images/Restaurant_design/3D/3DVIEW7.jpeg",
      ],
      plans: [
        "Images/Commercial_Images/Restaurant_design/Floor_Plan/RESFLOOR1.png",
        "Images/Commercial_Images/Restaurant_design/Floor_Plan/RESFLOOR2.png",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "nightclub-design",
    name: "Tac Night Club",
    subtitle: "Night Club",
    type: "commercial",
    location: "Owerri, Nigeria",
    year: "2023",
    intro:
      "A nightclub concept that combines dramatic lighting, immersive interiors and carefully planned circulation to create an energetic social venue.",
    images: {
      hero: "Images/Commercial_Images/Night_Club/3D/NGT3D1.jpg",
      sketches: [
        "Images/Commercial_Images/Night_Club/Sketches/NGTSKE1.jpg",
        "Images/Commercial_Images/Night_Club/Sketches/NGTSKE2.jpg",
        "Images/Commercial_Images/Night_Club/Sketches/NGTSKE3.jpg",
        "Images/Commercial_Images/Night_Club/Sketches/NGTSKE4.jpg",
      ],
      views3d: [
        "Images/Commercial_Images/Night_Club/3D/NGT3D1.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D2.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D3.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D4.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D5.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D6.jpg",
        "Images/Commercial_Images/Night_Club/3D/NGT3D7.jpg",
      ],
      plans: [u("photo-1486406146926-c627a92ad1ab", 1000)],
      construction: [],
      completion: [],
    },
  },
  {
    id: "ict-training-centre",
    name: "Ict Center ",
    subtitle: "Training Centre",
    type: "commercial",
    location: "Enugu, Nigeria",
    year: "2024",
    intro:
      "A technology learning facility planned around practical computer training, collaborative learning and a comfortable environment for students and instructors.",
    images: {
      hero: "Images/Commercial_Images/Ict_training_center/3D/ICT3D1.jpg",
      sketches: [
        "Images/Commercial_Images/Ict_training_center/Sketches/ICTSKE1.jpg",
        "Images/Commercial_Images/Ict_training_center/Sketches/ICTSKE2.jpg",
        "Images/Commercial_Images/Ict_training_center/Sketches/ICTSKE3.jpg",
        "Images/Commercial_Images/Ict_training_center/Sketches/ICTSKE4.jpg",
      ],
      views3d: [
        "Images/Commercial_Images/Ict_training_center/3D/ICT3D1.jpg",
        "Images/Commercial_Images/Ict_training_center/3D/ICT3D2.jpg",
        "Images/Commercial_Images/Ict_training_center/3D/ICT3D3.jpg",
        "Images/Commercial_Images/Ict_training_center/3D/ICT3D4.jpg",
      ],
      plans: [
        "Images/Commercial_Images/Ict_training_center/Floor_Plan/Floor1.png",
        "Images/Commercial_Images/Ict_training_center/Floor_Plan/Floor2.png",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "church",
    name: "Anglican Church",
    subtitle: "Church",
    type: "cultural",
    location: "Asaba, Nigeria",
    year: "2025",
    intro: "Designed as a place of worship and community, this church spans 1,041.838 sqm on a 2,736.158 sqm site. The spacious site provides ample parking and creates a welcoming environment where the congregation can gather, connect, and worship.",
    images: {
      hero: "Images/Cultural_&_religious_Images/Church/3D/CHH3D1.jpg",
      sketches: [
        "Images/Cultural_&_religious_Images/Church/Sketches/CHHSKE1.jpg",
        "Images/Cultural_&_religious_Images/Church/Sketches/CHHSKE2.jpg",
        "Images/Cultural_&_religious_Images/Church/Sketches/CHHSKE3.jpg",
        /*"Images/Commercial_Images/Church/Sketches/ICTSKE4.jpg",*/
      ],
      views3d: [
        "Images/Cultural_&_religious_Images/Church/3D/CHH3D1.jpg",
        "Images/Cultural_&_religious_Images/Church/3D/CHH3D2.jpg",
        "Images/Cultural_&_religious_Images/Church/3D/CHH3D3.jpg",
        "Images/Cultural_&_religious_Images/Church/3D/CHH3D4.jpg",
      ],
      plans: [
        "Images/Cultural_&_religious_Images/Church/Floor_Plan/CHHFLOOR1.png",
        "Images/Cultural_&_religious_Images/Church/Floor_Plan/CHHFLOOR2.png",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "town-hall",
    name: "Town Hall",
    subtitle: "Hall",
    type: "cultural",
    location: "Anambra, Nigeria",
    year: "2026",
    intro: LOREM,
    images: {
      hero: "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D1.jpg",
      sketches: [
        "Images/Cultural_&_religious_Images/Town_hall/Sketches/TWNSKE1.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/Sketches/TWNSKE2.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/Sketches/TWNSKE3.jpg",
      ],
      views3d: [
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D1.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D2.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D3.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D4.jpg",
      ],
      views3d: [
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D1.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D2.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D3.jpg",
        "Images/Cultural_&_religious_Images/Town_hall/3D/TWN3D4.jpg",
      ],
      plans: [
        "Images/Cultural_&_religious_Images/Town_hall/Floor_Plan/TWNFLOOR1.png",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "community-hall",
    name: "Kindred Town hall",
    subtitle: "Community Hall",
    type: "cultural",
    location: "Anambra, Nigeria",
    year: "2025",
    intro: "The client wants the building to be Inspired by the rich cultural heritage of the Igbo people, this Kindred Hall blends traditional symbols with modern architectural expression. The elephant tusk-shaped entrance represents royalty, while cowries and Nsibidi-inspired elements on the façade celebrate the identity, history, and enduring spirit of Igbo culture.",
    images: {
      hero: "Images/Cultural_&_religious_Images/Communityhall/3D/TWNT3D1.jpg",
      sketches: [
        "Images/Cultural_&_religious_Images/Communityhall/Sketches/TWNTSKE1.jpg",
        "Images/Cultural_&_religious_Images/Communityhall/Sketches/TWNTSKE2.jpg",
      ],
      views3d: [
        "Images/Cultural_&_religious_Images/Communityhall/3D/TWNT3D1.jpg",
        "Images/Cultural_&_religious_Images/Communityhall/3D/TWNT3D2.jpg",
        "Images/Cultural_&_religious_Images/Communityhall/3D/TWNT3D3.jpg",
        "Images/Cultural_&_religious_Images/Communityhall/3D/TWNT3D4.jpg",
      ],
      plans: [],
      construction: [],
      completion: [],
    },
  },
  {
    id: "omambala-floating-house",
    name: "Omambala Floating House (Prototype)",
    subtitle: "Aademic",
    type: "academic",
    location: "Anambra, Nigeria",
    year: "2024",
    intro:
      "The design encompasses the creation of a prototype floating smart house specifically for people living in flood prone region eg fishermen and farmers living in riverine area located umukwu - Anam , Omambala community. <br/> Considering the structural design, material selection and smart features",
    images: {
      hero: "Images/Academic/Omambala_floating_smart_house/3D/ACA3D1.jpg",
      sketches: [
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE1.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE2.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE3.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE4.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE5.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE7.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE8.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE9.jpg",
        "Images/Academic/Omambala_floating_smart_house/Sketches/ACASKE10.jpg",
      ],
      views3d: [
        "Images/Academic/Omambala_floating_smart_house/3D/ACA3D1.jpg",
        "Images/Academic/Omambala_floating_smart_house/3D/ACA3D2.jpg",
        "Images/Academic/Omambala_floating_smart_house/3D/ACA3D3.jpg",
      ],
      plans: [
        "Images/Academic/Omambala_floating_smart_house/Floor_Plan/ACAFLOOR1.jpg",
        "Images/Academic/Omambala_floating_smart_house/Floor_Plan/ACAFLOOR2.jpg",
      ],
      construction: [],
      completion: [],
    },
  },
  {
    id: "lecture-theatre",
    name: "Lecture Theatre",
    subtitle: "Academic",
    type: "academic",
    location: "Proposed, Nigeria",
    year: "2024",
    intro:
      "A lecture theatre concept planned to support clear sightlines, comfortable seating, accessible circulation and effective teaching.",
    images: {
      hero: "Images/Academic/Lecture_theatre/3D/LEC3D1.jpg",
      sketches: [
        "Images/Academic/Lecture_theatre/Sketches/LECSKE1.jpg",
        "Images/Academic/Lecture_theatre/Sketches/LECSKE2.jpg",
        "Images/Academic/Lecture_theatre/Sketches/LECSKE3.jpg",
        "Images/Academic/Lecture_theatre/Sketches/LECSKE4.jpg",
      ],
      views3d: [
        "Images/Academic/Lecture_theatre/3D/LEC3D1.jpg",
        "Images/Academic/Lecture_theatre/3D/LEC3D2.jpg",
        "Images/Academic/Lecture_theatre/3D/LEC3D3.jpg",
      ],
      plans: [
        "Images/Academic/Lecture_theatre/Floor_Plan/LECFIRSTFLOOR.png",
        "Images/Academic/Lecture_theatre/Floor_Plan/LECGRDFLOOR.png",
        "Images/Academic/Lecture_theatre/Floor_Plan/LECBASEFLOOR.png",
      ],
      construction: [],
      completion: [],
    },
  },
];

/* Sample pictures, drawn in code so the site has images before you add your own.
   Real images listed in data.js always replace them. Set SAMPLE_ART to false to show empty placeholders instead. */
const SAMPLE_ART = true;
const KIND = {
  sketches: "sketch",
  views3d: "view3d",
  plans: "plan",
  construction: "construction",
  completion: "completion",
};
const rng = (s) => {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = (h + 1831565813) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
function sampleArt(kind, seed) {
  const r = rng(kind + "|" + seed),
    n = (a, c) => a + (c - a) * r(),
    gy = 440,
    f = (v) => v.toFixed(1);
  const x1 = n(100, 170),
    w1 = n(400, 470),
    h1 = n(100, 125),
    w2 = n(250, w1 * 0.75),
    x2 = x1 + n(-30, w1 - w2 + 50),
    h2 = n(80, 105),
    timber = r() > 0.5;
  const rect = (x, y, w, h, fill, o = "") =>
    `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" ${o}/>`;
  const line = (a, c, d, e, st, w = 1.5, o = 1) =>
    `<path d="M${f(a)} ${f(c)}L${f(d)} ${f(e)}" stroke="${st}" stroke-width="${w}" opacity="${o}" fill="none"/>`;
  const sky = (a, c) =>
    `<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${c}"/></linearGradient></defs>` +
    rect(0, 0, 800, 600, "url(#s)");
  const trees = [
    x1 - n(50, 90),
    x1 + w1 + n(40, 70),
    x1 + w1 + n(110, 150),
  ].filter((x) => x > 30 && x < 770);
  let b = "";
  if (kind === "hero" || kind === "completion") {
    const dusk = kind === "hero",
      c2 = dusk ? "#7c93a3" : "#e9f0f2",
      glass = dusk ? "#f1c97f" : "#2c4150",
      hill = n(90, 130);
    b += sky(dusk ? "#1c2833" : "#a9c7da", c2);
    b +=
      `<path d="M0 ${gy - 60}Q200 ${gy - hill} 420 ${gy - 50}T800 ${gy - 70}V${gy}H0Z" fill="${dusk ? "#34444f" : "#9db3b9"}"/>` +
      rect(0, gy, 800, 160, dusk ? "#2f3b35" : "#6d7f6a");
    trees.forEach((x) => {
      const t = n(60, 90);
      b +=
        rect(x - 3, gy - t, 6, t, "#2b2f2c") +
        `<circle cx="${f(x)}" cy="${f(gy - t - 20)}" r="${f(n(28, 42))}" fill="${dusk ? "#22302a" : "#486351"}"/>`;
    });
    b +=
      rect(x1, gy - h1, w1, h1, "#c9cac6") +
      rect(x2, gy - h1 - h2, w2, h2, timber ? "#8a6a47" : "#d4d5d1");
    b +=
      rect(x1 + 24, gy - h1 + 22, w1 * 0.58, h1 - 22, glass) +
      rect(x2 + 18, gy - h1 - h2 + 22, w2 * 0.5, h2 - 44, glass);
    for (let x = x1 + 24; x < x1 + 24 + w1 * 0.58; x += 46)
      b += line(x, gy - h1 + 22, x, gy, "#1b2328", 3);
    for (let x = x2 + 18; x < x2 + 18 + w2 * 0.5; x += 46)
      b += line(x, gy - h1 - h2 + 22, x, gy - h1 - 22, "#1b2328", 3);
    b +=
      rect(x2 - 16, gy - h1 - h2 - 10, w2 + 32, 10, "#4d5357") +
      rect(x1 - 10, gy - h1 - 8, w1 + 20, 8, "#4d5357") +
      rect(x1, gy + 16, w1 * 0.7, 26, c2, 'opacity=".5"');
  } else if (kind === "sketch") {
    const ink = "#2e3438",
      J = () => n(-3, 3);
    const box = (x, y, w, h) =>
      [
        [x, y, x + w, y],
        [x + w, y, x + w, y + h],
        [x + w, y + h, x, y + h],
        [x, y + h, x, y],
      ]
        .map(([a, c, d, e]) =>
          line(
            a - J() - 8 * (r() > 0.5),
            c + J(),
            d + J() + 8 * (r() > 0.5),
            e + J(),
            ink,
            n(1, 2.2),
            n(0.6, 0.95),
          ),
        )
        .join("");
    b +=
      rect(0, 0, 800, 600, "#f2f1ec") +
      line(40, gy, 760, gy, ink, 2) +
      line(40, gy + 6, 700, gy + 6, ink, 1, 0.5);
    [
      [x1, gy - h1],
      [x1 + w1, gy - h1],
      [x2, gy - h1 - h2],
      [x2 + w2, gy - h1 - h2],
    ].forEach(([x, y]) => {
      b += line(x, y - 30, x, y + 40, "#6a88a8", 1, 0.7);
    });
    b +=
      line(30, gy - h1 - h2, 770, gy - h1 - h2, "#6a88a8", 1, 0.6) +
      box(x1, gy - h1, w1, h1) +
      box(x2, gy - h1 - h2, w2, h2) +
      box(x1 + 24, gy - h1 + 22, w1 * 0.58, h1 - 22);
    for (let x = x1 + 50; x < x1 + 24 + w1 * 0.58; x += 14)
      b += line(x, gy - h1 + 22, x - 26, gy, ink, 0.8, 0.5);
    for (let x = x1 + 24; x < x1 + 24 + w1 * 0.58; x += 46)
      b += line(x, gy - h1 + 22, x, gy, ink, 1.2, 0.8);
    trees.forEach((x) => {
      b +=
        `<circle cx="${f(x)}" cy="${gy - 90}" r="${f(n(28, 40))}" fill="none" stroke="${ink}" stroke-width="1.3" opacity=".7"/>` +
        line(x, gy - 55, x, gy, ink, 1.5, 0.8);
    });
    b +=
      line(x1, gy + 40, x1 + w1, gy + 40, ink, 1) +
      line(x1, gy + 33, x1, gy + 47, ink, 1) +
      line(x1 + w1, gy + 33, x1 + w1, gy + 47, ink, 1) +
      `<text x="${f(x1 + w1 / 2)}" y="${gy + 64}" text-anchor="middle" font-family="Caveat,cursive,sans-serif" font-size="20" fill="${ink}">${(w1 / 32).toFixed(1)} m</text>`;
  } else if (kind === "plan") {
    const X = 120,
      Y = 110,
      Wd = 560,
      Hd = 380,
      wall = (a, c, d, e) => line(a, c, d, e, "#fff", 8);
    b += rect(0, 0, 800, 600, "#1F4E79");
    for (let i = 0; i <= 800; i += 40)
      b +=
        line(i, 0, i, 600, "#fff", 0.5, 0.12) +
        line(0, i, 800, i, "#fff", 0.5, 0.12);
    const vx = X + Wd * n(0.38, 0.55),
      gs = Y + n(60, Hd - 130),
      hy = Y + Hd * n(0.35, 0.6),
      gx = vx + n(30, Wd * 0.4 - 90);
    b +=
      `<rect x="${X}" y="${Y}" width="${Wd}" height="${Hd}" fill="none" stroke="#fff" stroke-width="8"/>` +
      wall(vx, Y, vx, gs) +
      wall(vx, gs + 50, vx, Y + Hd) +
      wall(vx, hy, gx, hy) +
      wall(gx + 50, hy, X + Wd, hy);
    b += `<path d="M${f(vx + 50)} ${f(gs)}A50 50 0 0 1 ${f(vx)} ${f(gs + 50)}M${f(vx)} ${f(gs)}L${f(vx + 50)} ${f(gs)}" stroke="#fff" stroke-width="1.5" fill="none"/>`;
    [X + 60, X + 250, X + 430].forEach((x) => {
      b +=
        rect(x, Y - 4, 70, 8, "#1F4E79", 'stroke="#fff" stroke-width="1.5"') +
        rect(
          x,
          Y + Hd - 4,
          70,
          8,
          "#1F4E79",
          'stroke="#fff" stroke-width="1.5"',
        );
    });
    const out = (x, y, w, h) =>
      `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="none" stroke="#fff" stroke-width="1.5" opacity=".8"/>`;
    b +=
      out(X + 30, Y + Hd - 110, 150, 60) +
      out(vx + 30, hy + 30, 110, 130) +
      `<circle cx="${f(X + (vx - X) / 2)}" cy="${f(Y + 110)}" r="34" fill="none" stroke="#fff" stroke-width="1.5" opacity=".8"/>`;
    const t = (x, y, s) =>
      `<text x="${f(x)}" y="${f(y)}" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#fff" opacity=".85">${s}</text>`;
    b +=
      t(X + (vx - X) / 2, Y + 50, "Living") +
      t(vx + (X + Wd - vx) / 2, Y + 40, "Kitchen") +
      t(vx + (X + Wd - vx) / 2, Y + Hd - 30, "Bedroom");
    b +=
      line(X, Y - 34, X + Wd, Y - 34, "#fff", 1) +
      line(X, Y - 41, X, Y - 27, "#fff", 1) +
      line(X + Wd, Y - 41, X + Wd, Y - 27, "#fff", 1) +
      t(X + Wd / 2, Y - 42, (Wd / 40).toFixed(1) + " m");
  } else if (kind === "view3d") {
    b += sky("#eef0ef", "#cfd5d4");
    const P = (x, y, z) => [400 + (x - y) * 0.866, 110 + (x + y) * 0.5 - z],
      pt = (a) => a.map((p) => f(p[0]) + "," + f(p[1])).join(" ");
    const poly = (a, c) => `<polygon points="${pt(a)}" fill="${c}"/>`;
    const bx = (x, y, w, d, h, z = 0, glass = true) => {
      const H = z + h;
      let o =
        poly(
          [P(x, y, H), P(x + w, y, H), P(x + w, y + d, H), P(x, y + d, H)],
          "#eceeed",
        ) +
        poly(
          [
            P(x, y + d, z),
            P(x + w, y + d, z),
            P(x + w, y + d, H),
            P(x, y + d, H),
          ],
          "#c3c7c5",
        ) +
        poly(
          [
            P(x + w, y, z),
            P(x + w, y + d, z),
            P(x + w, y + d, H),
            P(x + w, y, H),
          ],
          "#959b9a",
        );
      if (glass) {
        const a = x + w * 0.1,
          c = x + w * 0.9,
          z1 = z + h * 0.25,
          z2 = z + h * 0.75;
        o += poly(
          [P(a, y + d, z1), P(c, y + d, z1), P(c, y + d, z2), P(a, y + d, z2)],
          "#3a4c57",
        );
      }
      return o;
    };
    const a1 = { x: 30, y: 50, w: n(190, 230), d: n(110, 140), h: n(70, 90) };
    b +=
      bx(0, 0, 360, 360, 8, 0, false) +
      bx(a1.x, a1.y, a1.w, a1.d, a1.h, 8) +
      bx(a1.x + n(0, 30), a1.y, a1.w * 0.6, a1.d, n(50, 70), 8 + a1.h) +
      bx(n(80, 130), n(190, 215), n(130, 170), n(100, 125), n(100, 140), 8);
    [
      [320, 40],
      [340, 120],
      [40, 300],
      [320, 330],
    ].forEach(([x, y]) => {
      const q = P(x, y, 8);
      b += `<circle cx="${f(q[0])}" cy="${f(q[1] - 14)}" r="15" fill="#6f8a72"/>`;
    });
  } else {
    b +=
      sky("#cfd6d8", "#eceeee") +
      rect(0, gy, 800, 160, "#8a7d6b") +
      `<path d="M560 ${gy}L620 ${gy - 34}L720 ${gy - 22}L800 ${gy}Z" fill="#7a6e5d"/>`;
    const fl = Math.round(n(2, 3)),
      bw = 150,
      bays = 3,
      x0 = 110,
      fh = 88,
      topY = gy - fl * fh - 6;
    for (let k = 0; k < fl; k++) {
      const top = gy - (k + 1) * fh;
      for (let i = 0; i <= bays; i++)
        b += rect(x0 + i * bw - 8, top, 16, fh, "#a9acab");
      b += rect(x0 - 20, top - 6, bays * bw + 40, 14, "#b9bcbb");
    }
    for (let i = 0; i <= bays; i++)
      for (let k = -2; k <= 2; k++)
        b += line(
          x0 + i * bw + k * 3,
          topY,
          x0 + i * bw + k * 3,
          topY - 34,
          "#6b5b4b",
          1.2,
        );
    const sx = x0 - 34,
      sw = bays * bw + 68;
    for (let x = sx; x <= sx + sw; x += 50)
      b += line(x, gy, x, topY + 6, "#d9a21b", 2, 0.85);
    for (let y = gy; y >= topY; y -= 44)
      b += line(sx, y, sx + sw, y, "#d9a21b", 2, 0.85);
    b +=
      line(sx, gy, sx + 150, gy - 132, "#d9a21b", 2, 0.7) +
      line(sx + 150, gy, sx, gy - 132, "#d9a21b", 2, 0.7);
    const cx = 690,
      ty = 70,
      hx = n(430, 540);
    b += rect(cx - 7, ty, 14, gy - ty, "#e3b341");
    for (let y = ty; y < gy; y += 24)
      b +=
        line(cx - 7, y, cx + 7, y + 24, "#9a7412", 1.2) +
        line(cx + 7, y, cx - 7, y + 24, "#9a7412", 1.2);
    b +=
      rect(380, ty - 6, 350, 12, "#e3b341") +
      rect(cx - 30, ty - 26, 60, 20, "#c99a1c") +
      rect(cx + 10, ty + 6, 60, 30, "#555") +
      line(hx, ty + 6, hx, ty + 120, "#222", 1.5) +
      rect(hx - 14, ty + 120, 28, 18, "#c99a1c") +
      rect(620, gy - 18, 50, 18, "#9b9a95");
  }
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">${b}</svg>`,
    )
  );
}

/* Your own pictures: drop files named like images/<project-id>/hero.jpg, sketch-1.jpg, 3d-1.jpg, plan-1.jpg,
   construction-1.jpg, completion-1.jpg and they are picked up automatically. Missing files show a sample picture. */
const AUTO_PICS = false;
const AUTO = {
  sketches: "sketch",
  views3d: "3d",
  plans: "plan",
  construction: "construction",
  completion: "completion",
};
const auto = (id, name) => (AUTO_PICS ? `images/${id}/${name}.jpg` : "");
document.addEventListener(
  "error",
  (e) => {
    const i = e.target;
    if (i && i.tagName === "IMG" && i.dataset.fb) {
      const u = i.dataset.fb;
      delete i.dataset.fb;
      i.src = u;
    }
  },
  true,
);

/* Collect every image/video URL for a project (hero + all gallery slots) */
function allImages(p) {
  const imgs = p.images || {},
    out = [];
  if (imgs.hero) out.push(imgs.hero);
  ["sketches", "views3d", "plans", "construction", "completion"].forEach(
    (k) => {
      (imgs[k] || []).forEach((s) => {
        if (s && !out.includes(s)) out.push(s);
      });
    },
  );
  return out.length ? out : [imgs.hero || ""];
}

/* Multi-image block for cards / slides (cycles through all project images). Videos stay as single media. */
function multiMedia(p, label, ratio = "4/3", kind = "hero") {
  const list = allImages(p);
  if (list.length <= 1 || isVideo(list[0]))
    return media(
      list[0] || p.images.hero,
      label,
      ratio,
      "",
      kind,
      p.id,
      auto(p.id, "hero"),
    );
  return list
    .map(
      (src, i) =>
        `<div class="ms${i === 0 ? " on" : ""}">${media(src, label + " " + (i + 1), ratio, "", kind, p.id + "-" + i, "")}</div>`,
    )
    .join("");
}

/* Start auto-cycling on every .m that has multiple .ms children */
function startCardCycles(root) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  (root || document).querySelectorAll(".m").forEach((m) => {
    const slides = [...m.querySelectorAll(".ms")];
    if (slides.length < 2) return;
    let i = 0;
    const tick = () => {
      if (!document.contains(m)) {
        clearInterval(t);
        return;
      }
      slides[i].classList.remove("on");
      i = (i + 1) % slides.length;
      slides[i].classList.add("on");
    };
    const t = setInterval(tick, 3500);
  });
}

/* ---------- Landing page fit ----------
   Pictures and videos come in every shape (wide, square, tall). These helpers read the real size of each one
   and shape its frame to suit, so the landing page looks tidy on desktop as well as on phones. */
function whenSize(el, cb) {
  if (el.tagName === "VIDEO") {
    const go = () => el.videoWidth && cb(el.videoWidth, el.videoHeight);
    if (el.readyState >= 1) go();
    else el.addEventListener("loadedmetadata", go, { once: true });
  } else {
    const go = () => el.naturalWidth && cb(el.naturalWidth, el.naturalHeight);
    if (el.complete && el.naturalWidth) go();
    else el.addEventListener("load", go, { once: true });
  }
}
/* Soft blurred copy of a picture/video frame, used to fill the space around a tall picture or video */
function addBackdrop(box, el) {
  if (box.querySelector(":scope > .bdrop")) return;
  const bd = document.createElement("div");
  bd.className = "bdrop";
  bd.setAttribute("aria-hidden", "true");
  const c = document.createElement("canvas");
  c.width = 48;
  c.height = 64;
  bd.appendChild(c);
  box.insertBefore(bd, box.firstChild);
  const draw = () => {
    try {
      c.getContext("2d").drawImage(el, 0, 0, 48, 64);
    } catch (e) {}
  };
  if (el.tagName === "VIDEO" && el.readyState < 2)
    el.addEventListener("loadeddata", draw, { once: true });
  else draw();
}
/* Project cards: every card frame becomes the nearest neat shape to its cover picture */
const CARD_SHAPES = [0.8, 1, 1.3333, 1.6];
const nearestShape = (r) =>
  CARD_SHAPES.reduce((a, b) => (Math.abs(b - r) < Math.abs(a - r) ? b : a));
function fitCards(root) {
  root.querySelectorAll(".card").forEach((card) => {
    const m = card.querySelector(".m"),
      el = m && m.querySelector("img,video");
    if (el)
      whenSize(el, (w, h) =>
        m.style.setProperty("--ar", nearestShape(w / h).toFixed(4)),
      );
  });
}
/* Featured project: wide media stays wide, tall media gets its own tall frame beside the text */
function fitFeatured(box) {
  const fimg = box.querySelector(".fimg"),
    el = fimg && fimg.querySelector("img,video");
  if (!el) return;
  whenSize(el, (w, h) => {
    const r = w / h;
    box.classList.toggle("is-portrait", r < 0.85);
    box.classList.toggle("is-square", r >= 0.85 && r < 1.15);
    fimg.style.setProperty("--far", Math.min(1.9, Math.max(1.3, r)).toFixed(3));
    if (r < 0.85) addBackdrop(fimg, el);
  });
}
/* Hero slideshow: on desktop a tall picture/video sits on the right over a blurred copy of itself */
function fitHero(box) {
  box.querySelectorAll("img,video").forEach((el) =>
    whenSize(el, (w, h) => {
      if (w / h < 0.9) {
        el.parentElement.classList.add("is-portrait");
        addBackdrop(el.parentElement, el);
      }
    }),
  );
}

/* Moving hero: slowly zooming slideshow of the project pictures (supports video) */
function initSlides() {
  const box = document.getElementById("slides"),
    cap = document.getElementById("cap");
  if (!box) return;
  const HERO_PROJECT_IDS = [
    "lake-cabin",
    "family-bungalow",
    "three-bedroom-bungalow",
    "restaurant-design",
    "nightclub-design",
    "ict-training-centre",
    "church",
    "town-hall",
    "community-hall",
    "omambala-floating-house",
    "lecture-theatre",
  ];

  const list = HERO_PROJECT_IDS.map((id) =>
    PROJECTS.find((p) => p.id === id),
  ).filter((p) => p && p.images.hero);
  box.innerHTML = list
    .map((p, i) => {
      // Hillside keeps single video; other projects cycle all their images inside the slide
      const inner = multiMedia(p, p.name, "16/9", "hero");
      return `<div class="slide">${inner}</div>`;
    })
    .join("");
  const s = [...box.children];
  let i = 0;
  const show = (k) => {
    i = k;
    s.forEach((e, j) => {
      e.classList.toggle("on", j === k);
      const v = e.querySelector("video");
      if (v) {
        if (j === k) {
          v.currentTime = 0;
          v.play().catch(() => {});
        } else v.pause();
      }
    });
    cap.textContent = list[k].name;
    cap.href = MU.project(list[k].id);
  };
  show(0);
  startCardCycles(box);
  fitHero(box);
  if (s.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  const t = setInterval(() => {
    if (!document.contains(box)) {
      clearInterval(t);
      return;
    }
    show((i + 1) % s.length);
  }, 8000);
}

/* ---------- Featured project + Selected work grid ---------- */
let currentSector = "all";
function initFeatured() {
  const box = document.getElementById("feat");
  if (!box) return;
  const p = PROJECTS.find((x) => x.id === FEATURED) || PROJECTS[0],
    u = MU.project(p.id);
  // Featured is Hillside → keep video
  box.innerHTML = `<div class="wrap"><a class="fimg" href="${u}">${media(p.images.hero, p.name + " cover image", "16/10", "", "completion", p.id + "-feat", auto(p.id, "hero"))}</a><div class="ftxt"><h2>${p.name}<small class="project-subtitle" style="display:block;font-size:.65em;font-weight:400;line-height:1.4;margin-top:4px">${p.subtitle || "Project Subtitle"}</small></h2><p class="meta"><span>${SECTORS[p.type].name}</span><span>${p.location}</span><span>${p.year}</span></p><p>${p.intro}</p><a class="more" href="${u}">View project</a></div></div>`;
  fitFeatured(box);
}
function initProjects() {
  const grid = document.getElementById("grid"),
    filters = document.getElementById("filters");
  if (!grid) return;
  const cnt = (k) =>
    k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.type === k).length;
  const draw = () => {
    filters.innerHTML = [
      ["all", "All"],
      ...Object.entries(SECTORS).map(([k, v]) => [k, v.name]),
    ]
      .map(
        ([k, n]) =>
          `<button class="chip" data-t="${k}" aria-pressed="${k === currentSector}">${n}<small>${cnt(k)}</small></button>`,
      )
      .join("");
    document.getElementById("blurb").textContent =
      currentSector === "all"
        ? "Homes, commercial spaces, cultural and religious buildings, and places for learning."
        : SECTORS[currentSector].blurb;
    const l = PROJECTS.filter(
      (p) => currentSector === "all" || p.type === currentSector,
    );
    document.getElementById("count").textContent =
      l.length + (l.length === 1 ? " project" : " projects");
    grid.innerHTML =
      l
        .map((p, i) => {
          const w = i % 4 === 0 || i % 4 === 3;
          // Hillside keeps video; every other project cycles through ALL its images
          const cover =
            p.id === "hillside-house"
              ? media(
                  p.images.hero,
                  p.name + " cover image",
                  w ? "16/10" : "1/1",
                  "",
                  w ? "completion" : "hero",
                  p.id,
                  auto(p.id, "hero"),
                )
              : multiMedia(
                  p,
                  p.name + " cover image",
                  w ? "16/10" : "1/1",
                  w ? "completion" : "hero",
                );
          return `<a class="card${w ? "" : " b"}" href="${MU.project(p.id)}" data-sector="${currentSector}"><div class="m">${cover}</div><div class="info"><h3>${p.name}<small class="project-subtitle" style="display:block;font-size:.65em;font-weight:400;line-height:1.4;margin-top:4px">${p.subtitle || "Project Subtitle"}</small></h3><span class="yr">${p.year}</span></div><p class="meta"><span>${SECTORS[p.type].name}</span><span>${p.location}</span></p></a>`;
        })
        .join("") || `<p class="empty">No projects in this sector yet.</p>`;
    startCardCycles(grid);
    fitCards(grid);
  };
  grid.addEventListener("click", (e) => {
    const a = e.target.closest("a.card");
    if (!a) return;
    try {
      sessionStorage.setItem(
        "lastSector",
        a.dataset.sector || currentSector || "all",
      );
    } catch (err) {}
  });
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    currentSector = b.dataset.t;
    try {
      sessionStorage.setItem("lastSector", currentSector);
    } catch (err) {}
    grid.dataset.swap = "1";
    draw();
    // Keep the sector in the URL so browser Back returns to this filter
    if (MODE === "hash") {
      const next = currentSector === "all" ? "projects" : currentSector;
      if (location.hash.slice(1) !== next)
        history.replaceState(null, "", "#" + next);
    } else {
      history.replaceState(
        null,
        "",
        currentSector === "all"
          ? "index.html#projects"
          : "?type=" + currentSector + "#projects",
      );
    }
  });
  draw();
}

/* ---------- Project page: write-up, then a dark gallery with floating images ---------- */
function projectHTML(i) {
  const p = PROJECTS[i],
    nx = PROJECTS[(i + 1) % PROJECTS.length],
    pv = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    S = [-0.07, 0.05, -0.1];
  let backSector = "all";
  try {
    backSector = sessionStorage.getItem("lastSector") || "all";
  } catch (err) {}
  if (backSector !== "all" && !SECTORS[backSector]) backSector = p.type;
  const backHref = backSector === "all" ? MU.projects() : MU.sector(backSector);
  const backLabel =
    backSector === "all"
      ? "All projects"
      : SECTORS[backSector]
        ? SECTORS[backSector].name
        : "Projects";
  const wu = (p.writeup || DEFAULT_WRITEUP).map((t) => `<p>${t}</p>`).join("");
  // Hillside keeps video; every other project cycles through all its images in the hero
  const heroInner =
    p.id === "hillside-house"
      ? media(
          p.images.hero,
          "Background picture",
          "16/9",
          "dark",
          "hero",
          p.id,
          auto(p.id, "hero"),
        )
      : `<div class="m hero-cycle">${multiMedia(p, "Background picture", "16/9", "hero")}</div>`;
  return `<section class="hero"><div class="bg">${heroInner}</div><div class="wrap"><p class="back-sector"><a href="${backHref}">← Back to ${backLabel}</a></p><h1>${p.name}<small class="project-subtitle" style="display:block;font-size:.65em;font-weight:400;line-height:1.4;margin-top:4px">${p.subtitle || "Project Subtitle"}</small></h1></div></section>
  <div class="wrap"><div class="intro"><div class="facts"><span>${SECTORS[p.type].name}</span><span>${p.location}</span><span>${p.year}</span></div><div class="wu"><p class="lead">${p.intro}</p>${wu}</div></div></div>
  <div class="zone"><div id="sentinel"></div>${PARTS.map(
    ([k, t, d, r, n], b) => {
      const imgs = (p.images?.[k] || []).filter(
        (src) => typeof src === "string" && src.trim() !== "",
      );

      if (!imgs.length) return "";
      return `<section class="block" id="${k}"><div class="wrap"><header><h2>${t}</h2><p>${d}</p></header><div class="fgal">${imgs
        .map((s, j) => {
          const f = (j + b) % 3;
          return `<figure class="fl f${f}" data-s="${S[f]}"><div class="fi">${media(s, `${t} ${j + 1}`, r, "", KIND[k], p.id + "-" + j, auto(p.id, AUTO[k] + "-" + (j + 1)))}</div><figcaption>${t} ${j + 1}</figcaption></figure>`;
        })
        .join("")}</div></div></section>`;
    },
  ).join("")}</div>
  <div class="wrap"><div class="pn"><a href="${backHref}">← ${backLabel}</a><a href="${MU.project(pv.id)}">Previous: ${pv.name}</a><a href="${MU.project(nx.id)}">Next: ${nx.name}</a></div></div>`;
}
/* Turns the page dark once the write-up has been read, and lets the images drift as you scroll. */
function initProjectFx() {
  const z = document.getElementById("sentinel");
  if (!z) return;
  const fl = [...document.querySelectorAll(".fl")],
    still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let busy = false;
  const run = () => {
    busy = false;
    const vh = innerHeight;
    document.body.classList.toggle(
      "is-dark",
      z.getBoundingClientRect().top < vh * 0.65,
    );
    if (!still)
      fl.forEach((f) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < -300 || r.top > vh + 300) return;
        f.firstElementChild.style.transform = `translate3d(0,${((r.top + r.height / 2 - vh / 2) * f.dataset.s).toFixed(1)}px,0)`;
      });
  };
  if (window._fx) removeEventListener("scroll", window._fx);
  window._fx = () => {
    if (!busy) {
      busy = true;
      requestAnimationFrame(run);
    }
  };
  addEventListener("scroll", window._fx, { passive: true });
  addEventListener("resize", window._fx);
  run();
  // Cycle all project images in the hero (non-video projects)
  startCardCycles(document.querySelector(".hero .bg"));
}

const isVideo = (s) => /\.(mp4|webm|ogg)(\?|$)/i.test(s || "");

const media = (
  src,
  label,
  ratio = "4/3",
  dark = "",
  kind = "",
  seed = "",
  pic = "",
) => {
  const fb = SAMPLE_ART && kind ? sampleArt(kind, seed) : "",
    u = src || (fb && pic) || fb;

  if (!u)
    return `<div class="${dark} ph" style="--r:${ratio}"><span>${label}</span></div>`;

  if (isVideo(u)) {
    return `<video
      src="${u}"
      autoplay
      muted
      loop
      playsinline
      aria-label="${label}"
      style="width:100%;height:auto;display:block;object-fit:cover"
    ></video>`;
  }

  return `<img
    src="${u}"
    ${u !== fb && fb ? `data-fb="${fb}"` : ""}
    alt="${label}"
    loading="lazy"
    style="width:100%;height:auto;display:block;object-fit:cover"
  >`;
};

const app = document.getElementById("app");
let current = "all";
const PARTS = [
  [
    "sketches",
    "Sketches",
    "Hand drawings and early concept studies.",
    "4/3",
    3,
  ],
  [
    "views3d",
    "3D views",
    "Rendered views of the design from outside and in.",
    "16/10",
    3,
  ],
  ["plans", "Plans", "Floor plans, sections and elevations.", "4/3", 3],
  [
    "construction",
    "Construction phase",
    "Site works from groundbreaking to structure.",
    "4/3",
    4,
  ],
  ["completion", "Completion phase", "The finished building.", "3/2", 3],
];
const gal = (t, r, n, cap) =>
  `<div class="gal">${Array.from({ length: n }, (_, j) => `<figure>${media("", `${t} ${j + 1}`, r, "", t === "Sketch" ? "sketch" : "construction", "home-" + (j + 1))}<figcaption>${cap || t} ${j + 1}</figcaption></figure>`).join("")}</div>`;
function home() {
  app.innerHTML = `<section class="hero home"><div class="bg" id="slides"></div><div class="wrap"></p><h1>I'm a professional architect with 3+ years of experience.</h1><p>I design homes, cultural spaces and places for communities, from the first sketch to the finished building.</p><div class="cta"><a href="#profile">Read my profile</a><a href="#projects">See my projects</a><a href="#profile-cv">My CV</a></div></div><a class="cap" id="cap" href="#"></a></section>
<section class="sec" id="projects"><div class="wrap"><div class="sh"><h2>Selected work</h2><p class="blurb" id="blurb"></p></div>
<div class="bar"><div class="filters" id="filters" role="group" aria-label="Filter by sector"></div><span class="count" id="count" aria-live="polite"></span></div>
<div class="grid" id="grid"></div></div></section>`;
  initSlides();
  initProjects();
}

function project(i) {
  app.innerHTML = projectHTML(i);
  initProjectFx();
}
function profile() {
  app.innerHTML = `<div class="wrap">
    <section class="prof" id="intro">
      <div class="prof-photo">
        <img src="Images/Profile_Image/PROFILEIMAGE.jpg" alt="ANYADIEGWU NZUBE VICTOR" style="width:100%;height:auto;display:block;object-fit:cover;aspect-ratio:4/5">
      </div>
      <div class="prof-copy">
        <p class="eyebrow">Profile</p>
        <h1>I'm a professional architect with 3+ years of experience.</h1>
        <p>Graduate architect with hands-on experience in architectural design development, site supervision, and project documentation. Skilled at translating design concepts into practical construction solutions, coordinating site activities, interpreting technical drawings, and monitoring quality and compliance.</p>
        <p>Proficient in ArchiCAD, AutoCAD, and Enscape, with practical knowledge of architectural detailing, building methods, materials, and site coordination.</p>
        <dl class="pfacts" id="facts">
          <dt>Experience</dt><dd>3+ years</dd>
          <dt>Focus</dt><dd>Residential, cultural and commercial design</dd>
          <dt>Based in</dt><dd>Awka, Anambra State</dd>
          <dt>Software</dt><dd>ArchiCAD, AutoCAD, Enscape</dd>
        </dl>
        <div class="plinks"><a href="#projects">See projects</a><a href="#contact">Get in touch</a><a href="#cv">Jump to CV</a></div>
      </div>
    </section>
    <section class="cv-page" id="cv">
      <div class="cv-heading">
        <div><p class="eyebrow">Experience & qualifications</p><h2 class="cv-title">Curriculum vitae</h2><p class="cv-intro">A concise overview of my professional experience, education, and technical skills.</p></div>
        <div class="cv-actions">
  <a href="Anyadiegwu_Victor_Nzube - CV.pdf" target="_blank" rel="noopener noreferrer" class="cv-btn solid">
    Download CV (PDF)
  </a>
</div>
      </div>
      <div class="cv-block cv-experience">
        <h3 class="cv-label">Professional experience</h3>
        <article class="cv-job">
          <div class="cv-job-h"><strong>Graduate Architect <span class="cv-specialty">— Architectural Design & Site Supervision</span></strong><span class="cv-date">Oct 2024 – Sep 2026</span></div>
          <p class="cv-org">Maxiplan Associates <span>·</span> Awka, Anambra State</p>
          <ul class="cv-points">
            <li>Produced 80+ technical drawing sheets and 3D Enscape models across 5+ residential, commercial, and mixed-use developments, maintaining 85% adherence to design specifications under senior supervision.</li>
            <li>Coordinated 11+ site artisans across earthworks, masonry, carpentry, and concrete casting, supporting 95% compliance with structural and architectural drawings.</li>
            <li>Completed 5+ site setting-outs, 4 staircase markings, and 4 slab-decking level checks, helping reduce alignment errors by 15%.</li>
          </ul>
        </article>
        <article class="cv-job">
          <div class="cv-job-h"><strong>Architectural Intern <span class="cv-specialty">— Site & Design</span></strong><span class="cv-date">Feb 2021 – Sep 2022</span></div>
          <p class="cv-org">Maxiplan Associates <span>·</span> Awka, Anambra State</p>
          <ul class="cv-points">
            <li>Contributed to 4 residential projects, including four- and five-bedroom bungalows, by preparing 25+ technical drawing sheets and 3D Enscape renders.</li>
            <li>Supported site artisans during foundation works and helped maintain compliance with technical specifications, improving task completion efficiency by 20%.</li>
            <li>Assisted with site setting-out, staircase marking, and decking-level inspections, checking dimensions against approved drawings.</li>
            <li>Supported project delivery from initial setting-out through roofing and interior/exterior finishing on projects reaching handover.</li>
          </ul>
        </article>
        <article class="cv-job">
          <div class="cv-job-h"><strong>Architectural Trainee <span class="cv-specialty">— Design & Site Support</span></strong><span class="cv-date">Oct 2019 – Feb 2020</span></div>
          <p class="cv-org">Hexicon Architectural Firm <span>·</span> Awka, Anambra State</p>
          <ul class="cv-points">
            <li>Developed practical skills in architectural working drawings using AutoCAD, ArchiCAD, and Enscape across 5+ projects, maintaining 95% compliance with company standards.</li>
            <li>Gained hands-on site experience by assisting senior architects with structural setting-out and directing 10+ site artisans, maintaining 85% drawing compliance on active construction sites.</li>
            <li>Tracked site material logs and submitted 40+ visual progress reports using photos and videos, reducing reporting delays by 20% and helping senior architects resolve site issues and make decisions faster.</li>
          </ul>
        </article>
      </div>
      <div class="cv-lower-grid">
        <div class="cv-block">
          <h3 class="cv-label">Education</h3>
          <article class="cv-education"><div class="cv-edu-top"><strong>Higher National Diploma (HND)</strong><span>2023–2025</span></div><p>Architectural Technology</p><p class="cv-org">Federal Polytechnic Oko, Anambra State</p></article>
          <article class="cv-education"><div class="cv-edu-top"><strong>National Diploma (ND)</strong><span>2018–2020</span></div><p>Architectural Technology</p><p class="cv-org">Federal Polytechnic Oko, Anambra State</p></article>
        </div>
        <div class="cv-block">
          <h3 class="cv-label">Technical skills</h3>
          <p class="cv-skill-caption">Design and documentation</p><div class="cv-skills"><span>AutoCAD</span><span>ArchiCAD</span><span>Enscape</span></div>
          <p class="cv-skill-caption">Practical experience</p><div class="cv-skills"><span>Technical drawings</span><span>3D visualisation</span><span>Site supervision</span><span>Setting-out</span><span>Construction detailing</span><span>Quality checks</span></div>
        </div>
      </div>
    </section>
  </div>`;
}

/* Builds the full-screen menu: a heading for each section with its links listed underneath. */
const MODE = "hash";
const PARTS_MENU = [
  ["sketches", "Sketches"],
  ["views3d", "3D views"],
  ["plans", "Plans"],
  ["construction", "Construction phase"],
  ["completion", "Completion phase"],
];
const MU =
  MODE === "hash"
    ? {
        profile: () => "#profile",
        profileSub: (a) => "#profile-" + a,
        projects: () => "#projects",
        sector: (k) => "#" + k,
        project: (id) => "#" + id,
        part: (id, k) => "#" + id + "." + k,
        about: () => "#about",
        aboutSub: (a) => "#about-" + a,
        sketches: () => "#sketches",
        works: () => "#site-works",
      }
    : {
        profile: () => "profile.html",
        profileSub: (a) => "profile.html#" + a,
        projects: () => "index.html#projects",
        sector: (k) => "index.html?type=" + k + "#projects",
        project: (id) => "project.html?id=" + id,
        part: (id, k) => "project.html?id=" + id + "#" + k,
        about: () => "about.html",
        aboutSub: (a) => "about.html#" + a,
        sketches: () => "index.html#sketches",
        works: () => "index.html#site-works",
      };
function renderMenu(proj, active) {
  const li = (h, t) => `<li><a href="${h}">${t}</a></li>`;
  const grp = (k, label, url, items) =>
    `<div class="mgroup"><a class="mh" href="${url}"${active === k ? ' aria-current="page"' : ""}>${label}</a><ul>${items}</ul></div>`;
  const here = proj
    ? grp(
        "here",
        proj.name,
        MU.project(proj.id),
        PARTS_MENU.map(([k, t]) => li(MU.part(proj.id, k), t)).join(""),
      )
    : "";
  const sectors = Object.entries(SECTORS)
    .map(([k, s]) => li(MU.sector(k), s.name))
    .join("");
  const desktopNav = document.getElementById("dnav");
  if (desktopNav)
    desktopNav.innerHTML = [
      [MU.projects(), "Projects"],
      [MU.profile(), "Profile"],
      ["#contact", "Contact"],
    ]
      .map(
        ([href, label]) =>
          `<a href="${href}"${label.toLowerCase() === active || (label === "Projects" && active === "projects") ? ' aria-current="page"' : ""}>${label}</a>`,
      )
      .join("");
  document.getElementById("menu").innerHTML =
    '<div class="cols2"><div class="mcol">' +
    here +
    grp("projects", "Projects", MU.projects(), sectors) +
    "</div>" +
    '<div class="mcol">' +
    grp(
      "profile",
      "Profile",
      MU.profile(),
      li(MU.profileSub("intro"), "Introduction") +
        li("#profile-cv", "Curriculum vitae") +
        li(MU.profileSub("facts"), "Details"),
    ) +
    grp(
      "contact",
      "Contact",
      "#contact",
      li("mailto:victoranyadiegwu@gmail.com", "Email") +
        li("tel:+2349074873170", "Phone") +
        li("#contact", "Address"),
    ) +
    '<p class="tag">Architect<br>3+ years of experience</p></div>';
}
if (MODE !== "hash") {
  const f = location.pathname.split("/").pop(),
    id = new URLSearchParams(location.search).get("id");
  renderMenu(
    f === "project.html" ? PROJECTS.find((p) => p.id === id) : null,
    f === "profile.html"
      ? "profile"
      : f === "about.html"
        ? "about"
        : "projects",
  );
}
function route() {
  document.body.classList.remove("is-dark");
  if (window._fx) removeEventListener("scroll", window._fx);
  const h = location.hash.slice(1),
    [base, sub] = h.split("."),
    i = PROJECTS.findIndex((p) => p.id === base);
  if (h === "contact") {
    if (!app.innerHTML) {
      home();
      renderMenu(null, "projects");
    }
    document.getElementById("contact").scrollIntoView();
    return;
  }
  let view = "projects",
    target = null,
    title = "Architecture";
  if (i >= 0) {
    try {
      if (!sessionStorage.getItem("lastSector"))
        sessionStorage.setItem("lastSector", PROJECTS[i].type);
    } catch (err) {}
    project(i);
    target = sub;
    title = PROJECTS[i].name;
  } else if (h === "cv" || h === "profile-cv" || h === "cv-download") {
    profile();
    view = "profile";
    target = "cv";
    title = "Profile";
    if (h === "cv-download") requestAnimationFrame(() => window.print());
  } else if (h === "about" || h.startsWith("about-")) {
    about();
    view = "about";
    target = h.slice(6);
    title = "About us";
  } else if (h === "profile" || h.startsWith("profile-")) {
    profile();
    view = "profile";
    target = h.slice(8) || "intro";
    title = "Profile";
  } else {
    if (SECTORS[h]) currentSector = h;
    else if (h === "projects" || !h) currentSector = "all";
    home();
    target = h === "sketches" || h === "site-works" ? h : h ? "projects" : null;
  }
  renderMenu(i >= 0 ? PROJECTS[i] : null, view);
  document.title = title + " \u2014 ANYADIEGWU NZUBE VICTOR";
  const el = target && document.getElementById(target);
  if (el)
    requestAnimationFrame(() =>
      el.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  else window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
route();
(function () {
  const b = document.getElementById("burger"),
    m = document.getElementById("menu"),
    s = document.getElementById("scrim");
  if (!b) return;
  const set = (o) => {
    document.body.classList.toggle("open", o);
    b.setAttribute("aria-expanded", o);
    b.setAttribute("aria-label", o ? "Close menu" : "Menu");
  };
  b.addEventListener("click", () =>
    set(!document.body.classList.contains("open")),
  );
  if (s) s.addEventListener("click", () => set(false));
  m.addEventListener("click", (e) => {
    if (e.target.closest("a")) set(false);
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") set(false);
  });
})();
