import Card from "@/components/Card";
import { Badge } from "@/components/ui/badge";

interface TabProps {
  title: string;
  cards: {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    badges?: (string | undefined)[];
  }[];
}

const Tab = ({ title, cards }: TabProps) => {
  return (
    <div className="h-full w-full border-2 rounded-xl bg-slate-100 dark:bg-slate-800/50">
      <div className="flex flex-row items-center justify-between p-4">
        <h1 className="font-bold">{title}</h1>
        <Badge className="h-6" variant="default">
          {cards.length}
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-4 p-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            title={card.title}
            description={card.description}
            fullDescription={card.fullDescription}
            badges={card.badges?.filter(
              (badge): badge is string => badge !== undefined
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
