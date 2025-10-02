"use client";

import { useState } from "react";

const InclusionsClient = ({ categories, tourCategories }) => {
  const [selectedId, setSelectedId] = useState(categories[0]);
  const categoryData = tourCategories.find((item) => item.id === selectedId);

  return (
    <>
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
            {categoryData?.inclusions.slice(0, 3).map((item, idx) => (
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
            {categoryData?.exclusions.slice(0, 3).map((item, idx) => (
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
    </>
  );
};

export default InclusionsClient;
