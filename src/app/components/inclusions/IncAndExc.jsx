"use client";
import { useState } from "react";

const IncAndExc = ({ tourCategories }) => {
  const [selectedId, setSelectedId] = useState("Domestic");

  const selectedCategory = tourCategories.find(
    (item) => item.id === selectedId
  );

  const categories = tourCategories.map((cat) => cat.id);

  return (
    <section className="p-6 max-w-6xl mx-auto md:mx-40">
      <h1 className="text-4xl md:text-4xl mt-8 font-bold text-black mb-10">
        SERVICES INCLUDED AND EXCLUDED .
      </h1>
      <div className="space-y-8 mb-10 text-gray-700 max-w-4xl leading-relaxed text-justify">
        <p className="">
          Please note that the inclusions and exclusions listed in this section
          apply to each specific tour or trekking package you view. It outlines
          all the services covered under the given cost displayed on the
          respective tour page.
        </p>
        <p>
          Furthermore, the inclusions and exclusions vary for our Domestic and
          International tourists. Please click the buttons below to view the
          services included and excluded based on your nationality.{" "}
        </p>
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

      {/* Inclusions & Exclusions */}
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Inclusions */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            INCLUSIONS
          </h2>
          <p className="text-gray-600">
            We offer a wide range of travel services and experiences:
          </p>
          <ul className="space-y-6 text-gray-700">
            {selectedCategory?.inclusions?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-teal-100 text-teal-600 p-2 rounded-full mt-1 text-xl">
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
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            EXCLUSIONS
          </h2>
          <p className="text-gray-600">
            These services are not included in the tour package:
          </p>
          <ul className="space-y-6 text-gray-700">
            {selectedCategory?.exclusions?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-rose-100 text-rose-600 p-2 rounded-full mt-1 text-xl">
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
    </section>
  );
};

export default IncAndExc;
