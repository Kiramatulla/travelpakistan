import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Page = async () => {
  const tours = await client.fetch(`*[_type == "tour"]`);
  return (
    <>
      <p className="text-3xl font-bold mt-10 text-center underline font-sans">
        ALL OF OUR TOURS
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 lg:mx-20 ">
        {tours.map((tour) => (
          <Link key={tour._id} href={`/tours/${tour.slug.current}`}>
            <div className="flex justify-center items-center font-sans mb-20 cursor-pointer">
              <div className="max-w-[700px] mx-auto transition-transform hover:scale-105">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-slate-50 border-4 border-b-8 border-b-slate-600 border-gray-300 shadow-2xl bg-clip-border rounded-xl w-[19rem] md:w-[15rem] lg:w-[17rem] h-[26rem] lg:h-[26rem]">
                  {/* Fixed height for card */}
                  <div className="relative h-48 mx-2 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <Image
                      src={urlFor(tour.images && tour.images[0]).url()}
                      alt={tour.name}
                      width={300}
                      height={300}
                      className="shadow-2xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex-1 overflow-hidden">
                    <h5 className="mb-2 font-bold">{tour.title}</h5>
                    <p className="font-sans overflow-hidden text-sm">
                      {tour.tourOverview}
                    </p>
                  </div>
                  <div className="p-6 pt-0 flex items-center justify-center">
                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 mt-2 rounded-lg bg-cyan-600 text-white hover:text-orange-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
