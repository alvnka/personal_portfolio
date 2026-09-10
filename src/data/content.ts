// Central content store — edit here to update copy across the whole site.

export const profile = {
  name: "Alvin Ndungu",
  tagline: "Software Engineer · Backend, Full-Stack & ML Research",
  location: "Nairobi, Kenya",
  phone: "+254 799 328 483",
  email: "alvinndunguk@gmail.com",
  linkedin: "https://linkedin.com/in/alvinndunguk",
  github: "https://github.com/alvnka",
  availability: "Available for new challenges",
  heroTitlePrimary: "Software Engineer",
  heroTitleSecondary: "Backend, Full-Stack & ML Research",
  heroSubtitle:
    "Engineering high-velocity digital solutions with a focus on scalable backend architectures and cutting-edge machine learning integration. Transforming complex technical challenges into elegant, production-ready software.",
  summary:
    "I am a results-driven Software Engineer with 3+ years of experience across the full stack — from scalable backend systems and RESTful APIs to polished mobile, web, and desktop interfaces. I have a proven track record integrating generative AI into production environments and contributing to ML research, including model training, biosimulation tooling, and data sourcing within a healthcare AI context. I am skilled at owning the full product lifecycle from architecture through deployment.",
  philosophy:
    " I am a results-oriented Software Engineer with over 3 years of experience delivering robust full-stack applications. Specialised in bridging the gap between AI/ML research and practical, scalable backend infrastructure, with a proven record of integrating generative AI into production healthcare systems.",
};

export const stats = [
  { value: "3+", label: "Years Experience", caption: "Building scalable healthcare platforms and consumer-facing apps." },
  { value: "18K+", label: "App Downloads", caption: "Xaidi healthcare platform across Google Play and the App Store." },
  { value: "ML", label: "Deep Research", caption: "Model training, biosimulation tooling, and AI compliance research." },
];

export const skillGroups = [
  {
    title: "Backend Architecture",
    icon: "storage",
    skills: ["Python (Django)", "Node.js", "MongoDB", "Systems Design", "REST APIs"],
  },
  {
    title: "Full-Stack Interface",
    icon: "devices",
    skills: ["React", "React Native", "TypeScript", "Tauri (Rust)", "Firebase"],
  },
  {
    title: "ML & Research",
    icon: "psychology",
    skills: ["Model Training", "Data Curation", "scikit-learn", "TensorFlow/Keras", "Biosimulation"],
    featured: ["Model Training", "TensorFlow/Keras"],
  },
];

export const techStack = {
  languages: ["Python", "TypeScript", "JavaScript", "Rust", "Node.js"],
  cloud: ["AWS (EC2, S3, Cognito)", "GCP (Compute Engine, Cloud Storage)", "Nginx", "Gunicorn", "pm2"],
  databases: ["MongoDB", "MongoEngine", "Firebase Realtime DB", "Cloud Firestore"],
  tools: ["Git/GitHub", "Agile/Scrum", "Stripe & RevenueCat", "Google Play Console", "App Store Connect"],
};

export const experience = [
  {
    role: "Software Engineer & Product Manager",
    company: "iZola Limited",
    period: "August 2023 — Present",
    summary: "Mobile & web application development for healthcare platform Xaidi",
    bullets: [
      "Led end-to-end development of Xaidi, a React Native + Django/Node.js healthcare platform, scaling it to over 18,000 downloads on Google Play and the App Store.",
      "Architected and maintained RESTful backend services, integrating Stripe and RevenueCat for complex subscription and paywall logic.",
      "Deployed and managed production infrastructure on AWS EC2 and GCP Compute Engine using Nginx, Gunicorn, and pm2 to achieve consistent uptime.",
      "Integrated generative AI features including an AI chat assistant directly into the platform, improving user engagement metrics.",
      "Defined and tracked critical KPIs across the product lifecycle, using data-driven insights to guide feature prioritisation and release planning.",
      "Conducted peer code reviews, enforced best practices, and maintained high code quality standards across the engineering team.",
    ],
    tags: ["React Native", "Django", "Node.js", "AWS", "GCP", "Stripe"],
  },
  {
    role: "ML Research Engineer",
    company: "Vitafluence AI",
    period: "September 2024 — April 2025",
    summary: "Secondment to the core research team; contributed to AI/ML research in healthcare and biosimulation",
    bullets: [
      "Sourced, cleaned, and curated datasets for training and evaluating machine learning models in a healthcare AI context.",
      "Trained and iterated on ML models, managing experiment tracking and performance evaluation.",
      "Set up and maintained biosimulation tools as part of the research infrastructure, supporting computational experiments.",
      "Conducted applied research into AI regulatory compliance and healthcare AI systems, directly informed by EU AI Act requirements.",
      "Collaborated with the research team to document findings and translate research outputs into actionable engineering recommendations.",
    ],
    tags: ["Model Training", "Data Curation", "Biosimulation", "EU AI Act"],
  },
];

export const projects = [
  {
    title: "Cross-Platform Desktop Development (Tauri)",
    description:
      "Built cross-platform desktop applications using Tauri (Rust backend + web frontend), gaining hands-on experience with system-level programming and packaging for macOS, Windows, and Linux.",
    tags: ["Rust", "Tauri", "TypeScript", "Desktop"],
    featured: true,
  },
  {
    title: "NSE Finance (Flutter)",
    description:
      "Built a cross-platform finance application tracking Nairobi Securities Exchange data, primarily targeting mobile but extended to desktop and web.",
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    title: "Xaidi Healthcare Platform",
    description:
      "Led end-to-end development of a React Native + Django/Node.js healthcare platform, scaling to 18,000+ downloads with integrated generative AI chat assistant.",
    tags: ["React Native", "Django", "Generative AI"],
  },
];

export const certifications = [
  {
    title: "EU AI Act Essentials",
    issuer: "KI-Campus (Stifterverband)",
    date: "April 2025",
    description:
      "Covers EU AI Act fundamentals, risk classification, stakeholder obligations, implementation timelines, and practical compliance scenarios.",
  },
  {
    title: "ICDL Certificate",
    issuer: "Daystar University",
    date: "August 2019",
    description:
      "Covered Microsoft Office suite, desktop publishing principles, and introductory .NET development for desktop applications.",
  },
];

export const education = [
  {
    period: "Sep 2019 — Dec 2023",
    title: "B.Sc. Computer Science",
    institution: "Kabarak University",
    description: "Second Class, Lower Division",
  },
  {
    period: "2015 — 2018",
    title: "KCSE",
    institution: "Rongai Agricultural & Technical High School",
    description: "",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
