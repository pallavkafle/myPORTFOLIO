import { Atom, Zap, Hexagon, Terminal, Database, Triangle, Server, GitBranch, Code2, LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  category: string;
  Icon: LucideIcon;
  color: string;
  desc: string;
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend", Icon: Atom, color: "blue", desc: "Component-based UI with hooks, virtual DOM, and rich ecosystem for interactive web apps." },
  { name: "JavaScript", category: "Frontend", Icon: Zap, color: "yellow", desc: "ES6+, async/await, closures, and functional programming for dynamic web experiences." },
  { name: "Node.js", category: "Backend", Icon: Hexagon, color: "green", desc: "JavaScript runtime for fast, scalable server-side apps and RESTful APIs." },
  { name: "Python", category: "Backend", Icon: Terminal, color: "emerald", desc: "Scripting, data processing, web backends, and exploring AI/ML integrations." },
  { name: "MongoDB", category: "Database", Icon: Database, color: "green", desc: "NoSQL document database with flexible schemas for modern apps and rapid iteration." },
  { name: "Next.js", category: "Fullstack", Icon: Triangle, color: "purple", desc: "React framework with SSR, SSG, API routes, and file-based routing for production apps." },
  { name: "Express.js", category: "Backend", Icon: Server, color: "emerald", desc: "Minimal Node.js framework for building clean REST APIs and middleware chains." },
  { name: "Git", category: "Tools", Icon: GitBranch, color: "orange", desc: "Version control for tracking changes, branching strategies, and team collaboration." },
  { name: "HTML/CSS", category: "Frontend", Icon: Code2, color: "blue", desc: "Semantic markup and modern CSS including Flexbox, Grid, and animations." }
];