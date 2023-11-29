import { getAuthSession } from '@/lib/auth';
import { Post } from '@/src/feature/post/Post';
import { getPostView } from '@/src/feature/query/post.query';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

const PostView = async ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  const session = await getAuthSession();
  const post = await getPostView(params.postId, session?.user.id);
  if (!post) {
    return notFound();
  }
  return (
    <div className="divid-y divid-accent">
      {post.parent && <Post post={post.parent} key={post.parent.id}></Post>}
      <div
        className={clsx({
          'ml-10': post.parent,
        })}
      >
        <Post post={post} key={post.id}></Post>
        <div className="ml-10 divied-y divide-accent">
          {post.replies.map((reply) => (
            <Post post={reply} key={reply.id}></Post>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostView;
