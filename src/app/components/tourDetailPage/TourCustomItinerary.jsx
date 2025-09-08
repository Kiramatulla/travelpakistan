// components/itineraryInfo/ItineraryRegionShowcase.jsx
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import background from "@/app/assets/background.jpg";

export default async function ItineraryRegionShowcase() {
  const query = `
    *[_type == "region"]{
      title,
      "image": image.asset->url,
      subregions[]->{
        title
      }
    } | order(title asc)
  `;
  const regions = await client.fetch(query);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-14 pb-8">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl md:text-2xl md:font-bold text-slate-900 font-serif">
          Design Your Own Adventure
        </h2>
        <p className="text-slate-600 mt-3 text-sm md:text-sm">
          This part makes our tour company special. We have all the information
          about each region. You just have to click on the region you want to
          visit and start building your tour plan.
        </p>
      </div>

      {/* Grid of regions */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {regions.slice(0, 6).map((region, index) => (
          <div
            key={region.title + index}
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white 
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link href="/customitinerary" className="group block">
              {/* Region Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={background}
                  width={300}
                  height={300}
                  alt={region.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-white text-lg font-bold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-400" />
                  {region.title}
                </h3>
              </div>

              {/* Subregions */}
              <div className="p-5">
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                  {region.subregions?.slice(0, 2).map((s, i) => (
                    <li key={i}>{s.title}</li>
                  ))}
                  {region.subregions?.length > 3 && (
                    <li className="italic text-slate-500">+ more</li>
                  )}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/customitinerary"
          className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 
                     text-white font-semibold rounded-full shadow-lg 
                     hover:from-teal-700 hover:to-teal-800 transition"
        >
          Explore All Regions
        </Link>
      </div>
    </section>
  );
}
