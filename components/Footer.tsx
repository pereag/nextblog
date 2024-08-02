import React from 'react';
import PageContainer from './PageContainer';
import { CATEGORIES } from '@/utils/categories';
import { ICategory } from '@/types';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className='border-t p-4'>
      <PageContainer>
        <div className='item-c enter  flex flex-col justify-between gap-2 md:flex-row'>
          <h1 className=' bg-gradient-to-br from-red-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent md:gap-0'>
            <Link href='/' className='contents'>
              NextBlog
            </Link>
          </h1>
          <div className='text-align-center flex flex-col gap-2 md:mx-auto md:flex-row'>
            {CATEGORIES.map((category: ICategory) => (
              <div key={category.id}>
                <Link href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
          <Button size='sm' variant='ghost' className='max-w-32'>
            <Link href='/write'>Write A Post</Link>
          </Button>
        </div>
      </PageContainer>
    </footer>
  );
}
