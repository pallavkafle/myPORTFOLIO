export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Screens people see",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Jetpack Compose"]
  },
  {
    category: "What runs behind them",
    items: ["Node.js", "Express", "FastAPI", "Python", "REST", "JWT", "Postman"]
  },
  {
    category: "Where the AI lives",
    items: ["Gemini API", "RAG", "DistilBERT", "decision tree", "vision API"]
  },
  {
    category: "Where data sits",
    items: ["MongoDB", "MongoDB Atlas"]
  },
  {
    category: "How I work",
    items: ["Git", "GitHub", "Vercel"]
  }
];