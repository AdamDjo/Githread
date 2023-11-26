import ToggleTheme from '@/src/theme/ToggleTheme';

import LoginButton from './auth/LoginButton';
import { getAuthSession } from '@/lib/auth';
import UserProfile from './auth/UserProfile';

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full ">
      <div className="container flex items-center py-2  m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>

        {session?.user ? (
          <UserProfile></UserProfile>
        ) : (
          <LoginButton></LoginButton>
        )}
        <ToggleTheme></ToggleTheme>
      </div>
    </header>
  );
};
