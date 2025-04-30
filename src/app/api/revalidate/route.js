import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  // This revalidates the home page `/` on the next visit
  revalidatePath('/', 'page');

  return NextResponse.json({
    revalidated: true,
    path: '/',
    now: Date.now(),
  });
}
