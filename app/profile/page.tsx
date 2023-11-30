import { getAuthSession } from '@/lib/auth';
import { getUserProfile } from '@/src/feature/query/user.query';

import { Post } from '@/src/feature/post/Post';
import { Profile } from '../users/[userId]/Profile';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

type Props = {};

const ProfilePage = async () => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    notFound();
  }
  const user = await getUserProfile(session?.user.id);
  if (!user?.id) {
    notFound();
  }
  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Link
            className={buttonVariants({
              variant: 'outline',
              className: ' float-right',
            })}
            href="/profile/edit"
          >
            {' '}
            Edit profile
          </Link>
        </form>
      </Profile>
      <div className="divide-y divide-accent">
        {user.posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
