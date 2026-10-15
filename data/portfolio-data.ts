export interface Project {
  id: string;
  title: string;
  category: "Web Development" | "Desktop App" | "Graphic Design";
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  personalContribution: string;
  features: string[];
  image: string; // SVG or image path
  gallery?: string[]; // Optional additional screenshot images
  badgeColor?: string;
  demoUrl?: string; // Optional real link or empty
  repoUrl?: string; // Optional real link or empty
  youtubeUrl?: string;
  youtubeId?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: "Code" | "Database" | "Palette" | "Layout";
  skills: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  subTitle: string;
  institution: string;
  major: string;
  period: string;
  location: string;
  bio: string;
  shortBio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  cvPath: string;
  photoUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Shalwa Febri Rahmatullah",
  nickname: "Shalwa",
  title: "Informatics Management Student & Digital Creator",
  subTitle: "Web Development • Database Architecture • Desktop Applications • Graphic Design",
  institution: "Politeknik Negeri Padang",
  major: "Associate Degree in Informatics Management",
  period: "2024 – Present",
  location: "Padang, West Sumatra, Indonesia",
  bio: "Informatics Management student at Politeknik Negeri Padang passionate about blending structured software engineering with clean visual design. Focused on responsive web development, relational database architecture, functional application development, and brand identity design.",
  shortBio: "Building functional digital solutions through structured code, optimal database management, and modern user-centric interfaces.",
  email: "shalwafebri@gmail.com",
  githubUrl: "https://github.com/Awee-Fr",
  linkedinUrl: "https://www.linkedin.com/in/shalwa-febri-rahmatullah-915116405?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagramUrl: "https://instagram.com/shlwfbrii_",
  cvPath: "/cv-shalwa.pdf",
  photoUrl: "/shalwa-photo.jpg",
};

export const aboutHighlights = [
  {
    title: "Web & App Development",
    description: "Building responsive, structured software systems prioritizing intuitive user experiences across desktop and mobile platforms.",
    icon: "Laptop",
  },
  {
    title: "Relational Database Architecture",
    description: "Designing normalized entity-relationship schemas (ERD) and optimized SQL queries for high-performance, dependable systems.",
    icon: "Database",
  },
  {
    title: "Creative & Graphic Design",
    description: "Crafting high-precision vector branding, iconography, and interactive interface prototypes using Figma and Adobe Illustrator.",
    icon: "PenTool",
  },
  {
    title: "Continuous Innovation",
    description: "Enthusiastic about mastering modern frameworks, industry best practices, and collaborating in team-driven technological solutions.",
    icon: "Sparkles",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    description: "End-to-end responsive web applications from dynamic interfaces to secure backends.",
    iconName: "Code",
    skills: [
      { name: "PHP & Laravel", description: "Backend architecture, MVC structure, and relational system integration", tag: "Backend" },
      { name: "HTML5 & CSS3", description: "Semantic web structure, accessibility standards, and responsive design", tag: "Core Web" },
      { name: "JavaScript & Next.js", description: "Interactive client scripting and modern full-stack React framework", tag: "Frontend" },
      { name: "Tailwind CSS & Bootstrap", description: "Utility-first styling for fast, consistent, and clean component systems", tag: "Styling" },
    ],
  },
  {
    title: "Database",
    description: "Relational database administration, schema modeling, and data integrity.",
    iconName: "Database",
    skills: [
      { name: "MySQL", description: "Primary relational DBMS for transactional data persistence and management", tag: "RDBMS" },
      { name: "Database Design (ERD)", description: "Table normalization, foreign key relations, and entity modeling", tag: "Data Modeling" },
      { name: "SQL Querying (DDL & DML)", description: "Structured query formulation, table definition, and data manipulation", tag: "SQL" },
    ],
  },
  {
    title: "Desktop/Mobile Development",
    description: "Object-oriented desktop applications and mobile user experience prototyping.",
    iconName: "Layout",
    skills: [
      { name: "C# & .NET (Windows Forms)", description: "Modular desktop information systems with relational database connectivity", tag: "Desktop" },
      { name: "Java & OOP", description: "Object-oriented principles including encapsulation, inheritance, and clean code", tag: "Core Language" },
      { name: "Figma Mobile Prototyping", description: "End-to-end mobile user journey mapping and high-fidelity prototypes", tag: "Mobile UX" },
    ],
  },
  {
    title: "Graphic Design",
    description: "High-precision vector assets, digital typography, and brand identity design.",
    iconName: "Palette",
    skills: [
      { name: "Adobe Illustrator", description: "Precision vector logo creation, custom typography, and corporate branding", tag: "Vector" },
      { name: "Figma (UI/UX Design)", description: "Interactive wireframes, component design systems, and prototype flows", tag: "Interface" },
      { name: "Adobe Photoshop", description: "Digital image manipulation, raster processing, and commercial presentation mockups", tag: "Raster" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ppdb-sekolah",
    title: "Web-Based School Admissions Portal (PPDB)",
    category: "Web Development",
    shortDescription: "Integrated online student admissions portal featuring multi-step digital registration, online document verification, and automated qualification results.",
    problem: "Conventional paper-based school admissions caused long queues, document loss risks, and significant administrative delays in processing applicant records.",
    solution: "Engineered a streamlined multi-step online admissions platform allowing applicants to submit documents independently, track qualification status transparently, and giving administrators verification tools.",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    personalContribution: "Architected the applicant database schema, built the multi-step registration workflow, and implemented digital document verification tools on the administrative portal.",
    features: [
      "User-friendly multi-step student registration workflow",
      "Digital document upload and verification pipeline (Certificates, Birth Records)",
      "Administrative committee dashboard for applicant review and grade ranking",
      "Instant qualification status tracking for prospective students"
    ],
    image: "/projects/ppdb-demo.jpg",
    badgeColor: "from-purple-500 to-indigo-600",
    demoUrl: "https://youtu.be/bRGR-AlliSk?si=LlNKvOiXokY7xMZi",
    youtubeUrl: "https://youtu.be/bRGR-AlliSk?si=LlNKvOiXokY7xMZi",
    youtubeId: "bRGR-AlliSk",
  },
  {
    id: "si-organisasi",
    title: "HIMA TI Informatics Department Information Portal",
    category: "Web Development",
    shortDescription: "Official web portal for the Informatics Student Association (HIMA TI) showcasing cabinet divisions, departmental events, and academic announcements.",
    problem: "Departmental activity updates, event registrations, and cabinet leadership profiles were scattered across social media without a unified official platform.",
    solution: "Built a centralized web portal presenting cabinet leadership profiles, showcasing 7 functional divisions, highlighting upcoming events, and hosting a central news channel.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3 / Bootstrap", "JavaScript"],
    personalContribution: "Developed the responsive UI layout, designed interactive division showcase modules, and integrated event scheduling and department news feeds.",
    features: [
      "Representative institutional showcase for HIMA TI cabinet administration",
      "Interactive directory detailing 7 executive functional divisions",
      "Departmental event calendar and upcoming activity feed",
      "Centralized technology news and academic information channel"
    ],
    image: "/projects/hmj-tekinfo.jpg",
    gallery: ["/projects/hmj-tekinfo.jpg", "/projects/hmj-tekinfo-divisi.jpg"],
    badgeColor: "from-amber-500 to-orange-600",
  },
  {
    id: "perpustakaan-mini-desktop",
    title: "Mini Library Management System (Desktop App)",
    category: "Desktop App",
    shortDescription: "Desktop library management application engineered for member records, circulation lending, return tracking, and catalog inventories.",
    problem: "Manual paper logs for book lending resulted in frequent record discrepancies, overdue returns, and inaccurate real-time book inventory counts.",
    solution: "Developed a desktop software using Windows Forms and .NET with a modular design to automate member registrations, catalog searches, circulation transactions, and return logging.",
    technologies: ["C#", ".NET", "Windows Forms", "OOP", "Database Management"],
    personalContribution: "Designed modular desktop form interfaces (MemberForm, BookForm, CirculationForm, ReturnForm), built relational database models, and programmed input validation logic.",
    features: [
      "Main navigation dashboard with 4 core operational modules",
      "Comprehensive member management with strict input validation",
      "Integrated lending and return circulation tracking engine",
      "High-performance low-latency desktop interface for library staff"
    ],
    image: "/projects/perpustakaan-mini.jpg",
    gallery: ["/projects/perpustakaan-mini.jpg", "/projects/perpustakaan-anggota.jpg"],
    badgeColor: "from-blue-600 to-indigo-700",
  },
  {
    id: "student-academic-mobile-app",
    title: "Unified Academic Mobile App – UI/UX Prototype",
    category: "Graphic Design",
    shortDescription: "Comprehensive 10-screen mobile UI/UX prototype consolidating class attendance, course materials, assignments, and grades into a single app.",
    problem: "Students were forced to navigate disjointed web portals to check attendance, download lecture slides, submit assignments, and view GPA transcripts.",
    solution: "Designed a cohesive 10-screen mobile application in Figma featuring modern ergonomic UI, a tap-to-attend attendance engine with a live clock, and personalized academic overview dashboards.",
    technologies: ["Figma", "UI/UX Design", "Mobile App Prototype", "Design System", "User Flow"],
    personalContribution: "Collaborated within Group 7 to design end-to-end user flows, structured ergonomic mobile screens, implemented interactive tap-to-attend interactions, and produced complete high-fidelity prototypes.",
    features: [
      "10 Complete High-Fidelity Screens: Login, Dashboard, Attendance, Confirmation, and History",
      "Unified Academic Suite: Assignment Upload, Learning Modules, Semester Tasks, and Transcripts",
      "Interactive Attendance Flow featuring live clock and percentage progress indicators",
      "Personalized student overview displaying urgent deadlines and cumulative GPA summary"
    ],
    image: "/projects/student-mobile-prototype.jpg",
    badgeColor: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "logo-anugerah-motor",
    title: "Logo & Visual Identity Design 'Anugerah Motor'",
    category: "Graphic Design",
    shortDescription: "Precision vector identity and automotive branding engineered for local automotive workshop and spare parts specialist 'Anugerah Motor'.",
    problem: "Local automotive garages frequently lack distinct brand presence, hindering customer recall and failing to reflect mechanical precision.",
    solution: "Created a vector logo uniting mechanical gears, automotive wrenches, and a solid industrial 'A' monogram with energetic color palettes and bold typography.",
    technologies: ["Adobe Illustrator", "Vector Design", "Branding Identity", "Automotive Styling"],
    personalContribution: "Researched industrial automotive branding, engineered symmetrical gear and wrench vectors, tailored custom typography, and built multiple colorway variations.",
    features: [
      "Symbolic fusion of industrial gear wheels, mechanics tools, and letter 'A'",
      "Dimensional industrial typography with high-impact automotive styling",
      "Pure print-ready vector formats for signage, stationery, banners, and digital media",
      "Multi-theme colorways including Dark Gear and Steel Metallic editions"
    ],
    image: "/projects/logo-anugerah-motor.jpg",
    gallery: ["/projects/logo-anugerah-motor.jpg", "/projects/logo-anugerah-motor-alt.jpg"],
    badgeColor: "from-orange-600 to-red-600",
  },
];

export const educationInfo = {
  institution: "Politeknik Negeri Padang",
  degree: "Associate Degree in Informatics Management",
  status: "Active Student",
  period: "2024 – Present",
  location: "Padang, West Sumatra, Indonesia",
  focusAreas: [
    "Software Engineering & Full-Stack Web Development",
    "Relational Database Architecture & Query Optimization",
    "Object-Oriented Programming & Desktop Application Systems",
    "UI/UX Interface Prototyping & Graphic Design Systems",
    "Information Systems Analysis & Agile Collaborative Projects"
  ],
  description: "Pursuing vocational higher education focused on industry-standard information technology. Honing core technical skills in software engineering, database management, and visual design with high standards of professionalism."
};
