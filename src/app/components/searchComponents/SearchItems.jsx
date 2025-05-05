import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const SearchItems = ({ tours }) => {
  return (
    <div className="my-4 mx-6 bg-slate-200  rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {tours.length > 0 ? (
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="bg-[#3f9fac] text-white">
              <th className="p-4 text-left">Tour Name</th>
              <th className="p-4 text-left">Standard Price</th>
              <th className="p-4 text-left">Premium Price</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr
                key={tour.slug.current}
                className="border-t text-xs font-semibold"
              >
                <td className="p-2  transition-transform hover:scale-95 hover:text-blue-500">
                  <Link
                    href={`/tours/${tour.slug.current}`}
                    className="flex items-center"
                  >
                    <Image
                      src={urlFor(tour.images && tour.images[0]).url()}
                      alt={tour.title}
                      width={300}
                      height={300}
                      className="hidden md:block md:w-16 md:h-12 md:object-cover md:rounded-md mr-4"
                    />

                    {tour.title}
                  </Link>
                </td>

                <td className="p-2">${tour.tourPriceStandardHotels}</td>
                <td className="p-2">${tour.tourPriceBestHotels}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchItems;
