const categories = [
    "View all",
    "Hunza Valley",
    "Skardu Valley",
    "Astore Valley",
    "Nagar Valley",
    "Raka Poshi Base Camp",
    "Fairy Meadows and Nanga Parbat",
    "Chitral and Kalash Valley",
    "Lahore",
    "Karachi",
    "Peshawar",
    "Others",
  ];
  
  export default function BlogCategory() {
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
            {categories.map((category, index) => (
              <li key={index}>
                <button>{category}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
  