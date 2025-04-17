import { client } from "@/sanity/lib/client";
import TourPagCard from "../components/tourDetailPage/TourPagCard";
import Link from "next/link";

const PAGE_SIZE = 12;

export const metadata ={
  title:"Pakistan Tour Packages 2025",
  description:"Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
  
}

const Page = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || "1");
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  // Fetch the tours for this specific page (using pagination)
  const tours = await client.fetch(`*[_type == "tour"][${start}...${end}]`);

  // Fetch the total number of tours (for pagination controls)
  const totalTours = await client.fetch(`count(*[_type == "tour"])`);
  const totalPages = Math.ceil(totalTours / PAGE_SIZE);

  return (
    <>
      <p className="text-3xl font-bold mt-10 text-center underline font-sans">
        ALL OF OUR TOURS
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 lg:mx-20 ">
        {tours.map((tour) => (
          <TourPagCard key={tour._id} tour={tour} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center gap-4 mt-10 mb-20">
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`?page=${i + 1}`}
            className={`px-4 py-2 rounded ${
              i + 1 === currentPage
                ? "bg-cyan-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link
            href={`?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </Link>
        )}
      </div>
    </>
  );
};

export default Page;
