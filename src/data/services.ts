export interface Service {
  title: string;
  description: string;
  icon: string; // We'll use lucide-react icons
}

export const services: Service[] = [
  {
    title: "Mobile App Development",
    description: "Cross-platform apps using Flutter with state management.",
    icon: "Smartphone"
  },
  {
    title: "Web Development",
    description: "Front-end with React, Next.js, WordPress;",
    icon: "Globe"
  },
  {
    title: "Backend Development",
    description: "Scalable systems using Golang, Firebase, Node.js, REST APIs.",
    icon: "Server"
  },
  {
    title: "Database Management",
    description: "Handling PostgreSQL, SQLite, Firebase Firestore, Supabase, MongoDB.",
    icon: "Database"
  },
  {
    title: "Data Analysis",
    description: "Using Qlik Sense, Power BI for trend and pattern analysis.",
    icon: "BarChart3"
  },
  {
    title: "Graphic Design",
    description: "UI/UX designs with Figma, Adobe XD, Adobe Suite.",
    icon: "Palette"
  },
  {
    title: "Video Editing",
    description: "Using Adobe Premiere Pro, After Effects, CapCut.",
    icon: "Video"
  },
  {
    title: "Social Media Management",
    description: "Content strategy, audience growth, engagement, analytics.",
    icon: "Users"
  }
];
