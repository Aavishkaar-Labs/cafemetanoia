// Central site configuration and copy.
// Update the values in `site` (name, contact details, domain) before going live.

export const site = {
  brand: "Café Metanoia",
  // TODO: replace with the psychologist's full name.
  person: "Clinical Psychologist",
  jobTitle: "Clinical Psychologist",
  tagline: "A Space to Understand.",
  disciplines: "Clinical Psychology · Individual Therapy · Learning & Well-being",
  description:
    "Clinical psychologist offering individual therapy, mental health workshops & training, guest lectures, and internships in psychology. A space to pause, understand, and find your way forward.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cafemetanoia.com",
  // TODO: replace with real contact details.
  email: "hello@cafemetanoia.com",
  phone: "+91 81309 36991",
  // WhatsApp number in international format, digits only (used for wa.me links).
  whatsapp: "918130936991",
  location: "India · Online & in person",
  locale: "en_IN",
  keywords: [
    "clinical psychologist",
    "psychologist in India",
    "online therapy",
    "individual therapy",
    "counselling",
    "anxiety therapy",
    "mental health workshops",
    "faculty sensitisation",
    "gatekeeper training",
    "psychology internships",
    "mental health guest lecture",
    "IIT Roorkee psychologist",
  ],
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services/individual-therapy", label: "Therapy" },
  { href: "/services/workshops-training", label: "Workshops" },
  { href: "/services/guest-lectures", label: "Speaking" },
  { href: "/services/internships", label: "Learning" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  intro: string;
  points: string[];
  listHeading: string;
  image: { src: string; alt: string };
  audience: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    shortTitle: "Individual Therapy",
    kicker: "One-to-one support",
    summary:
      "A space for you to explore emotional difficulties, understand recurring patterns, and work towards meaningful change.",
    intro:
      "Therapy sessions bring together clinical understanding, evidence-based therapeutic practices, and a compassionate appreciation of your unique experiences, so that we can make sense of what you are going through and work alongside each other towards change.",
    listHeading: "Areas I can support you with",
    points: [
      "Anxiety, low mood, and emotional distress",
      "Relationship and interpersonal concerns",
      "Life transitions, identity, and adjustment",
      "Stress, grief, and challenging life experiences",
      "Personal growth and emotional well-being",
    ],
    image: {
      src: "/images/therapy-space.jpg",
      alt: "A calm, sunlit therapy room with a soft armchair and a plant",
    },
    audience: "Adolescents, young adults, and adults",
    metaTitle: "Individual Therapy with a Clinical Psychologist",
    metaDescription:
      "Individual therapy for anxiety, low mood, relationship concerns, life transitions, stress and grief, with a clinical psychologist using evidence-based, compassionate practice.",
  },
  {
    slug: "workshops-training",
    title: "Workshops & Training",
    shortTitle: "Workshops & Training",
    kicker: "Building skills. Changing perspectives.",
    summary:
      "Interactive, evidence-informed learning experiences for educational institutions, organisations, and professional groups.",
    intro:
      "Drawing on experience designing life-skills programmes and faculty sensitisation initiatives in higher education, these workshops help communities become more psychologically informed and better prepared to support one another.",
    listHeading: "Workshop themes",
    points: [
      "Life skills and emotional regulation",
      "Mental health literacy and early identification",
      "Faculty sensitisation and student support",
      "Gatekeeper training and psychological first response",
      "Mental health awareness, inclusion, and stigma reduction",
    ],
    image: {
      src: "/images/workshops.jpg",
      alt: "A facilitator leading an interactive mental health workshop around a conference table",
    },
    audience: "Educational institutions, organisations, and professional groups",
    metaTitle: "Mental Health Workshops & Training for Institutions",
    metaDescription:
      "Evidence-informed mental health workshops: life skills, emotional regulation, mental health literacy, faculty sensitisation, gatekeeper training and stigma reduction.",
  },
  {
    slug: "guest-lectures",
    title: "Guest Lectures & Speaking",
    shortTitle: "Guest Lectures",
    kicker: "Bringing mental health into conversation.",
    summary:
      "Thoughtful, research-informed talks and panel discussions that connect psychological knowledge with the realities of everyday life.",
    intro:
      "Talks and panels are shaped around your audience, whether students, faculty, professionals, or the wider community, and grounded in clinical experience across hospitals, public mental health, and higher education.",
    listHeading: "Speaking topics",
    points: [
      "Mental health in higher education",
      "Youth, identity, and life transitions",
      "Addiction, recovery, and psychosocial well-being",
      "Psychological safety and inclusive communities",
      "Mental health systems and institutional responsibility",
    ],
    image: {
      src: "/images/guest-lectures.jpg",
      alt: "A speaker addressing an audience in a university lecture hall",
    },
    audience: "Universities, conferences, organisations, and community events",
    metaTitle: "Guest Lectures & Mental Health Speaking",
    metaDescription:
      "Research-informed guest lectures and panel talks on mental health in higher education, youth and identity, addiction and recovery, and psychological safety.",
  },
  {
    slug: "internships",
    title: "Internships & Learning Opportunities",
    shortTitle: "Internships & Learning",
    kicker: "Learn. Practise. Grow.",
    summary:
      "Opportunities for aspiring psychologists and students to deepen their understanding of clinical practice, psychological research, mental health advocacy, and community-based interventions.",
    intro:
      "For students and early-career professionals who want to see how psychology works in real settings, and to build the skills, reflection, and ethical grounding the field requires.",
    listHeading: "What you can explore",
    points: [
      "Clinical practice and psychological assessment",
      "Psychological research",
      "Mental health advocacy",
      "Community-based interventions",
    ],
    image: {
      src: "/images/learning.jpg",
      alt: "A psychology student reading and taking notes in a library",
    },
    audience: "Psychology students and aspiring psychologists",
    metaTitle: "Psychology Internships & Learning Opportunities",
    metaDescription:
      "Internships and learning opportunities for psychology students in clinical practice, psychological research, mental health advocacy and community-based interventions.",
  },
];

export const journey = [
  {
    step: "01",
    label: "Clinical Practice",
    title: "Psychiatric Care & Addiction Recovery",
    body: "Experience in psychological assessment, clinical diagnosis, and therapeutic intervention for psychiatric disorders and substance-use concerns in hospital settings.",
  },
  {
    step: "02",
    label: "Public Mental Health",
    title: "Inclusive & Community-Based Care",
    body: "Work with children and underserved populations in a government mental health setting, broadening my understanding of psychological needs across diverse social contexts.",
  },
  {
    step: "03",
    label: "Higher Education",
    title: "Youth Well-being & Institutional Mental Health",
    body: "Work at IIT Roorkee supporting adolescents and young adults while contributing to life-skills education, faculty sensitisation, and institutional mental health initiatives.",
  },
];

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
