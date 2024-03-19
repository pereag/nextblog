import React from 'react'

interface IPageTitle {
  title?: string;
}

export default function PageTitle(props: IPageTitle) {
  const { title } = props
  return (
    <div className='py-10 px-4'>
      <h1 className="text 4xl font-bold text-center mb-30">
        {title}
      </h1>
    </div>
  )
}
