export const personalInfo = {
  name: "Ejmen Al-Ubejdij",
  title: "Computer Engineering Student | Researcher | Developer",
  email: "aymanubejdij@gmail.com",
  phone: "+974 30783378",
  location: "Doha, Qatar",
  summary: "Computer Engineering student at Hamad Bin Khalifa University with a strong foundation in research, software development, and leadership. Passionate about leveraging technology to create innovative solutions.",
  languages: [
    { name: "English", level: "Professional (IELTS 7.5)" },
    { name: "Arabic", level: "Native" },
    { name: "Albanian", level: "Native" }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/ejmen-al-ubejdij",
    github: "https://github.com/ejmen",
    email: "aymanubejdij@gmail.com"
  }
}

export const education = {
  degree: "B.Sc. in Computer Engineering",
  institution: "Hamad Bin Khalifa University (HBKU)",
  location: "Doha, Qatar",
  duration: "2022 - Present",
  gpa: "3.85/4.0",
  details: [
    "President's List: 4 consecutive semesters",
    "Focus on Machine Learning, Software Development, and IoT"
  ]
}

export const experiences = [
  {
    id: 1,
    title: "Teaching Assistant",
    company: "Hamad Bin Khalifa University",
    location: "Doha, Qatar",
    duration: "Jan 2025 - Jun 2025",
    type: "Part-time",
    responsibilities: [
      "Assisting professors in course delivery for 120+ students",
      "Mentoring students in programming concepts and algorithms",
      "Grading assignments and providing feedback",
      "Conducting office hours and lab sessions"
    ],
    achievements: [
      "Improved student performance by 15% through personalized mentoring",
      "Created interactive coding tutorials used by department",
      "Received excellent TA evaluation from faculty"
    ],
    description: "Supporting computer science courses and mentoring students in programming concepts."
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "Texas A&M University at Qatar (TAMUQ)",
    location: "Doha, Qatar",
    duration: "2024 - 2025",
    type: "Research",
    responsibilities: [
      "Developing AI-based solar panel diagnostic systems",
      "Implementing computer vision algorithms for defect detection",
      "Collaborating with research teams on renewable energy projects",
      "Processing datasets of 8,000+ solar panel images for ML training"
    ],
    achievements: [
      "Developed ML model achieving 92% defect detection accuracy",
      "Co-authored research paper for conference submission",
      "Reduced manual inspection time by 65% through automation"
    ],
    description: "Developing AI-based diagnostic systems for solar panel defect detection using computer vision."
  },
  {
    id: 3,
    title: "IT Support Assistant",
    company: "Carnegie Mellon University in Qatar (CMUQ)",
    location: "Doha, Qatar",
    duration: "Jul 2024 - Aug 2024",
    type: "Internship",
    responsibilities: [
      "Provided technical support to 300+ students and faculty",
      "Managed campus IT infrastructure and workstations",
      "Resolved hardware and software issues with 90% satisfaction rate",
      "Assisted with network maintenance and troubleshooting"
    ],
    achievements: [
      "Resolved 150+ technical tickets with 90% user satisfaction",
      "Improved system backup procedures",
      "Created user guides for common IT issues"
    ],
    description: "Providing technical support and maintaining IT infrastructure for university campus."
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "QASR Startup",
    location: "Doha, Qatar",
    duration: "2024",
    type: "Part-time",
    responsibilities: [
      "Developed scalable full-stack web applications using React and Node.js",
      "Architected responsive user interfaces with modern design principles",
      "Collaborated with cross-functional teams in agile development environment",
      "Implemented secure authentication and payment processing systems",
      "Optimized application performance achieving 40% faster load times"
    ],
    achievements: [
      "Delivered 3 major features ahead of schedule",
      "Improved application performance by 40% through optimization",
      "Built reusable component library adopted across all projects",
      "Mentored junior developers on best practices"
    ]
  },
  {
    id: 5,
    title: "Program Administrative Assistant",
    company: "Hamad Bin Khalifa University",
    location: "Doha, Qatar",
    duration: "2023 - 2024",
    type: "Part-time",
    responsibilities: [
      "Coordinated academic programs for 300+ students across multiple departments",
      "Organized 15+ major academic events, workshops, and conferences",
      "Managed comprehensive student records and academic documentation systems",
      "Facilitated communication between students, faculty, and administration",
      "Streamlined registration processes and academic workflows"
    ],
    achievements: [
      "Increased event attendance by 40% through improved coordination",
      "Digitized student record system improving efficiency by 50%",
      "Received commendation for exceptional organizational skills",
      "Successfully managed budgets totaling $50,000+ for events"
    ]
  },
  {
    id: 6,
    title: "Contracts and Administration Coordinator",
    company: "Hamad Bin Khalifa University",
    location: "Doha, Qatar",
    duration: "2022 - 2024",
    type: "Part-time",
    responsibilities: [
      "Coordinated complex contract management processes worth $2M+ annually",
      "Maintained comprehensive administrative documentation and compliance records",
      "Liaised between legal, finance, and academic departments for contract execution",
      "Developed standardized contract templates and approval workflows",
      "Ensured full regulatory compliance across all contractual agreements"
    ],
    achievements: [
      "Processed 100+ contracts with zero compliance issues",
      "Reduced contract processing time by 35% through workflow optimization",
      "Implemented digital tracking system adopted university-wide",
      "Maintained 100% accuracy in financial documentation"
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "Cancer Cell Analysis App",
    duration: "2024 - Present",
    type: "Research Project",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flutter"],
    description: "Mobile application for cancer cell detection and analysis using machine learning techniques. Academic research project focused on medical image processing.",
    highlights: [
      "Developed CNN models for cell classification",
      "Achieved good accuracy in cancer cell detection experiments",
      "Implemented image processing with optimized response times",
      "Created mobile interface for research use",
      "Built dataset of annotated cell images for training"
    ],
    link: "https://cancer-cell-app-demo.vercel.app",
    github: "https://github.com/ejmen/cancer-cell-analysis",
    status: "In Development",
    impact: "Academic research contribution"
  },
  {
    id: 2,
    title: "AI-Based Solar Panel Diagnostics App",
    duration: "2024 - 2025",
    type: "Research Project",
    technologies: ["Python", "Machine Learning", "React Native", "IoT"],
    description: "System for detecting defects in solar panels using machine learning algorithms. Research project focused on renewable energy optimization.",
    highlights: [
      "Developed ML models for defect classification",
      "Integrated sensor data for performance monitoring",
      "Built mobile app for inspection workflows",
      "Implemented maintenance prediction features",
      "Explored cost reduction opportunities"
    ],
    link: "https://solar-diagnostics-demo.vercel.app",
    github: "https://github.com/ejmen/solar-panel-diagnostics",
    status: "Research Phase",
    impact: "Research prototype development"
  },
  {
    id: 3,
    title: "Corporate Website - PPP Worldwide Consultancy",
    duration: "2024",
    type: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: "Professional corporate website for international consultancy firm with modern design, SEO optimization, and exceptional performance metrics.",
    highlights: [
      "Created pixel-perfect responsive design for all devices",
      "Implemented advanced SEO strategies increasing organic traffic by 200%",
      "Achieved perfect 100 Lighthouse performance score",
      "Built custom CMS for easy content management",
      "Integrated multi-language support for global audience"
    ],
    link: "https://pppworldwide.com",
    github: "https://github.com/ejmen/ppp-website",
    status: "Live",
    impact: "Serving 10,000+ monthly visitors"
  },
  {
    id: 4,
    title: "HBKU Student Scheduler Website",
    duration: "2024",
    type: "Web Application",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    description: "Comprehensive scheduling platform for HBKU students to efficiently manage courses, activities, and academic deadlines with smart conflict detection.",
    highlights: [
      "Integrated seamlessly with university database and academic systems",
      "Implemented intelligent conflict detection preventing scheduling overlaps",
      "Added collaborative scheduling features for group projects",
      "Built responsive design supporting 1000+ concurrent users",
      "Created automated reminder and notification system"
    ],
    link: "https://hbku-scheduler.vercel.app",
    github: "https://github.com/ejmen/hbku-scheduler",
    status: "Live",
    impact: "Used by 800+ HBKU students daily"
  },
  {
    id: 5,
    title: "Student AI Helper App",
    duration: "2024",
    type: "Mobile Application",
    technologies: ["Flutter", "Dart", "Firebase", "OpenAI API"],
    description: "AI-powered mobile application designed to revolutionize student learning with personalized tutoring, homework assistance, and adaptive study plans.",
    highlights: [
      "Integrated advanced GPT models for intelligent academic responses",
      "Built personalized study plan generator using machine learning",
      "Implemented robust offline functionality for uninterrupted learning",
      "Created multi-subject support covering 15+ academic domains",
      "Achieved 4.8/5 star rating from 500+ student users"
    ],
    link: "https://play.google.com/store/apps/student-ai-helper",
    github: "https://github.com/ejmen/student-ai-helper",
    status: "Published",
    impact: "Downloaded by 2000+ students"
  },
  {
    id: 6,
    title: "Privacy-Preserving Emotion Detection on Raspberry Pi",
    duration: "2024",
    type: "IoT Project",
    technologies: ["Python", "Raspberry Pi", "TensorFlow Lite", "OpenCV"],
    description: "Innovative edge computing solution for real-time emotion detection that prioritizes user privacy through on-device processing and federated learning techniques.",
    highlights: [
      "Achieved real-time emotion processing on resource-constrained edge device",
      "Implemented federated learning approach eliminating data transmission",
      "Ensured GDPR and privacy compliance through local processing",
      "Optimized TensorFlow Lite models for 95% accuracy at 30 FPS",
      "Created scalable deployment framework for IoT networks"
    ],
    link: "https://emotion-detection-demo.vercel.app",
    github: "https://github.com/ejmen/emotion-detection-pi",
    status: "Open Source",
    impact: "Used in 3 research papers"
  },
  {
    id: 7,
    title: "Arabic Sign Language Interpreter",
    duration: "2023",
    type: "AI Project",
    technologies: ["Python", "Computer Vision", "Deep Learning", "MediaPipe"],
    description: "Groundbreaking real-time Arabic sign language interpretation system using advanced computer vision and deep learning to bridge communication gaps.",
    highlights: [
      "Built comprehensive custom dataset of 5000+ Arabic sign gestures",
      "Achieved 89% recognition accuracy across 200+ sign vocabulary",
      "Developed real-time translation interface with sub-100ms latency",
      "Implemented gesture segmentation and temporal modeling",
      "Created accessible web interface for deaf community"
    ],
    link: "https://arabic-sign-interpreter.vercel.app",
    github: "https://github.com/ejmen/arabic-sign-language",
    status: "Live Demo",
    impact: "Featured in 2 AI conferences"
  }
]

export const skills = {
  software: [
    "Microsoft Office Suite",
    "Figma", 
    "Adobe Creative Suite",
    "Multisim",
    "Git & GitHub",
    "VS Code",
    "IntelliJ IDEA",
    "Docker",
    "Postman",
    "Jira"
  ],
  programming: [
    { name: "Python", level: 95, experience: "3+ years" },
    { name: "JavaScript/TypeScript", level: 90, experience: "3+ years" },
    { name: "Java", level: 85, experience: "2+ years" },
    { name: "C/C++", level: 80, experience: "2+ years" },
    { name: "Dart", level: 85, experience: "2+ years" },
    { name: "SQL", level: 80, experience: "2+ years" },
    { name: "LaTeX", level: 75, experience: "1+ year" },
    { name: "MATLAB", level: 70, experience: "1+ year" }
  ],
  development: {
    "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Material-UI"],
    "Backend": ["Node.js", "Express.js", "Django", "Flask", "GraphQL", "REST APIs"],
    "Mobile": ["Flutter", "React Native", "Android Studio", "Xcode"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
    "Databases": ["MongoDB", "PostgreSQL", "Firebase", "Redis", "SQLite"],
    "IoT & Hardware": ["Raspberry Pi", "Arduino", "ESP32", "Sensors", "Embedded Systems"]
  },
  certifications: [
    "AWS Cloud Practitioner (In Progress)",
    "Google AI Platform Fundamentals",
    "MongoDB Developer Certification",
    "GitHub Actions Fundamentals"
  ]
}

export const certificates = [
  {
    id: 1,
    title: "Tsinghua University EE Summer School",
    issuer: "Tsinghua University",
    year: "2025",
    type: "Academic"
  },
  {
    id: 2,
    title: "Machine Learning & Robotics Certificate",
    issuer: "Texas A&M University",
    year: "2024",
    type: "Technical"
  },
  {
    id: 3,
    title: "Carnegie Mellon Lifeline Hackathon",
    issuer: "Carnegie Mellon University",
    year: "2024",
    type: "Competition"
  }
]

export const awards = [
  {
    id: 1,
    title: "HBKU President's List",
    description: "Academic excellence for 4 consecutive semesters",
    year: "2022-2024",
    type: "Academic"
  },
  {
    id: 2,
    title: "Qatar Debate National Tournament Finalist",
    description: "Reached finals in national debate competition",
    year: "2024",
    type: "Competition"
  },
  {
    id: 3,
    title: "QCPC Programming Competition",
    description: "Competitive programming ranking",
    year: "2023",
    type: "Technical"
  },
  {
    id: 4,
    title: "Robotics Competition Winner",
    description: "First place in national robotics competition",
    year: "2021",
    type: "Technical"
  },
  {
    id: 5,
    title: "Tariqi Sponsorship",
    description: "Full academic sponsorship based on merit",
    year: "2022",
    type: "Scholarship"
  }
]

export const volunteering = [
  {
    id: 1,
    title: "AI in Engineering Debate Organizer",
    organization: "HBKU",
    year: "2024",
    description: "Organized and moderated debate on AI applications in engineering"
  },
  {
    id: 2,
    title: "HBKU Student Representative",
    organization: "HBKU Student Council",
    year: "2024",
    description: "Represented student body in university governance"
  },
  {
    id: 3,
    title: "Amir Cup 2021 - Local Organizing Committee",
    organization: "Qatar Football Association",
    year: "2021",
    description: "Volunteered in organizing national football championship"
  },
  {
    id: 4,
    title: "Future Compass Program",
    organization: "Qatar Foundation",
    year: "2018",
    description: "Mentored high school students in career planning"
  },
  {
    id: 5,
    title: "HMC Website Development",
    organization: "Hamad Medical Corporation",
    year: "2016",
    description: "Volunteered to develop sections of hospital website"
  }
]