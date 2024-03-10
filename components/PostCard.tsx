import { IPost } from '@/types';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Eye, MessageCircle } from 'lucide-react';

interface IProps {
  post: IPost;
}

export default function PostCard(props: IProps) {
  const { post } = props;
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className='flex h-[100%] flex-col justify-between rounded-lg border-2'>
        <CardHeader>
          <div className='relative aspect-square '>
            <Image
              fill
              src={'https://picsum.photos/1920/1080/'}
              alt={post.title}
              className='aspact-square rounded-xl object-cover transition-all duration-300 hover:scale-110'
            />
          </div>
          <p className='mt-3 text-lg font-semibold'>{post.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant='outline'>{post.category}</Badge>
        </CardContent>
        <CardFooter className='gap-2'>
          <div className='flex items-center gap-2'>
            <MessageCircle
              size='20'
              className='text-color-state-500'
            ></MessageCircle>
            <p className='text-state-500'>{post.nbComments}</p>
          </div>
          <div className='flex items-center gap-2'>
            <Eye size='20' className='text-color-state-500'></Eye>
            <p className='text-state-500'>{post.nbViews}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
