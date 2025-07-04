"use client";

const RegionButton = ({
  setSelectedRegion,
  selectedRegion,
  setSelectedSubregion,
  setActiveCategory,
  setSpots,
  regions,
}) => {
  return (
    <div className="hidden md:block w-64 bg-gradient-to-br from-blue-50 to-white h-[calc(100vh-20px)] p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6 tracking-wide">
        📍 Regions
      </h2>

      <ul className="space-y-2">
        {regions.map((region) => (
          <li key={region.slug.current}>
            <button
              className={`flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${
              selectedRegion?.slug.current === region.slug.current
                ? "bg-teal-600 text-white shadow"
                : "text-gray-700 hover:bg-gray-300 cursor-pointer"
            }`}
              onClick={() => {
                setSelectedRegion(region);
                setSelectedSubregion(null);
                setSpots([]);
                setActiveCategory("sightseeing");
              }}
            >
              {/* Optional icon spot */}
              {/* <span className="mr-2"><MapPin size={16} /></span> */}
              {region.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionButton;
