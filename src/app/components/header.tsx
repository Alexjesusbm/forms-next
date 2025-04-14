import React from 'react';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const Header = () => {
  return (
    <div className='flex flex-row bg-background gap-4 p-8 mx-auto'>
      <div>
        <h1 className='text-2xl'>devstore</h1>
      </div>
      <div>
        <form action="">
          <Search/>
          <Input
            placeholder='Buscar produtos...'
            className=' placeholder:text-muted-foreground'
          >
          </Input>
        </form>
      </div>
      <ModeToggle />
    </div>
  );
};
