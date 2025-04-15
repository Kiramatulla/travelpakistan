import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req) {
  const secret = process.env.REVALIDATE_SECRET;
  const { searchParams } = new URL(req.url);

  if (searchParams.get("secret") !== secret) {
    console.error("Revalidation failed: Invalid secret");
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await req.json();
    console.log("Webhook payload:", body); // Debug payload

    const { slug, type } = body;

    if (!slug || !type) {
      console.error("Revalidation failed: Missing slug or type", { slug, type });
      return NextResponse.json({ message: "Missing slug or type" }, { status: 400 });
    }

    // Validate type
    const validTypes = ["tour", "trekking", "blog"];
    if (!validTypes.includes(type)) {
      console.error("Revalidation failed: Invalid type", { type });
      return NextResponse.json({ message: "Invalid type" }, { status: 400 });
    }

    // Verify slug exists in Sanity
    const slugQuery = `*[_type == $type && slug.current == $slug]{ "slug": slug.current }[0]`;
    const slugCheck = await client.fetch(slugQuery, { type, slug });
    if (!slugCheck) {
      console.warn(`Slug ${slug} not found for type ${type}. May require rebuild.`);
    }

    // Map type to dynamic path
    const pathMap = {
      tour: `/tours/${slug}`,
      trekking: `/trekking/${slug}`,
      blog: `/blogs/${slug}`,
    };

    const dynamicPath = pathMap[type];
    if (!dynamicPath) {
      console.error("Revalidation failed: No dynamic path for type", { type });
      return NextResponse.json({ message: "Invalid type" }, { status: 400 });
    }

    // Define dynamic pages to revalidate
    const dynamicPages = ["/", "/tours", "/trekking", "/blogs"];

    // Combine paths
    const revalidatedPaths = [dynamicPath, ...dynamicPages];
    console.log("Attempting to revalidate paths:", revalidatedPaths); // Debug paths

    // Revalidate each path
    for (const path of revalidatedPaths) {
      try {
        revalidatePath(path, "page");
        console.log(`Successfully revalidated: ${path}`);
      } catch (error) {
        console.error(`Failed to revalidate ${path}:`, error);
      }
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