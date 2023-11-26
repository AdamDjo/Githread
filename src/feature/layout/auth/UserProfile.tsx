import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { User2 } from 'lucide-react';
import LogoutButton from './LogoutButton';

const UserProfile = async () => {
  const session = await getAuthSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          {session?.user.name ?? ''}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User2 className="mr-2 h-4 w-4 "></User2>Profile
          </Link>
        </DropdownMenuItem>
        <LogoutButton></LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
