import { NextRequest, NextResponse } from 'next/server';
import { POSTS } from '@/utils/post';

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: 'string' } }
) {
  const slug = params.slug;
  const post = POSTS.find((post) => post.slug === slug);
  return NextResponse.json(post);
}
