// /app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = 'trav3lpakist0n';
  const { searchParams } = new URL(req.url);

  // Check webhook secret
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

    // Define paths to revalidate
    const staticPaths = ['/', '/tours', '/trekking', '/blogs', '/customitinerary'];

    const pathMap = {
      tour: `/tours/${slug}`,
      trekking: `/trekking/${slug}`,
      blog: `/blogs/${slug}`,
      region: `/customitinerary`,
      subregion: `/customitinerary`,
    };

    const dynamicPath = pathMap[type];

    if (!dynamicPath) {
      return NextResponse.json({ message: 'Invalid type' }, { status: 400 });
    }

    // Revalidate all relevant paths — with await
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    for (const path of revalidatedPaths) {
      await revalidatePath(path); // ✅ Important to await
    }

    return NextResponse.json({ revalidated: true, paths: revalidatedPaths });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
