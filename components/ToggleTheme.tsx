'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <Button
      className='flex justify-center'
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
    >
      <Moon className='h-6 w-6  dark:hidden' />
      <Sun className='hidden h-6 w-6 dark:block' />
    </Button>
  );
}
