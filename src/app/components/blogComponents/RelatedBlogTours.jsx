import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { TiInfoLargeOutline } from "react-icons/ti";

const RelatedBlogTours = ({ relatedTours }) => {
  // Sort by days (extracting number from title)
  const sortedTours = relatedTours.sort((a, b) => {
    const daysA = parseInt(a.title.match(/\d+/)?.[0] || "0", 10);
    const daysB = parseInt(b.title.match(/\d+/)?.[0] || "0", 10);
    return daysA - daysB;
  });

  // Group by tourType
  const groupedTours = {
    "Tour and Sightseeing Only": sortedTours.filter(
      (tour) => tour.tourType === "Tour and Sightseeing Only"
    ),
    "Tour and Trekking": sortedTours.filter(
      (tour) => tour.tourType === "Tour and Trekking"
    ),
    "Seasonal Tour": sortedTours.filter(
      (tour) => tour.tourType === "Seasonal Tour"
    ),
    "Festival Tour": sortedTours.filter(
      (tour) => tour.tourType === "Festival Tour"
    ),
  };

  // Render table only if tours exist
  const renderTable = (tours, title) => {
    if (tours.length === 0) return null;

    return (
      <div className="my-4">
        <h3 className="font-semibold text-gray-800 mb-2 underline underline-offset-4">
          {title}
        </h3>

        <div className="bg-gradient-to-br from-blue-200 to-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <table className="w-full lg:text-sm font-sans">
            <thead>
              <tr className="bg-blue-900/90 text-xs text-white">
                <th className="p-4 text-left">Tour Name</th>
                <th className="p-4 text-left">Standard</th>
                <th className="p-4 text-left">Premium</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr
                  key={tour._id}
                  className="border-t text-xs font-semibold border-b border-slate-300"
                >
                  <td className="p-2 md:max-w-80 transition-transform hover:scale-95 text-orange-800 hover:text-blue-500">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="flex items-center"
                    >
                      <Image
                        src={urlFor(tour.images && tour.images[0]).url()}
                        alt={tour.title}
                        width={300}
                        height={300}
                        className="hidden md:block md:w-16 md:h-12 md:object-cover md:rounded-md mr-4"
                      />
                      {tour.title} ({tour.numberOfDays}-days)
                    </Link>
                  </td>
                  <td className="p-4 ">$ {tour.International2Persons}</td>
                  <td className="p-4">$ {tour.International2PersonsLuxury}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-4 lg:mx-0 lg:pl-8 lg:pr-8 ">
      <h2 className="text-center md:text-left pl-2 font-bold text-lg text-gray-800 underline underline-offset-8 py-2 rounded-md md:pl-0">
        Similar Tour Packages and Pricing
      </h2>
      <div className="text-sm font-sans flex gap-2 text-center md:text-left">
        <TiInfoLargeOutline
          size={32}
          className="text-green-600 hidden md:block"
        />
        <p className="text-gray-600">
          <span className="font-bold">Note:</span> Below in the related Tours,
          the prices mentioned at Standard and Premium blocks are calculated
          keeping 2 persons in mind. To get the price for more than two Pax,
          please visit their relative pages by simply clicking on them.
        </p>
      </div>
      <div className=" text-lg md:text-base md:text-left font-bold pb-2">
        {renderTable(
          groupedTours["Tour and Sightseeing Only"],
          "Tour and Sightseeing Only"
        )}
        {renderTable(groupedTours["Tour and Trekking"], "Tour and Trekking")}
        {renderTable(groupedTours["Seasonal Tour"], "Seasonal Tour")}
        {renderTable(groupedTours["Festival Tour"], "Festival Tour")}
      </div>
    </div>
  );
};

export default RelatedBlogTours;
