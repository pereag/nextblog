import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default function CategoriesPage({ params }: Props) {
  const { slug } = params;
  return (<PageContainer><PageTitle title={`Categories Page ${slug.replace("-", " ")}`}></PageTitle ></PageContainer>);
}
