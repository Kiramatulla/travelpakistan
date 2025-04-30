import { client } from "@/sanity/lib/client";
import TourPagCard from "../components/tourDetailPage/TourPagCard";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const PAGE_SIZE = 12;

export const metadata = {
  title: "Pakistan Tour Packages 2025",
  description:
    "Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
};

const Page = async props => {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page || "1");
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  // Fetch the tours for this specific page (using pagination)
  const tours = await client.fetch(`*[_type == "tour"][${start}...${end}]`);

  // Fetch the total number of tours (for pagination controls)
  const totalTours = await client.fetch(`count(*[_type == "tour"])`);
  const totalPages = Math.ceil(totalTours / PAGE_SIZE);

  return (
    <section className="font-sans flex flex-col items-center">
      <header className="mx-4 max-w-screen-md text-center">
        <h1 className="text-3xl text-slate-600 font-bold mt-8 mb-2 md:mb-2">
          Pakistan Tours 2025 - Explore New Horizons
        </h1>
        <p className=" text-gray-500 text-center mb-8">
          Below are the best Pakistan Tour for 2025- Each Pakistan Tour offers
          cultural, heritages and adventure trips to Pakistan. Our tours to
          Pakistan covers everthing from Gilgit-Baltistans towering mountains to
          the rich history of the cities.
        </p>

        <div>
          <form
            action="/search"
            method="GET"
            className="flex items-center space-x-4 border-2 bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md mx-auto"
          >
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="py-6 px-4 text-black outline-none w-full"
            />
            <button type="submit" className="text-black pr-4 py-2 rounded-full">
              <IoSearchOutline size={20} />
            </button>
          </form>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 lg:mx-20 md:gap-4">
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
    </section>
  );
};

export default Page;
