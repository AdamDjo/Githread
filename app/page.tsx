import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { getAuthSession } from '@/lib/auth';

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="my-4">
      <p>{JSON.stringify(session, null, 2)}</p>
      <Button>Click me</Button>
      <Input></Input>
    </div>
  );
}
