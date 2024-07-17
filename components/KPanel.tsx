import React from "react";
import KCard from "@/components/KCard";
import { Badge } from "@/components/ui/badge";

interface KPanelProps {
  title: string;
  cards: {
    id: string;
    description: string;
    badges: string[];
  }[];
}

const KPanel = ({ title, cards }: KPanelProps) => {
  return (
    <div className='h-[700px] w-full border-2 rounded-xl bg-slate-100 dark:bg-slate-800/50'>
      <div className='flex flex-row items-center justify-between p-4'>
        <h1 className='font-bold'>{title}</h1>
        <Badge className='h-6' variant='default'>
          {cards.length}
        </Badge>
      </div>

      <div className='flex flex-col items-center gap-4 p-4'>
        {cards.map((card, index) => (
          <KCard
            key={index}
            id={card.id}
            description={card.description}
            badges={card.badges}
          />
        ))}
      </div>
    </div>
  );
};

export default KPanel;
