import { tourCategories } from "@/app/inclusions/page";
import Link from "next/link";

const selectedTourType = "Domestic";
const categoryData = tourCategories.find((cat) => cat.id === selectedTourType);

import React from "react";

const Inclusions = () => {
  return (
    <section className="mt-10 mx-6 lg:mx-0 lg:pl-8 lg:pr-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-teal-600 underline">
              INCLUSIONS
            </h3>
          </div>

          <ul className="space-y-4">
            {categoryData?.inclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="text-teal-600 mt-1 text-xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.heading}</p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-teal-600 underline">
              EXCLUSIONS
            </h3>
          </div>
          <ul className="space-y-4">
            {categoryData?.exclusions.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="text-teal-600 mt-1 text-xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.heading}</p>
                  <p className="text-sm text-gray-600">{item.paragraph}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-6">
        <Link
          href="/inclusions"
          className="text-green-700 hover:underline font-semibold"
        >
          View full list of inclusions and exclusions →
        </Link>
      </div>
    </section>
  );
};

export default Inclusions;
