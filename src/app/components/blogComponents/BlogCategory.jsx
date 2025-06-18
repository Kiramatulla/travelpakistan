"use client";

import { useState } from "react";

export default function BlogCategory({ category, blogs }) {
  const [blogCategory, setBlogCategory] = useState(category[0].title);

  return (
    <aside className=" w-96 p-4 bg-white lg:mt-16 lg:pl-16 leading-10 text-sm">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h3 className="text-sm font-semibold lg:pt-4 lg:pb-4">Blog Categories</h3>
      {/* Categories List */}
      <nav aria-label="Blog categories" className="font-sans lg:pl-6">
        <ul className="space-y-2">
          {category.map((categoryItems, index) => (
            <li key={index}>
              <button onClick={() => setBlogCategory(categoryItems)}>
                {categoryItems.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// const categories = [
//   "Hunza valley",
//   "Skardu valley",
//   "Fairy Meadows",
//   "K2 Base Camp",
//   "Karachi",
//   "Kalash Valley",
//   "Lahore and Surrounding One Day",
//   "skardu and hunza",
//   "Neelum Valley",
// ];
