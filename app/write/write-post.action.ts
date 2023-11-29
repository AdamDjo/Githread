'use server';
import { getUser } from '@/src/feature/query/user.query';
import { WritePostFormValues } from './WriteForm';
import { prisma } from '@/lib/prisma';

export const createPost = async (values: WritePostFormValues) => {
  // create d'un post
  console.log('Im on the server ! ');
  const user = await getUser();
  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
    },
  });
  return post.id;
};
