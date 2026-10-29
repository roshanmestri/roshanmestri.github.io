// All text on the site lives here, so edits don't require touching components.

export const profile = {
  name: "Roshan Mestri",
  role: "Senior Front-End Engineer",
  company: "FynTune",
  headline: ["Interfaces for 9M+ people.", "Full-stack apps of my own."],
  intro:
    "I'm Roshan. For 4+ years I've turned complicated business rules into web and mobile apps that feel simple, in React and React Native. At FynTune I plan, design and ship large parts of an insurance platform. On my own time, I build full-stack products end to end.",
  email: "roshanmestri1999@gmail.com",
  github: "https://github.com/roshanmestri",
  linkedin: "https://www.linkedin.com/in/roshan-mestri-256b19134/",
  // Replace public/resume.pdf with the updated resume when it's ready.
  resume: "/resume.pdf",
  siteUrl: "https://roshanmestri.github.io",
};

export const stats = [
  { value: "9M+", label: "people on the platform I work on" },
  { value: "12", label: "insurance organizations served" },
  { value: "100K+", label: "daily active users on my portal" },
  { value: "20+", label: "feature modules I've shipped" },
];

export const gathr = {
  name: "Gathr",
  tagline: "Find people nearby for football, treks or a jam session, then actually meet them.",
  summary:
    "My day job is the frontend. Gathr is where I went past it: I designed the database, wrote the server logic, set up auth, tests and CI, and deployed it to production myself.",
  live: "https://gathr-meetup.vercel.app",
  repo: "https://github.com/roshanmestri/People-Pulse-Web",
  screens: {
    home: { src: "/gathr/home.jpg", width: 1600, height: 1000, path: "/", caption: "Home: what's on near you tonight" },
    mobile: { src: "/gathr/mobile.jpg", width: 600, height: 1298, caption: "Built mobile-first" },
    more: [
      { src: "/gathr/explore.jpg", width: 1600, height: 722, path: "/explore", caption: "Explore: 18 categories, time and distance filters, nearest first" },
      { src: "/gathr/about.jpg", width: 1600, height: 800, path: "/about", caption: "About: the problem Gathr solves" },
    ],
  },
  flow: [
    { step: "Host", text: "Post a plan with a place, a time and how many people you need." },
    { step: "Join", text: "People nearby find it on a map or list and ask to join." },
    { step: "Meet", text: "Once you're in, a group chat opens to sort out the details." },
  ],
  problems: [
    {
      title: "Closest plans first",
      text: "Explore runs PostGIS radius queries sorted by real distance, so the first result is the one you can actually walk to.",
    },
    {
      title: "No overbooking",
      text: "Joining checks capacity inside a database transaction. If two people tap Join for the last spot at once, only one gets it, and tests prove it.",
    },
    {
      title: "Location privacy",
      text: "The exact venue never reaches the browser until the host approves you. Everyone else sees only the rough area.",
    },
    {
      title: "Safety tools",
      text: "Report, block, an admin review queue and a profanity filter, because meeting strangers needs more than a Join button.",
    },
    {
      title: "Photos within serverless limits",
      text: "Images are resized in the browser before upload, so phone photos fit under the platform's request size limit.",
    },
    {
      title: "Links that preview well",
      text: "Every plan gets its own generated preview image, so a link shared on WhatsApp shows what the plan is.",
    },
  ],
  quality: [
    { value: "69", label: "unit tests" },
    { value: "17", label: "end-to-end browser tests" },
    { value: "AA", label: "WCAG 2.1, checked with axe" },
    { value: "90+", label: "Lighthouse scores" },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "PostgreSQL",
    "PostGIS",
    "Prisma",
    "Better Auth",
    "Zod",
    "Leaflet",
    "Vitest",
    "Playwright",
    "Vercel",
    "Neon",
    "GitHub Actions",
  ],
};

export const fyntune = {
  company: "FynTune Solutions",
  short: "Employee-benefits InsurTech",
  period: "Feb 2023 – Present",
  tenure: "3+ yrs",
  story:
    "I joined FynTune two years into building its employee-benefits platform, now used by 9M+ people across 12 insurance organizations. I started by shipping modules. Today I carry much of the frontend lead's scope: planning the work, designing how it's built, getting it released and keeping it healthy in production.",
  pillars: [
    {
      title: "Ownership",
      lead: "The lead-level work I do every sprint.",
      points: [
        "Plan sprints and write the technical design before code starts: how a feature splits into tasks, what it touches and the risks.",
        "Own releases to web, Google Play and the App Store, and handle production support when something breaks.",
      ],
    },
    {
      title: "Platform",
      lead: "Changes that touched the whole codebase.",
      points: [
        "Moved the build from Create React App to Vite, including config, environment handling and build scripts.",
        "Upgraded React 16 to 18, along with dependencies and React Router.",
        "Split the broker and insurer apps into separate repositories so each ships on its own schedule.",
        "Extended the configuration-driven setup that lets new brokers and insurers come on board without custom code.",
      ],
    },
    {
      title: "Product",
      lead: "The journeys I've built and look after.",
      points: [
        "Claims, from submission to E-Cashless journeys.",
        "Enrollment and policy administration.",
        "Wellness and the Health Library.",
        "React Native apps that bring the portal to Android and iOS.",
      ],
    },
  ],
  roles: [
    {
      title: "Senior Front-End Engineer",
      period: "Feb 2025 – Present",
      current: true,
      summary: "Took on planning, technical design and releases, and drove platform upgrades across the codebase.",
      highlights: [
        { value: "4", label: "platform-wide upgrades" },
        { value: "2", label: "app stores I release to" },
        { value: "12", label: "organizations on the platform" },
      ],
    },
    {
      title: "Front-End Engineer",
      period: "Feb 2023 – Jan 2025",
      current: false,
      summary:
        "Built the portal's core journeys, including claim submission, the Health Library and navigation, and took them to mobile with React Native.",
      highlights: [
        { value: "20+", label: "feature modules shipped" },
        { value: "100K+", label: "daily active users" },
        { value: "20%", label: "less state-transfer delay" },
      ],
    },
  ],
  stack: ["React", "React Native", "TypeScript", "JavaScript", "Vite", "React Router", "Play Console", "App Store Connect"],
};

export const earlierRoles = [
  {
    company: "Mirats Insights",
    title: "SDE Intern",
    period: "Nov 2022 – Jan 2023",
    text: "Built real-time chat for the internal employee portal and deployed two apps on AWS.",
    stack: ["Node.js", "React", "MongoDB", "Socket.io", "AWS"],
  },
  {
    company: "Copia Consultancy Services",
    title: "Front-End Developer",
    period: "Apr 2022 – Sep 2022",
    text: "Built 30+ responsive pages for a client web application.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export const skills = [
  {
    group: "Every day",
    items: ["React", "TypeScript", "JavaScript", "React Native", "HTML", "CSS"],
  },
  {
    group: "Shipped to production in Gathr",
    items: ["Next.js", "PostgreSQL", "PostGIS", "Prisma", "Tailwind CSS", "Playwright", "Vitest", "Vercel", "GitHub Actions"],
  },
  {
    group: "Used in earlier work",
    items: ["Node.js", "Express", "MongoDB", "Socket.io", "AWS", "Git"],
  },
];

export const extras = [
  {
    title: "B.Sc., Mumbai University",
    period: "2018 – 2021",
    text: "Bachelor of Science.",
  },
  {
    title: "Teaching assistant, Coding Ninjas",
    period: "",
    text: "Helped students get unstuck on Java and data structures & algorithms.",
  },
  {
    title: "Social media app",
    period: "2022",
    text: "Posts, comments and friend requests, with JWT auth on Node and Express and data in MongoDB.",
  },
];
