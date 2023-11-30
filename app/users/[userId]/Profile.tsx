import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/src/feature/query/user.query';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
export const Profile = ({
  user,
  children,
}: PropsWithChildren<{ user: UserProfile }>) => {
  return (
    <div className="mt-4 container">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold">{user?.name}</h3>
          <p>{user?.username}</p>
        </div>
        <Avatar className="h-16 w-16">
          {user?.image ? (
            <AvatarImage src={user.image} alt={user.username}></AvatarImage>
          ) : null}
          <AvatarFallback>
            {user?.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      {user?.bio ? (
        <p>{user.bio}</p>
      ) : (
        <p className="text-muted-foreground"> no biographie</p>
      )}
      <div className="flex items-start gap-2 mt-4">
        <div className="flex -space-x-2">
          {user?.followed.map((f) => (
            <Avatar className="border-2 border-background" key={f.follower.id}>
              {f.follower.image ? (
                <AvatarImage src={f.follower.image}></AvatarImage>
              ) : null}
              <AvatarFallback>
                {f.follower.username[0] + f.follower.username[1].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-muted-foreground">{' . '}</p>
        <p className="text-muted-foreground">
          {user?._count.followed} followers
        </p>
        {user?.link ? (
          <>
            <p className="text-muted-foreground">{' . '}</p>
            <Link
              className="text-muted-foreground hover:underline"
              href={user.link}
            >
              {user.link}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
