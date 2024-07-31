import { NextRequest, NextResponse } from 'next/server';
import { POSTS } from '@/utils/post';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Number(searchParams.get('limit'));
  return NextResponse.json(POSTS.slice(0, limit ? limit : 10));
}
