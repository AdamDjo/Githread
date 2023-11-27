import Link from 'next/link';
import { PostHome } from '../query/post.query';
import { PostLayout } from './PostLayout';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle } from 'lucide-react';
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
        <Button size="icon" variant="ghost">
          <Heart size={20}></Heart>
        </Button>
        <Button size="icon" variant="ghost">
          <MessageCircle size={20}></MessageCircle>
        </Button>
      </div>
      <div>
        <Link
          href={`/post/${post.id}`}
          className="text-muted-foreground text-sm gap-2"
        >
          {post._count.Like} Likes
        </Link>{' '}
        <Link
          href={`/post/${post.id}`}
          className="text-muted-foreground text-sm"
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
