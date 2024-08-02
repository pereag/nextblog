import React from 'react';
import PageContainer from './PageContainer';
import { HeaderNavigation } from './HeaderNavigation';
import ProfileButton from './ProfileButton';
import ResponsiveMenu from './ResponsiveMenu';
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b p-4'>
      <PageContainer>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <ResponsiveMenu></ResponsiveMenu>
            <h1 className='bg-gradient-to-br from-red-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent'>
              <Link href='/' className='contents'>
                NextBlog
              </Link>
            </h1>
          </div>
          <div className='hidden md:block'>
            <HeaderNavigation></HeaderNavigation>
          </div>

          <div className='flex  items-center gap-2'>
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
