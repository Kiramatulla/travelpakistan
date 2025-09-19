import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ImageCompCard from "./ImageCompCard";

export default function ImageComp({ tours }) {
  if (!tours?.images || tours.images.length === 0) return null;

  // Pre-render all images (static, server-side)
  const images = tours.images.map((img, index) => ({
    url: urlFor(img).url(),
    alt: `${tours.title || "Tour Image"} - ${index + 1}`,
  }));

  return (
    <div>
      <ImageCompCard images={images} title={tours.title} />
    </div>
  );
}
