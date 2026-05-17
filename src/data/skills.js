import { Database, TrendingUp, User } from "lucide-react";

export const skills = [
  {
    category: "Technical Mastery",
    icon: Database,
    items: [
      { name: "SQL & Database", level: 80 },
      { name: "Power BI & Tableau", level: 75 },
      { name: "Advanced Excel", level: 85 },
      { name: "Python for Data", level: 75 },
      { name: "R Language", level: 70 },
    ],
  },
  {
    category: "Business Acumen",
    icon: TrendingUp,
    items: [
      { name: "Data Analysis", level: 95 },
      { name: "Financial Reporting", level: 80 },
      { name: "Business Strategy", level: 85 },
      { name: "Market Research", level: 90 },
    ],
  },
  {
    category: "Professional Skills",
    icon: User,
    items: [
      { name: "Strategic Communication", level: 75 },
      { name: "Critical Thinking", level: 90 },
      { name: "Problem Solving", level: 90 },
      { name: "Agile Management", level: 85 },
    ],
  },
];
