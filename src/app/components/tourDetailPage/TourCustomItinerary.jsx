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
    <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">
      <div className="mb-10">
        <h2 className="text-3xl text-center md:text-4xl font-extrabold text-slate-800 mb-4">
          How Can I Create My Own Itinerary?
        </h2>
        <div className="flex gap-2 justify-start">
          <TiInfoLargeOutline size={30} className="text-green-800" />
          <p className="text-slate-600 text-base md:text-sm">
            Customize your adventure by selecting your desired region and
            exploring its beautiful subregions. Plan a journey that matches your
            pace and interests.
          </p>
        </div>
        <div className="flex gap-2 justify-start">
          <TiInfoLargeOutline size={30} className="text-green-800" />
          <p className="text-slate-600 text-base md:text-sm">
            Customize your adventure by selecting your desired region and
            exploring its beautiful subregions. Plan a journey that matches your
            pace and interests.
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
              <h3 className="text-lg md:text-xl font-bold text-slate-800">
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
