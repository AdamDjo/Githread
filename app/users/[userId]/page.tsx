import { getAuthSession } from '@/lib/auth';
import { getUserProfile } from '@/src/feature/query/user.query';
import { Profile } from './Profile';
import { notFound, redirect } from 'next/navigation';
import { Post } from '@/src/feature/post/Post';
import { Button } from '@/components/ui/button';
import { followUser } from './follow.action';
import { prisma } from '@/lib/prisma';

export default async function UserPage({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);
  if (!user) {
    notFound();
  }

  const isFollowing = session?.user.id
    ? await prisma.follow.findFirst({
        where: {
          followerId: user.id,
          follwingId: user.id,
        },
        select: {
          id: true,
        },
      })
    : null;
  // handle current user
  const currentUser = params.userId === session?.user.id;
  if (currentUser) {
    redirect('/profile');
  }
  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Button
            variant="outline"
            formAction={async () => {
              'use server';
              if (!session?.user.id) {
                return;
              }
              await followUser(params.userId);
            }}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </form>
      </Profile>
      <div className="divide-y divide-accent">
        {user.posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}
