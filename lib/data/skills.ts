import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiKotlin, 
  SiPython, SiFastapi, SiGit, SiGoogle 
} from "react-icons/si";

export type Skill = {
  name: string;
  category: string; Icon: IconType;
  desc: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", Icon: SiReact, desc: "Component-based UI with hooks, virtual DOM, and rich ecosystem for interactive web apps." },
  { name: "Next.js", category: "Fullstack", Icon: SiNextdotjs, desc: "React framework with SSR, SSG, API routes, and file-based routing for production apps." },
  { name: "TypeScript", category: "Frontend", Icon: SiTypescript, desc: "Strongly typed JavaScript for safer, more maintainable codebases at scale." },
  { name: "Tailwind", category: "Frontend", Icon: SiTailwindcss, desc: "Utility-first CSS framework for rapid UI development and consistent design systems." },
  
  // Backend
  { name: "Node.js", category: "Backend", Icon: SiNodedotjs, desc: "JavaScript runtime for fast, scalable server-side apps and RESTful APIs." },
  { name: "Express.js", category: "Backend", Icon: SiExpress, desc: "Minimal Node.js framework for building clean REST APIs and middleware chains." },
  { name: "Python", category: "Backend", Icon: SiPython, desc: "Scripting, data processing, and web backends. Used for ML and AI integrations." },
  { name: "FastAPI", category: "Backend", Icon: SiFastapi, desc: "High-performance Python framework for building ML services and async APIs." },

  // Mobile & Database
  { name: "Kotlin", category: "Mobile", Icon: SiKotlin, desc: "Modern language for Android development. Used with Jetpack Compose for native apps." },
  { name: "MongoDB", category: "Database", Icon: SiMongodb, desc: "NoSQL document database with flexible schemas for modern apps and rapid iteration." },
  
  // Tools & AI
  { name: "Gemini AI", category: "AI", Icon: SiGoogle, desc: "Integration of Google Gemini for generative vision, text, and multimodal AI features." },
  { name: "Git", category: "Tools", Icon: SiGit, desc: "Version control for tracking changes, branching strategies, and team collaboration." },
];