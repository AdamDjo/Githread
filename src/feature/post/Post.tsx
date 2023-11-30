import Link from 'next/link';
import { PostHome } from '../query/post.query';
import { PostLayout } from './PostLayout';
import { Button, buttonVariants } from '@/components/ui/button';
import { Heart, MessageCircle } from 'lucide-react';
import { LikeButton } from './LikeButton';
type PostProps = {
  post: PostHome;
};
export const Post = ({ post }: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex gap-2 items-center">
        <LikeButton postId={post.id} isLiked={post.Like.length > 0} />
        <Link
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })}
          href={`/posts/${post.id}/reply`}
        >
          <MessageCircle size={20}></MessageCircle>
        </Link>
      </div>
      <div>
        <Link
          href={`/posts/${post.id}`}
          className="text-muted-foreground text-sm gap-2"
        >
          {post._count.Like} Likes
        </Link>{' '}
        <Link
          href={`/posts/${post.id}`}
          className="text-muted-foreground text-sm"
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
