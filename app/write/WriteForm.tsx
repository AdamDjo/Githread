'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { ContentTextArea } from '@/src/feature/post/ContentTextArea';
import { PostLayout } from '@/src/feature/post/PostLayout';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

const Schema = z.object({
  content: z.string().min(1).max(500),
});
export type WritePostFormValues = z.infer<typeof Schema>;

type WritePostFormProps = {
  user: User;
  onSubmit: (values: WritePostFormValues) => Promise<string>;
};

export const WritePostForm = ({ user, onSubmit }: WritePostFormProps) => {
  const form = useZodForm({
    schema: Schema,
  });
  const router = useRouter();
  return (
    <PostLayout user={user}>
      <Form
        className="border p-5 border-accent"
        form={form}
        onSubmit={async (values) => {
          const postId = await onSubmit(values);
          console.log('submit clientside', postId);
          router.push(`/posts/${postId}`);
          router.refresh();
          // router.push('/');
        }}
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <ContentTextArea {...field} />
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <div className="flex w-full justify-end">
          <Button size="sm">Post</Button>
        </div>
      </Form>
    </PostLayout>
  );
};
