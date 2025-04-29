import { client } from "@/sanity/lib/client";
import Link from "next/link";
import CardComp from "./CardComp";

const HomeCard = async () => {
  const tours = await client.fetch(`*[_type == "tour" && featured == true]`);
  return (
    <section className="font-sans flex flex-col items-center">
      {/* Section Header */}
      <header className="mx-4 max-w-screen-md text-center">
        <h1 className="text-3xl text-slate-600 font-bold mt-10 mb-2 md:mb-2">
          Explore Pakistans Tour Packages - 2025
        </h1>
        <p className=" text-gray-500 text-center md:mb-10">
          Below are our Pakistan tour packages for 2025, designed for you. We
          organize tours in Pakistan. Explore the mountains of Hunza Valley, the
          deserts of Cholistan, and the culture of Lahore.We have a trip that
          fits your style, budget, and time.
        </p>
      </header>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mx-10 gap-4">
        {tours.map((tour, index) => (
          <CardComp key={index} tour={tour} />
        ))}
      </div>

      {/* Load More Button */}
      <Link
        href="/tours"
        className="mt-6 p-2 rounded-md font-semibold text-white hover:text-orange-500 bg-cyan-600 text-sm"
      >
        Load All Tours
      </Link>
    </section>
  );
};

export default HomeCard;
