import React from "react";
import { Badge } from "../ui/badge";

const KCard = ({ id, title, description, badges }) => {
  return (
    <div className='bg-gradient-to-b from-slate-50 shadow-md border-solid border-1 rounded-lg w-96 p-4'>
      <div className='font-bold text-xs text-slate-500'>{id}</div>
      <div className='text-sm mb-2'>{title}</div>
      <div className='text-md'>{description}</div>
      <div className='pt-4 space-x-3'>
        {badges.map((badge, index) => (
          <Badge key={index} variant='default'>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default KCard;
