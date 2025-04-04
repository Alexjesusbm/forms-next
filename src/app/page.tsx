'use client';

import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Card>
        <CardDescription></CardDescription>
      </Card>
    </div>
  );
}
