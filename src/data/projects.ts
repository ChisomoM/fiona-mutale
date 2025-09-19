export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "Mobile" | "Web" | "Backend" | "Design";
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "swiftcart",
    title: "SwiftCart",
    description: "A modern eCommerce mobile application built with Flutter and Firebase. Features include real-time inventory, secure payments, and push notifications for order updates.",
    tags: ["Flutter", "Firebase", "BLoC", "Payment Integration"],
    category: "Mobile",
    featured: true,
    links: {
      github: "https://github.com/ChisomoM/swiftcart",
      demo: "#"
    }
  },
  {
    id: "taskhive",
    title: "TaskHive",
    description: "Collaborative team task management platform with real-time updates, kanban boards, and analytics dashboard. Built for productivity and team coordination.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    category: "Web",
    featured: true,
    links: {
      github: "https://github.com/ChisomoM/taskhive",
      live: "https://taskhive-demo.vercel.app"
    }
  },
  {
    id: "insightdash",
    title: "InsightDash",
    description: "Advanced analytics dashboard for business intelligence with interactive charts, real-time data visualization, and customizable reporting features.",
    tags: ["Next.js", "Supabase", "Chart.js", "TypeScript"],
    category: "Web",
    featured: true,
    links: {
      github: "https://github.com/ChisomoM/insightdash",
      live: "https://insightdash-demo.vercel.app"
    }
  },
  {
    id: "lumoclip",
    title: "LumoClip",
    description: "High-performance media processing API built with Golang. Handles video transcoding, image optimization, and batch processing with queue management.",
    tags: ["Golang", "REST API", "FFmpeg", "Redis"],
    category: "Backend",
    links: {
      github: "https://github.com/ChisomoM/lumoclip"
    }
  },
  {
    id: "travelmate",
    title: "TravelMate",
    description: "Comprehensive trip planning mobile app with offline maps, expense tracking, itinerary management, and social sharing features.",
    tags: ["Flutter", "Firebase Firestore", "Maps API", "GetX"],
    category: "Mobile",
    links: {
      github: "https://github.com/ChisomoM/travelmate"
    }
  },
  {
    id: "pixelpress",
    title: "PixelPress",
    description: "Custom WordPress theme for creative agencies and portfolios. Features responsive design, custom post types, and advanced customization options.",
    tags: ["WordPress", "PHP", "SCSS", "JavaScript"],
    category: "Web",
    links: {
      github: "https://github.com/ChisomoM/pixelpress-theme",
      demo: "https://pixelpress-demo.com"
    }
  }
];
