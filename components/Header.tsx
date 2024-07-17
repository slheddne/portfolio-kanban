import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className='bg-slate-100 dark:bg-slate-900 p-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>S~E</h1>
      <div className='flex space-x-4'>
        <ThemeToggler />
        <Button size='icon' variant='ghost'>
          <Info className='size-6' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
