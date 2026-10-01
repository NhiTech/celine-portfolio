export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  color: "peach" | "blush" | "lavender" | "sky" | "butter";
};

export const experiences: Experience[] = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Software Engineering Intern, AI & Applied Solutions",
    location: "Herndon, Virginia",
    dates: "Sep 2026 – Dec 2026",
    color: "sky",
    bullets: [
      "Building the storage-and-retrieval system that serves AI-pre-generated lab orientation videos to millions of AWS Skill Builder learners, surfacing the right video before a learner starts a lab.",
      "Partnering with the SkillCast team to store generated orientation videos in a dedicated S3 bucket and video-to-lab associations in DynamoDB, powering fast lookup at lab-start time.",
      "Built an automated check that uses an LLM to score whether each generated video is relevant to its lab task, filtering out low-relevance content before it reaches learners.",
    ],
  },
  {
    company: "Cox Inc",
    role: "Software Engineer",
    location: "Atlanta, GA",
    dates: "May 2026 – Aug 2026",
    color: "blush",
    bullets: [
      "Built React features for Thrivalry, an AI-powered school-vs-school volunteering platform — opportunity map, event pages, live leaderboard, tournament bracket, and profile dashboard.",
      "Developed a Python service on Azure Functions that uses an AI model to group participants into balanced cohorts per event based on skills and interests.",
      "Automated Microsoft 365 passkey-rollout tracking across 4 tenants and a monthly ServiceNow reporting pipeline into Power BI, driving passkey adoption to 85%+.",
    ],
  },
  {
    company: "BridgeUp STEM Research, Georgia Tech",
    role: "Helen Fellow",
    location: "Atlanta, GA",
    dates: "Aug 2025 – Present",
    color: "butter",
    bullets: [
      "Co-designed and programmed interactive games in Python to teach generative AI concepts to K-12 youth with no prior CS background.",
      "Demoed tools live with students across community coding workshops, collecting real-time feedback to iterate on design and measure learning gains.",
      "Collaborated with educators to translate abstract AI/ML concepts into age-appropriate game mechanics.",
    ],
  },
  {
    company: "Rolls Royce",
    role: "Software Engineer Intern",
    location: "Indianapolis, IN",
    dates: "May 2025 – Aug 2025",
    color: "lavender",
    bullets: [
      "Engineered automated verification scripts and test harnesses in a Real-Time Simulation environment for the B-52 engine upgrade program.",
      "Developed 20+ verification bands to validate sensor accuracy across VRP and RTS environments.",
      "Optimized test execution pipelines using Jenkins CI within two-week Scrum sprints.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  dates: string;
  bullets: string[];
  link?: string;
  color: "peach" | "blush" | "lavender" | "sky" | "butter";
};

export const projects: Project[] = [
  {
    name: "InternNest",
    tagline: "Intern housing & community platform",
    dates: "January 2026 – Present",
    link: "https://internnest-web.pages.dev",
    color: "peach",
    bullets: [
      "Built a full-stack housing and community platform for relocating interns using Next.js 14, TypeScript, React 18, and Tailwind CSS, shipped as a PWA on Cloudflare Pages across 50+ commits.",
      "Supabase-backed auth (.edu verification), Postgres, and Storage power verified sublease listings, 8-city hubs, and neighborhood/transit guides.",
      "Validated demand through 50 customer-discovery interviews and 30 companies.",
    ],
  },
];

export const education = {
  school: "Georgia Institute of Technology",
  degree: "B.S. Computer Science",
  concentration: "Concentration: Media & People",
  location: "Atlanta, GA",
  dates: "Aug 2023 – December 2027 (Expected)",
};

export const contact = {
  email: "nvo42@gatech.edu",
  github: "https://github.com/NhiTech",
};
