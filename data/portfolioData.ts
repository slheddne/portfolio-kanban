import { calculateAge } from "@/utils/utilFunctions";

export const profile = {
  name: "Salah-Eddine ET-TALEBY",
  title: "Full-Stack Software Engineer",
  subtitle: `A passionate ${calculateAge(new Date(1998, 1, 12))}-year-old developer with expertise in modern web technologies. I craft elegant solutions and build scalable applications that make a difference.`,
  email: "salah.ettaleby@icloud.com",
  linkedin: "https://www.linkedin.com/in/salah-ettaleby/",
  github: "https://github.com/salah-ettaleby",
  location: "Toulouse, France",
};

export const experiences = [
  {
    id: "exp-1",
    title: "Full-Stack Software Engineer",
    company: "Infotel",
    location: "Toulouse, France",
    period: "2021 - Present",
    description:
      "Working as a full-stack developer, contributing to various projects using modern technologies and frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions for enterprise clients.",
    badges: ["React", "Next.js", "Java Spring Boot", "PostgreSQL", "Agile"],
  },
  {
    id: "exp-2",
    title: "Software Developer Intern",
    company: "CESBIO - CNRS",
    location: "Toulouse, France",
    period: "2020",
    description:
      "Developed a mobile application to facilitate data visualization and analysis for researchers. Utilized Java and Android Studio to build an intuitive user interface and implemented backend services for data processing.",
    badges: ["Java", "Android Studio", "Mobile Development", "Data Visualization"],
  },
  {
    id: "exp-3",
    title: "Software Developer Intern",
    company: "ART Informatique",
    location: "Carcassonne, France",
    period: "2019",
    description:
      "Contributed to the development and maintenance of ERP systems using Windev. Collaborated with the development team to enhance existing features and implement new functionalities based on client requirements.",
    badges: ["Windev", "ERP", "Database Management", "Client Solutions"],
  },
];

export const education = [
  {
    id: "edu-1",
    school: "EPSI",
    degree: "Master's Degree in Computer Science",
    location: "Toulouse, France",
    period: "2021 - 2023",
    description:
      "Specialized in software engineering, project management, and agile methodologies. Completed several personal and collaborative projects while working in a work-study program.",
    badges: ["Software Engineering", "Project Management", "Agile", "Work-Study"],
  },
  {
    id: "edu-2",
    school: "CESI Engineering School",
    degree: "Bachelor's Year in Computer Science",
    location: "Toulouse, France",
    period: "2020",
    description:
      "Studied cybersecurity fundamentals, software development, and project management. Completed hands-on projects in security and software engineering.",
    badges: ["Cybersecurity", "Software Development"],
  },
  {
    id: "edu-3",
    school: "IUT 'A' Paul Sabatier",
    degree: "Professional Bachelor's in Software Development",
    location: "Toulouse, France",
    period: "2019",
    description:
      "Focused on professional software development, testing, and quality assurance. Gained experience in real-world software projects and team collaboration.",
    badges: ["Software Quality", "Testing", "Team Collaboration"],
  },
];

export const skills = [
  {
    id: "skill-1",
    category: "Frontend",
    description: "Building responsive, dynamic, and user-friendly interfaces with modern frameworks.",
    technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "TailwindCSS", "shadcn/ui"],
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: "skill-2",
    category: "Backend",
    description: "Creating REST APIs, handling databases, authentication, and server-side logic.",
    technologies: ["Java Spring Boot", "Node.js", "Express.js", "Django REST", "Flask"],
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "skill-3",
    category: "Databases",
    description: "Designing, querying, and maintaining SQL and NoSQL databases with optimal performance.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
    gradient: "bg-gradient-to-br from-orange-500 to-amber-500",
  },
  {
    id: "skill-4",
    category: "DevOps & Tools",
    description: "Version control, CI/CD pipelines, testing frameworks, and agile methodology.",
    technologies: ["Git", "Docker", "CI/CD", "Jest", "Pytest", "Agile/Scrum"],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
