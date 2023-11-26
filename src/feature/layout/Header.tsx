import ToggleTheme from '@/src/theme/ToggleTheme';
import React from 'react';
import LoginButton from './auth/LoginButton';

export const Header = async () => {
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full ">
      <div className="container flex items-center py-2  m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        <LoginButton></LoginButton>
        <ToggleTheme></ToggleTheme>
      </div>
    </header>
  );
};
