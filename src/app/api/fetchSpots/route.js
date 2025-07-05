// app/api/fetchSpots/route.js
import { client } from "@/sanity/lib/client";

export async function POST(req) {
  const { slug } = await req.json();

  const query = `
    *[_type == "subregion" && slug.current == $slug][0]{
      "spots": *[_type == "spot" && references(^._id)]{
        title,
        description,
        type,
        overview,
        "images": images[]{
          asset->{
            _id,
            url
          }
        }
      }
    }
  `;

  try {
    const data = await client.fetch(query, { slug });
    return Response.json({ spots: data?.spots || [] });
  } catch (err) {
    return new Response("Error fetching spots", { status: 500 });
  }
}
