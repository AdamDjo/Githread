'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        setTheme(theme == 'light' ? 'dark' : 'light');
      }}
    >
      <Sun
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      ></Sun>
      <Moon
        size={20}
        className="absolut rotate-90 scale-0  transition-all dark:-rotate-0 dark:scale-100"
      ></Moon>
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ToggleTheme;
