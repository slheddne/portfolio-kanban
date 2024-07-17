import React from "react";
import KCard from "../kcard/page";
import { Badge } from "../ui/badge";

const KPanel = ({ title, cards }) => {
  return (
    <div className='h-4/5 w-[400px] bg-slate-100 border rounded-xl'>
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
            title={card.title}
            description={card.description}
            badges={card.badges}
          />
        ))}
      </div>
    </div>
  );
};

export default KPanel;
