import PageContainer from '@/components/PageContainer';
import PageTitle from '@/components/PageTitle';
import PostsList from '@/components/PostsList';
import { Button } from '@/components/ui/button';
import { POSTS } from '@/utils/post';
import { Github, Mail } from 'lucide-react';
import React from 'react';

interface ILoginPage {
  params: {
    slug: string;
  };
}

export default function LoginPage(props: ILoginPage) {
  const { params } = props;
  return (
    <PageContainer>
      <div className='p-13'>
        <PageTitle title='Login or Register'></PageTitle>
        <div className='mx-auto flex max-w-sm flex-col gap-4'>
          <Button>
            <Github className='mr-3' />
            Signin With Github
          </Button>
          <Button>
            <Mail className='mr-3' />
            Signin With Google
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
