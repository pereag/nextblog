import React from 'react';

interface IPageTitle {
  title?: string;
}

export default function PageTitle(props: IPageTitle) {
  const { title } = props;
  return (
    <div className='px-4 py-10'>
      <h1 className='text 4xl mb-30 text-center font-bold'>{title}</h1>
    </div>
  );
}
