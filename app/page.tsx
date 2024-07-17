import KPanel from "@/components/KPanel";

const cards = [
  {
    title: "About me",
    cards: [
      {
        id: "TASK-1",
        title: "Task 1",
        description: "This is the first task",
        badges: ["High", "Critical"],
      },
      {
        id: "TASK-2",
        title: "Task 2",
        description: "This is the second task",
        badges: ["Low", "Medium"],
      },
      {
        id: "TASK-3",
        title: "Task 3",
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
        title: "Task 4",
        description: "This is the fourth task",
        badges: ["High", "Critical"],
      },
      {
        id: "TASK-5",
        title: "Task 5",
        description: "This is the fifth task",
        badges: ["Low", "Medium"],
      },
      {
        id: "TASK-6",
        title: "Task 6",
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
        title: "Task 7",
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
        title: "Task 8",
        description: "This is the eighth task",
        badges: ["High", "Critical"],
      },
      {
        id: "TASK-9",
        title: "Task 9",
        description: "This is the ninth task",
        badges: ["Low", "Medium"],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className='flex justify-center mt-10 gap-8'>
      {cards.map((card, index) => (
        <KPanel key={index} title={card.title} cards={card.cards} />
      ))}
    </div>
  );
}
