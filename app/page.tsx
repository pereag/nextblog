'use client';
import PageContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CATEGORIES } from '@/utils/categories';
import { ICategory, IPost } from '@/types';
import PostsList from '@/components/PostsList';
import { getPosts } from '@/utils/post';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  async function fetchPosts() {
    try {
      const posts = await getPosts();
      if (posts) {
        setPosts(posts);
      }
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <PageContainer>
      <>
        <div
          className='aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]'
          style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
        >
          <div className='flex-ol flex h-full w-full flex-col items-center justify-center'>
            <div className='max-w-xs rounded-lg bg-secondary/80 p-4 sm:max-w-xl'>
              <h1 className='text-center text-3xl font-bold sm:text-5xl'>
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
        <div className='mt-16 flex flex-col items-center justify-center gap-2 md:flex-row'>
          {CATEGORIES.map((category: ICategory) => (
            <Button variant='outline' key={category.id}>
              {category.name}
            </Button>
          ))}
        </div>
        <div className='mb-16'>
          {posts.length > 0 ? (
            <PostsList items={posts}></PostsList>
          ) : (
            <span>Rien pour le moment.</span>
          )}
        </div>
      </>
    </PageContainer>
  );
}
