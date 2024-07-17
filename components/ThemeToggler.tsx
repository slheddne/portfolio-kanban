"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        size='icon'
        variant='ghost'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className='size-6' />
        ) : (
          <Moon className='size-6' />
        )}
      </Button>
    </>
  );
};

export default ThemeToggler;
