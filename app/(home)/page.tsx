import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Post } from '@/src/feature/post/Post';
import { getLatestPost } from '@/src/feature/query/post.query';
import React from 'react';

export default async function Home() {
  const session = await getAuthSession();
  const post = await getLatestPost(session?.user.id);
  return (
    <div className="divide-y divide-muted">
      {post.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
