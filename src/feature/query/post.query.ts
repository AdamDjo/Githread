import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
export const postSelectQuery = (userId?: string) =>
  ({
    id: true,
    content: true,
    createdAt: true,
    user: {
      select: {
        image: true,
        username: true,
        id: true,
        name: true,
      },
    },
    Like: {
      select: {
        userId: true,
      },
      where: {
        userId: userId ?? 'error',
      },
    },
    _count: {
      select: {
        Like: true,
        replies: true,
      },
    },
  } satisfies Prisma.PostSelect);
export const getLatestPost = async (userId?: string) => {
  return await prisma.post.findMany({
    where: {
      parentId: null,
    },
    take: 20,
    orderBy: {
      createdAt: 'desc',
    },
    select: postSelectQuery(userId),
  });
};
export const getPostView = (id: string, userId?: string) =>
  prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      ...postSelectQuery(userId),
      replies: {
        select: postSelectQuery(userId),
      },
      parent: {
        select: postSelectQuery(userId),
      },
    },
  });

export const getPost = (id: string, userId?: string) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      ...postSelectQuery(userId),
    },
  });
};
export type PostHome = Prisma.PromiseReturnType<typeof getLatestPost>[number];
