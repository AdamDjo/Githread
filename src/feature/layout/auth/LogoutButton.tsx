'use client';
import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Loader, LogIn, LogOut } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import { useTransition } from 'react';

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      className=""
      onClick={() => {
        startTransition(() => signOut());
      }}
    >
      {isPending ? (
        <Loader className="mr-2 h-4 w-4"></Loader>
      ) : (
        <LogOut className="mr-2 h-4 w-4"></LogOut>
      )}
      logout
    </DropdownMenuItem>
  );
};

export default LogoutButton;
