import { client } from "@/sanity/lib/client";
import Link from "next/link";
import CardComp from "./CardComp";

const HomeCard = async () => {
  const tours = await client.fetch(`
  *[_type == "tour" && featured == true]{
    title,
    "slug": slug.current,
    "image": images[0],
    tourOverviews
  }
`);
  return (
    <section className="font-sans flex flex-col items-center ">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
          Explore Pakistan Tour Packages – 2025
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
        className="mt-6 p-2 rounded-md font-semibold text-white bg-teal-600 hover:bg-orange-600 text-sm transition-colors duration-300"
      >
        Load All Tours
      </Link>
    </section>
  );
};

export default HomeCard;
