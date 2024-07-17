import KPanel from "@/components/KPanel";

const cards = [
  {
    title: "About me",
    cards: [
      {
        id: "ABT-1",
        description: "My name is Salah-Eddine E.",
        badges: ["26 y/o", "Toulouse (France)"],
      },
      {
        id: "ABT-2",
        description: "My description",
        badges: ["Low", "Medium"],
      },
      {
        id: "TASK-3",
        description: "This is the third task",
        badges: ["Low", "Medium"],
      },
    ],
  },
  {
    title: "Education",
    cards: [
      {
        id: "TASK-4",
        description: "This is the fourth task",
        badges: ["High", "Critical"],
      },
      {
        id: "TASK-5",
        description: "This is the fifth task",
        badges: ["Low", "Medium"],
      },
      {
        id: "TASK-6",
        description: "This is the sixth task",
        badges: ["High", "Critical"],
      },
    ],
  },
  {
    title: "Work experience",
    cards: [
      {
        id: "TASK-7",
        description: "This is the seventh task",
        badges: ["Low", "Medium"],
      },
    ],
  },
  {
    title: "Skills",
    cards: [
      {
        id: "TASK-8",
        description: "This is the eighth task",
        badges: ["High", "Critical"],
      },
      {
        id: "TASK-9",
        description: "This is the ninth task",
        badges: ["Low", "Medium"],
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
