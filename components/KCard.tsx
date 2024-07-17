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
import { Button } from "@/components/ui/button";

interface KCardProps {
  id: string;
  title: string;
  description: string;
  badges?: string[];
}

const KCard: React.FC<KCardProps> = ({ id, title, description, badges }) => {
  const [open, setOpen] = useState(false);

  const renderBadges = (badges: string[]) => (
    <div className='pt-4 flex flex-wrap gap-2'>
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
        className='shadow-sm bg-gradient-to-b from-slate-50 dark:from-slate-900/30 border-solid border-2 rounded-lg w-full p-3 cursor-pointer'
        onClick={() => setOpen(true)}
        role='button'
      >
        <div className='font-bold text-xs'>{id}</div>
        <div className='font-semibold text-xs'>{title}</div>
        <div className='text-sm mt-2'>{description}</div>
        {badges && renderBadges(badges)}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='w-[95%] rounded-xl'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {badges && renderBadges(badges)}
          <Button
            variant='outline'
            onClick={() => setOpen(false)}
            className='mt-4'
          >
            Fermer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KCard;
