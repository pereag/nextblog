import PageContainer from '@/components/PageContainer';
import { IPost } from '@/types';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Eye, MessageCircle } from 'lucide-react';
import { getPost } from '@/utils/post';
import { redirect } from 'next/navigation';

export default async function Singlepost({
  params,
}: {
  params: { slug: string };
}) {
  let post = await getPost(params.slug);

  post === undefined && redirect(`/not-found`);

  return (
    <PageContainer>
      <div className='p-8'>
        <div
          className='aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]'
          style={{ backgroundImage: `url(https://picsum.photos/1920/1080)` }}
        >
          <div className='flex-ol flex h-full w-full flex-col items-center justify-center'>
            <div className='max-w-xs rounded-lg bg-secondary/80 p-4 sm:max-w-xl'>
              <h1 className='text-center text-3xl font-bold sm:text-5xl'>
                {post?.title}
              </h1>
            </div>
          </div>
        </div>
        <div className='mb-3 flex items-center justify-between p-3'>
          <div className='item-center flex justify-center gap-3'>
            <Avatar>
              <AvatarImage src='https://picsum.photos/120/120' />
              <AvatarFallback>{post?.author}</AvatarFallback>
            </Avatar>
            <div>
              <p>{post?.author}</p>
              <p className='text-slate-500'>
                posted on{' '}
                {post?.date ? new Date(post?.date).toLocaleDateString() : ''}
              </p>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex items-center gap-2'>
              <MessageCircle
                size='24'
                className='text-color-state-500'
              ></MessageCircle>
              <p className='text-state-500'>{post?.nbComments}</p>
            </div>
            <div className='flex items-center gap-2'>
              <Eye size='24' className='text-color-state-500'></Eye>
              <p className='text-state-500'>{post?.nbViews}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div
          className='mt-6'
          dangerouslySetInnerHTML={{
            __html: post?.content ? post.content : '',
          }}
        ></div>
      </div>
    </PageContainer>
  );
}
