import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=' flex flex-col items-center justify-center w-full'>
      <p className='text-xs text-center'>
        Made with ❤️ by Salah-Eddine ET-TALEBY © 2024 - All rights reserved.
      </p>
      <a
        href='https://www.linkedin.com/in/salah-ettaleby/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin className='size-4' />
      </a>
    </footer>
  );
};

export default Footer;
