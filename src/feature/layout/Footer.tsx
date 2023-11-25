import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-2    fixed w-full gap-1  bottom-0  border-t border-accent ">
      <div className="container">
        <Link href="/">
          <HomeIcon size={16}></HomeIcon>
        </Link>
      </div>
    </footer>
  );
};
console.log('aaaaaaaaaaa');
export default Footer;
