import { client } from "@/sanity/lib/client";
import Link from "next/link";
import CardComp from "./CardComp";

const HomeCard = async () => {
  const tours = await client.fetch(`*[_type == "tour" && featured == true]`);
  return (
    <section className="font-sans flex flex-col items-center ">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Pakistan Tour Packages – 2025
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Discover breathtaking tours across Hunza&apos;s mountains,
          Skardu&apos;s valleys, Lahore&apos;s rich culture, and
          Cholistan&apos;s deserts. Whether you want adventure, culture, or
          comfort — we have got a tour for your style, budget, and schedule.
        </p>
      </div>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mx-10 gap-4">
        {tours.map((tour, index) => (
          <CardComp key={index} tour={tour} />
        ))}
      </div>

      {/* Load More Button */}
      <Link
        href="/tours"
        className="mt-6 p-2 rounded-md font-semibold text-white hover:bg-orange-500 bg-teal-600  text-sm"
      >
        Load All Tours
      </Link>
    </section>
  );
};

export default HomeCard;
