import { siteConfig } from "./site";

export type Project = {
  slug: string;
  title: string;
  status: string;
  kind: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  future: string;
  images: string[];
  repo?: string;
  demo?: string;
  visible: boolean;
  isMobile: boolean;
  team?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "trail-mind",
    title: "TrailMind",
    status: "Final-year Project",
    kind: "Android App",
    summary: "An Android app that plans trips in Nepal. Describe a trip in your own words, and it returns a day-by-day itinerary with an itemized budget, permits, routes, weather, and safety reviews.",
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "FastAPI", "MongoDB", "Gemini", "DistilBERT"],
    problem: "Planning a trek in Nepal means juggling permits, distances, costs and safety information from many places.",
    solution: "Built an app that puts them in one place. The AI never decides numbers; routes, costs, and permits are computed by code. Gemini only writes the day titles and activities, with a template fallback.",
    features: [
      "Trip understanding from free text",
      "Itinerary generation (A* + 2-opt)",
      "Transparent itemized budget",
      "Permit calculation with confidence levels",
      "Sentiment analysis on reviews",
      "Nearby hospitals/hotels/weather",
      "Offline caching (Room)"
    ],
    future: "Expand destination coverage, improve offline capabilities.",
    images: [
      "/images/projects/trailmind-1.jpg",
      "/images/projects/trailmind-2.jpg",
      "/images/projects/trailmind-3.jpg"
    ],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: true,
  },
  {
    slug: "task-sathi",
    title: "TaskSathi",
    status: "In Development",
    kind: "Web App",
    summary: "An AI-powered task management web app. Type a sentence to create a task, ask questions about your workspace, and approve AI-proposed changes.",
    stack: ["Next.js 16", "TypeScript", "Tailwind", "shadcn/ui", "Express 5", "MongoDB Atlas", "Gemini"],
    problem: "Traditional task managers require manual organization and lack contextual AI assistance that is safe and reliable.",
    solution: "Built a web app with natural-language quick-add, RAG-powered workspace Q&A, and an approval-gated AI agent. Strict validation ensures AI output is safe and verifiable.",
    features: [
      "Natural-language quick-add",
      "Ask Sathi (RAG)",
      "Kanban & workspaces",
      "AI subtask breakdown",
      "Agent with approval",
      "Evals and cost tracking"
    ],
    future: "Live demo, screenshots, and eval results will be added as they ship.",
    images: [
      "/images/projects/tasksathi-1.jpg"
    ],
    repo: siteConfig.socials.github,
    demo: "https://tasksathi.pallavkafle.com.np",
    visible: true,
    isMobile: false,
    role: "Full Stack AI Engineer",
  },
  {
    slug: "shape-logic",
    title: "ShapeLogic",
    status: "Completed",
    kind: "Android App",
    summary: "An Interactive Rule-Based Mobile System for Early Childhood Geometric and Categorical Learning.",
    stack: ["Kotlin", "Android Studio", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    problem: "Early childhood geometry and categorical learning often relies on heavy, opaque ML models or single-mode drills.",
    solution: "Combines deterministic rule-based logic (Bezier stroke validation, decision tree) with selective Generative Vision AI (cloud vision recognition) inside a unified multimodal experience.",
    features: [
      "Free Draw Mode (Vision AI)",
      "Learn Shapes Mode (Bezier scaffolds)",
      "Learn Alphabets Mode (A-Z stroke validation)",
      "Akinator Q&A Mode (Decision tree)",
      "Pre/post study evaluation"
    ],
    future: "Expand the Akinator knowledge base, add adaptive stroke tolerance thresholds, support offline fallbacks.",
    images: [
      "/images/projects/shapelogic-1.jpg",
      "/images/projects/shapelogic-2.jpg",
      "/images/projects/shapelogic-3.jpg"
    ],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: true,
    team: "4 members",
    role: "Backend Development",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    status: "Completed",
    kind: "Web App",
    summary: "A secure full-stack expense tool with auth and analytics.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Context API"],
    problem: "No simple full-stack expense tool with auth and analytics.",
    solution: "Built MERN app with secure auth and real-time dashboard.",
    features: [
      "Add/Edit/Delete/Search expenses",
      "Real-time balance",
      "Pie chart analytics",
      "Glassmorphism UI",
      "Toast notifications",
      "Responsive dashboard"
    ],
    future: "AI spending insights, budgeting, receipt scanning.",
    images: ["/images/projects/expense-1.jpg"],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: false,
  },
  {
    slug: "client-brochure",
    title: "Client Brochure",
    status: "Hidden Slot",
    kind: "Web App",
    summary: "A premium digital brochure for a local business.",
    stack: ["React", "Tailwind"],
    problem: "Client needed a fast digital presence.",
    solution: "Single-page animated brochure.",
    features: ["Smooth scrolling"],
    future: "Add CMS.",
    images: [],
    visible: false,
    isMobile: false,
  }
];