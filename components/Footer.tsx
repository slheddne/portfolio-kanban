import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-slate-300/50 dark:bg-slate-800 p-2 flex flex-col items-center justify-center w-full h-fit md:fixed md:bottom-0'>
      <p className='text-xs text-center mb-2'>
        Made with ❤️ by Salah-Eddine ET-TALEBY © 2024 - All rights reserved.
      </p>
      <a
        href='https://www.linkedin.com/in/salah-ettaleby/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin className='size-5' />
      </a>
    </footer>
  );
};

export default Footer;
