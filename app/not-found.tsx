import PageContainer from '@/components/PageContainer';
import React from 'react';

export default function ErrorPage() {
  return (
    <PageContainer>
      <h1 className='m-auto py-12 text-center text-3xl'>
        <span className='font-semibold'>Error 404 :</span> Page not found
      </h1>
    </PageContainer>
  );
}
