import React from "react";
import { Sun, Info } from "lucide-react";

const Header = () => {
  return (
    <header className='bg-slate-100 p-4 flex justify-between items-center '>
      <h1 className=' text-2xl text-slate-500 font-bold'>S~E</h1>
      <div className='flex space-x-4'>
        <button>
          <Sun className='size-6' aria-hidden='true' />
        </button>
        <button>
          <Info className='size-6' aria-hidden='true' />
        </button>
      </div>
    </header>
  );
};

export default Header;
