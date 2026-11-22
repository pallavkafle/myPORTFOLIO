import { siteConfig } from "./site";

export type ProjectFeature = {
  name: string;
  what: string;
  how: string;
  status: "Done" | "In progress" | "Planned";
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  status: string;
  summary: string;
  stack: string[];
  features: ProjectFeature[];
  problem: string;
  myPart: string;
  learned: string;
  behaves: { codeVsAi: string; failure: string; tradeoff: string };
  limits: string[];
  credits?: string;
  images: string[];
  repo?: string;
  liveDemo?: string;
  skillsUsed: string[];
  visible: boolean;
};

export const projects: Project[] = [
  {
    slug: "trail-mind",
    title: "TrailMind",
    type: "Mobile app",
    status: "Final-year project",
    summary: "Planning a trek in Nepal means juggling permits, distances, costs and safety information. TrailMind puts it in one app. Describe your trip in your own words and it builds a day-by-day plan with an itemized budget, permits, weather and safety reviews.",
    stack: ["Kotlin", "Jetpack Compose", "Node.js", "FastAPI", "MongoDB", "Gemini"],
    features: [
      { name: "Trip understanding", what: "Rule-based reader, Gemini fills gaps", how: "Code checks against 27 destinations", status: "Done" },
      { name: "Itinerary", what: "Route order by nearest-neighbour + 2-opt", how: "A* graph", status: "Done" },
      { name: "Budget", what: "Itemized formula", how: "Cross-checked by Random Forest", status: "Done" },
      { name: "Permits", what: "Researched fees", how: "Shared permits counted once", status: "Done" },
      { name: "Reviews", what: "DistilBERT sentiment", how: "Keyword rules with negation", status: "Done" },
      { name: "Around you", what: "Hospitals, hotels, weather", how: "Offline-cached map", status: "Done" }
    ],
    problem: "Planning a trek in Nepal means juggling permits, distances, costs and safety information from many places.",
    myPart: "I built the backend and handled deployment, and worked on some of the app screens.",
    learned: "The hardest part was finding usable data. The app is only as good as what it's built on.",
    behaves: {
      codeVsAi: "Code computes routes and costs and Gemini writes only titles and activities.",
      failure: "On failure there is a hard Gemini deadline, then a template plan, an offline cache.",
      tradeoff: "Gradient Boosting scored lower error than the chosen Random Forest."
    },
    limits: ["Permit fees can change", "OpenStreetMap data can be incomplete", "Android only", "27 destinations"],
    images: [],
    repo: "",
    liveDemo: "",
    skillsUsed: ["Kotlin", "Jetpack Compose", "Node.js", "FastAPI", "MongoDB", "Gemini API"],
    visible: true
  },
  {
    slug: "task-sathi",
    title: "TaskSathi",
    type: "Web app",
    status: "In development",
    summary: "A task manager with AI built in. Type 'submit report Friday, high priority' and it becomes a task you confirm. You can ask questions about your own tasks, and any change the AI proposes waits for your approval.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Express", "MongoDB", "Gemini"],
    features: [
      { name: "Auth", what: "Rotating refresh tokens", how: "Argon2id, JWT", status: "In progress" },
      { name: "Quick-add", what: "Natural-language task creation", how: "Zod validation", status: "Planned" },
      { name: "Ask Sathi", what: "Workspace Q&A", how: "RAG with Atlas Vector Search", status: "Planned" },
      { name: "Kanban", what: "Touch-friendly board", how: "dnd-kit", status: "Planned" },
      { name: "Approval agent", what: "AI proposes, you approve", how: "Snapshot + re-check role", status: "Planned" }
    ],
    problem: "Traditional task managers require manual organization and lack contextual AI assistance that is safe and reliable.",
    myPart: "I am building this entire project solo.",
    learned: "Making AI wait for human approval is the key to building trust.",
    behaves: {
      codeVsAi: "The model proposes and you approve before anything is written.",
      failure: "Invalid output is retried once, then a pre-filled form opens.",
      tradeoff: "Runs on a free-tier model, so the demo uses synthetic data."
    },
    limits: ["Free-tier API limits", "No mobile client yet"],
    images: [],
    repo: "",
    liveDemo: "",
    skillsUsed: ["Next.js", "TypeScript", "Tailwind", "Express", "MongoDB", "Gemini API", "RAG"],
    visible: true
  },
  {
    slug: "shape-logic",
    title: "ShapeLogic",
    type: "Mobile app",
    status: "College project",
    summary: "An Android app for children aged 4 to 7 that teaches shapes, letters and animals. Kids trace shapes along dotted guides, draw freely and get a guess from Gemini, or play a 20-questions-style animal game.",
    stack: ["Kotlin", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    features: [
      { name: "Free draw", what: "Canvas to Gemini", how: "Base64 PNG via HTTP", status: "Done" },
      { name: "Learn shapes", what: "10 shapes, 3 rounds", how: "Bezier guides", status: "Done" },
      { name: "Learn alphabets", what: "A-Z stroke validation", how: "Bezier curves", status: "Done" },
      { name: "Animal guessing", what: "78 animals", how: "Decision tree, 35 attributes", status: "Done" }
    ],
    problem: "Early childhood geometry learning often relies on heavy, opaque ML models or single-mode drills.",
    myPart: "I built the backend (Node.js, Express, MongoDB).",
    learned: "In a small pre/post test with 34 children, shape-drawing accuracy rose significantly.",
    behaves: {
      codeVsAi: "The decision tree and stroke validation are deterministic.",
      failure: "Gemini is used only in Free Draw, knowledge base is fixed.",
      tradeoff: "No offline fallback for the vision API."
    },
    limits: ["Android only", "Fixed 78 animals", "Needs internet for Free Draw"],
    credits: "With Abinash Bista, Prasanna Sagar Regmi and Shreyash Dhungana. Supervisor: Er. Sushant Pandey.",
    images: [],
    repo: "",
    liveDemo: "",
    skillsUsed: ["Kotlin", "Node.js", "Express", "MongoDB", "Gemini API"],
    visible: true
  },
  {
    slug: "brochure",
    title: "Client Brochure",
    type: "Web app",
    status: "Hidden",
    summary: "",
    stack: [],
    features: [],
    problem: "",
    myPart: "",
    learned: "",
    behaves: { codeVsAi: "", failure: "", tradeoff: "" },
    limits: [],
    images: [],
    skillsUsed: [],
    visible: false
  }
];