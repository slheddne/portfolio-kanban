"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='h-12 p-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>S~E</h1>
      <div className='flex space-x-4'>
        <ThemeToggler />

        {/* Bouton Info */}
        <Button
          size='icon'
          variant='ghost'
          onClick={() => setOpen(true)}
          aria-label='Informations sur le projet'
        >
          <Info className='size-6' />
        </Button>
      </div>

      {/* Pop-up Info */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='w-[95%] max-w-md rounded-xl'>
          <DialogHeader>
            <DialogTitle>About this project</DialogTitle>
            <DialogDescription>
              This portfolio was created by Salah-Eddine ET-TALEBY. It showcases my skills in web development, UI/UX design, and modern technologies such as React, TailwindCSS, and ShadCN UI.  
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm mt-4 space-y-2">
            <p><strong>Project goal:</strong> An original portfolio showcasing my profile and technical skills.</p>
            <p><strong>Tech stack:</strong> Next.js, TypeScript, TailwindCSS, ShadCN UI.</p>
            <p><strong>Contact:</strong> salah.ettaleby@gmail.com</p>
            <p><strong>Version:</strong> 1.0.0</p>
          </div>
          <Button onClick={() => setOpen(false)} className='mt-6 w-full'>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;