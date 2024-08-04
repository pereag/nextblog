import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import { IPost } from '@/types';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_BASE_URL}posts`);
  const posts = await res.json();

  return posts.map((post: IPost) => ({
    slug: post.slug,
  }));
}

export default function CategoriesPage({ params }: Props) {
  const { slug } = params;
  return (
    <PageContainer>
      <PageTitle
        title={`Categories Page ${slug.replace('-', ' ')}`}
      ></PageTitle>
    </PageContainer>
  );
}
