import client from '@/tina/__generated__/client';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    const body: any = await request.json();

    const { lang } = body;

    const { data } = await client.queries.banner({ relativePath: 'banner.md' });
    const result = data.banner[lang];

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
};
