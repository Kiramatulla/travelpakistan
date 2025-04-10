

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 md:mt-20">
      {/* Heading */}
      <h1 className="text-xl md:text-4xl font-bold mb-6 text-gray-800 font-sans">
        Explore Pakistan With Us
      </h1>
      <p className="text-gray-500 font-sans">
        Find everything you need to look and feel your best, and shop the latest{" "}
        <br></br> mens fashion and lifestyle products.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-[600px] py-6">
        <form className="flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search destinations, tours, or activities..."
            className="flex-grow px-4 py-6 text-gray-700 placeholder-gray-500 outline-none text-sm md:text-base"
            aria-label="Search for tours"
          />
          {/* Search Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:py-6 md:px-10 rounded-full transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
