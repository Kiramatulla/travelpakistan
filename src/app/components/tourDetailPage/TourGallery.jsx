import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function TourGallery({ tours }) {
  if (!tours?.gallery || tours.gallery.length === 0) return null;

  return (
    <section className="py-10">
      <h2 className="text-lg font-bold text-center mb-8">
        Photos from my Personal Collections
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tours.gallery.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="">
              <Image
                src={urlFor(item.image).url()}
                alt={item.caption || "Tour photo"}
                width={300}
                height={300}
                className="object-cover w-[199px] h-[137px]"
              />
            </div>
            <p className="mt-2 text-sm text-center text-gray-700 font-medium">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
