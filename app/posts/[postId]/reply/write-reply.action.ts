'use server';
import { getUser } from '@/src/feature/query/user.query';

import { prisma } from '@/lib/prisma';
import { WritePostFormValues } from '../../../write/WriteForm';

export const createReply = async (
  postId: string,
  values: WritePostFormValues
) => {
  // create d'un post

  const user = await getUser();
  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
      parentId: postId,
    },
  });
  return postId;
};
