import Link from "next/link";
import TrekPagCard from "../components/trekingComponents/TrekPagCard";
import { client } from "@/sanity/lib/client";

const PAGE_SIZE = 12; 

export const metadata ={
  title:"Trekking in Pakistan, K2 Basecamp, Gondogoro La",
  description:"Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
  
}

const Page = async props => {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams.page || "1");
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const totalTreks = await client.fetch(`count(*[_type == "treks"])`);
  const totalPages = Math.ceil(totalTreks / PAGE_SIZE);

  const treks = await client.fetch(`*[_type == "treks"][${start}...${end}]`);

  return (
    <main>
      <p className="text-3xl font-bold mt-10 text-center underline font-sans">
        ALL OF OUR TREKS
      </p>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-32 mt-6 gap-4">
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



