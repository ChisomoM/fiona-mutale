import type { Service } from "../lib/types";


interface Experience {
  role: string;
  company: string;
  companySubtitle: string;
  dates: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

interface Education {
  degree: string;
  field: string;
  institution: string;
  dates: string;
}

interface Skills {
  core: string[];
  technical: string[];
  business: string[];
}



interface SiteData {
  name: string;
  title: string;
  initials: string;
  email: string;
  phone: string;
  location: string;
  cvPath: string;
  profile: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  certifications: string[];
  services: Service[];
  social: {
    linkedin: string;
    email: string;
  };
}

export const siteData: SiteData = {
  name: "Fiona Mwansa Mutale",
  title: "Finance & Accounting Automation Consultant",
  initials: "FM",
  email: "fmutale@gmail.com",
  phone: "",
  location: "London Area, England",
  cvPath: "",
  
  profile: `A proactive NetSuite professional specializing in finance automation and system optimization. I excel in NetSuite's core accounting functionality—from account configuration and data migration to testing and user adoption.

With over a decade of experience across media, retail, and IT, I bring deep expertise in financial analysis, budgeting & forecasting, and automated reporting. I work closely with C-level stakeholders to drive system growth, combining technical knowledge with strong interpersonal skills and a collaborative approach.

Passionate about continuous improvement and agile methodologies, I help organizations streamline their finance operations for maximum efficiency.`,

  experience: [
    {
      role: "Finance & Accounting Automation Consultant",
      company: "BlueBridge One",
      companySubtitle: "EMEA Solution Provider of the Year 2021 | NetSuite Partner since 2003",
      dates: "Jun 2022 - Present",
      duration: "3 yrs 4 mos",
      location: "London, England",
      description: "Leading finance automation projects and NetSuite implementations for enterprise clients.",
      skills: ["BlackLine", "NetSuite Implementation", "Finance Automation"]
    },
    {
      role: "NetSuite Expert",
      company: "Beauty Pie Ltd",
      companySubtitle: "",
      dates: "Sep 2021 - Jun 2022",
      duration: "10 mos",
      location: "London, England",
      description: "Specialized in NetSuite optimization and finance system improvements for beauty industry leader.",
      skills: ["NetSuite", "System Optimization"]
    },
    {
      role: "Systems & Project Manager (Finance NetSuite)",
      company: "Leading Global Blockchain Company",
      companySubtitle: "",
      dates: "Nov 2020 - Jun 2021",
      duration: "8 mos",
      location: "London, England",
      description: "Optimized finance processes in NetSuite for cutting-edge blockchain technology company.",
      skills: ["NetSuite", "Process Optimization", "Project Management"]
    },
    {
      role: "NetSuite Pre-Sales Consultant",
      company: "BlueBridge One",
      companySubtitle: "5* Oracle NetSuite Partner | Selling & Implementing NetSuite since 2003",
      dates: "Oct 2019 - Oct 2020",
      duration: "1 yr 1 mo",
      location: "London, England",
      description: "Provided pre-sales consulting and technical expertise for NetSuite implementations.",
      skills: ["Pre-Sales Consulting", "NetSuite", "Client Relations"]
    },
    {
      role: "Finance Systems Analyst",
      company: "Pret A Manger",
      companySubtitle: "",
      dates: "Jul 2017 - Jun 2019",
      duration: "2 yrs",
      location: "London, England",
      description: "Managed all finance business processes and NetSuite administration. Led SOX compliance, automated reporting, and coordinated system updates. Implemented knowledge management system for 40-strong finance team.",
      skills: ["BlackLine", "NetSuite OneWorld", "SOX Compliance", "Automation"]
    },
    {
      role: "Business Performance Analyst",
      company: "BBC Design & Engineering",
      companySubtitle: "(formerly BBC Digital)",
      dates: "May 2015 - Dec 2016",
      duration: "1 yr 8 mos",
      location: "London, England",
      description: "Managed budget vs. actual analysis and performance reporting for COO. Re-engineered Monthly Performance Board Pack and executed Annual Product Portfolio reviews.",
      skills: ["Financial Analysis", "Performance Management", "Reporting"]
    },
    {
      role: "Information Analyst, Embedded Finance",
      company: "BBC Radio",
      companySubtitle: "",
      dates: "Jun 2010 - May 2015",
      duration: "5 yrs",
      location: "London, England",
      description: "Developed comprehensive reporting systems for BBC Radio scheduling and finance. Led supplier review projects and improved compliance reporting. Managed costs in SAP Financials and provided figures for BBC Annual Report.",
      skills: ["SAP Financials", "Compliance Reporting", "Data Analysis"]
    }
  ],

  education: [
    {
      degree: "Bachelor's degree",
      field: "Accounting and Finance",
      institution: "University of Greenwich",
      dates: ""
    },
    {
      degree: "NCFE Level 2 Certificate",
      field: "Lean Organization Management Techniques",
      institution: "Havering College",
      dates: ""
    }
  ],

  skills: {
    core: [
      "NetSuite Implementation",
      "NetSuite Financials", 
      "Finance Automation",
      "BlackLine",
      "Financial Reporting",
      "Data Migration"
    ],
    technical: [
      "JIRA",
      "Microsoft Excel", 
      "SAP Financials",
      "Data Analysis",
      "User Acceptance Testing"
    ],
    business: [
      "Project Management",
      "Business Requirements",
      "Performance Analysis",
      "End User Training",
      "C-Level Collaboration"
    ]
  },

  certifications: [
    "SuiteFoundation Certification (NetSuite UK)",
    "Certified-SuiteFoundation (NetSuite implementation)",
    "Certified-SuiteFoundation (NetSuite Financials)", 
    "Certified Institute of Management Accountants (BPP)",
    "BlackLine U",
    "LinkedIn Skill Assessment - Microsoft Excel"
  ],

  services: [
    {
      title: "NetSuite Implementation & Configuration",
      description: "Complete NetSuite setup including account configuration, GL structure, and finance module customization tailored to your business needs.",
      features: ["Account Setup", "Chart of Accounts", "Tax Configuration", "Multi-Currency Support"],
      icon: "",
      order: 1, 

    },
    {
      title: "Data Migration & Validation",
      description: "Seamless migration of historical data with comprehensive validation and reconciliation processes.",
      features: ["Historical Data Transfer", "Data Validation", "Reconciliation", "Testing Protocols"]
    ,
    icon: "",
      order: 2, 
  },
    {
      title: "Finance Process Automation",
      description: "Streamline manual finance tasks through intelligent automation and workflow optimization.",
      features: ["Automated Reporting", "Workflow Design", "BlackLine Integration", "Month-End Automation"]
   ,
    icon: "",
      order: 3,  },
    {
      title: "Training & Change Management",
      description: "Comprehensive user training and change management to ensure successful system adoption.",
      features: ["User Training", "Documentation", "Support Plans", "Adoption Strategies"]
    ,  icon: "",
      order: 4, 
    }
  ],
  
  social: {
    linkedin: "https://www.linkedin.com/in/fmutale/",
    email: "fmutale@gmail.com"
  }
};