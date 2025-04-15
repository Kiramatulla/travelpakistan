import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const secret = process.env.REVALIDATE_SECRET;
  const { searchParams } = new URL(req.url);

  if (searchParams.get("secret") !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { slug, type } = body;

    if (!slug || !type) {
      return NextResponse.json({ message: "Missing slug or type" }, { status: 400 });
    }

    // Map type to dynamic path
    const pathMap = {
      tour: `/tours/${slug}`,
      trekking: `/trekking/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];
    if (!dynamicPath) {
      return NextResponse.json({ message: "Invalid type" }, { status: 400 });
    }

    // Define static paths to revalidate
    const staticPaths = ["/", "/tours", "/trekking", "/blogs"];

    // Combine dynamic and static paths
    const revalidatedPaths = [dynamicPath, ...staticPaths];

    // Revalidate all paths
    for (const path of revalidatedPaths) {
      revalidatePath(path, "page"); // Explicitly target page routes
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}