"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import RegionButton from "../components/itineraryInfo/RegionButton";
import SightseeingSpot from "../components/itineraryInfo/SightseeingSpot";
import ShortTrekSpot from "../components/itineraryInfo/ShortTrekSpot";
import LongTrekSpot from "../components/itineraryInfo/LongTrekSpot";
import HotelSpot from "../components/itineraryInfo/HotelSpot";
import RestaurantSpot from "../components/itineraryInfo/RestaurantSpot";
import ActivitySpot from "../components/itineraryInfo/ActivitySpot";

export default function RegionsDashboard() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubregion, setSelectedSubregion] = useState(null);
  const [spots, setSpots] = useState([]);
  const [activeCategory, setActiveCategory] = useState("sightseeing");

  const allCategories = [
    { title: "Sightseeing", value: "sightseeing" },
    { title: "Short Trek", value: "short-trek" },
    { title: "Long Trek", value: "long-trek" },
    { title: "Activity", value: "activity" },
    { title: "Hotel", value: "hotel" },
    { title: "Restaurant", value: "restaurant" },
  ];

  // Fetch all regions and subregions
  useEffect(() => {
    const fetchRegions = async () => {
      const query = `
        *[_type == "region"]{
          title,
          slug,
          subregions[]->{
            title,
            slug
          }
        }
      `;
      const data = await client.fetch(query);
      setRegions(data);
    };

    fetchRegions();
  }, []);

  // Fetch all types of spots when a subregion is clicked
  const handleSubregionClick = async (subregion) => {
    setSelectedSubregion(subregion);
    setActiveCategory("sightseeing");

    const query = `
      *[_type == "subregion" && slug.current == "${subregion.slug.current}"][0]{
        "spots": *[_type == "spot" && references(^._id)]{
          title,
          description,
          type,
          overview,
          "images": images[].asset->url
        }
      }
    `;
    const data = await client.fetch(query);
    setSpots(data?.spots || []);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Region Dropdown */}
      <div className="md:hidden px-4 pt-4 bg-gradient-to-b from-white to-sky-50">
        <label className="block font-bold text-lg text-slate-700 pl-1 mb-4">
          Please Select a Region to Start
        </label>
        <select
          className="w-full border-2 border-slate-300 rounded-2xl p-4"
          value={selectedRegion?.slug.current || ""}
          onChange={(e) => {
            const region = regions.find(
              (r) => r.slug.current === e.target.value
            );
            if (region) {
              setSelectedRegion(region);
              setSelectedSubregion(null);
              setSpots([]);
              setActiveCategory("sightseeing");
            }
          }}
        >
          <option value="" disabled>
            Select a region
          </option>
          {regions.map((region) => (
            <option key={region.slug.current} value={region.slug.current}>
              {region.title}
            </option>
          ))}
        </select>
      </div>

      {/* Sidebar: Region List */}
      <RegionButton
        setSelectedRegion={setSelectedRegion}
        selectedRegion={selectedRegion}
        setSelectedSubregion={setSelectedSubregion}
        setActiveCategory={setActiveCategory}
        setSpots={setSpots}
        regions={regions}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 bg-gradient-to-b from-white to-sky-100 overflow-y-auto">
        {selectedRegion ? (
          <>
            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-slate-800">
                Discover {selectedRegion.title}
              </h1>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                To explore the villages and towns within this region, click on a
                sub-region to discover popular tourist destinations in each
                village — and feel free to share your itinerary with us.
              </p>
            </div>

            {/* Subregion Buttons */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-700 text-center mb-5">
                Click on the sub-regions to explore more
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {selectedRegion.subregions?.map((sub) => (
                  <button
                    key={sub.slug.current}
                    className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all border 
                      ${
                        selectedSubregion?.slug.current === sub.slug.current
                          ? "bg-teal-600 text-white border-teal-600"
                          : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                      }`}
                    onClick={() => handleSubregionClick(sub)}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Spots Content */}
            {selectedSubregion && spots.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white rounded-2xl bg-teal-600 p-4 text-center mb-3">
                  TOURIST SPOTS AND OTHER INFORMATIONS IN{" "}
                  <span className="text-black font-bold text-2xl uppercase">
                    {selectedSubregion.title}
                  </span>
                </h3>

                <p className="text-slate-700 text-center max-w-2xl mx-auto mb-5">
                  Below are details about the village you selected. This
                  includes tourist sites, treks, and more.
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {allCategories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium capitalize border transition-all duration-150
                      ${
                        activeCategory === cat.value
                          ? "bg-teal-700 text-white border-teal-700 shadow"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                {/* Filtered Spot Cards */}
                <div className="">
                  {spots
                    .filter((spot) => spot.type === activeCategory)
                    .map((spot) => {
                      switch (spot.type) {
                        case "sightseeing":
                          return (
                            <SightseeingSpot key={spot.title} spot={spot} />
                          );
                        case "short-trek":
                          return <ShortTrekSpot key={spot.title} spot={spot} />;
                        case "long-trek":
                          return <LongTrekSpot key={spot.title} spot={spot} />;
                        case "hotel":
                          return <HotelSpot key={spot.title} spot={spot} />;
                        case "restaurant":
                          return (
                            <RestaurantSpot key={spot.title} spot={spot} />
                          );
                        case "activity":
                          return <ActivitySpot key={spot.title} spot={spot} />;
                        default:
                          return null;
                      }
                    })}
                </div>
              </div>
            )}

            {/* No Spots Found */}
            {selectedSubregion && spots.length === 0 && (
              <div className="text-center mt-16 text-slate-500 italic">
                No tourist spots found in this subregion.
              </div>
            )}
          </>
        ) : (
          <div className="text-center mt-20 text-slate-500 italic">
            Please click or select a region from the sidebar or dropdown to
            begin.
          </div>
        )}
      </div>
    </div>
  );
}
