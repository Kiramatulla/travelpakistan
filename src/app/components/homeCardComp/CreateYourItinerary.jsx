import { client } from "@/sanity/lib/client";
import Link from "next/link";
import {
  PiGlobeSimpleBold,
  PiBinocularsBold,
  PiMapPinLineBold,
} from "react-icons/pi";
import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

export default async function CreateYourItinerary() {
  const query = `
    *[_type == "region"]{
      title,
      subregions[]->{
        title
      }
    }
  `;
  const regions = await client.fetch(query);

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-28">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-4">
          Create Your Itinerary in 3 Simple Steps
        </h2>
        <p className="text-slate-600 text-lg">
          Whether youre a first-time traveler or a seasoned explorer — our
          custom builder helps you craft the perfect journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        <div className="flex flex-col items-center text-center">
          <div className="bg-teal-100 text-teal-700 p-5 rounded-full text-3xl mb-4">
            <PiGlobeSimpleBold />
          </div>
          <h3 className="font-semibold text-xl text-slate-800 mb-2">
            1. Select Region
          </h3>
          <p className="text-slate-600 text-sm max-w-xs">
            Choose from top destinations across Pakistan with all the insights
            you need.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-100 text-orange-600 p-5 rounded-full text-3xl mb-4">
            <PiBinocularsBold />
          </div>
          <h3 className="font-semibold text-xl text-slate-800 mb-2">
            2. Explore Options
          </h3>
          <p className="text-slate-600 text-sm max-w-xs">
            Each region includes sightseeing spots, treks, restaurants, hotels
            and more.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-sky-100 text-sky-600 p-5 rounded-full text-3xl mb-4">
            <PiMapPinLineBold />
          </div>
          <h3 className="font-semibold text-xl text-slate-800 mb-2">
            3. Customize Itinerary
          </h3>
          <p className="text-slate-600 text-sm max-w-xs">
            Mix and match your favorite places to build a tailor-made travel
            plan.
          </p>
        </div>
      </div>

      <div className="p-8 md:p-10 ">
        <h4 className="text-xl font-semibold text-slate-800 mb-6 text-center">
          Popular Regions to Start With
        </h4>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {regions.slice(0, 6).map((region, index) => (
            <Link
              href="/customitinerary"
              key={index}
              className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition block"
            >
              <div className="flex items-center gap-2 text-teal-700 font-semibold mb-3">
                <FaMapMarkedAlt className="text-xl" />
                <h3 className="text-lg font-bold text-slate-800">
                  {region.title}
                </h3>
              </div>

              <ul className="text-sm text-slate-700 space-y-1 pl-6 list-disc">
                {region.subregions?.slice(0, 3).map((sub, i) => (
                  <li key={i}>{sub.title}</li>
                ))}
                {region.subregions?.length > 3 && (
                  <li className="italic text-slate-500 hover:text-orange-600 hover:text-lg">
                    + more
                  </li>
                )}
              </ul>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/customitinerary"
            className="inline-flex items-center gap-2 bg-teal-600 text-white font-medium px-6 py-3 rounded-full hover:bg-teal-700 transition"
          >
            Explore All Regions <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
