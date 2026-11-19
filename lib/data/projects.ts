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
  team?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "trail-mind",
    title: "TrailMind",
    status: "In Development",
    kind: "AI Web App",
    summary: "An AI-powered trekking companion for Nepal.",
    stack: ["Next.js", "React", "Tailwind", "OpenAI", "Mapbox"],
    problem: "Trekkers lack real-time, AI-driven safety and route insights.",
    solution: "Built an interactive map with AI route summarization.",
    features: ["AI Chatbot", "Route Tracking", "Weather Alerts"],
    future: "Offline maps and community reviews.",
    images: ["/images/projects/trailmind-1.jpg"], // Add actual images later
    repo: siteConfig.socials.github,
    demo: "https://trailmind.pallavkafle.com.np",
    visible: true,
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    status: "Completed",
    kind: "Full Stack",
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
  },
  {
    slug: "shape-logic",
    title: "ShapeLogic",
    status: "Minor College Project",
    kind: "Android App",
    summary: "A multimodal Android app with sketch recognition.",
    stack: ["Android", "Decision Tree", "Generative Vision API"],
    problem: "Early childhood geometry learning lacks interactivity.",
    solution: "Multimodal Android app with sketch recognition.",
    features: ["Freehand sketch recognition", "Geometric categorization"],
    future: "Offline inference, adaptive learning, voice interaction.",
    images: ["/images/projects/shapelogic-1.jpg"],
    visible: true,
    team: "4 members",
    role: "Backend Development",
  },
  {
    slug: "task-sathi",
    title: "TaskSathi",
    status: "In Development",
    kind: "Productivity App",
    summary: "A task management tool with a native Nepali touch.",
    stack: ["React Native", "Firebase"],
    problem: "Generic task apps lack local context and language support.",
    solution: "Built a mobile-first task manager with localized reminders.",
    features: ["Task tracking", "Local notifications"],
    future: "Collaboration features.",
    images: ["/images/projects/tasksathi-1.jpg"],
    visible: true,
  },
  {
    slug: "client-brochure",
    title: "Client Brochure",
    status: "Hidden Slot",
    kind: "Freelance",
    summary: "A premium digital brochure for a local business.",
    stack: ["React", "Tailwind"],
    problem: "Client needed a fast digital presence.",
    solution: "Single-page animated brochure.",
    features: ["Smooth scrolling"],
    future: "Add CMS.",
    images: [],
    visible: false, // This hides the project from the UI
  }
];