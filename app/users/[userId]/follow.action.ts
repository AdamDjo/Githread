'use server';
import { prisma } from '@/lib/prisma';
import { getUser } from '@/src/feature/query/user.query';
import { revalidatePath } from 'next/cache';

export const followUser = async (userId: string) => {
  const user = await getUser();

  const isFollowing = await prisma.follow.findFirst({
    where: {
      followerId: user.id,
      follwingId: userId,
    },
    select: {
      id: true,
    },
  });
  if (isFollowing) {
    await prisma.follow.delete({
      where: {
        id: isFollowing.id,
      },
    });
  } else {
    const isFollowing = await prisma.follow.create({
      data: {
        followerId: user.id,
        follwingId: userId,
      },
    });
  }
  revalidatePath(`/users/${userId}`);
};
