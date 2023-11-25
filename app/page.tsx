import ToggleTheme from '@/src/theme/ToggleTheme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="my-4">
      <Button>Click me</Button>
      <Input></Input>
    </div>
  );
}
