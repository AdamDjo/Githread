import { buttonVariants } from '@/components/ui/button';
import clsx from 'clsx';
import { Home, PenSquare, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-2  fixed w-full gap-5  bottom-0 bg-background border-t border-t-accent ">
      <div className="container flex justify-between">
        <Link
          href="/"
          className={clsx(
            buttonVariants({
              variant: 'ghost',
            }),
            'flex-1'
          )}
        >
          <Home size={16}></Home>
        </Link>
        <Link
          href="/write"
          className={clsx(
            buttonVariants({
              variant: 'ghost',
            }),
            'flex-1'
          )}
        >
          <PenSquare size={16}></PenSquare>
        </Link>
        <Link
          href="/profile"
          className={clsx(
            buttonVariants({
              variant: 'ghost',
            }),
            'flex-1'
          )}
        >
          <User size={16}></User>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
