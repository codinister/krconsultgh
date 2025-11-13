import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET(): Promise<any> {
  try {
    const result = await serverConfig.fetch(groq`*[_type == 'hero']{
        title,
        primarycard{
        ...,
        'image': image.asset->url
        }
        }`);

    return NextResponse.json(result)
  } catch (err) {
    console.log(err);
  }
}
