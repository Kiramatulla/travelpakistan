import { tourCategories } from "@/app/inclusions/page";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";
import InclusionsClient from "./InclusionClient";

const Inclusions = () => {
  const categories = tourCategories.map((cat) => cat.id);

  return (
    <div className="mx-2 lg:mx-0 lg:px-8">
      <h2 className="text-center text-lg mt-8 font-bold text-black mb-2">
        SERVICES INCLUDED AND EXCLUDED .
      </h2>

      <div className="space-y-4 mb-4 text-gray-700 leading-relaxed text-justify">
        <div className="flex gap-4 text-sm text-center md:text-left mb-2">
          <TiInfoLargeOutline
            size={35}
            className="text-green-600 hidden md:block"
          />
          <p className="text-gray-600">
            Please note that the services we provide vary depending on the type
            of guest—domestic or international and also differ based on the
            nature of the tour, such as one-day trips, trekking tours, and more.
          </p>
        </div>
      </div>

      {/* Interactive part handled client-side */}
      <InclusionsClient
        categories={categories}
        tourCategories={tourCategories}
      />

      {/* Link to full page */}
      <div className="my-6 mx-2 md:mx-0">
        <Link
          href="/inclusions"
          className="text-green-700 hover:text-amber-600 font-medium inline-flex items-center gap-1 transition-colors"
        >
          View full list of inclusions and exclusions{" "}
          <FaArrowRight className="text-center " />
        </Link>
      </div>
    </div>
  );
};

export default Inclusions;
