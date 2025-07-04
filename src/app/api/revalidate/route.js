import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = 'trav3lpakist0n';
  const { searchParams } = new URL(req.url);

  if (searchParams.get('secret') !== secret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body?.slug;
    const type = body?.type;

    if (!slug || !type) {
      return NextResponse.json({ message: 'Missing slug or type' }, { status: 400 });
    }

    const staticPaths = ['/', '/tours', '/trekking', '/blogs','/customitinerary'];
    const pathMap = {
      tour: `/tours/${slug}`,
      trekking: `/trekking/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];
    const revalidatedPaths = [...staticPaths, dynamicPath];

    for (const path of revalidatedPaths) {
      revalidatePath(path); // This actually triggers revalidation
    }

    return NextResponse.json({ revalidated: true, paths: revalidatedPaths });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
