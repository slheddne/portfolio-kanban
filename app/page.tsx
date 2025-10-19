import KPanel from "@/components/KPanel";
import { cards } from "@/data/cardsData";

export default function Home() {
  return (
    <div className='p-4 grid gap-4 justify-items-center md:grid-cols-2 2xl:grid-cols-4'>
      {cards.map((card, index) => (
        <KPanel key={index} title={card.title} cards={card.cards} />
      ))}
    </div>
  );
}
