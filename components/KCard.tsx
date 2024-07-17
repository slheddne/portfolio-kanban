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
  title: string;
  description: string;
  badges: string[];
}

const KCard: React.FC<KCardProps> = ({ id, title, description, badges }) => {
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
    <React.Fragment>
      <div
        className='bg-gradient-to-b from-slate-50 shadow-md border-solid border-1 rounded-lg w-96 p-4 cursor-pointer'
        onClick={() => setOpen(true)}
        role='button'
      >
        <div className='font-bold text-xs text-slate-500'>{id}</div>
        <div className='text-sm mb-2'>{title}</div>
        <div className='text-md'>{description}</div>
        {renderBadges(badges)}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {renderBadges(badges)}
          <button onClick={() => setOpen(false)} className='mt-4'>
            Fermer
          </button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default KCard;
