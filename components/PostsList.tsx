import React from 'react';
import { IPost } from '@/types';
import PostCard from './PostCard';

interface IProps {
  items: IPost[];
}

export default function PostsList(props: IProps) {
  const { items } = props;
  return (
    <div className='sm:gr mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
      {items.map((post: IPost) => {
        return <PostCard key={post.id} post={post}></PostCard>;
      })}
    </div>
  );
}
