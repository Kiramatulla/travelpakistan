"use client";

import { tourCategories } from "@/app/inclusions/page";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";

const selectedTourType = "Domestic";

const Inclusions = () => {
  const [selectedId, setSelectedId] = useState("Domestic Guests");
  const categoryData = tourCategories.find((item) => item.id === selectedId);
  const categories = tourCategories.map((cat) => cat.id);

  return (
    <section className="mx-2 lg:mx-0 lg:px-8">
      <h1 className="text-center md:text-left text-lg mt-8 font-bold text-black mb-2">
        SERVICES INCLUDED AND EXCLUDED .
      </h1>
      <div className="space-y-4 mb-4 text-gray-700 leading-relaxed text-justify">
        <div className="flex gap-4 text-sm text-center md:text-left mb-2">
          <TiInfoLargeOutline
            size={35}
            className="text-green-600 hidden md:block"
          />
          <p className="text-gray-500">
            Please note that the services we provide vary depending on the type
            of guest—domestic or international and also differ based on the
            nature of the tour, such as one-day trips, trekking tours, and more.
          </p>
        </div>
      </div>
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedId(category)}
            className={`px-5 py-2 rounded-full border-2 transition-all duration-300 ${
              selectedId === category
                ? "bg-green-900 text-white border-green-900"
                : "bg-white text-green-900 border-green-300"
            } hover:shadow-md`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-2 md:mx-0 flex flex-col md:flex-row gap-10">
        {/* Inclusions */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 border-teal-300">
            INCLUSIONS
          </h3>
          <ul className="space-y-6">
            {categoryData?.inclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-teal-100 text-teal-600 p-2 rounded-full text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.heading}</p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 border-rose-300">
            EXCLUSIONS
          </h3>
          <ul className="space-y-6">
            {categoryData?.exclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-rose-100 text-rose-600 p-2 rounded-full text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.heading}</p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link to full page */}
      <div className="my-6 mx-2 md:mx-0">
        <Link
          href="/inclusions"
          className="text-green-700 hover:text-amber-600 font-medium inline-flex items-center gap-1 transition-colors"
        >
          View full list of inclusions and exclusions{" "}
          <FaArrowRight className="text-center " />
        </Link>
      </div>
    </section>
  );
};

export default Inclusions;
