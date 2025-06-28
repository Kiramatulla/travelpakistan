import { IoSearchOutline } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form
      action="/search"
      method="GET"
      className="flex items-center space-x-4 border-2 bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md mx-auto"
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        className="py-3 px-4 md:py-6 md:px-4 text-black outline-none w-full"
      />
      <button type="submit" className="text-black pr-4 py-2 rounded-full">
        <IoSearchOutline size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
