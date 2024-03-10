'use client';
import PageContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <PageContainer>
      <div
        className='aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]'
        style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
      >
        <div className='flex-ol flex h-full w-full flex-col items-center justify-center'>
          <div className='max-w-xs rounded-lg bg-secondary/80 p-4 sm:max-w-xl'>
            <h1 className='text)3xl text-center font-bold sm:text-5xl'>
              Becom a better react déveloper
            </h1>
            <Input
              placeholder='Email'
              className='mt-4 w-full py-6 text-xl dark:bg-white'
            />
            <Button size='lg' className='mt-4 w-full py-6 text-xl'>
              Subscribe to our Newsletter
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
