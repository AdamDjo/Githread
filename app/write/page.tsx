import { getUser } from '@/src/feature/query/user.query';
import { WritePostForm } from './WriteForm';

const Write = async () => {
  const user = await getUser();
  return (
    <WritePostForm
      user={user}
      onSubmit={async () => {
        'use server';
      }}
    ></WritePostForm>
  );
};

export default Write;
