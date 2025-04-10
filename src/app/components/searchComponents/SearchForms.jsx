import { IoSearchOutline } from "react-icons/io5"


const SearchForms = ({searchQuery}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-4">
          Search Results for {searchQuery}
        </h1>

        {/* Search Form */}
        <form
          action="/search"
          method="GET"
          className="flex items-center md:space-x-24 lg:space-x-24 bg-white rounded-full shadow-lg overflow-hidden"
        >
          <input
            type="text"
            name="query"
            placeholder="Search..."
            defaultValue={searchQuery}
            className="py-6 text-black outline-none pl-4 "
          />
          <button type="submit" className="text-black pr-4 py-2 rounded-full ">
            <IoSearchOutline size={30} />
          </button>
        </form>
      </div>
  )
}

export default SearchForms