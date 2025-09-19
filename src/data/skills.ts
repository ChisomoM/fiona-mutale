export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  technical: {
    [key: string]: string[];
  };
  soft: string[];
}

export const skills: SkillsData = {
  technical: {
    mobileAppDevelopment: ["Flutter", "BLoC State Management", "GetX State Management"],
    webDevelopment: ["React", "Next.js", "WordPress"],
    backendDevelopment: ["Golang", "Firebase", "Node.js", "REST APIs"],
    databaseManagement: ["PostgreSQL", "SQLite", "Firebase Firestore", "Supabase", "MongoDB"],
    dataAnalysis: ["Qlik Sense", "Power BI", "Trend and pattern analysis"],
    graphicDesign: ["UI/UX with Figma", "Adobe XD", "Adobe Suite"],
    videoEditing: ["Adobe Premiere Pro", "After Effects", "CapCut"],
    socialMediaManagement: ["Content strategy and planning", "Audience growth and engagement", "Analytics and performance tracking"]
  },
  soft: [
    "Leadership and team-management",
    "Creative Problem Solving",
    "Collaboration",
    "Adaptability",
    "Resilience",
    "Analytical thinking",
    "Stakeholder engagement"
  ]
};

// Keep the old exports for backward compatibility
export const technicalSkills: SkillCategory[] = [
  {
    name: "Mobile App Development",
    skills: ["Flutter", "BLoC State Management", "GetX State Management"]
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "WordPress"]
  },
  {
    name: "Backend Development",
    skills: ["Golang", "Firebase", "Node.js", "REST APIs"]
  },
  {
    name: "Database Management",
    skills: ["PostgreSQL", "SQLite", "Firebase Firestore", "Supabase", "MongoDB"]
  },
  {
    name: "Data Analysis",
    skills: ["Qlik Sense", "Power BI", "Trend and pattern analysis"]
  },
  {
    name: "Graphic Design",
    skills: ["UI/UX with Figma", "Adobe XD", "Adobe Suite"]
  },
  {
    name: "Video Editing",
    skills: ["Adobe Premiere Pro", "After Effects", "CapCut"]
  },
  {
    name: "Social Media Management",
    skills: ["Content strategy and planning", "Audience growth and engagement", "Analytics and performance tracking"]
  }
];

export const softSkills: string[] = [
  "Leadership and team-management",
  "Creative Problem Solving",
  "Collaboration",
  "Adaptability",
  "Resilience",
  "Analytical thinking",
  "Stakeholder engagement"
];
