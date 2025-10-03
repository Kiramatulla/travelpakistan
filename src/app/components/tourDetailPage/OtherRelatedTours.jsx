import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function OtherRelatedTours({ OtherRelatedToursData }) {
  if (!OtherRelatedToursData || OtherRelatedToursData.length === 0) return null;

  return (
    <aside className="w-full md:w-80 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
      {/* Heading */}
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center border-b pb-3">
        ✦ You May Also Like Visiting ✦
      </h2>

      {/* Tour Cards */}
      <div className="space-y-5">
        {OtherRelatedToursData.map((tour) => (
          <div
            key={tour.slug}
            className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Thumbnail */}
            {tour.images && tour.images.length > 0 && (
              <div className="w-20 h-16 relative flex-shrink-0">
                <Image
                  src={urlFor(tour.images && tour.images[0]).url()}
                  alt={tour.title}
                  fill
                  className="object-cover rounded-lg border"
                />
              </div>
            )}

            {/* Title & Button */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                {tour.title}
              </h3>
              <Link
                href={`/tours/${tour.slug}`}
                className="mt-2 inline-block text-xs px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-8 text-center">
        <Link
          href="/tours"
          className="inline-block text-sm font-medium text-gray-700 hover:text-blue-600 transition"
        >
          View All Tours →
        </Link>
      </div>
    </aside>
  );
}
