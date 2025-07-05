"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";
import RegionButton from "./RegionButton";
import SightseeingSpot from "./SightseeingSpot";
import ShortTrekSpot from "./ShortTrekSpot";
import LongTrekSpot from "./LongTrekSpot";
import HotelSpot from "./HotelSpot";
import RestaurantSpot from "./RestaurantSpot";
import ActivitySpot from "./ActivitySpot";

export default function CustomItineraryPage({ initialRegions }) {
  const [regions] = useState(initialRegions);
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

  // ✅ Fetch spots when subregion is clicked
  const handleSubregionClick = async (subregion) => {
    setSelectedSubregion(subregion);
    setActiveCategory("sightseeing");

    const query = `
      *[_type == "subregion" && slug.current == $slug][0]{
        "spots": *[_type == "spot" && references(^._id)]{
          title,
          description,
          type,
          overview,
          "images": images[]{
            asset->{
              _id,
              url
            }
          }
        }
      }
    `;

    try {
      const data = await client.fetch(query, { slug: subregion.slug.current });
      setSpots(data?.spots || []);
    } catch (err) {
      console.error("Failed to fetch spots:", err);
      setSpots([]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <RegionButton
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={(region) => {
          setSelectedRegion(region);
          setSelectedSubregion(null);
          setSpots([]);
          setActiveCategory("sightseeing");
        }}
        setSelectedSubregion={setSelectedSubregion}
        setSpots={setSpots}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 bg-gradient-to-b from-white to-sky-100 overflow-y-auto">
        {selectedRegion ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-slate-800">
                Discover {selectedRegion.title}
              </h1>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                Click on a sub-region below to explore all the tourist spots in
                that village — sightseeing, treks, and more.
              </p>
            </div>

            {/* Subregion Buttons */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-slate-700 text-center mb-5">
                Subregions
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {selectedRegion.subregions.map((sub) => (
                  <button
                    key={sub.slug.current}
                    onClick={() => handleSubregionClick(sub)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                      selectedSubregion?.slug.current === sub.slug.current
                        ? "bg-teal-600 text-white border-teal-600"
                        : "bg-white text-slate-800 border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Spots */}
            {selectedSubregion && (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white bg-teal-600 rounded-xl py-3 px-5 inline-block">
                    Spots in {selectedSubregion.title}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {allCategories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium capitalize border transition ${
                        activeCategory === cat.value
                          ? "bg-teal-700 text-white border-teal-700 shadow"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                <div className="space-y-8">
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
              </>
            )}
          </>
        ) : (
          <div className="text-center mt-20 text-slate-500 italic">
            Please select a region to begin.
          </div>
        )}
      </div>
    </div>
  );
}
