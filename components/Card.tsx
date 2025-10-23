"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CardProps {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  badges?: string[];
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  fullDescription,
  badges,
}) => {
  const [open, setOpen] = useState(false);

  const renderBadges = (badges: string[]) => (
    <div className="pt-4 flex flex-wrap gap-2">
      {badges.map((badge, index) => (
        <Badge key={index} variant="default">
          {badge}
        </Badge>
      ))}
    </div>
  );

  return (
    <>
      <div
        className="shadow-sm bg-gradient-to-b from-slate-50 dark:from-slate-900/30 border-solid border-2 rounded-lg w-full p-3 cursor-pointer"
        onClick={() => setOpen(true)}
        role="button"
      >
        <div className="font-bold text-xs">{id}</div>
        <div className="font-semibold text-xs">{title}</div>
        <div className="text-sm mt-2">{description}</div>
        {badges && renderBadges(badges)}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95%] rounded-xl p-6">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            {fullDescription || description}
          </div>

          {badges && (
            <div className="pt-4 flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="default">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="mt-4 self-end"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
