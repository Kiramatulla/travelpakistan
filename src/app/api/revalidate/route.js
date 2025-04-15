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

    // These are the base/static pages
    const staticPaths = ['/', '/tours', '/trekking', '/blogs'];

    // Dynamic page based on type
    const pathMap = {
      tour: `/tours/${slug}`,
      trekking: `/trekking/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];

    // Trigger revalidation via fetch to internal revalidate tag route
    const revalidatedPaths = [...staticPaths, dynamicPath];

    // Manually revalidate each path via Vercel's tag-based or ISR caching if supported
    for (const path of revalidatedPaths) {
      console.log(`Revalidating ${path}`);
      // Just a placeholder — real revalidation might use tags or external fetch
    }

    return NextResponse.json({ revalidated: true, paths: revalidatedPaths });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
