import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export async function POST(req) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  const body = await req.text();

  const valid = isValidSignature(body, signature, process.env.SANITY_WEBHOOK_SECRET);

  if (!valid) {
    return NextResponse.json({ msg: "Invalid signature" }, { status: 401 });
  }

  const json = JSON.parse(body);
  const slug = json.slug;

  if (!slug) {
    return NextResponse.json({ msg: "Missing slug" }, { status: 400 });
  }

  const dynamicPath = `/tours/${slug}`;
  revalidatePath(dynamicPath);
  revalidatePath("/tours");

  return NextResponse.json({ revalidated: true, paths: [dynamicPath, "/tours"] });
}
