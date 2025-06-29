"use client";

import { tourCategories } from "@/app/inclusions/page";
import Link from "next/link";
import React from "react";

const selectedTourType = "Domestic";
const categoryData = tourCategories.find((cat) => cat.id === selectedTourType);

const Inclusions = () => {
  return (
    <section className="mt-10 mx-6 lg:mx-0 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Inclusions */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 border-teal-300">
            Inclusions
          </h3>
          <ul className="space-y-6">
            {categoryData?.inclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-teal-100 text-teal-600 p-2 rounded-full text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.heading}
                  </p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 border-rose-300">
            Exclusions
          </h3>
          <ul className="space-y-6">
            {categoryData?.exclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-rose-100 text-rose-600 p-2 rounded-full text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.heading}
                  </p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link to full page */}
      <div className="my-6">
        <Link
          href="/inclusions"
          className="text-green-700 hover:text-amber-600 font-medium inline-flex items-center gap-1 transition-colors"
        >
          View full list of inclusions and exclusions →
        </Link>
      </div>
    </section>
  );
};

export default Inclusions;
