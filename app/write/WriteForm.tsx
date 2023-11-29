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
  onSubmit: (values: WritePostFormValues) => void;
};

export const WritePostForm = ({ user, onSubmit }: WritePostFormProps) => {
  const form = useZodForm({
    schema: Schema,
  });
  const router = useRouter();
  return (
    <PostLayout user={user}>
      <Form form={form} onSubmit={async (values) => {}}>
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