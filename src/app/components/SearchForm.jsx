import {IoSearchOutline} from "react-icons/io5"

const SearchForm = () => {
  return (
    <form
      action="/search"
      method="GET" // Redirects to /search?query=your-search-term
      className="flex items-center md:space-x-24 bg-white rounded-full shadow-lg overflow-hidden"
    >
      <input
        type="text"
        name="query"
        placeholder="Search Destinations, Tours or Activities..."
        className="flex-grow  py-8 text-black outline-none pl-4"
      />
      <button
        type="submit"
        className="text-black pr-4 py-2 rounded-full"
      >
        <IoSearchOutline size={30} />
      </button>
    </form>
  )
}

export default SearchForm