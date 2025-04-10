import { client } from "@/sanity/lib/client";
import SearchForms from "../components/searchComponents/SearchForms";
import SearchItems from "../components/searchComponents/SearchItems";

export default async function SearchPage({ searchParams }) {
  const searchQuery = searchParams?.query || ""; // Get search query from URL

  // Fetch matching tours from Sanity
  const tours = await client.fetch(
    `*[_type == "tour" && title match "${searchQuery}*"] { title, slug,images,tourPriceStandardHotels,tourPriceBestHotels }`
  );

  return (
    <div className="p-6  rounded-lg lg:mx-52 my-14 font-sans ">
      <SearchForms searchQuery={searchQuery} />
      {/* Search Results */}
      <SearchItems tours={tours} />
    </div>
  );
}

