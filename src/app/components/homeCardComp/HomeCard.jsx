import { client } from "@/sanity/lib/client"
import Link from "next/link"
import CardComp from "./CardComp"

const HomeCard = async() => {

    const tours = await client.fetch(`*[_type == "tour" && featured == true]`)
  return (
    <section className="font-sans flex flex-col items-center">
      {/* Section Header */}
      <header className="max-w-screen-md text-center">
        <h1 className="text-3xl text-slate-600 font-bold mt-10 md:mb-2">
          EXPLORE OUR FEATURED TRIP
        </h1>
        <p className="text-gray-500 text-center md:mb-10">
          Find everything you need to look and feel your best, and shop the
          latest mens fashion and lifestyle products.
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
  )
}

export default HomeCard