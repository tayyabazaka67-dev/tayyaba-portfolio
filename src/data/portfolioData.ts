// Central portfolio content for Tayyaba Zaka — AI/ML Engineer Portfolio.
// All page content reads from this file so it is easy to update.

export const personal = {
  name: 'Tayyaba Zaka',
  title: 'AI/ML Engineer | Computer Science Student',
  tagline: 'Building intelligent software that solves real-world problems.',
  location: 'Lahore, Pakistan',
  email: 'tayyabazaka67@gmail.com',
  github: 'https://github.com/tayyabazaka67-dev',
  linkedin: 'https://www.linkedin.com/in/tayyaba-zaka-a98699399',
  resumeUrl: '#',
  status: 'Available for Internship',
};

// Formspree endpoint for the contact form.
// REPLACE the placeholder below with your actual Formspree endpoint ID.
// Create one at https://formspree.io and paste the URL here.
export const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

export const hero = {
  greeting: "Hi, I'm",
  roles: [
    'AI/ML Engineer',
    'Machine Learning Developer',
    'Software Developer',
    'Generative AI Enthusiast',
    'Problem Solver',
  ],
  description:
    'I am a Computer Science student passionate about Artificial Intelligence, Machine Learning, and building intelligent software solutions that solve real-world problems.',
};

export type AiJourneyMilestone = {
  year: string;
  items: { icon: string; label: string }[];
  highlight?: boolean;
};

export const aiJourney: AiJourneyMilestone[] = [
  {
    year: '2024',
    items: [{ icon: 'GraduationCap', label: 'BS Computer Science' }],
  },
  {
    year: '2025',
    items: [
      { icon: 'BrainCircuit', label: 'AI / ML' },
      { icon: 'Search', label: 'RAG & Vector DB' },
    ],
  },
  {
    year: '2026',
    items: [
      { icon: 'Bot', label: 'AI Agents' },
      { icon: 'Zap', label: 'n8n Automation' },
      { icon: 'Mic', label: 'Voice AI' },
    ],
    highlight: true,
  },
];

export const aiJourneyFinal = 'Building Real-World AI';

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  displayValue?: string;
};

export const stats: Stat[] = [
  { label: 'CGPA', value: 3.41, suffix: '', decimals: 2 },
  { label: 'Projects Built', value: 8, suffix: '+', decimals: 0 },
  { label: 'Current Role', value: 1, displayValue: 'AI/ML Intern', suffix: '', decimals: 0 },
  { label: 'Focus Area', value: 1, displayValue: 'AI & ML', suffix: '', decimals: 0 },
];

export const about = {
  heading: '01 — ABOUT',
  title: 'About',
  paragraphs: [
    'I am a Computer Science student with a passion for software development and artificial intelligence. I enjoy building innovative solutions that solve real-world problems. My interests include AI and Machine Learning. I am committed to continuous learning and improving my technical skills.',
  ],
  journey:
    'My curiosity about technology inspired me to study Computer Science. I enjoy solving problems and turning ideas into practical software.',
  goal: 'Become an AI Engineer and develop intelligent systems that improve people\u2019s lives.',
  exploring: [
    'LangChain',
    'Retrieval-Augmented Generation (RAG)',
    'Large Language Models (LLMs)',
    'Deep Learning',
  ],
};

export type EducationLevel = {
  level: string;
  institution: string;
  location: string;
  period?: string;
  qualification: string;
  stream?: string;
  subjects: string[];
  marks?: string;
  percentage?: string;
  cgpa?: string;
  coursework?: string[];
};

export const educationLevels: EducationLevel[] = [
  {
    level: 'University',
    institution: 'University of Home Economics, Lahore',
    location: 'Lahore, Pakistan',
    period: '2024 \u2013 2028',
    qualification: 'BS Computer Science',
    cgpa: '3.41 / 4.0',
    subjects: [],
    coursework: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Systems',
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'LangChain',
      'Software Engineering',
    ],
  },
  {
    level: 'College',
    institution: 'Punjab College, Lahore',
    location: 'Lahore, Pakistan',
    period: '2022 \u2013 2024',
    qualification: 'Intermediate in Computer Science (ICS)',
    subjects: ['Computer Science', 'Mathematics', 'Statistics'],
    marks: '1024',
    percentage: '84%',
  },
  {
    level: 'School',
    institution: 'Govt. Kinnaird Girls High School, Lahore',
    location: 'Lahore, Pakistan',
    qualification: 'Matriculation (Computer Science)',
    stream: 'Computer Science',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    marks: '951',
    percentage: '85%',
  },
];

export const experience = {
  role: 'AI/ML Engineer Intern',
  company: 'Spadasoft',
  description:
    'Developing AI-powered applications and gaining hands-on experience with Machine Learning, Large Language Models, and Retrieval-Augmented Generation.',
  responsibilities: [
    'AI Applications',
    'RAG Systems',
    'LangChain',
    'LLM Integration',
    'Semantic Search',
    'API Development',
    'Vector Databases',
  ],
  technologies: [
    'Python',
    'LangChain',
    'FastAPI',
    'Gemini API',
    'Hugging Face',
    'Pinecone',
    'FAISS',
    'Streamlit',
    'Git',
    'GitHub',
  ],
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    items: ['Python', 'Java', 'C++', 'C'],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'LLMs', 'RAG'],
  },
  {
    category: 'Frameworks & Automation',
    icon: 'Layers',
    items: ['TensorFlow', 'LangChain', 'OpenCV', 'Hugging Face', 'Streamlit', 'FAISS', 'n8n'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: ['MySQL', 'SQL', 'Pinecone'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    category: 'Soft Skills',
    icon: 'Sparkles',
    items: ['Problem Solving', 'Leadership', 'Team Collaboration', 'Communication', 'Adaptability'],
  },
];

export const marqueeSkills = [
  'Python', 'Machine Learning', 'Deep Learning', 'NLP', 'LangChain', 'RAG',
  'TensorFlow', 'OpenCV', 'Hugging Face', 'FAISS', 'Pinecone', 'FastAPI',
  'Streamlit', 'Gemini API', 'Java', 'C++', 'SQL', 'Generative AI', 'LLMs',
  'Computer Vision', 'Git', 'MediaPipe', 'n8n',
];

export type Project = {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  github: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'RAG Chatbot',
    description:
      'A retrieval-augmented generation chatbot that grounds answers in custom documents using vector search, delivering accurate and context-aware responses.',
    role: 'AI Developer',
    technologies: ['LangChain', 'Gemini API', 'FAISS', 'Hugging Face', 'Streamlit'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: true,
  },
  {
    title: 'Stock Market Prediction System',
    description:
      'A machine learning system that analyzes historical market data to forecast stock trends using statistical and predictive modeling techniques.',
    role: 'ML Developer',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: true,
  },
  {
    title: 'AI Hand Gesture Controlled Presentation',
    description:
      'A computer vision application that lets you control slide presentations using hand gestures tracked through a webcam.',
    role: 'Computer Vision Developer',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: true,
  },
  {
    title: 'Restaurant AI Agent',
    description:
      'An AI-powered restaurant assistant designed to handle customer queries, provide restaurant information, and automate customer interactions.',
    role: 'AI Developer',
    technologies: ['AI Agents', 'n8n'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: false,
  },
  {
    title: 'Medical Appointment Onbound Voice AI Agent',
    description:
      'An AI-powered voice agent designed to handle medical appointment-related conversations, assist patients with appointment requests, and automate appointment scheduling interactions.',
    role: 'AI Voice Developer',
    technologies: ['Voice AI', 'AI Agents'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: false,
  },
  {
    title: 'Assistive Blind Stick',
    description:
      'An embedded system that uses ultrasonic sensors to detect obstacles and alert visually impaired users through audio feedback.',
    role: 'Embedded Developer',
    technologies: ['Arduino', 'Ultrasonic Sensors', 'Embedded C'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: false,
  },
  {
    title: 'Pharmacy Management System',
    description:
      'A desktop application for managing pharmacy inventory, sales, and records with an object-oriented architecture.',
    role: 'Software Developer',
    technologies: ['Java', 'Desktop Application', 'OOP'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: false,
  },
  {
    title: 'Run Path Game',
    description:
      'A 2D path-based game built with an object-oriented design approach, featuring interactive gameplay mechanics.',
    role: 'Game Developer',
    technologies: ['Unity', 'C#', 'OOP'],
    github: 'https://github.com/tayyabazaka67-dev',
    featured: false,
  },
];

export type Certification = { title: string; issuer: string };

export const certifications: Certification[] = [
  { title: 'AI for Everyone', issuer: 'Coursera' },
  { title: 'Prompt Engineering Workshop', issuer: 'Certificate' },
  { title: 'Youth Gathering Certificate', issuer: 'Alkhidmat Foundation' },
];

export type Achievement = { title: string; description: string };

export const achievements: Achievement[] = [
  { title: 'Super Student Award', description: 'Recognized for outstanding academic performance.' },
  { title: 'Academic Excellence', description: 'Awarded for consistent scholastic achievement.' },
  { title: 'Freedom of Speech Poster Competition', description: 'Won recognition in a creative advocacy competition.' },
];

export type Language = { name: string; level: string };

export const languages: Language[] = [
  { name: 'English', level: 'Professional Working' },
  { name: 'Urdu', level: 'Native' },
];

export const hobbies: string[] = ['Baking', 'Learning New Technologies', 'Continuous Learning'];

export const contactIntro = {
  heading: "Let's Build Something Together",
  description:
    "I'm always open to discussing AI, software development, and exciting opportunities.",
};

export type NavLink = { name: string; path: string };

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];
