export type Certificate = {
  provider: string;
  title: string;
  meta: string;
  verify: string | null;
  completed: boolean;
};

export const certificates: Certificate[] = [
  {
    provider: "Broadway Infosys",
    title: "Professional MERN Stack Training",
    meta: "45 Hours | 11 June – 11 July 2025",
    verify: "verify.broadwayinfosys.com",
    completed: true
  },
  {
    provider: "Broadway Infosys",
    title: "Generative AI & Large Language Models",
    meta: "Currently Pursuing",
    verify: null,
    completed: false
  },
  // Add 3rd and 4th certificates here when ready
  // {
  //   provider: "Coursera",
  //   title: "Machine Learning",
  //   meta: "60 Hours | 2026",
  //   verify: "coursera.org/verify/123",
  //   completed: true
  // }
];