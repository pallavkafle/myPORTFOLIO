export type JourneyItem = {
  id: string;
  type: "education" | "certificate";
  title: string;
  provider: string;
  date: string;
  description?: string;
  link?: string;
};

export const journeyItems: JourneyItem[] = [
  {
    id: "bachelor",
    type: "education",
    title: "B.E. Computer Engineering",
    provider: "Himalaya College of Engineering, TU",
    date: "2022 - Present",
    description: "Currently Enrolled. Focus: Full Stack Development + AI Engineering."
  },
  {
    id: "mern-cert",
    type: "certificate",
    title: "Professional MERN Stack Training",
    provider: "Broadway Infosys",
    date: "June - July 2025",
    description: "45 Hours. Comprehensive full-stack training.",
    link: "https://verify.broadwayinfosys.com"
  },
  {
    id: "gen-ai-cert",
    type: "certificate",
    title: "Generative AI & Large Language Models",
    provider: "Broadway Infosys",
    date: "Currently Pursuing",
    description: "Expected completion 2026."
  }
];