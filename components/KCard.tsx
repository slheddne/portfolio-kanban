"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface KCardProps {
  id: string;
  description: string;
  badges: string[];
}

const KCard: React.FC<KCardProps> = ({ id, description, badges }) => {
  const [open, setOpen] = useState(false);

  const renderBadges = (badges: string[]) => (
    <div className='pt-4 space-x-3'>
      {badges.map((badge, index) => (
        <Badge key={index} variant='default'>
          {badge}
        </Badge>
      ))}
    </div>
  );

  return (
    <>
      <div
        className='shadow-sm bg-gradient-to-b from-slate-50 dark:from-slate-900/30 border-solid border-2 rounded-lg w-full p-4 cursor-pointer'
        onClick={() => setOpen(true)}
        role='button'
      >
        <div className='font-bold text-xs'>{id}</div>
        <div className='text-md'>{description}</div>
        {renderBadges(badges)}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {renderBadges(badges)}
          <button onClick={() => setOpen(false)} className='mt-4'>
            Fermer
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KCard;
