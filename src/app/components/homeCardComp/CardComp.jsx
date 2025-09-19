import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const CardComp = ({ tour }) => {
  return (
    <Link
      href={`/tours/${tour.slug.current}`}
      className="flex justify-center items-center font-sans mb-8"
    >
      <article className="w-[18rem] md:w-[16rem] lg:w-[17rem] h-[24rem] bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200">
        {/* Card Image */}
        <div className="relative w-full h-40">
          <Image
            src={urlFor(tour.images && tour.images[0]).url()}
            alt={tour.title || "Tour Image"}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-between h-[calc(100%-10rem)] p-4 border-2 border-gray-300 border-t-0">
          <div className="flex-1">
            <h2 className="text-base font-bold text-gray-800 mb-2 leading-tight break-words">
              {tour.title}
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed line-clamp-4">
              <PortableText value={tour.tourOverviews} />
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-block text-sm font-semibold text-white bg-teal-700 px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-300 shadow"
            >
              Read More
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardComp;
