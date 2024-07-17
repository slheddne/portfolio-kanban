import KPanel from "@/components/KPanel";

const cards = [
  {
    title: "About me",
    cards: [
      {
        id: "ABT-1",
        title: "Name",
        description: "My name is Salah-Eddine ET-TALEBY",
      },
      {
        id: "ABT-2",
        title: "Age",
        description: "I am currently 26 years old.",
      },
      {
        id: "ABT-3",
        title: "Profession",
        description: "I am a software engineer.",
        badges: ["Infotel", "Toulouse", "Full-time", "Full-stack"],
      },
    ],
  },
  {
    title: "Education",
    cards: [
      {
        id: "EDU-1",
        title: "EPSI - Private Engineering school",
        description:
          "Master's degree in computer science and IT where I learned to develop softwares and manage projects.",
        badges: ["2021-2023", "Toulouse", "Work-study program"],
      },
      {
        id: "EDU-2",
        title: "CESI - Private Engineering school",
        description:
          "Bachelor's year in computer science where I learned cybersecurity basics and project management.",
        badges: ["2020", "Toulouse", "Cybersecurity option"],
      },
      {
        id: "EDU-3",
        title: "IUT 'A' Paul Sabatier",
        description:
          "Professional Bachelor's degreee in software development and quality.",
        badges: ["2019", "Toulouse"],
      },
    ],
  },
  {
    title: "Work experience",
    cards: [
      {
        id: "WRK-1",
        title: "Infotel",
        description:
          "I joined Infotel in 2021 as a software engineer during my work-study program and I am still working there.",
        badges: ["2021-Present", "Toulouse", "Full-time", "Full-stack"],
      },
      {
        id: "WRK-2",
        title: "CESBIO - CNRS",
        description:
          "I joined CESBIO in 2020 as a software developer for a 2 months internship. I worked on a project to develop a web application for the laboratory.",
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
        description:
          "I joined ART Informatique in 2019 as a software developer for a 3 months internship. I worked on a project to develop ERPs for the company and its clients and managed databases.",
        badges: ["2019", "Carcassonne", "Internship", "Full-stack", "Windev"],
      },
    ],
  },
  {
    title: "Skills",
    cards: [
      {
        id: "SKL-1",
        title: "Frontend",
        description:
          "I have a good knowledge in frontend development. Here are some of the technologies I know and use for personal projects or work.",
        badges: [
          "React.js",
          "Next.js",
          "Vue.js",
          "Ember.js",
          ".NET Entity Framework",
          "Angular",
          "TypeScript",
          "Vite",
          "TailwindCSS",
          "shadcn/ui",
        ],
      },
      {
        id: "SKL-2",
        title: "Backend",
        description:
          "I am also qualified in backend development. Here are some of the technologies I use in projects.",
        badges: ["Node.js", "Express.js", "Django REST framework", "Flask"],
      },
      {
        id: "SKL-3",
        title: "Databases",
        description: "I have a good knowledge in databases.",
        badges: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
      },
      {
        id: "SKL-4",
        title: "Others",
        description: "Here are some other technologies I know.",
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

export default function Home() {
  return (
    <div className='p-4 grid gap-4 justify-items-center md:grid-cols-2 2xl:grid-cols-4'>
      {cards.map((card, index) => (
        <KPanel key={index} title={card.title} cards={card.cards} />
      ))}
    </div>
  );
}
