import { calculateAge } from "@/utils/utilFunctions";

export const tabs = [
  {
    title: "About me",
    id: "ABT",
    cards: [
      {
        id: "ABT-1",
        title: "Name",
        description: "My name is Salah-Eddine.",
        fullDescription: "My full name is Salah-Eddine ET-TALEBY, and I am a french passionate software engineer with experience in frontend and backend development."
      },
      {
        id: "ABT-2",
        title: "Age",
        description: `I am currently ${calculateAge(new Date(1998, 1, 12))} years old.`,
      },
      {
        id: "ABT-3",
        title: "Job",
        description: "I am a software engineer.",
        fullDescription: "I currently work as a software engineer at Infotel, developing full-stack applications using modern frameworks and technologies.",
        badges: [
          "Infotel",
          "Toulouse",
          "Full-time",
          "Full-stack"
        ],
      },
    ],
  },
  {
    title: "Education",
    id: "EDU",
    cards: [
      {
        id: "EDU-1",
        title: "EPSI - Private Engineering school",
        description: "Master's degree in computer science and IT where I learned to develop softwares and manage projects.",
        fullDescription: "At EPSI, I specialized in software engineering, project management, and learned agile methodologies. Worked on several personal and collaborative projects.",
        badges: [
          "2021-2023",
          "Toulouse",
          "Work-study program"
        ],
      },
      {
        id: "EDU-2",
        title: "CESI - Private Engineering school",
        description: "Bachelor's year in computer science where I learned cybersecurity basics and project management.",
        fullDescription: "Studied the fundamentals of cybersecurity, software development, and project management. Completed several hands-on projects in security and software engineering.",
        badges: [
          "2020",
          "Toulouse",
          "Cybersecurity option"
        ],
      },
      {
        id: "EDU-3",
        title: "IUT 'A' Paul Sabatier",
        description: "Professional Bachelor's degreee in software development and quality.",
        fullDescription: "Focused on professional software development, testing, and quality assurance. Gained experience in real-world software projects and team collaboration.",
        badges: [
          "2019",
          "Toulouse"
        ],
      },
    ],
  },
  {
    title: "Work experience",
    id: "WRK",
    cards: [
      {
        id: "WRK-1",
        title: "Infotel",
        description: "I joined Infotel in 2021 as a software engineer during my work-study program and I am still working there.",
        fullDescription: "At Infotel, I work as a full-stack developer, contributing to various projects using modern technologies and frameworks. I collaborate with cross-functional teams to deliver high-quality software solutions.",
        badges: ["2021-Present", "Toulouse", "Full-time", "Full-stack"],
      },
      {
        id: "WRK-2",
        title: "CESBIO - CNRS",
        description: "I joined CESBIO in 2020 as a software developer for a 2 months internship. I worked on a project to develop a web application for the laboratory.",
        fullDescription: "During my internship at CESBIO, I developed a mobile application to facilitate data visualization and analysis for researchers. I utilized Java and Android Studio an intuitive user interface and implemented backend services to handle data processing.",
        badges: [
          "2020",
          "Toulouse",
          "Internship",
          "Full-stack",
          "Java",
          "Android",
        ],
      },
      {
        id: "WRK-3",
        title: "ART Informatique",
        description: "I joined ART Informatique in 2019 as a software developer for a 3 months internship. I worked on a project to develop ERPs for the company and its clients and managed databases.",
        fullDescription: "During my internship at ART Informatique, I contributed to the development and maintenance of ERP systems using Windev. I collaborated with the development team to enhance existing features and implement new functionalities based on client requirements.",
        badges: [
          "2019",
          "Carcassonne",
          "Internship",
          "Full-stack",
          "Windev"
        ],
      },
    ],
  },
  {
    title: "Skills",
    id: "SKL",
    cards: [
      {
        id: "SKL-1",
        title: "Frontend",
        description: "I have a good knowledge in frontend development. Here are some of the technologies I know and use for personal projects or work.",
        fullDescription: "Frontend development is my strong suit. I have hands-on experience in modern frameworks and libraries, building responsive, dynamic, and user-friendly interfaces.",
        badges: [
          "React.js",
          "Next.js",
          "Vue.js",
          "Angular",
          "TypeScript",
          "TailwindCSS",
          "shadcn/ui",
        ],
      },
      {
        id: "SKL-2",
        title: "Backend",
        description: "I am also qualified in backend development. Here are some of the technologies I use in projects.",
        fullDescription: "Backend development experience includes creating REST APIs, handling databases, authentication, and server-side logic for web and mobile applications.",

        badges: [
          "Java Spring Boot",
          "Node.js",
          "Express.js",
          "Django REST framework",
          "Flask"
        ],
      },
      {
        id: "SKL-3",
        title: "Databases",
        description: "I have a good knowledge in databases.",
        fullDescription: "I can design, query, and maintain SQL and NoSQL databases, optimizing performance and ensuring data integrity.",
        badges: [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQLite"
        ],
      },
      {
        id: "SKL-4",
        title: "Others",
        description: "Here are some other technologies I know.",
        fullDescription: "Additional skills include version control, CI/CD pipelines, testing frameworks, UI/UX design, and agile methodology.",
        badges: [
          "Git",
          "CI/CD",
          "Jest",
          "Pytest",
          "PostgreSQL",
          "UI/UX",
          "Agile",
        ],
      },
    ],
  },
];