import ToggleTheme from '@/src/theme/ToggleTheme';
import React from 'react';

export const Header = async () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2  m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        <ToggleTheme></ToggleTheme>
      </div>
    </header>
  );
};
