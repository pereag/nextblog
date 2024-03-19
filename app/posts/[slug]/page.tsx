import PageContainer from '@/components/PageContainer';
import { IPost } from '@/types';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from "@/components/ui/separator"
import { Eye, MessageCircle } from 'lucide-react';


export default function SinglePost() {
  const POST: IPost = {
    id: 1,
    category: 'React',
    title: 'React State Management: Choosing the Right Solution',
    image: 'https://picsum.photos/1920/1080',
    caption:
      'Explore different state management solutions in React and choose the one that fits your needs.',
    date: '2023-01-15',
    minutesToRead: 10,
    author: 'John ReactDev',
    nbViews: 25,
    nbComments: 8,
    slug: 'react-state-management-choosing-right-solution',
    content: "Hello"
  };

  return (
    <PageContainer>
      <div className='p-8'>
        <div
          className='aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]'
          style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
        >
          <div className='flex-ol flex h-full w-full flex-col items-center justify-center'>
            <div className='max-w-xs rounded-lg bg-secondary/80 p-4 sm:max-w-xl'>
              <h1 className='text)3xl text-center font-bold sm:text-5xl'>
                {POST.title}
              </h1>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center p-3 mb-3'>
          <div className="flex justify-center item-center gap-3">
            <Avatar>
              <AvatarImage src='https://picsum.photos/120/120' />
              <AvatarFallback>{POST.author}</AvatarFallback>
            </Avatar>
            <div>
              <p>{POST.author}</p>
              <p className='text-slate-500'>Posted on {new Date(POST.date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className='gap-2 flex'>
            <div className='flex items-center gap-2'>
              <MessageCircle
                size='24'
                className='text-color-state-500'
              ></MessageCircle>
              <p className='text-state-500'>{POST.nbComments}</p>
            </div>
            <div className='flex items-center gap-2'>
              <Eye size='24' className='text-color-state-500'></Eye>
              <p className='text-state-500'>{POST.nbViews}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-6" dangerouslySetInnerHTML={{ __html: POST.content ? POST.content : "" }}>
        </div>
      </div>
    </PageContainer>
  );
}
