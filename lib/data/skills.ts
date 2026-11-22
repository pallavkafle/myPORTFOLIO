export type SkillGroup = {
  category: string;
  items: { name: string; desc: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Web and APIs",
    items: [
      { name: "React", desc: "Component UI" },
      { name: "Next.js", desc: "TaskSathi frontend and this site" },
      { name: "TypeScript", desc: "App logic" },
      { name: "Tailwind", desc: "Styling" },
      { name: "shadcn/ui", desc: "Component library" },
      { name: "Node.js", desc: "TrailMind gateway" },
      { name: "Express", desc: "REST APIs" },
      { name: "REST", desc: "API design" },
      { name: "JWT", desc: "Auth" },
      { name: "Context API", desc: "State management" },
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Kotlin", desc: "TrailMind and ShapeLogic" },
      { name: "Jetpack Compose", desc: "Native Android UI" },
    ]
  },
  {
    category: "Applied AI",
    items: [
      { name: "Gemini API", desc: "Trip plans and Ask Sathi" },
      { name: "RAG", desc: "Workspace Q&A in TaskSathi" },
      { name: "DistilBERT", desc: "Review sentiment" },
      { name: "Decision tree", desc: "Akinator mode" },
      { name: "Vision API", desc: "Shape recognition" },
    ]
  },
  {
    category: "Backend and Data",
    items: [
      { name: "Python", desc: "AI services" },
      { name: "FastAPI", desc: "TrailMind AI services" },
      { name: "MongoDB", desc: "Data for all projects" },
      { name: "MongoDB Atlas", desc: "Vector search" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", desc: "Version control" },
      { name: "GitHub", desc: "Remote repositories" },
      { name: "Vercel", desc: "Deployment" },
    ]
  }
];