import { getUser } from '@/src/feature/query/user.query';
import { WritePostForm } from './WriteForm';
import { createPost } from './write-post.action';

const Write = async () => {
  const user = await getUser();
  return <WritePostForm user={user} onSubmit={createPost}></WritePostForm>;
};

export default Write;
