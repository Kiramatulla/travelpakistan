import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const SearchItems = ({ results }) => {
  return (
    <div className="my-4 mx-6 bg-slate-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {results.length > 0 ? (
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="bg-[#3f9fac] text-white">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Standard Price</th>
              <th className="p-4 text-left">Premium Price</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr
                key={result.slug.current}
                className="border-t text-xs font-semibold"
              >
                <td className="p-2 transition-transform hover:scale-95 hover:text-blue-500">
                  <Link
                    href={`/${result._type === "tour" ? "tours" : "trekking"}/${result.slug.current}`}
                    className="flex items-center"
                  >
                    {result.images?.length > 0 && (
                      <Image
                        src={urlFor(result.images[0]).url()}
                        alt={result.title}
                        width={300}
                        height={300}
                        className="hidden md:block md:w-16 md:h-12 md:object-cover md:rounded-md mr-4"
                      />
                    )}
                    {result.title}
                  </Link>
                </td>
                <td className="p-2">
                  {result._type === "tour"
                    ? result.International2Persons
                      ? `$ ${result.International2Persons}`
                      : "N/A"
                    : result.trekPrice
                      ? `$ ${result.trekPrice}`
                      : "N/A"}
                </td>
                <td className="p-2">
                  {result._type === "tour"
                    ? result.International2PersonsLuxury
                      ? `$ ${result.International2PersonsLuxury}`
                      : "N/A"
                    : result.trekPrice1
                      ? `$ ${result.trekPrice1}`
                      : "N/A"}
                </td>
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
