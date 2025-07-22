// components/itineraryInfo/ItineraryRegionShowcase.jsx
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";

export default async function ItineraryRegionShowcase() {
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
    <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-6 shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">
        How Can I Create My Own Itinerary?
      </h2>
      <div className="mb-10 space-y-4">
        <div className="flex items-start gap-2">
          {/* Icon container with fixed size */}
          <span className="flex-none w-5 h-5">
            <TiInfoLargeOutline className="w-full h-full text-green-600" />
          </span>
          <p className="flex-1 text-slate-600 text-base md:text-sm">
            <span className="font-bold">YES!</span> you can customize your own
            Itinerary, even if you don&apos;t know the region at all. Please
            note that below are just a few regions displayed. If your region
            isn&apos;t here, use “Click for More Regions” at the end of this
            section.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="flex-none w-5 h-5">
            <TiInfoLargeOutline className="w-full h-full text-green-600" />
          </span>
          <p className="flex-1 text-slate-600 text-base md:text-sm">
            For More Research, please choose the region you want to explore.
            Each region provides infomations like{" "}
            <span className="font-bold">
              Sightseeing Places, Short and Long Treks, Hotels, Restaurants, and
              more
            </span>
            .
          </p>
        </div>
      </div>

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
              {region.subregions?.slice(0, 2).map((sub, i) => (
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

      <div className="text-center">
        <Link
          href="/customitinerary"
          className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition"
        >
          Click for More Regions
        </Link>
      </div>
    </section>
  );
}
