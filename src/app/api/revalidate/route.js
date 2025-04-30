import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = 'trav3lpakist0n';  // Your secret key for security
  const { searchParams } = new URL(req.url);

  // Check for the correct secret key
  if (searchParams.get('secret') !== secret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Only revalidate the home page
    const staticPaths = ['/']; // Home page path

    // Revalidate the home page
    for (const path of staticPaths) {
      revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true, paths: staticPaths });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
