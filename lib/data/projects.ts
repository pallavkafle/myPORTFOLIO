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
    status: "Final-year project",
    kind: "Android",
    summary: "Planning a trip in Nepal means juggling permits, routes, weather and budget. TrailMind does it in one place, taking your description and giving you a day-by-day plan with itemized budgets and safety reviews.",
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "FastAPI", "MongoDB", "Gemini"],
    problem: "Planning a trek in Nepal means juggling permits, distances, costs and safety information from many places.",
    solution: "Built an app that puts them in one place. The AI never decides numbers; routes, costs, and permits are computed by code. Gemini only writes the day titles and activities.",
    features: ["Trip understanding from free text", "Itinerary generation (A* + 2-opt)", "Transparent itemized budget", "Sentiment analysis on reviews"],
    future: "Expand destination coverage, improve offline capabilities.",
    images: [],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: true,
  },
  {
    slug: "task-sathi",
    title: "TaskSathi",
    status: "In development",
    kind: "Web",
    summary: "A task manager where you can just type a sentence and it makes the task. You can also ask questions about your workspace, and any change the AI proposes waits for your approval before it happens.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Express", "MongoDB", "Gemini"],
    problem: "Traditional task managers require manual organization and lack contextual AI assistance that is safe and reliable.",
    solution: "Built a web app with natural-language quick-add, RAG-powered workspace Q&A, and an approval-gated AI agent.",
    features: ["Natural-language quick-add", "Ask Sathi (RAG)", "Kanban & workspaces", "Agent with approval"],
    future: "Live demo and eval results will be added as they ship.",
    images: [],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: false,
  },
  {
    slug: "shape-logic",
    title: "ShapeLogic",
    status: "College project",
    kind: "Android",
    summary: "A mobile app that helps young children learn geometry by drawing shapes. It recognizes freehand sketches and sorts them into shapes. I built the backend, with a team of four.",
    stack: ["Kotlin", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    problem: "Early childhood geometry learning often relies on heavy, opaque ML models or single-mode drills.",
    solution: "Combines deterministic rule-based logic with selective Generative Vision AI inside a unified multimodal experience.",
    features: ["Free Draw Mode", "Learn Shapes Mode", "Learn Alphabets Mode", "Akinator Q&A Mode"],
    future: "Expand the Akinator knowledge base and add adaptive stroke tolerance.",
    images: [],
    repo: siteConfig.socials.github,
    visible: true,
    isMobile: true,
    team: "4 members",
    role: "Backend",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    status: "Earlier project",
    kind: "Web",
    summary: "A MERN expense tracker with login and charts. It's where TaskSathi started.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem: "",
    solution: "",
    features: [],
    future: "",
    images: [],
    repo: siteConfig.socials.github,
    visible: false, // Rendered separately as a compact line
    isMobile: false,
  }
];