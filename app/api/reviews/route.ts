import client from '@/tina/__generated__/client';
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const body: any = await request.json();

    const { lang } = body;
    const { data } = await client.queries.reviews({
      relativePath: 'reviews.md',
    });

    const result = data.reviews[lang];

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
}
