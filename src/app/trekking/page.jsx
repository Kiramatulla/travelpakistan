import Link from "next/link";
import TrekPagCard from "../components/trekingComponents/TrekPagCard";
import { client } from "@/sanity/lib/client";
import { IoSearchOutline } from "react-icons/io5";

const PAGE_SIZE = 12;

export const metadata = {
  title: "Trekking in Pakistan, K2 Basecamp, Gondogoro La",
  description:
    "Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
};

const Page = async (props) => {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page || "1");
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const totalTreks = await client.fetch(`count(*[_type == "treks"])`);
  const totalPages = Math.ceil(totalTreks / PAGE_SIZE);

  const treks = await client.fetch(`*[_type == "treks"][${start}...${end}]`);

  return (
    <main className="font-sans flex flex-col items-center">
      <header className="mx-4 max-w-screen-md text-center">
        <h1 className="text-3xl text-slate-600 font-bold mt-8 mb-2 md:mb-2">
          Trekking the Karakoram, Himalaya and Hindu Kush, 2025
        </h1>
        <p className=" text-gray-500 text-center mb-8">
         We offer several trekking options in Pakistan, our trekking covers
         from the mighty K2 Base camp to Gondogora La, we also cover hidden passes
         including Khurdupin pass, Hisper La, Lupke La and Snow lake Trek.
         Find everything you are looking below:
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

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 lg:mx-20 md:gap-4">
        {treks.map((trek, index) => (
          <TrekPagCard key={index} trek={trek} />
        ))}
      </section>

      {/* Pagination Controls */}
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
    </main>
  );
};

export default Page;
