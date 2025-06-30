import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const HunzaDropDown = () => {
  return (
    <div className="group relative">
      <Link href="/tours" className=" hover:text-orange-600 flex items-end">
        Tours <RiArrowDropDownLine />
      </Link>
      <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded-md shadow-lg min-w-[250px] z-50">
        <Link
          href="/tours"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          All Tours
        </Link>
        <Link
          href="/tours/hunza-valley-tour-packages"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Hunza Valley Tours
        </Link>
        <Link
          href="/tours/skardu-tour-packages"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Skardu Valley Tour
        </Link>
        <Link
          href="/tours/fairy-meadows-nanga-parbat-base-camp-trek"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Fairy Meadow And Nanga Parbat
        </Link>
        <Link
          href="/tours/skardu-and-hunza-valley-tour"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Hunza And Skardu Trip
        </Link>
        <Link
          href="/tours/hunza-skardu-and-fairy-meadow-tours-for-14-days"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Fairy Meadows, Skardu and Hunza
        </Link>
        <Link
          href="/tours/chilam-joshi-festival-kalash"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Kalash Festival Tour
        </Link>
        <Link
          href="/tours/peshawar-tour-1-day"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Peshawar One Day Tour
        </Link>
        <Link
          href="/tours/lahore-tour-1-day-tour"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Lahore One Day Tour
        </Link>
        <Link
          href="/tours/pakistan-northern-area-tour-packages"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Northern Pakistan Tour
        </Link>
        <Link
          href="/tours/hunza-valley-and-patundas-trek"
          className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
        >
          Patundas Meadow Tour and Trek
        </Link>
      </div>
    </div>
  );
};

export default HunzaDropDown;
