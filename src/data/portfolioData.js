// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================================
// Instructions:
// 1. Add images to the public/images/ folders
// 2. Update the corresponding section below
// 3. No code changes needed anywhere else
// ============================================================

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

export const portfolioData = {
  // ----------------------------------------------------------
  // PROFILE
  // ----------------------------------------------------------
  profile: {
    name: "Bui Trung Quoc",
    role: "Software Engineer",
    company: "Samsung R&D Center Vietnam",
    location: "Hanoi, Vietnam",
    email: "quocbui2803@gmail.com",
    github: "https://github.com/quoc14",
    linkedin: "",
    phone: "0862280302",
    avatar: assetUrl("images/profile/avatar.jpg"),
    cvUrl: assetUrl("cv/CV.pdf"),
    introduction:
      "I am a graduate in Data Science & AI from Thuy Loi University, currently working at Samsung R&D Center Vietnam. I have strong programming skills and solid problem-solving abilities gained through competitive programming contests and daily problem solving. I am passionate about teaching and mentoring, with experience in supporting classmates and junior students in coding practice.",
    shortIntro:
      "Software Engineer @ Samsung R&D | Data Science & AI @ Thuy Loi University",
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    summary:
      "I am a graduate in Data Science & AI from Thuy Loi University, currently working at Samsung R&D Center Vietnam. I have strong programming skills and solid problem-solving abilities gained through competitive programming contests and daily problem solving. I am passionate about teaching and mentoring, with experience in supporting classmates and junior students in coding practice. I am eager to contribute to MindX as a full-time teacher, bringing both technical knowledge and enthusiasm for guiding younger learners.",
    highlights: [
      "Software Engineer – MediaCore Team at Samsung R&D Center Vietnam",
      "Data Science & AI – Thuy Loi University (GPA: 3.21/4.0)",
      "Competitive Programming Contestant (Olympiad)",
      "Samsung Talent Program Scholarship Recipient",
      "Passionate about Teaching & Mentoring",
    ],
  },

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      title: "Software Engineer – MediaCore Team",
      company: "Samsung R&D Center Vietnam",
      location: "Hanoi, Vietnam",
      startDate: "Jan 2025",
      endDate: "Present",
      current: true,
      description:
        "Working with Android Multimedia framework. Focusing on MediaRecorder, MediaCodec, and camera-related modules. Analyzing and debugging performance issues using Linux command-line tools and internal logging systems. Collaborating with platform teams to improve video/audio recording pipeline and enhance media features. Applying AI in automation tasks such as issue checking and workflow optimization.",
      technologies: ["C/C++", "Python", "Git", "Linux Commands"],
      images: [assetUrl("images/samsung/samsung-work-1.jpg")],
    },
    {
      title: "Internship Data Engineer",
      company: "VC Corp",
      location: "Hanoi, Vietnam",
      startDate: "Jul 2023",
      endDate: "Dec 2023",
      current: false,
      description:
        "Learned about Big Data and Data Analytics. Learned Linux Commands. Learned how to use Spark to write data processing jobs.",
      technologies: ["Spark", "Linux Commands", "Python"],
      images: [],
    },
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "Data Science & AI",
      university: "Thuy Loi University",
      startDate: "Sep 2021",
      endDate: "Sep 2025",
      description: "Bachelor of Engineering — GPA: 3.21 / 4.0",
      achievements: [
        "Viet Nam IT Student Olympiad 2022 — Consolation Prize",
        "Samsung Talent Program Scholarship 2023",
        "Viet Nam IT Student Olympiad 2024 — Consolation Prize",
      ],
    },
  ],

  // ----------------------------------------------------------
  // ACHIEVEMENTS
  // ----------------------------------------------------------
  achievements: [
    {
      title: "Samsung Talent Program Scholarship 2023",
      organization: "Samsung R&D Center Vietnam",
      year: "2023",
      description:
        "Awarded the Samsung Talent Program Scholarship recognizing outstanding academic performance and technical skills among university students in Vietnam.",
      images: [assetUrl("images/achievements/samsung-talent-2023.jpg")],
      icon: "scholarship",
    },
    {
      title: "The 33rd Viet Nam IT Student Olympiad 2024",
      organization: "HAUI",
      year: "2024",
      description:
        "Consolation Prize in Chuyen Tin category at the national IT Student Olympiad, competing against top students from universities across Vietnam.",
      images: [assetUrl("images/achievements/olmpiad-2024.jpg")],
      icon: "trophy",
    },
    {
      title: "The 31st Viet Nam IT Student Olympiad 2022",
      organization: "HCMUTE",
      year: "2022",
      description:
        "Consolation Prize in Chuyen Tin category at the national IT Student Olympiad, demonstrating strong problem-solving and algorithmic skills at the national level.",
      images: [assetUrl("images/achievements/olmpiad-2022.jpg")],
      icon: "trophy",
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    {
      title: "SQL Intermediate Certificate",
      issuer: "HackerRank",
      image: assetUrl("images/certificates/hackerrank-sql.jpg"),
      verifyUrl: "https://www.hackerrank.com/certificates/8447405e7e12",
      issueDate: "2023",
      category: "HackerRank",
    },
    {
      title: "Problem Solving Intermediate Certificate",
      issuer: "HackerRank",
      image: assetUrl("images/certificates/hackerrank-problem-solving.jpg"),
      verifyUrl: "https://www.hackerrank.com/certificates/9fbcceafd6e4",
      issueDate: "2025",
      category: "HackerRank",
    },
    {
      title: "Python for Data Science, AI Development",
      issuer: "IBM Coursera",
      image: assetUrl("images/certificates/ibm-coursera.jpg"),
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/X9PE22W3CKE7",
      issueDate: "2023",
      category: "Coursera",
    },
    {
      title: "Udemy Certificate",
      issuer: "Udemy",
      image: assetUrl("images/certificates/udemy-android.jpg"),
      verifyUrl:
        "https://www.udemy.com/certificate/UC-e1a0a08d-9c9b-49cc-9091-8fe39836d0d2/",
      issueDate: "2025",
      category: "Udemy",
    },
    {
      title: "Teaching Computer Science Fundamentals",
      issuer: "Code.org",
      image: assetUrl("images/certificates/codeorg.jpg"),
      verifyUrl:
        "https://studio.code.org/certificates/eyJuYW1lIjoiUXVvYyBCdWkiLCJjb3Vyc2UiOiJrNS1vbmxpbmVwZC0yMDIzIiwiZG9ub3IiOm51bGx9",
      issueDate: "2026",
      category: "Code.org",
    },
    {
      title: "TOEIC 670",
      issuer: "ETS",
      image: assetUrl("images/certificates/toeic.jpg"),
      verifyUrl: "",
      issueDate: "2023",
      category: "TOEIC",
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATION CATEGORIES (for filter buttons)
  // ----------------------------------------------------------
  certificationCategories: [
    "All",
    "HackerRank",
    "Coursera",
    "Udemy",
    "Code.org",
    "TOEIC",
    "Others",
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      title: "Algorithmic Problem Solving",
      description:
        "Solved algorithmic problems on LeetCode with strong focus on data structures (Arrays, Trees, Heaps, Hash Maps) and graph algorithms (Dijkstra, BFS, DFS, Shortest Path). Daily practice to maintain algorithmic thinking.",
      technologies: ["C/C++", "Python", "Algorithms", "Data Structures"],
      screenshots: [assetUrl("images/projects/project-2.jpg")],
      githubUrl: "https://leetcode.com/u/quoc14/",
      demoUrl: "",
      featured: true,
    },
    {
      title: "Mobile App for Math Center with Face Attendance",
      description:
        "Graduation Project — Built a student mobile app using Flutter and backend APIs using Django REST Framework. AI-based face recognition attendance using Vision Transformer (ViT KPRPE) model achieving 95.8% accuracy on real-world dataset. Features include schedule, homework, monthly summary, tuition proof upload, and push notifications.",
      technologies: [
        "Flutter",
        "Django REST Framework",
        "PostgreSQL",
        "Python",
        "Firebase Storage",
      ],
      screenshots: [assetUrl("images/projects/project-1.jpg")],
      githubUrl: "https://github.com/quoc14",
      demoUrl: "",
      featured: true,
    },
  ],

  // ----------------------------------------------------------
  // GALLERY
  // ----------------------------------------------------------
  gallery: {
    categories: [
      "All",
      "Samsung",
      "Competitions",
      "Certificates",
      "Projects",
      "Achievements",
    ],
    photos: [
      // Samsung photos
      {
        src: assetUrl("images/samsung/samsung-work-1.jpg"),
        title: "Samsung R&D Office",
        category: "Samsung",
      },
      {
        src: assetUrl("images/samsung/samsung-talent.jpg"),
        title: "Samsung Talent Program",
        category: "Samsung",
      },
      // Competition photos
      {
        src: assetUrl("images/competitions/olmpiad-2024.jpg"),
        title: "IT Student Olympiad 2024",
        category: "Competitions",
      },
      {
        src: assetUrl("images/competitions/olmpiad-2022.jpg"),
        title: "IT Student Olympiad 2022",
        category: "Competitions",
      },
      // Certificate photos
      {
        src: assetUrl("images/certificates/hackerrank-sql.jpg"),
        title: "HackerRank SQL Intermediate",
        category: "Certificates",
      },
      {
        src: assetUrl("images/certificates/hackerrank-problem-solving.jpg"),
        title: "HackerRank Problem Solving",
        category: "Certificates",
      },
      {
        src: assetUrl("images/certificates/ibm-coursera.jpg"),
        title: "IBM Coursera Certificate",
        category: "Certificates",
      },
      {
        src: assetUrl("images/certificates/toeic.jpg"),
        title: "TOEIC 670",
        category: "Certificates",
      },
      // Achievement photos
      {
        src: assetUrl("images/achievements/samsung-talent-2023.jpg"),
        title: "Samsung Talent Scholarship 2023",
        category: "Achievements",
      },
      // Project photos
      {
        src: assetUrl("images/projects/project-1.jpg"),
        title: "Mobile App for Math Center",
        category: "Projects",
      },
    ],
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    email: "quocbui2803@gmail.com",
    github: "https://github.com/quoc14",
    linkedin: "",
    phone: "0862280302",
    location: "Hanoi, Vietnam",
    availability: "Open to opportunities",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  // ----------------------------------------------------------
  // SOCIAL LINKS
  // ----------------------------------------------------------
  social: {
    github: "https://github.com/quoc14",
    email: "quocbui2803@gmail.com",
    linkedin: "",
  },
};
