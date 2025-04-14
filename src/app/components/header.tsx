import React from 'react';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Form } from '@/components/ui/form';

export const Header = () => {
  return (
    <div className='flex flex-row bg-background gap-4 p-8 mx-auto'>
      <div>
        <h1 className='text-2xl'>devstore</h1>
      </div>
      <div>
        <Form>
          <Input
            placeholder='Buscar produtos...'
            className=' placeholder:text-muted-foreground'
          >
          </Input>
        </Form>
      </div>
      <ModeToggle />
    </div>
  );
};
