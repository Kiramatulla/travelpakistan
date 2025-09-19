import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const TrekCard = ({ trek }) => {
  return (
    <Link href={`/trekking/${trek.slug}`}>
      <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 mt-7 mb-8">
        <div className="max-w-sm lg:max-w-[300px]">
          {/* Card Image */}
          <div>
            <Image
              src={urlFor(trek.image).url()}
              alt={trek.title || "Trek Image"}
              width={300}
              height={300}
              className="rounded-2xl w-full h-full"
            />
          </div>

          {/* Card Content */}
          <div className="mt-2">
            <h3 className="mb-3 font-bold text-center">{trek.title}</h3>

            <p className="text-sm text-center h-[58px] overflow-hidden">
              {trek.trekOverview}
            </p>

            <button className="w-full bg-cyan-700 flex items-center justify-center text-white rounded-full px-2 py-2 mt-2 text-sm font-semibold lg:text-md hover:bg-cyan-800 transition-colors duration-300">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrekCard;
