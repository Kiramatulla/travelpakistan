import { client } from "@/sanity/lib/client";
import SearchForms from "../components/searchComponents/SearchForms";
import SearchItems from "../components/searchComponents/SearchItems";

export default async function SearchPage(props) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams?.query || ""; // Get search query from URL

  // Fetch matching tours from Sanity
  const tours = await client.fetch(
    `*[(_type == "tour" || _type == "treks") && title match "${searchQuery}*"] { _type,
    title, 
    slug,
    images,
    tourPriceStandardHotels,
    tourPriceBestHotels,
    trekPrice,
    trekPrice1 }`
  );

  return (
    <div className="p-6  rounded-lg lg:mx-52 my-14 font-sans ">
      <SearchForms searchQuery={searchQuery} />
      {/* Search Results */}
      <SearchItems tours={tours} />
    </div>
  );
}

